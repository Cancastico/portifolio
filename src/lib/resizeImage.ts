import sharp from "sharp";
import { getImageResolutionSync } from "./getImageResolution";

export async function resizeImage(file: File) {
  const img = new Image();
  const url = URL.createObjectURL(file);

  return new Promise<File>((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const proportion = img.height / img.width;
      canvas.width = 500;
      canvas.height = 500 * proportion;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, { type: 'image/png' });
            resolve(resizedFile);
          } else {
            reject(new Error('Erro ao redimensionar a imagem'));
          }
        }, 'image/png', 1);
      }
      URL.revokeObjectURL(url);
    };

    img.onerror = reject;
    img.src = url;
  });
}

// import sharp from "sharp";
// import { getImageResolutionSync } from "./getImageResolution";

// export async function resizeImage(file: File) {
//   const { width, height } = getImageResolutionSync(file);

//   const proportion = height / width;
//   const newHeight = Math.round(660 * proportion);

//   const arrayBuffer = await file.arrayBuffer();

//   const buffer = Buffer.from(arrayBuffer);

//   const imageBuffer = await sharp(buffer)
//     .resize({ width: 660, height: newHeight })
//     .png({ quality: 100 })
//     .toBuffer();

//   return new File([imageBuffer], file.name, { type: 'image/png' })
// }
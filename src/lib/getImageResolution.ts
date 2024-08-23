export const getImageResolutionSync = (file: File): { width: number, height: number } => {
  const img = new Image();
  const url = URL.createObjectURL(file);
  img.src = url;

  let resolution = { width: 0, height: 0 };

  img.onload = () => {
    resolution = { width: img.width, height: img.height };
    URL.revokeObjectURL(url);
  };

  const now = performance.now();
  while (img.width === 0 && img.height === 0 && performance.now() - now < 5000) {
  }

  return resolution;
};
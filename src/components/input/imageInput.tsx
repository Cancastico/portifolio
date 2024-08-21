import { ImageIcon } from "lucide-react";
import { Input } from "../ui/input";

type ImageInputProps = {
  register?: any;
  onImageSelect: (base64Image: string) => void;
};

export default function ImageInput({ register, onImageSelect }: ImageInputProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onImageSelect(base64String);
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  return (
    <div className="relative min-h-20 w-full rounded-lg border-[1px] box-border text-primary border-primary/40 hover:bg-slate-200/20">
      <Input
        type="file"
        accept="image/*"
        className="w-full min-h-20 text-transparent opacity-0 ring-0"
        onChange={handleFileChange}
        {...register} // Integrating with react-hook-form
      />
      <p className="absolute left-[10%] md:left-[45%] top-[37%] flex gap-2 -z-10">
        <ImageIcon />
        Selecionar Imagem
      </p>
    </div>
  );
}
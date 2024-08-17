import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  className?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn; // Para integrar com react-hook-form
};

export default function AutoResizeTextarea({ className = "", placeholder, register }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reseta a altura
      textarea.style.height = `${textarea.scrollHeight}px`; // Define a altura para caber o conteúdo
    }
  };

  useEffect(() => {
    handleInput(); // Ajusta a altura no primeiro render
  }, []);

  return (
    <Textarea
      ref={textareaRef}
      onInput={handleInput}
      placeholder={placeholder}
      className={`resize-none overflow-hidden max-h-none ${className}`} // Evita o redimensionamento manual
      {...register} // Integra com react-hook-form
    />
  );
}

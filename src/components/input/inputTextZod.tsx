import { Label } from "@/components/ui/label";
import { FieldError } from "react-hook-form";
type Props = {
    children: React.ReactNode;
    error: FieldError | undefined;
    label: string;
    className?: string;
}
export default function ZodInputContainer({ label, children, error, className }: Props) {
    return (
        <div className={"flex flex-col gap-1 relative " + className}>
            <Label className="font-semibold text-lg text-primary dark:text-white">{label}</Label>
            {children}
            {error && (<span className="text-[0.65rem] text-[#fe8c8c] absolute bottom-[-1.2rem] left-0">*{error.message}</span>)}
        </div>
    )
}
import { Label } from "@/components/ui/label";
import { FieldError } from "react-hook-form";
type Props = {
    children: React.ReactNode;
    error: FieldError | undefined;
    label: string;
    className?:string;
}
export default function ZodInputContainer({ label, children, error,className }: Props) {
    return (
        <div className={"flex flex-col gap-1 relative " + className}>
            <Label className="font-normal text-white dark:text-black/80 text-lg">{label}</Label>
            {children}
            {error && (<span className="text-[0.8rem] text-[#5c5c5c] absolute bottom-[-1.15rem] left-0">*{error.message}</span>)}
        </div>
    )
}
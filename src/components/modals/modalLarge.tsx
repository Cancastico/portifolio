import { ReactNode } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "postcss";
import { Button } from "../ui/button";

type Props = {
  open: boolean,
  close: () => void,
  children: ReactNode,
}
export default function ModalLarge({ children, close, open }: Props) {
  return (
    <Dialog modal open={open} onOpenChange={() => { close() }}>
      <DialogContent className="max-w-none rounded-t-lg -translate-y-[45%] md:-translate-y-[50%] md:max-w-[50dvw] h-[90%] overflow-y-auto max-h-none bg-background-primary dark:bg-background-dark scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1 scrollbar scrollbar-track-transparent dark:scrollbar-track-background-dark scrollbar-thumb-primary hover:scrollbar-track-[#f1f5f9]">
        {children}
      </DialogContent>
    </Dialog>
  )
}
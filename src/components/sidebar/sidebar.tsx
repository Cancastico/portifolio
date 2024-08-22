'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeProvider, useTheme } from "@/contexts/theme";
import { ReactNode } from "react";


type Props = {
  trigger: ReactNode;
  children: ReactNode;
  side: 'top' | 'left' | 'right' | 'bottom';
  title: string | ReactNode;
}

export default function SideBar({ trigger, children, side, title }: Props) {
  const {theme} = useTheme()
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent side={side} aria-describedby={undefined} className={`sm:!max-w-none ${theme == 'light' ? 'bg-background-primary':'bg-background-dark'}`}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}

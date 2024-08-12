import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/contexts/theme";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

export default function ThemingButton() {
    const { setTheme, theme } = useTheme();

    return (
        <>
            {theme === 'dark' ?
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant={'ghost'} onClick={() => { setTheme('light') }} className="flex items-center justify-center  flex-col space-x-2 right-1 top-3 text-white transition-all ease-in-out hover:bg-[#3D4754]">
                            <Moon size={24} />
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="p-1 m-0 min-w-0">
                        <p>Alterar Tema</p>
                    </HoverCardContent>
                </HoverCard>

                :

                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant={'ghost'} onClick={() => { setTheme('dark') }} className="flex items-center justify-center  flex-col space-x-2 right-1 top-3 text-black transition-all ease-in-out hover:bg-[#C9C9C9]">
                            <Sun size={24} />
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="p-1 m-0 min-w-0">
                        <p>Alterar Tema</p>
                    </HoverCardContent>
                </HoverCard>

            }
        </>
    )
}
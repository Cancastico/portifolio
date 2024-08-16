import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useTheme } from "@/contexts/theme";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import ThemingButton from "../themingButton/themingButton";

export default function Navbar() {



  return (
    <header className=" flex flex-row justify-between items-center w-full h-20 bg-background-primary dark:bg-background-dark md:px-[16rem]">

      <div className="flex flex-row gap-1 justify-center w-full md:w-fit md:justify-normal ">
        <span className="font-semibold font-ibmPlexMono text-primary text-lg">{`<C/>`}</span>
        <p className="font-semibold font-ibmPlexMono text-lg text-black dark:text-white">Cancastico</p>
      </div>

      <nav className="flex-row gap-20 hidden md:flex">
        <ul className="flex flex-row gap-10 items-center">
          <li>
            <a className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-200" href="#">Home</a>
          </li>
          <li>
            <a className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100" href="#">Meu Blog</a>
          </li>
          <li>
            <a className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100" href="#">Projetos</a>
          </li>
          <li>
            <a className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100" href="#">Contato</a>
          </li>
        </ul>

        <ul className="flex flex-row  items-center gap-10">
          <li className="hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline duration-100">
            <a className={`text-sm  text-black dark:text-white flex gap-2 hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100`} href="#">
              <DiscordLogoIcon />
              Discord
            </a>
          </li>
          <li className="hover:text-primary flex gap-2 hover:underline duration-100">
            <a className={`text-sm  text-black dark:text-white flex gap-2 hover:text-primary font-medium transition-all duration-100`} target="_blank" href="https://github.com/Cancastico">
              <GitHubLogoIcon />
              Github
            </a>
          </li>
        </ul>

        <ThemingButton />
      </nav>

      <div className="md:hidden">
        <ThemingButton />
      </div>


    </header>
  );
}

import { useTheme } from "@/contexts/theme";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import SideBar from "../sidebar/sidebar";
import ThemingButton from "../themingButton/themingButton";
import { Button } from "../ui/button";
import { useRef } from "react";

export default function Navbar() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme } = useTheme();

  const emulateClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <header className="fixed flex flex-row justify-between items-center w-full h-12 md:h-20 bg-background-primary dark:bg-background-dark md:px-[8rem] xxl:px-[16rem] z-20">
      <div className="md:hidden flex items-center px-3">
        <SideBar
          trigger={
            <Button ref={buttonRef}>
              <MenuIcon size={24} />
            </Button>
          }
          side="left"
          title={<div className="flex flex-row gap-1 justify-center w-full md:w-fit md:justify-normal ">
            <span className="font-semibold font-ibmPlexMono text-primary text-lg">{`<C/>`}</span>
            <p className={`font-semibold font-ibmPlexMono text-lg ${theme == 'light' ? 'text-black' : 'text-white'} text-black dark:text-white`}>Cancastico</p>
          </div>}
        >
          <nav className="flex flex-col gap-20 px-8 pt-5">
            <ul className="flex flex-col gap-3 items-start text-lg">
              <li>
                <a onClick={emulateClick} className={`${theme == 'light' ? 'text-black' : 'text-white'} hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-200`} href="/">Home</a>
              </li>
              <li>
                <a onClick={emulateClick} className={`${theme == 'light' ? 'text-black' : 'text-white'} hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100`} href="/myblog">Meu Blog</a>
              </li>
              <li>
                <a onClick={emulateClick} className={`${theme == 'light' ? 'text-black' : 'text-white'} hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100`} href="/#projetos">Projetos</a>
              </li>
              <li>
                <a onClick={emulateClick} className={`${theme == 'light' ? 'text-black' : 'text-white'} hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100`} href="/#contato">Contato</a>
              </li>
              <li className="hover:text-primary flex gap-2 hover:underline duration-100">
                <a className={`${theme == 'light' ? 'text-black' : 'text-white'} flex gap-2 hover:text-primary font-medium transition-all duration-100`} target="_blank" href="https://github.com/Cancastico">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </SideBar>
      </div>
      <div className="flex flex-row gap-1 justify-center w-full md:w-fit md:justify-normal ">
        <span className="font-semibold font-ibmPlexMono text-primary text-lg">{`<C/>`}</span>
        <p className="font-semibold font-ibmPlexMono text-lg text-black dark:text-white">Cancastico</p>
      </div>

      <nav className="flex-row gap-20 hidden md:flex">
        <ul className="flex flex-row md:gap-5 xl:gap-10 items-center">
          <li>
            <Link className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-200" href="/">Home</Link>
          </li>
          <li>
            <Link className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100" href="/myblog">Meu Blog</Link>
          </li>
          <li>
            <Link className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100" href="/#projetos">Projetos</Link>
          </li>
          <li>
            <Link className=" text-black dark:text-white hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100" href="/#contato">Contato</Link>
          </li>
        </ul>

        <ul className="flex flex-row  items-center gap-10">
          {/* <li className="hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline duration-100">
            <a className={`text-sm  text-black dark:text-white flex gap-2 hover:text-primary hover:underline dark:hover:text-primary dark:hover:underline font-medium transition-all duration-100`} href="#">
              <DiscordLogoIcon />
              Discord
            </a>
          </li> */}
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


      <div className="absolute h-[100dvh] w-[90]"></div>



    </header>
  );
}

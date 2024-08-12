/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xf9ANuZbksz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useTheme } from "@/contexts/theme";
import ThemingButton from "../themingButton/themingButton";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const handleChange = (value: string) => {
    setTheme(value);
  };

  return (
    <footer className="bg-muted p-6 md:py-12 w-full dark:text-white">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Contato</h3>
          <div className="flex items-center gap-2 hover:text-primary hover:underline">
            <GithubIcon className="w-4 h-4" />
            <Link href="https://github.com/Cancastico" target="_blank" prefetch={false}>
              Cancastico
            </Link>
          </div>
          <div className="flex items-center gap-2 hover:text-primary hover:underline">
            <MailIcon className="w-4 h-4" />
            <Link href="carlosaaugusto2002@outlook.com" prefetch={false}>
              carlosaaugusto2002@outlook.com
            </Link>
          </div>
          <div className="flex items-center gap-2 hover:text-primary hover:underline">
            <DiscIcon className="w-4 h-4" />
            <span>Canca#7318</span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary hover:underline">
            <LinkedinIcon className="w-4 h-4" />
            <Link href="https://www.linkedin.com/in/carlos-augusto-176120164/" target="_blank" prefetch={false}>
              Carlos Augusto
            </Link>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Sobre</h3>
          <p>Este é o meu portfólio pessoal, onde você pode encontrar informações sobre meus projetos e habilidades.</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <h3 className="font-semibold">Tema : </h3>
          <div className="flex items-center gap-2">
            <ThemingButton />
          </div>
        </div>
      </div>
    </footer>
  )
}

function DiscIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
import Link from "next/link";
import ThemingButton from "../themingButton/themingButton";

export default function Footer() {

  const email = "carlosaaugusto2002@outlook.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };


  return (
    <footer className="bg-muted p-6 md:py-12 w-full dark:text-white ">
      <div className="flex flex-col md:flex-row md:px-[8rem] xxl:px-[16rem] gap-8 text-sm  bg-transparent">
        <div className="grid gap-1 bg-transparent">
          <h3 className="font-semibold bg-transparent">Contato</h3>
          <div className="flex items-center gap-2 bg-transparent hover:text-primary hover:underline">
            <GithubIcon className="w-4 h-4" />
            <Link href="https://github.com/Cancastico" target="_blank" prefetch={false}>
              Cancastico
            </Link>
          </div>
          <div className="flex items-center gap-2 hover:text-primary hover:underline bg-transparent">
            <MailIcon className="w-4 h-4" />
            <Link href={`emailto:${email}`} onClick={(e) => {
              e.preventDefault();
              handleCopyEmail();
            }} prefetch={false}>
              {email}
            </Link>
          </div>
          {/* <div className="flex items-center gap-2 hover:text-primary hover:underline bg-transparent">
            <DiscIcon className="w-4 h-4" />
            <span>Canca#7318</span>
          </div> */}
          <div className="flex items-center gap-2 hover:text-primary hover:underline bg-transparent">
            <LinkedinIcon className="w-4 h-4" />
            <Link href="https://www.linkedin.com/in/dev-carlos-avelino/" target="_blank" prefetch={false}>
              Carlos Augusto
            </Link>
          </div>
        </div>

        <div className="grid gap-1 bg-transparent">
          <h3 className="font-semibold bg-transparent">Sobre</h3>
          <p className="bg-transparent">Este é o meu portfólio pessoal, onde você pode encontrar informações sobre meus projetos e habilidades.</p>
        </div>

        <div className="flex flex-row items-center gap-2 bg-transparent">
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

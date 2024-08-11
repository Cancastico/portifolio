import { Briefcase, Link, Mail, MailIcon, MapPin, PinIcon } from "lucide-react";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import Perfil from "@/../public/ImagemPerfil.jpg"

export default function Header() {
  return (
    <div className="flex flex-col w-full">
      <Navbar></Navbar>
      <header className="flex flex-col items-center bg-background-primary pb-[2rem]">
        
        {/* TITLE */}
        <div>
          <p className="font-ubuntu text-[3rem] md:text-[4rem] text-primary ">Programador</p>
        </div>
        {/* CONTAINER */}
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center sm:items-center lg:px-5">
          {/* CARD SECTION */}
          <div className="flex flex-col items-center md:items-start">
            {/* PERSONAL CARD */}
            <div className="border-primary border-4 border-b-0 border-r-0 rounded-ss-[8rem] h-[25rem]   w-[18rem]">
              <div className="border-black border-2 rounded-ss-[8rem] rounded-ee-[8rem] h-[25rem] w-full flex flex-col items-center pt-12 gap-3">

                <div className="flex flex-col items-center">
                  <Image src={Perfil} alt="Minha Foto" className="w-[6rem] h-[6rem] object-cover rounded-full border-primary border-2" />
                  <h1 className="text-3xl font-medium">Avelino</h1>
                  <p className="text-sm">programador full-stack</p>
                </div>

                <ul className="text-sm flex flex-col gap-3">
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <Mail size={16} />
                    <p className="text-black hover:text-primary">carlosaaugusto2002@outlook.com</p>
                  </li>
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <MapPin size={16} />
                    <p className="text-black">Brasil</p>
                  </li>
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <Briefcase size={16} />
                    <p className="text-black">Full-time / Freelancer</p>
                  </li>
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <Link size={16} />
                    <a className="text-black" href="#">www.cancastico.com.br</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* CONTENT SECTION */}
          <div className="flex flex-col gap-2 mx-3 md:mx-0">
            {/* SUBTITLE */}
            <div>
              <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
              <div className="text-[2.5rem] leading-[2.4rem] font-medium font-ubuntu pl-3">
                <p>Olá</p>
                <p>Sou o <span className="text-primary">Avelino</span>,</p>
                <p>Programador Full-Stack</p>
              </div>
              <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-sm text-primary font-semibold">{`<p>`}</p>
              <p className="pl-3">
                Te ajudo a colocar suas ideias na web. <br />
                Você achou o programador que fará suas ideias se tornarem realidade!
              </p>
              <p className="text-sm text-primary font-semibold">{`</p>`}</p>
            </div>

            {/* CONTAT */}
            <div>
              <p className="text-sm text-primary font-semibold">{`<a>`}</p>
              <div className="flex flex-row gap-2 items-center pl-3">
                <a href="#" className="font-medium underline hover:text-primary duration-150 text-xl">Venha conversar</a>
              </div>
              <p className="text-sm text-primary font-semibold">{`</a>`}</p>
            </div>


          </div>

          {/* EXPERIENCE */}
          <div className="flex items-center">
            <div className="rounded-[3.5rem] font-medium font-ubuntu p-8 bg-yellow-900 mx-auto md:bg-transparent md:mx-0 ">
              <p className="!text-sm text-primary font-semibold">{`<ul>`}</p>
              <ul className="flex flex-col gap-3">

                <li className="pl-3">
                  <p className="text-sm text-primary font-semibold">{`<li>`}</p>
                  <p className="text-sm text-primary font-semibold pl-3"><span className="text-white md:text-black font-normal text-lg ">Foco para a Web</span></p>
                  <p className="text-sm text-primary font-semibold">{`</li>`}</p>
                </li>

                <li className="pl-3">
                  <p className="text-sm text-primary font-semibold">{`<li>`}</p>
                  <p className="text-sm text-primary font-semibold pl-3"><span className="text-white md:text-black font-normal text-lg ">Empenho na sua ideia</span></p>
                  <p className="text-sm text-primary font-semibold">{`</li>`}</p>
                </li>

                <li className="pl-3">
                  <p className="text-sm text-primary font-semibold">{`<li>`}</p>
                  <p className="text-sm text-primary font-semibold pl-3"><span className="text-white md:text-black font-normal text-lg ">+ de 3 anos de experiencia</span></p>
                  <p className="text-sm text-primary font-semibold">{`</li>`}</p>
                </li>
              </ul>
              <p className="text-sm text-primary font-semibold">{`<ul>`}</p>
            </div>
          </div>

        </div>
      </header>
    </div>
  )
}
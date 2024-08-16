"use client"
import Perfil from "@/../public/ImagemPerfil.png";
import { Briefcase, Link, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Navbar from "../navbar/navbar";

export default function Header() {



  return (
    <div id="home" className="flex flex-col w-full ">

      <Navbar></Navbar>
      <header className="flex flex-col items-center bg-background-primary dark:bg-background-dark pb-[2rem] min-h-[80dvh] justify-center md:px-[8rem] xxl:px-[16rem]">

        {/* TITLE */}
        <div>
          <p className={` font-ubuntu text-[3rem] md:text-[4rem]  text-primary`}>Programador</p>
        </div>
        {/* CONTAINER */}
        <div className="flex flex-col md:flex-row gap-10 w-full justify-between items-center md:items-start">
          {/* CARD SECTION */}
          <div className="flex flex-col items-center md:items-start w-full   md:w-[35%] max-w-[310px] min-w-[300px]">
            {/* PERSONAL CARD */}
            <div className="border-primary border-4 border-b-0 border-r-0 rounded-ss-[8rem] h-[25rem] w-full mx-auto md:mx-0">
              <div className="border-black dark:border-white border-2 rounded-ss-[8rem] rounded-ee-[8rem] h-[25rem] w-full flex flex-col items-center pt-12 gap-3">

                <div className="flex flex-col items-center">
                  <Image src={Perfil} alt="Minha Foto" className="w-[6rem] h-[6rem] object-cover rounded-full bg-primary border-primary border-2" />
                  <h1 className="text-3xl font-medium dark:text-white">Avelino</h1>
                  <p className="text-sm dark:text-white">programador full-stack</p>
                </div>

                <ul className="text-sm flex flex-col gap-3">
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <Mail size={16} />
                    <p className=" text-black dark:text-white  dark:hover:text-primary hover:text-primary">carlosaaugusto2002@outlook.com</p>
                  </li>
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <MapPin size={16} />
                    <p className=" text-black dark:text-white">Brasil</p>
                  </li>
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <Briefcase size={16} />
                    <p className=" text-black dark:text-white">Full-time / Freelancer</p>
                  </li>
                  <li className="flex flex-row gap-1 text-primary items-center">
                    <Link size={16} />
                    <a className=" text-black dark:text-white dark:hover:text-primary" href="#">www.cancastico.com.br</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* CONTENT SECTION */}
          <div className="flex flex-col gap-2 mx-3 w-full px-5 md:w-[45%] md:mx-0">
            {/* SUBTITLE */}
            <div>
              <p className="text-sm text-primary font-semibold dark:text-primary">{`<h1>`}</p>
              <div className="text-[2.5rem] leading-[2.4rem] font-medium font-ubuntu pl-3 ">
                <p className="dark:text-white">Olá</p>
                <p className="dark:text-white">Sou o <span className="text-primary ">Avelino</span>,</p>
                <p className="dark:text-white">Programador Full-Stack</p>
              </div>
              <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-sm text-primary font-semibold">{`<p>`}</p>
              <p className="pl-3 dark:text-white">
                Te ajudo a colocar suas ideias na web. <br />
                Você achou o programador que fará suas ideias se tornarem realidade!
              </p>
              <p className="text-sm text-primary font-semibold">{`</p>`}</p>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-primary font-semibold">{`<a>`}</p>
              <div className="flex flex-row gap-2 items-center pl-3">
                <a href="#contato" className="font-normal  hover:text-primary border-[1px] border-primary rounded-lg p-1 px-3 duration-150 text-xl dark:text-white dark:hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-700">Clique para <span className="text-primary font-semibold">Conversar</span></a>
              </div>
              <p className="text-sm text-primary font-semibold">{`</a>`}</p>
            </div>


          </div>

          {/* EXPERIENCE */}
          <div className="flex items-center w-full  md:w-[20%]">
            <div className="font-medium font-ibmPlexMono p-8 bg-slate-800 mx-auto md:bg-transparent md:mx-0 w-[90%] md:w-fit ">
              <p className="!text-sm text-primary font-semibold">{`<ul>`}</p>
              <ul className="flex flex-col gap-3">

                <li className="pl-3">
                  <p className="text-sm text-primary font-semibold">{`<li>`}</p>
                  <p className="text-sm text-primary font-semibold pl-3"><span className="md:text-black text-white dark:text-white font-normal text-base ">Foco para a Web</span></p>
                  <p className="text-sm text-primary font-semibold">{`</li>`}</p>
                </li>

                <li className="pl-3">
                  <p className="text-sm text-primary font-semibold">{`<li>`}</p>
                  <p className="text-sm text-primary font-semibold pl-3"><span className="md:text-black text-white dark:text-white font-normal text-base ">Empenho na sua ideia</span></p>
                  <p className="text-sm text-primary font-semibold">{`</li>`}</p>
                </li>

                <li className="pl-3">
                  <p className="text-sm text-primary font-semibold">{`<li>`}</p>
                  <p className="text-sm text-primary font-semibold pl-3"><span className="md:text-black text-white dark:text-white font-normal text-base ">+ de 3 anos de experiencia</span></p>
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
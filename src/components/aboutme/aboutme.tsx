import Image from "next/image";
import background from '@/../public/backgroundAboutme.png';

export default function About() {
  return (
    <div className=" flex flex-col min-h-[10rem]" >
      <section className="w-full min-h-[10rem] relative">
        <Image
          src={background}
          alt="Skills Background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none -z-10"
        />
        {/* CONTENT */}

        <div className="bg-slate-800/90 flex flex-col gap-10 py-12 h-full">
          <div className="px-[1rem] md:px-[5rem]">
            <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
            <p className="text-[2.5rem] text-primary font-light pl-3 font-ubuntu">Sobre mim</p>
            <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
            <p className="text-sm text-primary font-semibold">{`<p>`}</p>
            <p className="text-white w-full md:w-[62%] line text-lg pl-3 leading-10" >
            Sou apaixonado por jogos eletrônicos, especialmente por The Witcher, e tenho um grande interesse por animes e a cultura geek em geral. Desde cedo, sempre fui fascinado por computadores, o que me levou a descobrir a programação. Comecei a aprender programação em 2018 através de um curso da Mastertech em parceria com o Facebook, onde me encontrei na área de desenvolvimento. Atualmente, estou no 8º semestre do bacharelado em Ciência da Computação e estou sempre em busca de aprender coisas novas e inovar.
            </p>
            <p className="text-sm text-primary font-semibold">{`</p>`}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
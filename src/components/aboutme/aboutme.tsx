import background from '@/../public/backgroundAboutme.png';
import codingPeople from '@/../public/codingPeople.json';
import { Player } from "@lottiefiles/react-lottie-player";

export default function About() {
  return (
    <div className=" flex flex-col min-h-[10rem]" >
      <section className="w-full min-h-[10rem] relative bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }}>
        {/* <Image
          src={background}
          alt="Skills Background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none -z-10"
        /> */}
        {/* CONTENT */}
        <div className="flex flex-col w-full justify-between bg-[#010021]/70 dark:bg-[#15282E]/90 px-[1rem] md:px-[8rem] xxl:px-[16rem] md:flex-row">
          <div className=" flex flex-col gap-10 py-12 h-full w-full md:w-[60%] bg-transparent ">
            <div className="w-full bg-transparent">
              <p className="text-sm text-primary font-semibold bg-transparent">{`<h1>`}</p>
              <p className="text-[2.5rem] text-primary font-light pl-3 font-ubuntu bg-transparent">Sobre mim</p>
              <p className="text-sm text-primary font-semibold bg-transparent">{`</h1>`}</p>
              <p className="text-sm text-primary font-semibold bg-transparent">{`<p>`}</p>
              <p className="text-white w-full text-lg pl-3 leading-8 md:leading-10 font-ibmPlexMono indent-8 text-justify bg-transparent" >
                Sou um programador Fullstack apaixonado por inovação e tecnologia, com um forte foco em Node.js e React.js, utilizando frameworks como <a href='https://nextjs.org/' target='_blank' className='font-semibold underline text-primary hover:text-primary/80 transition-opacity'>Next.js</a>  e <a href='https://nestjs.com/' target='_blank' className='font-semibold underline text-primary hover:text-primary/80 transition-opacity'>Nest.js</a>. Com uma sólida base técnica e habilidades em WordPress, Docker, MySQL, PostgreSQL, SQL Server, CI/CD, Express.js, JWT e Prisma ORM, estou sempre em busca de novos desafios para expandir meu conhecimento e impactar positivamente os projetos em que atuo.              </p>
              <p className="text-white w-full text-lg pl-3 leading-8 md:leading-10 font-ibmPlexMono indent-8 text-justify bg-transparent" >
                Minhas qualidades incluem uma comunicação eficaz, liderança e gerenciamento de equipe, além de ser resiliente e inovador. Tenho experiência em trabalhar em ambientes dinâmicos, onde a adaptação rápida e a capacidade de encontrar soluções criativas são essenciais. Meu objetivo é sempre agregar valor ao time e entregar resultados que superem as expectativas.              </p>
              <p className="text-sm text-primary font-semibold bg-transparent">{`</p>`}</p>
            </div>
          </div>

          <div className=" flex flex-col gap-10 py-12 bg-transparent w-full md:w-[40%]">
            <Player
              autoplay
              src={codingPeople}
            ></Player>
          </div>

        </div>
      </section>
    </div>
  )
}
import Image, { StaticImageData } from "next/image"
import todo from '@/assets/todo-task.png';
import coffee from '@/assets/paymecoffee.jpg';
import vesti from '@/assets/desafio-vesti.png';
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Github } from "lucide-react";

export default function Projects() {

  const projects: { title: string, description: string,github_link:string, link: string, imagem: StaticImageData }[] = [
    {
      title: "Todo Task",
      description: "Projeto em que fiz uma lista de Tarefas e que posso atualizar suas tarefas",
      imagem: todo,
      github_link:'https://github.com/Cancastico/Todo',
      link: "https://todo-cancasticos-projects.vercel.app/"
    },
    {
      title: "Desafio Vesti",
      description: "Processo seletivo da empresa Vesti",
      imagem: vesti,
      github_link:'https://github.com/Cancastico/desafio-vesti',
      link: "https://desafio-vesti.vercel.app/"
    },
    {
      title: "Pague-me um Café",
      description: "Projeto de integração com a API do Mercado Pago para permitir pagamentos online.",
      imagem: coffee,
      github_link:'https://github.com/Cancastico/mercado-pago-integracao',
      link: "https://mercado-pago-integracao.vercel.app/"
    },
  ]
  return (
    <div id="projetos" className="bg-background-primary dark:bg-background-dark flex flex-col justify-center w-full items-start py-10  md:px-[8rem] xxl:px-[16rem]" >
      <div className="flex flex-col items-start px-[1rem] md:px-0">
        <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
        <p className="text-[2.5rem] text-primary font-light font-ubuntu px-3">Meus projetos</p>
        <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
      </div>
      <div className="py-10 flex flex-wrap items-center w-full gap-10 justify-evenly md:justify-start lg:items-start">
        {projects.map((project, index) => {
          return (
            <div key={index} className="w-[18rem] md:w-[20rem] rounded-lg   shadow-lg shadow-black/30 dark:shadow-white/10 dark:border-slate-700 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105">

              <Image
                className="w-full h-full max-h-36 object-cover rounded-t-lg "
                src={project.imagem}
                alt="todo image "
              />
              <div className="w-full pt-3 pb-0 rounded-b-lg flex flex-col gap-3">
                <h1 className="w-full px-3 font-semibold text-lg dark:text-white "> {project.title}</h1>
                <p className="w-[100%] h-[4rem] px-3 pb-2  dark:text-white  text-justify text-sm text-background-dark/80">{project.description}</p>
                <div>

                  <Separator className="w-full bg-zinc-600"></Separator>
                  <div className="w-full flex flex-row justify-end py-2 pr-5 rounded-b-lg gap-1">
                    <a
                      target="_blank"
                      href={project.github_link}
                    >

                      <Button className="text-white font-semibold hover:bg-primary/70 transition-all ease-in-out round" > <Github size={16} /></Button>
                    </a>
                    <a
                      target="_blank"
                      href={project.link}
                    >
                      <Button className="w-[9rem] text-white font-semibold hover:bg-primary/70 transition-all ease-in-out"> Acessar </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )

        })}


      </div>
    </div >
  )
}
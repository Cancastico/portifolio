import Image, { StaticImageData } from "next/image"
import todo from '@/../public/Projetos/todo-task.png';
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Projects() {

  const projects: { title: string, description: string, link: string, imagem: StaticImageData }[] = [
    {
      title: "Todo Task",
      description: "Projeto em que fiz uma lista de Tarefas e que posso atualizar suas tarefas",
      imagem: todo,
      link: "https://todo-cancasticos-projects.vercel.app/"
    },
  ]
  return (
    <div id="projetos" className="bg-background-primary dark:bg-background-dark flex flex-col justify-center w-full items-start py-10  md:px-[8rem] xxl:px-[16rem]" >
      <div className="flex flex-col items-start px-[1rem] md:px-0">
        <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
        <p className="text-[2.5rem] text-primary font-light font-ubuntu px-3">Meus projetos</p>
        <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
      </div>
      <div className="py-10 flex flex-col items-center w-full gap-10 flex-wrap md:justify-evenly md:items-start">
        {projects.map((project, index) => {
          return (
            <div key={index} className="w-[18rem] md:w-[20rem] rounded-lg   shadow-lg shadow-black/30 dark:shadow-white/10 dark:border-slate-700 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
              <a
                target="_blank"
                href={project.link}
                className="w-full hover:scale-105"
              >
                <Image
                  className="w-full h-full object-cover rounded-t-lg "
                  src={project.imagem}
                  alt="todo image"
                />
                <div className="w-full pt-3 pb-0 bg-white dark:bg-zinc-500 rounded-b-lg flex flex-col gap-3">
                  <h1 className="w-full px-3 font-semibold text-lg dark:text-white bg-white dark:bg-zinc-500"> {project.title}</h1>
                  <p className="w-[100%] px-3 pb-2 bg-white dark:text-white dark:bg-zinc-500 text-justify text-sm text-background-dark/80">{project.description}</p>
                  <div>

                    <Separator className="w-full bg-zinc-600"></Separator>
                    <div className="w-full flex flex-col items-end py-2 pr-5 rounded-b-lg bg-white dark:bg-zinc-500">
                      <Button className="w-[9rem] text-white font-semibold hover:bg-primary/70 transition-all ease-in-out"> Acessar </Button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )

        })}


      </div>
    </div >
  )
}
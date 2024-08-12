import Image, { StaticImageData } from "next/image"
import todo from '@/../public/Projetos/todo-task.png';
import { Button } from "../ui/button";

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
    <div className="bg-white flex flex-col justify-center w-full items-center py-10 px-10" >
      <div className="flex items-center gap-3">
        <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
        <p className="text-[2.5rem] text-primary font-light font-ubuntu">Meus projetos</p>
        <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
      </div>
      <div className="py-10 flex gap-10 flex-wrap justify-evenly items-start">
        {projects.map((project, index) => {
          return (
            <div key={index} className="w-[20rem] rounded-lg   shadow-md shadow-black/30 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
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
                <div className="w-full p-3 bg-white rounded-b-lg">
                  <h1 className="w-full px-3 font-semibold text-lg bg-white rounded-b-lg"> {project.title}</h1>
                  <p className="w-[100%] px-3 bg-white rounded-b-lg text-justify">{project.description}</p>
                </div>
                <div className="w-full flex flex-col items-end pb-5 pr-5">

                  <Button className="w-[9rem] text-white font-semibold hover:bg-primary/70 transition-all ease-in-out"> Acessar </Button>
                </div>
              </a>
            </div>
          )

        })}


      </div>
    </div >
  )
}
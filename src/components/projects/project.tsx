import Image from "next/image"
import todo from '@/../public/Projetos/todo-task.png';

export default function Projects() {
  return (
    <div className="bg-white flex flex-col justify-center w-full items-center py-10 px-10" >
      <div className="flex items-center gap-3">
        <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
        <p className="text-[2.5rem] text-primary font-light font-ubuntu">Meus projetos</p>
        <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
      </div>
      <div className="py-10 flex gap-10 flex-wrap justify-evenly items-start">

        <div className="w-[w-23rem] rounded-lg   shadow-md shadow-black/30 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105">
          <a
            className="w-[23rem] hover:scale-105"
          >
            <Image
              className="w-[23rem] h-full object-cover rounded-t-lg "
              src={todo}
              alt="todo image"
            />
            <div className="w-[23rem] p-3 bg-white rounded-b-lg">
              <h1 className="w-full px-3 font-semibold text-lg bg-white rounded-b-lg"> Todo Task</h1>
              <p className="w-[100%] px-3 bg-white rounded-b-lg">Projeto em que fiz uma lista de Tarefas e que posso atualizar suas tarefas</p>
            </div>
          </a>
        </div>

        <div className="w-[w-23rem] rounded-lg   shadow-md shadow-black/30 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105">
          <a
            className="w-[23rem] hover:scale-105"
          >
            <Image
              className="w-[23rem] h-full object-cover rounded-t-lg "
              src={todo}
              alt="todo image"
            />
            <div className="w-[23rem] p-3 bg-white rounded-b-lg">
              <h1 className="w-full px-3 font-semibold text-lg bg-white rounded-b-lg"> Todo Task</h1>
              <p className="w-[100%] px-3 bg-white rounded-b-lg">Projeto em que fiz uma lista de Tarefas e que posso atualizar suas tarefas</p>
            </div>
          </a>
        </div>

        <div className="w-[w-23rem] rounded-lg   shadow-md shadow-black/30 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105">
          <a
            className="w-[23rem] hover:scale-105"
          >
            <Image
              className="w-[23rem] h-full object-cover rounded-t-lg "
              src={todo}
              alt="todo image"
            />
            <div className="w-[23rem] p-3 bg-white rounded-b-lg">
              <h1 className="w-full px-3 font-semibold text-lg bg-white rounded-b-lg"> Todo Task</h1>
              <p className="w-[100%] px-3 bg-white rounded-b-lg">Projeto em que fiz uma lista de Tarefas e que posso atualizar suas tarefas</p>
            </div>
          </a>
        </div>

        <div className="w-[w-23rem] rounded-lg   shadow-md shadow-black/30 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105">
          <a
            className="w-[23rem] hover:scale-105"
          >
            <Image
              className="w-[23rem] h-full object-cover rounded-t-lg "
              src={todo}
              alt="todo image"
            />
            <div className="w-[23rem] p-3 bg-white rounded-b-lg">
              <h1 className="w-full px-3 font-semibold text-lg bg-white rounded-b-lg"> Todo Task</h1>
              <p className="w-[100%] px-3 bg-white rounded-b-lg">Projeto em que fiz uma lista de Tarefas e que posso atualizar suas tarefas</p>
            </div>
          </a>
        </div>

        <div className="w-[w-23rem] rounded-lg   shadow-md shadow-black/30 border-slate-400 border-[1px] transition-all duration-300 ease-in-out transform hover:scale-105">
          <a
            className="w-[23rem] hover:scale-105"
          >
            <Image
              className="w-[23rem] h-full object-cover rounded-t-lg "
              src={todo}
              alt="todo image"
            />
            <div className="w-[23rem]  p-3 bg-white rounded-b-lg">
              <h1 className="w-full px-3 font-semibold text-lg bg-white rounded-b-lg"> Todo Task</h1>
              <p className="w-[100%] px-3 bg-white rounded-b-lg">Projeto em que fiz uma lista de Tarefas e que posso atualizar suas tarefas</p>
            </div>
          </a>
        </div>

      </div>
    </div >
  )
}
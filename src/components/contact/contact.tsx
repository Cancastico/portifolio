import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import z from 'zod';
import ZodInputContainer from "../input/inputTextZod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from '../ui/button';
import { Github, Linkedin, LinkedinIcon } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
export default function Contact() {

  const contactSchema = z.object({
    email: z.string(),
    name: z.string(),
    message: z.string(),
  })

  type contact = z.infer<typeof contactSchema>
  const { register, formState: { errors } } = useForm<contact>({ resolver: zodResolver(contactSchema) })
  return (
    <section className="flex flex-col h-[90dvh] md:flex-row px-5 py-[2rem] md:py-[5rem] gap-7 justify-center bg-background-primary dark:bg-background-dark border-y-2 border-primary">
      <article className='w-full md:w-[43%]  flex flex-col gap-5'>
        <div>
          <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
          <p className="text-[2.5rem] text-primary font-light pl-3 font-ubuntu">Entre em contato</p>
          <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
          <p className="text-sm text-primary font-semibold">{`<p>`}</p>
          <p className="text-black dark:text-white w-full text-lg pl-3 leading-relaxed" >Preencha o formulário ao lado e entrarei em contato o mais breve possível. </p>
          <p className="text-sm text-primary font-semibold">{`</p>`}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <p className="text-sm text-primary font-semibold">{`<h3>`}</p>
            <p className="text-[1.5rem] text-primary font-light pl-3 font-ubuntu">Redes Sociais:</p>
            <p className="text-sm text-primary font-semibold">{`</h3>`}</p></div>
          <div className=' flex gap-3'>
            <Button className='bg-inherit/10 text-primary-foreground hover:text-white transition-all dark:text-white border-2 border-primary rounded-none flex gap-1'>
              <GitHubLogoIcon className='w-6 h-6' />
              Github
            </Button>

            <Button className='bg-inherit/10 text-primary-foreground hover:text-white transition-all dark:text-white border-2 border-primary rounded-none flex gap-1'>
              <LinkedInLogoIcon className='w-6 h-6' />
              LinkedIn
            </Button>
          </div>
        </div>
      </article>

      <form className="w-full md:w-[40%] p-5 flex flex-col gap-[1.2rem] bg-primary" action="">
        <div className="w-full flex flex-col md:flex-row  gap-5 ">

          <ZodInputContainer className="w-[100%]" error={errors.email} label="Nome">
            <Input placeholder="Digite seu Nome" className="bg-background-primary  text-black roundex-sm w-full" {...register('name')} />
          </ZodInputContainer>

          <ZodInputContainer className="w-[100%]" error={errors.email} label="Email">
            <Input placeholder="Digite seu E-mail" className="bg-background-primary text-black roundex-sm w-full" {...register('email')} />
          </ZodInputContainer>
        </div>

        <ZodInputContainer error={errors.email} label="Mensagem">
          <Textarea placeholder="Escreva sua mensagem" className="bg-background-primary text-black h-[13rem] w-full resize-none scroll-smooth" maxLength={512} {...register('message')} />
        </ZodInputContainer>

        <div className='w-full flex flex-row-reverse'>
          <Button className='md:w-[6rem] rounded-none bg-background-dark text-white dark:text-black hover:bg-background-dark/90 dark:bg-background-primary dark:hover:bg-background-primary/60'> Enviar</Button>
        </div>
      </form>
    </section>
  )
}
import { zodResolver } from '@hookform/resolvers/zod';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
// import { useForm } from "react-hook-form";
import { useForm as formSpree } from '@formspree/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import ZodInputContainer from "../input/inputTextZod";
import { Button } from '../ui/button';
import { Input } from "../ui/input";
import Loading from '../ui/loading';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Textarea } from "../ui/textarea";
import submitedAnimation from '@/../public/sucessSubmit.json'

export default function Contact() {
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [submited, setSubmited] = useState<boolean>(false);
  const [state, handleSubmit] = formSpree("xovalwqn");

  const contactSchema = z.object({
    email: z.string().email('Email invalido'),
    name: z.string(),
    message: z.string(),
  })

  type contact = z.infer<typeof contactSchema>
  const { register, formState: { errors }, setError, clearErrors, reset } = useForm<contact>({ resolver: zodResolver(contactSchema) })

  function submit(e: any) {
    setSubmiting(true)
    e.preventDefault();
    const object: contact = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    const verify = contactSchema.safeParse(object);

    if (verify.success) {
      handleSubmit(e).then(() => {
        setSubmiting(false)
        setSubmited(true)
        setTimeout(() => { setSubmited(false) }, 2000)
      }).finally(() => { reset() });
      clearErrors();
    } else {
      verify.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof contact;
        if (path === 'name' || path === 'email' || path === 'message') {
          setError(path, { message: issue.message });
        } else {
          setError(`root.${path}`, { message: issue.message });
        }
        setSubmiting(false)
      });
    }
  }

  return (
    <section id='contato' className="flex flex-col gap-8 md:gap-0 md:flex-row  py-[3rem] md:py-[5rem] justify-between bg-background-primary dark:bg-background-dark border-y-2 border-primary px-[1rem] md:px-[8rem] xxl:px-[16rem]">
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
            <p className="text-sm text-background-dark font-semibold font-ubuntu">Redes Sociais:</p>
          </div>
          <div className=' flex gap-3 justify-center md:justify-normal'>
            <Link href="https://github.com/Cancastico" target='_blank'>
              <Button className='bg-inherit/10 text-primary-foreground hover:text-white transition-all dark:text-white border-2 border-primary rounded-none flex gap-1'>
                <GitHubLogoIcon className='w-6 h-6' />
                Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/dev-carlos-avelino/" target='_blank'>
              <Button className='bg-inherit/10 text-primary-foreground hover:text-white transition-all dark:text-white border-2 border-primary rounded-none flex gap-1'>
                <LinkedInLogoIcon className='w-6 h-6' />
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <form className="relative w-full md:w-[50%] xl:w-[33%] p-5 flex flex-col gap-[1.8rem] bg-background-dark rounded-lg" onSubmit={submit}>

        {submited && (
          <div
            className='absolute w-full h-full p-10 top-0 left-0 z-20 transition-all duration-1000 ease-in-out'
          >
            <Player
              autoplay
              src={submitedAnimation}
              onEvent={event => {
                if (event == 'complete') {
                  setSubmited(false);
                }
              }}
            ></Player>
          </div>
        )}

        <div className="w-full flex flex-col md:flex-row  gap-[1.8rem]  bg-transparent">

          <ZodInputContainer className="w-[100%]" error={undefined} label="Nome">
            <Input id='name' placeholder="Digite seu Nome" className="bg-background-primary  text-black placeholder:text-background-dark roundex-sm w-full" {...register('name')} />
          </ZodInputContainer>

          <ZodInputContainer className="w-[100%]" error={errors.email} label="Email">
            <Input id='email' placeholder="Digite seu E-mail" className="bg-background-primary text-black placeholder:text-background-dark roundex-sm w-full" {...register('email')} />
          </ZodInputContainer>
        </div>

        <ZodInputContainer error={undefined} label="Mensagem">
          <Textarea id='message' placeholder="Escreva sua mensagem" className="bg-background-primary text-black placeholder:text-background-dark h-[13rem] w-full resize-none scroll-smooth" maxLength={512} {...register('message')} />
        </ZodInputContainer>

        <div className='w-full flex flex-row-reverse bg-transparent'>
          <Button disabled={submiting} className=' w-[6rem] relative gap-2 rounded-none bg-primary text-white dark:text-black hover:bg-primary-foreground'>
            {
              submiting ? (
                <div className='absolute left-auto top-auto w-6 h-6'>
                  <Loading></Loading>
                </div>
              ) : (
                'Enviar'
              )
            }

          </Button>
        </div>
      </form>
    </section>
  )
}
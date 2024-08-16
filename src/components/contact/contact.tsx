import { zodResolver } from '@hookform/resolvers/zod';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
// import { useForm } from "react-hook-form";
import z from 'zod';
import ZodInputContainer from "../input/inputTextZod";
import { Button } from '../ui/button';
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm as formSpree } from '@formspree/react';
import { useForm, ErrorOption } from 'react-hook-form';
import { useEffect } from 'react';

export default function Contact() {
  const [state, handleSubmit] = formSpree("xovalwqn");

  const contactSchema = z.object({
    email: z.string().email('Email invalido'),
    name: z.string(),
    message: z.string(),
  })

  type contact = z.infer<typeof contactSchema>
  const { formState: { errors }, setError, clearErrors } = useForm<contact>({ resolver: zodResolver(contactSchema) })

  function submiting(e: any) {
    e.preventDefault();
    const object: contact = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    const verify = contactSchema.safeParse(object);

    if (verify.success) {
      handleSubmit(e);
      clearErrors();
    } else {
      verify.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof contact;
        if (path === 'name' || path === 'email' || path === 'message') {
          setError(path, { message: issue.message });
        } else {
          setError(`root.${path}`, { message: issue.message });
        }
      });
    }
  }


  useEffect(() => {
    console.log(errors)
  }, [errors])


  return (
    <section className="flex flex-col md:flex-row  py-[3rem] md:py-[5rem] justify-between bg-background-primary dark:bg-background-dark border-y-2 border-primary px-[1rem] md:px-[16rem]">
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
          <div className=' flex gap-3 justify-center md:justify-normal gap-3'>
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

      <form className="w-full md:w-[33%] p-5 flex flex-col gap-[1.8rem] bg-background-dark rounded-lg" onSubmit={submiting}>
        <div className="w-full flex flex-col md:flex-row  gap-[1.8rem] ">

          <ZodInputContainer className="w-[100%]" error={undefined} label="Nome">
            <Input id='name' name='name' placeholder="Digite seu Nome" className="bg-background-primary  text-black placeholder:text-background-dark roundex-sm w-full" />
          </ZodInputContainer>

          <ZodInputContainer className="w-[100%]" error={errors.email} label="Email">
            <Input id='email' name='email' placeholder="Digite seu E-mail" className="bg-background-primary text-black placeholder:text-background-dark roundex-sm w-full" />
          </ZodInputContainer>
        </div>

        <ZodInputContainer error={undefined} label="Mensagem">
          <Textarea id='message' name='message' placeholder="Escreva sua mensagem" className="bg-background-primary text-black placeholder:text-background-dark h-[13rem] w-full resize-none scroll-smooth" maxLength={512} />
        </ZodInputContainer>

        <div className='w-full flex flex-row-reverse'>
          <Button className='md:w-[6rem] rounded-none bg-primary text-white dark:text-black hover:bg-primary-foreground'> Enviar</Button>
        </div>
      </form>
    </section>
  )
}
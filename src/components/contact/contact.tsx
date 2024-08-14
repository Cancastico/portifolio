import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ZodInputContainer from "../input/inputTextZod";
import { Textarea } from "../ui/textarea";
export default function Contact() {

  const contactSchema = z.object({
    email: z.string(),
    name: z.string(),
    message: z.string(),
  })

  type contact = z.infer<typeof contactSchema>
  const { register, formState: { errors } } = useForm<contact>({ resolver: zodResolver(contactSchema) })
  return (
    <section className="">
      <form className="w-[40%] p-5 pt-10 flex flex-col gap-[1.2rem] bg-primary rounded-lg" action="">
        <div className="w-full flex flex-col md:flex-row  gap-5 ">

          <ZodInputContainer className="w-[100%]" error={errors.email} label="Nome">
            <Input className="bg-background-primary dark:bg-background-dark dark:text-white text-black roundex-sm w-full" {...register('name')} />
          </ZodInputContainer>

          <ZodInputContainer className="w-[100%]" error={errors.email} label="Email">
            <Input className="bg-background-primary dark:bg-background-dark dark:text-white text-black roundex-sm w-full" {...register('email')} />
          </ZodInputContainer>
        </div>

        <ZodInputContainer error={errors.email} label="Mensagem">
          <Textarea  className="bg-background-primary dark:bg-background-dark dark:text-white text-black h-[13rem] w-full resize-none scroll-smooth" maxLength={512} {...register('message')} />
        </ZodInputContainer>

      </form>
    </section>
  )
}
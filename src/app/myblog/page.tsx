'use client'

import Footer from "@/components/footer/footer";
import AutoResizeTextarea from "@/components/input/textAreaAutoResize";
import ModalLarge from "@/components/modals/modalLarge";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ThemeProvider } from "@/contexts/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image, Pilcrow, PlusIcon, Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const postSchema = z.object({
  post: z.array(z.object({
    type: z.enum(['title', 'subtitle', 'image', 'paragraph']),
    content: z.string().nullable()
  }))
});

type FormValues = z.infer<typeof postSchema>;

export default function MyBlog() {
  const [adding, setAdding] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  const { register, handleSubmit, setValue, getValues } = useForm<FormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      post: [
        { type: 'title', content: '' },
        { type: 'subtitle', content: '' },
        { type: "image", content: null },
        { type: 'paragraph', content: '' },
      ]
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Manipule o envio do post aqui
  };

  function addSection(type: 'paragraph' | 'image') {
    const currentPost = getValues('post');
    setValue('post', [...currentPost, { type, content: null }]);
    setPopoverOpen(false);
  }

  function removeSection(index: number) {
    const currentPost = getValues('post');
    const updatedPost = currentPost.filter((_, i) => i !== index);
    setValue('post', updatedPost);
  }

  return (
    <ThemeProvider>
      <title> Cancastico | Blog</title>
      <Navbar />
      <section className="relative">
        <article className="w-full min-h-[100dvh] bg-background-primary dark:bg-background-dark md:px-[8rem] xxl:px-[16rem]">
          <div className="w-full flex flex-col items-start px-4 md:items-start">
            <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
            <p className="font-light font-ubuntu text-[2.5rem] text-primary px-3">Meus Posts</p>
            <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
          </div>
        </article>

        <div onClick={() => { setAdding(true) }} className="cursor-pointer fixed right-8 bottom-8 border-primary border-2 bg-background-primary hover:bg-background-primary/80 transition-all ease-out dark:bg-background-dark dark:hover:bg-background-dark/80 text-primary rounded-full">
          <PlusIcon size={38} />
        </div>
      </section>

      <Footer />
      <ModalLarge open={adding} close={() => { setAdding(!adding) }}>
        <div className="w-full h-[80dvh] flex flex-col gap-5">
          <p className="font-ubuntu font-light text-center text-[1.5rem]">Criar Post</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative flex flex-col gap-1">
              <div className="flex flex-col items-center w-[90%] mx-auto pb-6 gap-2">
                {getValues('post').map((stretch, index) => {
                  if (stretch.type === 'paragraph') {
                    return (
                      <div className="relative w-full" key={index}>
                        <AutoResizeTextarea
                          register={register(`post.${index}.content`)}
                          className="ring-0 w-full h-full border-0 text-base focus:border-0 focus:ring-0 focus-visible:border-0 focus-visible:ring-0 shadow-none"
                          placeholder={`write ${stretch.type}`}
                        />
                        <Trash onClick={() => { removeSection(index) }} size={20} className="absolute text-zinc-400 hover:text-red-400 left-[-1.5rem] top-[0.5rem]" />
                      </div>
                    );
                  }

                  if (stretch.type === 'subtitle' || stretch.type === 'title') {
                    return (
                      <Input
                        key={index}
                        {...register(`post.${index}.content`)}
                        className={`ring-0 border-0 ${stretch.type === 'title' ? 'text-2xl' : 'text-lg'} font-light text-primary focus:border-0 focus:ring-0 focus-visible:border-0 focus-visible:ring-0 shadow-none`}
                        placeholder={`write ${stretch.type}`}
                      />
                    );
                  }

                  if (stretch.type === 'image') {
                    return (
                      <div key={index} className="relative min-h-20 w-full rounded-lg border-[1px] box-border text-primary border-primary/40 hover:bg-slate-200/20">
                        <Input
                          type="file"
                          className="w-full min-h-20 text-transparent opacity-0 ring-0 border-1 text-sm focus:ring-0 focus-visible:ring-0 shadow-none"
                        />
                        <p className="absolute left-[10%] md:left-[45%] top-[37%] flex gap-2 -z-10">
                          <Image />
                          Selecionar Imagem
                        </p>
                        <Trash onClick={() => { removeSection(index) }} size={20} className="absolute text-zinc-400 hover:text-red-400 left-[-1.5rem] top-[2rem]" />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              <Popover open={popoverOpen}>
                <PopoverTrigger asChild>
                  <div onClick={() => { setPopoverOpen(!popoverOpen) }} className="absolute hover:cursor-pointer hover:opacity-80 w-fit left-[1.5rem] -bottom-[2rem] my-2 border-primary border-2 transition-all ease-out text-primary rounded-full">
                    <PlusIcon className={`${popoverOpen && 'rotate-45'} transition-all`} size={24} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="shadow-none border-0 bg-transparent flex flex-row">
                  <div className="flex justify-center items-center gap-3">
                    <Button onClick={() => { addSection('image') }} className="bg-background-primary hover:bg-primary hover:text-white transition-all ease-in-out dark:bg-background-dark text-primary rounded-full border-[1px] border-primary w-fit h-fit p-1 m-0">
                      <Image size={20} />
                    </Button>
                    <Button onClick={() => { addSection('paragraph') }} className="bg-background-primary hover:bg-primary hover:text-white transition-all ease-in-out text-primary rounded-full border-[1px] border-primary w-fit h-fit p-1 m-0">
                      <Pilcrow size={20} />
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="w-[94%] flex flex-row-reverse pb-5">
              <Button type="submit" className="text-white">Criar</Button>
            </div>
          </form>
        </div>
      </ModalLarge>
    </ThemeProvider>
  );
}

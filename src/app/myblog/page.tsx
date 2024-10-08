/* eslint-disable no-console */
'use client'

import Footer from "@/components/footer/footer";
import AutoResizeTextarea from "@/components/input/textAreaAutoResize";
import ModalLarge from "@/components/modals/modalLarge";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthContext } from "@/contexts/authContext";
import { useTheme } from "@/contexts/theme";
import { cn } from "@/lib/utils";
import { AxiosNode } from "@/services/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image as ImageIcon, Pilcrow, PlusIcon, SquareArrowOutUpRight, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { z } from "zod";
import { DateToDDMM } from "../utils/converters/dateToDDMM";
import { fileToBase64 } from "../utils/converters/fileToBase64";

import { resizeImage } from "@/lib/resizeImage";
import { Prisma } from "@prisma/client";
import { calcReadTime } from "../utils/converters/calcReadTime";

const postSchema = z.object({
  post: z.array(
    z.object({
      type: z.enum(['title', 'subtitle', 'image', 'paragraph', 'banner']),
      content: z.string().nullable(),
    })),
});


type FormValues = z.infer<typeof postSchema>;

export default function MyBlog() {
  const { isAuthenticated } = useAuthContext();

  const { theme } = useTheme();

  const [adding, setAdding] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Prisma.PostGetPayload<{ include: { sections: true, author: true } }>[]>([]);

  const { register, handleSubmit, setValue, getValues, formState: { errors }, watch, reset } = useForm<FormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      post: [
        { type: 'banner', content: null },
        { type: 'title', content: '' },
        { type: 'subtitle', content: '' },
        { type: 'paragraph', content: '' },
      ]
    }
  });



  async function handleFileChange(index: number, file: File) {
    try {

      const currentPost = getValues('post');
      currentPost[index].content = await fileToBase64(await resizeImage(file));
      setValue('post', currentPost);
    } catch (error) {
      toast.error("Erro ao converter o arquivo para base64");
    }
  }

  async function getPosts(page: number) {
    try {
      const response: any = await AxiosNode.get(`/api/blogData?page=${page}`).then(response => response).catch(() => { getPosts(page) });
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  const onSubmit = (data: FormValues) => {
    AxiosNode.post('/api/post', data).then(() => {
      reset();
      getPosts(0)
      setAdding(false)
    })
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


  useEffect(() => {
    getPosts(0)
  }, [])

  return (
    <>
      <title> Cancastico | Blog</title>
      <Navbar />
      <section className="relative pt-12">
        <article className="w-full min-h-[100dvh] bg-background-primary dark:bg-background-dark md:px-[8rem] xxl:px-[16rem]">
          <div className="w-full flex flex-col items-start px-4 md:items-start">
            <p className="text-sm text-primary font-semibold">{`<h1>`}</p>
            <p className="font-light font-ubuntu text-[2.5rem] text-primary px-3">Meus Posts</p>
            <p className="text-sm text-primary font-semibold">{`</h1>`}</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 py-8">
            {posts.length > 0 ? (
              posts.map((post, index) => {

                const title = post.sections.find(section => section.type == 'title')?.content;
                const banner = post.sections.find(section => section.type == 'banner')?.content;
                const timeReading = calcReadTime(
                  post.sections.map((section) => {
                    if (section.type != 'banner' && section.type != 'image') {
                      return section.content!
                    } else {
                      return ''
                    }
                  })!
                )

                return (
                  <Dialog key={index}>
                    <DialogTrigger>
                      <div className={`group border-zinc-300/80 dark:border-zinc-600/80 border-[1px] hover:border-primary dark:hover:border-primary  cursor-pointer hover:shadow-md  hover:shadow-primary/40 text-black/70 dark:text-white w-[16rem] h-fit rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out`}>
                        <div className="flex flex-row-reverse items-center gap-1 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out pt-3 pr-3">
                          <Button className="text-white font-sm font-semibold font-ibmPlexMono h-[1.5rem] p-3 flex gap-1">  Ler Post <SquareArrowOutUpRight size={16} /></Button>
                        </div>
                        <div className="p-3">
                          <h1 className="text-wrap flex flex-row items-start text-xl font-bold font-ibmPlexMono h-[3rem]">{title}</h1>
                          <div className="flex gap-2 items-end">
                            <p className="text-sm bg-zinc-300 text-zinc-600 dark:bg-zinc-600  w-fit px-2 dark:text-zinc-300 rounded-lg">{DateToDDMM(post.created_at)}</p>
                            <p className="text-[0.7rem] text-zinc-700 font-medium  dark:text-zinc-400   w-fit px-2 rounded-lg">{timeReading} m read time</p>

                          </div>
                        </div>
                        <div className="p-3 pt-0">
                          <Image className="object-fill rounded-lg h-[10rem]" width={1000} height={1000} src={banner!} alt="imagem"></Image>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className={`${theme == 'light' ? 'bg-background-primary' : 'bg-background-dark'} -translate-y-[44%] md:-translate-y-[50%]  p-0 ring-0 border-none h-[90vh] overflow-y-auto scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1 scrollbar scrollbar-track-transparent dark:scrollbar-track-background-dark scrollbar-thumb-primary hover:scrollbar-track-transparent`}>
                      <div className="w-[100dvw] md:w-[45vw] h-full flex flex-col gap-1 pb-[3rem]">
                        {post.sections.map((section, index) => {
                          if (section.type == 'banner') {
                            return (
                              <div key={index} className="w-full h-[13rem] rounded-t-lg bg-cover " style={{ backgroundImage: `url(${section.content})` }}>
                                {/* <Image className={cn("w-full max-h-[20rem]")} src={section.content!} width={1000} height={1000} alt="banner"></Image> */}
                              </div>
                            )
                          }

                          if (section.type == 'image') {
                            return (
                              <div key={index} className="w-[100dvw] md:w-[45dvw] py-4 min-h-[10rem] rounded-t-lg bg-cover px-[1rem] md:px-[3rem]">
                                <Image className={cn("w-full")} src={section.content!} width={1000} height={1000} alt="banner"></Image>
                              </div>
                            )
                          }

                          if (section.type == 'title') {
                            return (<h1 key={index} className="pl-2 xl:pl-[2rem] font-medium text-[3rem] font-ubuntu text-primary capitalize">{section.content}</h1>)
                          }

                          if (section.type == 'paragraph') {
                            return (
                              <div className="max-w-full" key={index}>
                                <p className={`text-wrap flex w-full truncate font-ibmPlexMono px-3 xl:px-[3rem] text-justify py-1 ${theme == 'light' ? 'text-black' : 'text-white'}`}>{section.content}</p>
                              </div>
                            )
                          }

                          if (section.type == 'subtitle') {
                            return (<h1 key={index} className="pl-3 xl:pl-[3rem] font-medium text-xl font-ubuntu text-primary capitalize">{section.content}</h1>)
                          }
                        })}
                      </div>
                    </DialogContent>
                  </Dialog>

                )
              })

            ) : (
              <>
                <div key={1} className={` hover:scale-105 transition-all duration-300 ease-in-out h-[17.8rem] w-[16rem] flex flex-col justify-between cursor-pointer text-black/70  rounded-lg bg-zinc-200 dark:bg-zinc-700`}>
                  <div className="p-3 flex flex-col gap-3 pt-8">
                    <Skeleton className="text-wrap text-xl font-bold font-ibmPlexMono h-[3rem]"></Skeleton>
                    <Skeleton className="text-sm w-[3.3rem] h-[1.5rem]"></Skeleton>
                  </div>
                  <div className="p-3 pt-0">
                    <Skeleton className="rounded-lg h-[9rem]" ></Skeleton>
                  </div>
                </div>
                <div key={2} className={` hover:scale-105 transition-all duration-300 ease-in-out h-[17.8rem] w-[16rem] flex flex-col justify-between cursor-pointer text-black/70  rounded-lg bg-zinc-200 dark:bg-zinc-700`}>
                  <div className="p-3 flex flex-col gap-3 pt-8">
                    <Skeleton className="text-wrap text-xl font-bold font-ibmPlexMono h-[3rem]"></Skeleton>
                    <Skeleton className="text-sm w-[3.3rem] h-[1.5rem]"></Skeleton>
                  </div>
                  <div className="p-3 pt-0">
                    <Skeleton className="rounded-lg h-[9rem]" ></Skeleton>
                  </div>
                </div>
                <div key={3} className={` hover:scale-105 transition-all duration-300 ease-in-out h-[17.8rem] w-[16rem] flex flex-col justify-between cursor-pointer text-black/70  rounded-lg bg-zinc-200 dark:bg-zinc-700`}>
                  <div className="p-3 flex flex-col gap-3 pt-8">
                    <Skeleton className="text-wrap text-xl font-bold font-ibmPlexMono h-[3rem]"></Skeleton>
                    <Skeleton className="text-sm w-[3.3rem] h-[1.5rem]"></Skeleton>
                  </div>
                  <div className="p-3 pt-0">
                    <Skeleton className="rounded-lg h-[9rem]" ></Skeleton>
                  </div>
                </div>
                <div key={4} className={` hover:scale-105 transition-all duration-300 ease-in-out h-[17.8rem] w-[16rem] flex flex-col justify-between cursor-pointer text-black/70  rounded-lg bg-zinc-200 dark:bg-zinc-700`}>
                  <div className="p-3 flex flex-col gap-3 pt-8">
                    <Skeleton className="text-wrap text-xl font-bold font-ibmPlexMono h-[3rem]"></Skeleton>
                    <Skeleton className="text-sm w-[3.3rem] h-[1.5rem]"></Skeleton>
                  </div>
                  <div className="p-3 pt-0">
                    <Skeleton className="rounded-lg h-[9rem]" ></Skeleton>
                  </div>
                </div>
                <div key={5} className={` hover:scale-105 transition-all duration-300 ease-in-out h-[17.8rem] w-[16rem] flex flex-col justify-between cursor-pointer text-black/70  rounded-lg bg-zinc-200 dark:bg-zinc-700`}>
                  <div className="p-3 flex flex-col gap-3 pt-8">
                    <Skeleton className="text-wrap text-xl font-bold font-ibmPlexMono h-[3rem]"></Skeleton>
                    <Skeleton className="text-sm w-[3.3rem] h-[1.5rem]"></Skeleton>
                  </div>
                  <div className="p-3 pt-0">
                    <Skeleton className="rounded-lg h-[9rem]" ></Skeleton>
                  </div>
                </div>
                <div key={6} className={` hover:scale-105 transition-all duration-300 ease-in-out h-[17.8rem] w-[16rem] flex flex-col justify-between cursor-pointer text-black/70  rounded-lg bg-zinc-200 dark:bg-zinc-700`}>
                  <div className="p-3 flex flex-col gap-3 pt-8">
                    <Skeleton className="text-wrap text-xl font-bold font-ibmPlexMono h-[3rem]"></Skeleton>
                    <Skeleton className="text-sm w-[3.3rem] h-[1.5rem]"></Skeleton>
                  </div>
                  <div className="p-3 pt-0">
                    <Skeleton className="rounded-lg h-[9rem]" ></Skeleton>
                  </div>
                </div>
              </>
            )}
          </div>
        </article>



        {isAuthenticated && (
          <div onClick={() => { setAdding(true) }} className="cursor-pointer fixed right-8 bottom-8 border-primary border-2 bg-background-primary hover:bg-background-primary/80 transition-all ease-out dark:bg-background-dark dark:hover:bg-background-dark/80 text-primary rounded-full">
            <PlusIcon size={38} />
          </div>
        )}
      </section>

      <Footer />
      {/* MODAL READ POST */}

      {/* MODAL CREATE POST */}
      <ModalLarge open={adding} close={() => { reset() }}>
        <div className="w-[98dvw] md:w-[45vw] h-[80dvh] flex flex-col gap-5">
          <p className="font-ubuntu font-light text-center text-[1.5rem]">Criar Post</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative flex flex-col gap-1">
              <div className="flex flex-col items-center w-[90%] mx-auto pb-6 gap-2">
                {watch('post').map((stretch, index) => {
                  if (stretch.type === 'banner') {
                    console.log(stretch.content)
                  }
                  if (stretch.type === 'paragraph') {
                    return (
                      <div className="relative w-full" key={index}>
                        <AutoResizeTextarea
                          register={register(`post.${index}.content`)}
                          className="ring-0 w-full h-full border-0 resize-y text-base focus:border-0 focus:ring-0 focus-visible:border-0 focus-visible:ring-0 shadow-none"
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
                        {stretch.content ? (
                          <div className="relative">
                            <div className=" absolute h-full w-full opacity-0 hover:opacity-100 transition-all ease-in-out flex flex-col bg-zinc-300/20 justify-center items-center">
                              <Button onClick={() => { setValue(`post.${index}.content`, null) }} className="text-lg text-white bg-red-800 hover:bg-red-900 flex flex-row justify-center items-center gap-2">
                                <Trash />
                                Excluir Imagem
                              </Button>
                            </div>
                            <Image className="object-fill" width={1000} height={1000} src={stretch.content} alt="imagem"></Image>
                          </div>
                        ) : (
                          <>
                            <Input
                              type="file"
                              className="w-full min-h-20 text-transparent opacity-0 ring-0 border-1 text-sm focus:ring-0 focus-visible:ring-0 shadow-none"
                              {...register(`post.${index}.content`, {
                                onChange: (e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleFileChange(index, file);
                                  }
                                }
                              })}
                            />
                            <p className="absolute left-[10%] md:left-[45%] top-[37%] flex gap-2 -z-10">
                              <ImageIcon />
                              Selecionar Imagem
                            </p>
                          </>
                        )}
                        <Trash onClick={() => { removeSection(index) }} size={20} className="absolute text-zinc-400 hover:text-red-400 left-[-1.5rem] top-[2rem]" />
                      </div>
                    );
                  }

                  if (stretch.type === 'banner') {
                    return (
                      <div key={index} className="relative md:max-h-[25rem] w-full rounded-lg border-[2px] box-border border-dashed text-primary border-primary/40 hover:bg-slate-200/20">
                        {(stretch.content?.length ?? 0) > 0 ? (
                          <div className="relative max-h-[25rem]">
                            <div className=" absolute  h-full w-full opacity-0 hover:opacity-100 transition-all ease-in-out flex flex-col bg-zinc-300/20 justify-center items-center">
                              <Button onClick={() => { setValue(`post.${index}.content`, null) }} className="text-lg text-white bg-red-800 hover:bg-red-900 flex flex-row justify-center items-center gap-2">
                                <Trash />
                                Excluir Imagem
                              </Button>
                            </div>
                            <Image className="object-fill md:max-h-[25rem]" width={1000} height={1000} src={stretch.content!} alt="imagem"></Image>
                          </div>
                        ) : (
                          <>
                            <Input
                              type="file"
                              className="w-full h-[5rem] md:h-[13rem] cursor-pointer text-transparent opacity-0 ring-0 border-1 text-sm focus:ring-0 focus-visible:ring-0 shadow-none"
                              {...register(`post.${index}.content`, {
                                onChange: (e) => {
                                  console.log(e)
                                  const file = e.target.files?.[0];

                                  if (file) {
                                    handleFileChange(index, file);
                                  }
                                }
                              })}
                            />
                            <p className="absolute left-[20%] md:left-[37%] top-[25%] md:top-[45%] flex gap-2 -z-10 hover:text-emerald-900">
                              <ImageIcon />
                              Selecionar o Banner
                            </p>
                          </>
                        )}
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
                      <ImageIcon size={20} />
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
    </>
  );
}

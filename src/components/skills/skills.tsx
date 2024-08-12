import Image from 'next/image';
import skills from '@/../public/skillsBackground.png';
import nodeIco from '@/../public/NodeJsIco.svg'
import wordpressIco from '@/../public/WordpressIco.svg'
import reactIco from '@/../public/reactIco.svg'
import mysqlIco from '@/../public/MySQLIco.svg'
import nextIco from '@/../public/NextJsIco.svg'
import nestIco from '@/../public/nestJsIco.svg'

export default function Skills() {
  return (
    <section className="w-full min-h-[10rem] relative">
      <Image
        src={skills}
        alt="Skills Background"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none -z-10"
      />
      {/* CONTENT */}
      <div className="bg-[#010021]/70 flex flex-col gap-10 py-12">
        {/* TITLE */}
        <div className='flex-col flex gap-3 items-center'>
          <p className='text-[3rem] text-primary'>Habilidades</p>
          <div className='flex flex-row justify-center items-center'>
            <div className='h-4 w-4 bg-primary rounded-full'></div>
            <div className='w-[10rem] h-1 bg-primary'></div>
            <div className='h-4 w-4 bg-primary rounded-full'></div>
          </div>
        </div>
        {/* LANGUAGES */}
        <div className='w-full flex flex-col items-center gap-4'>
          <p className='text-white text-xl font-semibold'>Desenvolvimento Web:</p>
          <div className='flex flex-col md:flex-row gap-6'>
            <Image
              src={nodeIco}
              alt="Nodejs Background"
              className="w-[9rem] h-[9rem] rounded-full p-1 bg-white"
            />
            <Image
              src={wordpressIco}
              alt="Nodejs Background"
              className="w-[9rem] h-[9rem] rounded-full p-1 bg-white"
            />
            <Image
              src={reactIco}
              alt="Nodejs Background"
              className="w-[9rem] h-[9rem] rounded-full p-1 bg-white"
            />
            <Image
              src={mysqlIco}
              alt="Nodejs Background"
              className="w-[9rem] h-[9rem] object-cover rounded-full border-[0.25rem] border-white bg-white"
            />
          </div>
        </div>
        {/* FRAMEWORKS */}
        <div className='w-full flex flex-col items-center gap-4'>
          <p className='text-white text-xl font-semibold'>Frameworks:</p>
          <div className='flex flex-col md:flex-row gap-6'>
            <Image
              src={nextIco}
              alt="Nodejs Background"
              className="w-[9rem] h-[9rem] rounded-full p-1 bg-white"
            />
            <Image
              src={nestIco}
              alt="Nodejs Background"
              className="w-[9rem] h-[9rem] rounded-full p-1 bg-white"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

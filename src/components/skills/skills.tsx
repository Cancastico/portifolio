import Image from 'next/image';
import skills from '@/../public/skillsBackground.png';

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
      <div className="h-[38rem] bg-[#272117]/80 ">
        {/* TITLE */}
        <div className='flex-col flex gap-3 items-center'>
          <p className='text-[3rem] text-primary'>Habilidades</p>
          <div className='flex flex-row justify-center items-center'>
            <div className='h-4 w-4 bg-primary rounded-full'></div>
            <div className='w-[10rem] h-1 bg-primary'></div>
            <div className='h-4 w-4 bg-primary rounded-full'></div>
          </div>
        </div>
        {/* SKILLS */}
        <div>
          <p>Desenvolvimento Web:</p>
          <div></div>
        </div>
      </div>
    </section>
  );
}

"use client"
import About from '@/components/aboutme/aboutme';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Projects from '@/components/projects/project';
import Skills from '@/components/skills/skills';
import { ThemeProvider } from '@/contexts/theme';
import { useEffect, useState } from 'react';

export default function Home() {
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);



  return (
    <ThemeProvider>
      <div className={` absolute  w-full h-full flex justify-center items-center transition-all duration-500 bg-background-primary dark:bg-background-dark ${fade ? 'opacity-0 -z-10' : 'opacity-100 z-10'}`}>
        <iframe className="w-36 h-36" src="https://lottie.host/embed/70be1c08-ce15-46f5-8080-7778706b658a/JIyr1XWD2a.json"></iframe>
      </div>
      <main className={`w-full !max-w-[2560px] scroll-smooth  mx-auto ${!fade ? 'opacity-0' : 'opacity-'}`} style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />

      </main>
    </ThemeProvider>
  );
}

"use client"
import About from '@/components/aboutme/aboutme';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Projects from '@/components/projects/project';
import Skills from '@/components/skills/skills';
import { ThemeProvider } from '@/contexts/theme';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);



  return (
    <ThemeProvider>
      <div className={` absolute z-10 w-full h-full flex justify-center items-center transition-opacity duration-1000 bg-background-primary dark:bg-background-dark ${fade ? 'opacity-0' : 'opacity-100'}`}>
        <DotLottieReact
          className="w-36 h-36"
          src='https://lottie.host/70be1c08-ce15-46f5-8080-7778706b658a/JIyr1XWD2a.json'
          loop
          autoplay
        />
      </div>
      <main className={`w-full ${!fade?'opacity-0':'opacity-'}`}>
        <Header />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

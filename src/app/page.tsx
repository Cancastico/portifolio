"use client"
import About from '@/components/aboutme/aboutme';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Projects from '@/components/projects/project';
import Skills from '@/components/skills/skills';
import { ThemeProvider } from '@/contexts/theme';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="w-full">
        <Header />
        <Skills />
        <Projects />
        <About />
        <Footer></Footer>
      </main>
    </ThemeProvider>
  );
}

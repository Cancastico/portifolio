"use client"
import About from '@/components/aboutme/aboutme';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Navbar from '@/components/navbar/navbar';
import Projects from '@/components/projects/project';
import Skills from '@/components/skills/skills';

export default function Home() {

  return (
    <>
      <main className={`w-full !max-w-[2560px] scroll-smooth  mx-auto`} style={{ scrollBehavior: 'smooth' }}>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />

      </main>
    </>
  );
}

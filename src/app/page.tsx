import Header from '@/components/header/header';
import Projects from '@/components/projects/project';
import Skills from '@/components/skills/skills';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Skills />
      <Projects />
    </main>
  );
}

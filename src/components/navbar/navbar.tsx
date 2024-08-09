import { Ubuntu } from "next/font/google";
export default function Navbar() {
  const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400","500", "700"], // Especifique os pesos que você deseja usar
  });

  return (
    <header className="flex flex-row justify-between items-center w-full px-[10%] h-20 bg-background-primary">

      <div className="flex flex-row gap-1">
        <span className="font-semibold text-primary text-lg">{`<C/>`}</span>
        <p className="font-semibold text-lg">Cancastico</p>
      </div>

      <nav className="flex flex-row gap-20">
        <ul className="flex flex-row gap-10">
          <li>
            <a className="text-black hover:text-primary hover:underline font-medium transition-all duration-200" href="#">Home</a>
          </li>
          <li>
            <a className="text-black hover:text-primary hover:underline font-medium transition-all duration-100" href="#">Blog</a>
          </li>
          <li>
            <a className="text-black hover:text-primary hover:underline font-medium transition-all duration-100" href="#">Projetos</a>
          </li>
          <li>
            <a className="text-black hover:text-primary hover:underline font-medium transition-all duration-100" href="#">Contato</a>
          </li>
        </ul>

        <ul className="flex flex-row gap-10">
          <li>
            <a className={`text-sm ${ubuntu.className} text-black hover:text-primary hover:underline font-medium transition-all duration-100`} href="#">Discord</a>
          </li>
          <li>
            <a className={`text-sm ${ubuntu.className} text-black hover:text-primary hover:underline font-medium transition-all duration-100`} href="#">Github</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

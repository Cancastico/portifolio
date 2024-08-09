import { MailIcon } from "lucide-react";
import Navbar from "../navbar/navbar";

export default function Header() {
    return (
        <div className="flex flex-col w-full">
            <Navbar></Navbar>
            <header className="flex flex-col items-center">
                {/* TITLE */}
                <div>
                    <p>Programador</p>
                </div>
                {/* CONTAINER */}
                <div>
                    {/* CARD SECTION */}
                    <div>
                        {/* PERSONAL CARD */}
                        <div className="border-primary border-2 border-b-0 border-r-0">
                            <div className="border-black border-2">

                            </div>
                        </div>
                    </div>
                    {/* CONTENT SECTION */}
                    <div>
                        <div className="text-3xl font-semibold">
                            <p>Olá</p>
                            <p>Sou o <span className="text-primary">Avelino</span>,</p>
                            <p>Programador Full-Stack</p>
                        </div>
                        <div>
                            <p>
                                Te ajudo a colocar suas ideias na web. <br />
                                Você achou o programador que fará suas ideias se tornarem realidade!
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <a href="#" className="font-">Vamos Conversar</a>
                            <a href="" className="p-2 bg-yellow-950 hover:bg-yellow-950/80 rounded-full text-primary-foreground transition-all"><MailIcon></MailIcon></a>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}
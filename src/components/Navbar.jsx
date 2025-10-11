import { useState, useEffect } from "react";
import DatImag from "./dat";

const Navbar = () => {

    const [active, setActive] = useState(false);

    useEffect (() =>{
        const handleScroll = () => {
            if (window.scroll > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className="navbar py-7 flex items-center justify-between" id="inicio">
        <div className="logo">
            <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent
            md:text-white flex items-center">Portafolio
            <img src={DatImag.LogoImage} alt="" className="w-12 mx-6 rounded-md"/>
            </h1>
        </div>
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0
        md:opacity-100 bg-white/30  backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
        md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : 
        "top-18 opacity-100"}`}>
            <li>
                <a href="#acercade" className=" sm:text-1g text-base font-medium">Perfil</a>
            </li>
            <li>
                <a href="#herramientas" className=" sm:text-1g text-base font-medium">Skills</a>
            </li>
            <li>
                <a href="#project" className=" sm:text-1g text-base font-medium">Proyectos</a>
            </li>
            <li>
                <a href="#contact" className=" sm:text-1g text-base font-medium">Contacto</a>
            </li>
        </ul>
    </div>;
};

export default Navbar;




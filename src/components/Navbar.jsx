import { useState, useEffect } from "react";
import DatImag from "./dat";
import Perfil from "./perfil";
import Skill from "./Skills";
import Project from "./projects";
import Contact from "./contact";


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
            <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent
            md:text-white flex items-center">Portafolio
            <img src={DatImag.LogoImage} alt="" className="w-12 mx-6 rounded-md"/>
            </h1>
        </div>
        <ul className={`menu flex items-center sm:gap-10 gap-12 md:gap-13 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-1
        md:opacity-100 bg-white/30  backdrop-blur-md p-4 md:rounded-br-2xl md:rounded-bl-2xl mt-146 h-23 w-full md:mt-0 md:h-0 md:w-100
        md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : 
        "top-21 opacity-100 border-t border-gray-600"}`}>
            <li>
                <a href="#acercade">
                <img src={Perfil.PerfilImage} alt="" className="w-10 h-10" />
                </a>
                <a href="#acercade" className=" sm:text-1g text-base font-medium">Perfil</a>
            </li>
            <li>
                <a href="#herramientas">
                <img src={Skill.SkillImage} alt="" className="w-10 h-10" />
                </a>
                <a href="#herramientas" className=" sm:text-1g text-base font-medium">Skills</a>
            </li>
            <li>
                <a href="#project">
                <img src={Project.ProjectImage} alt="" className="w-10 h-10 ml-5 md:ml-4" />
                </a>
                <a href="#project" className=" sm:text-1g text-base font-medium">Proyectos</a>
            </li>
            <li>
                <a href="#contact">
                <img src={Contact.ContactImage} alt="" className="w-10 h-10 ml-4 md:ml-4" />
                </a>
                <a href="#contact" className=" sm:text-1g text-base font-medium">Contacto</a>
            </li>
        </ul>
        
    </div>;
};

export default Navbar;




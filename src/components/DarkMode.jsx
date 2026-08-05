import React, { useState, useEffect } from "react";

// Importa directamente las imágenes para que Vite/React procesen bien la ruta
import moodLuzImg from "/assets/moodluz.webp";
import moodDarkImg from "/assets/mooddark.webp";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative flex items-center justify-center w-19 h-11 cursor-pointer shrink-0 -ml-120">
      {/* Ícono de Modo Claro */}
      <img
        src={moodLuzImg}
        alt="Modo Claro"
        onClick={toggleTheme}
        className={`w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-opacity duration-300 absolute ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* Ícono de Modo Oscuro */}
      <img
        src={moodDarkImg}
        alt="Modo Oscuro"
        onClick={toggleTheme}
        className={`w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-opacity duration-300 absolute ${
          theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default DarkMode;
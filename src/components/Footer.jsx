const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center ">
            <h1 className="text-2xl font-bold">Portafolio</h1>
            <div className="flex gap-9">
                <a href="#inicio">Página de Inicio</a>
                <a href="#acercade">Acerca de</a>
                <a href="#project">Proyectos</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://github.com/KiwiOwnDaniel27" target="_blank">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/daniel-quiguango-delgado-53b52a262/" target="_blank">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="https://wa.me/+593984611893" target="_blank">
                    <i className="ri-whatsapp-fill ri-2x"></i>
                </a>
                <a href="https://www.tiktok.com/@tu.saludboss.salu?_t=ZM-90Q2pLOzbC4&_r=1" target="_blank">
                    <i className="ri-tiktok-fill ri-2x"></i>
                </a>
            </div>
        </div>
    );
};


export default Footer;
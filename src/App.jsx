import DataImage, { listProyek } from "./data";
import DatImag from "./components/dat";
import { listTools } from './data';
import { listCourses } from './data';
import Slider from "react-slick";
import { motion } from "motion/react";
import * as variants from './motion/animation';
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlides(1);
      } else if (width < 1024) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <motion.div
      variants={variants.staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
    >
      <>
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 -mt-9">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-green-600 dark:bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md load" loading="lazy" />
              <q>Cv Código de perseverancia. 🦉</q>
            </div>

            <h1 className="text-4xl/tight font-bold mb-6">Hola, Soy Daniel Quiguango</h1>

            <p className="text-base/loose bm-9 opacity-100 ">
              Tengo interés en el areá de las tecnologías de la información, especificamente en el campo de
              programación y en el diseño Ux, especialmente en la realización de proyectos de páginas web
              para pequeñas y grandes empresas, llevo de experiencia 3 años en este campo.
              <br />
              Mis próximos proyectos serán Apps creadas para cubrir necesidades de mis futuros clientes potenciales.
              <br />
              Tengo muchas ganas y expectativas de aprender y adquirir más conocimientos en este gran mundo
              de las nuevas tecnologías de la información.
            </p>
            <br />
            <div className="flex items-center sm:gap-9 gap-12">
              <a href="https://drive.google.com/file/d/1ndaRxgsIhcNWOXj-KKY9i0MQphTJic1n/view?usp=sharing" target="_blank" rel="noreferrer" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Descargar CV <i className="ri-download-line ri-lg"></i> </a>
              <a href="#project" className="bg-green-700 p-4 rounded-2xl hover:bg-green-600">Ver Proyectos <i className="ri-arrow-down-line ri-lg"></i> </a>
            </div>

          </div>
          <img src={DataImage.HeroImage} alt="Hero Image" className="rounded-b-full w-96 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
        </div>

        <div className="about mt-32 py-10" id="acercade">
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-green-600 dark:bg-zinc-800 rounded-lg"
            data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <img src={DatImag.LogoImage} alt="" className="w-23 rounded-md sm:hidden" loading="lazy" />
            <p className="text-base/loose mb-10">Hola, me presento, Soy Daniel Quiguango, desarrollador web Jr especializado en diseño UX/UI
              y en creación de productos digitales. Estoy muy consiente que el diseño y la funcionalidad de una
              página web o App deben ir muy de la mano con la experiencia del Usuario, y que está sea óptima,
              para que cada proyecto desarrollado no solo sea atractivo si no que cumpla con las expectativas de
              un servicio de calidad y lo más importante que sea funcional.
            </p>

            <div className="flex items-center justify-between">
              <img src={DatImag.LogoImage} alt="" className="w-23 rounded-md sm:block hidden" loading="lazy" />
              <div className="flex items-center gap-9">
                <div>
                  <h1 className="text-4xl mb-1">
                    11<span className="text-violet-500">+</span>
                  </h1>
                  <p>Proyectos</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    15 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Skills</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-32" id="herramientas">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"
              data-aos-once="true">
              Herramientas Utilizadas</h1>
            <p className="xl:w-2/5 lg:w-2/4 md: w-2/3 sm:w-3/4 text-base/loose opacity-50" data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Aquí hay algunas herramientas
              que utilizo para crear sitios web y diseños de Apps</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

              {listTools.map((tool) => (
                <div className=" flex items-center gap-2 p-3 border bg-green-600 dark:bg-zinc-800 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                  <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 grouphover:bg-zinc-900" />
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-50">{tool.ket}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        <div className="proyek mt-0 py-10" id="project">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000"
            data-aos-once="true">
            Proyectos</h1>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="300" data-aos-once="true">
            Aquí hay algunos proyectos que he realizado. </p>
            
          <div className="proyek-box mt-14">
            {/* CORRECCIÓN AQUÍ: Se cierra la etiqueta de apertura y se envuelve con Slider */}
            <Slider {...settings}>
              {listProyek.map((proyek) => (
                <div key={proyek.id} className="p-3">
                  <div className="p-6 bg-green-600 dark:bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay={proyek.dad} data-aos-once="true">
                    <img src={proyek.gambar} alt=" Proyect Image" loading="lazy" />
                    <div>
                      <h1 className="text-2xl font-bold my-4">
                        {proyek.nama}
                      </h1>
                      <p className="text-base/loose mb-4">
                        {proyek.desk}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {proyek.tools.map((tool, index) => (
                          <p className="py-1 px-3 border border-white bg-green-600 dark:border-zinc-500 dark:bg-zinc-600  rounded-md font-semibold" key={index}>{tool}</p>
                        ))}
                      </div>
                      <div className="mt-8 text-center">
                        <a href={proyek.link} target="_blank" rel="noreferrer" className=" text-white bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Website</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="courses mt-0 py-10" id="certificados">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Cursos y Certificaciones
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Adjunto algunos cursos que he realizado con certificación.{" "}
          </p>

          <div className="courses-box mt-14">
            {/* Se envuelve con el carrusel Slider */}
            <Slider {...settings}>
              {listCourses.map((courses) => (
                <div key={courses.id} className="p-3">
                  <div
                    className="p-6 bg-green-600 dark:bg-zinc-800 rounded-md"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={courses.dad}
                    data-aos-once="true"
                  >
                    <img src={courses.gambar} alt=" Proyect Image" loading="lazy" />
                    <div>
                      <h1 className="text-2xl font-bold my-4">{courses.nama}</h1>
                      <p className="text-base/loose mb-4">{courses.desk}</p>
                      <div className="flex flex-wrap gap-3">
                        {courses.tools.map((tool, index) => (
                          <p
                            className="py-1 px-3 border border-white bg-green-600 dark:border-zinc-500 dark:bg-zinc-600 rounded-md font-semibold"
                            key={index}
                          >
                            {tool}
                          </p>
                        ))}
                      </div>
                      <div className="mt-8 text-center">
                        <a
                          href={courses.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                        >
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="Contact mt-0 sm:p-10 p-0" id="contact">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="500" data-aos-once="true">
            Contacto</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="500" data-aos-once="true"> Conéctate Conmigo </p>

          <form action="https://formsubmit.co/daquiguango@espe.edu.ec" method="POST"
            className="bg-green-600 dark:bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nombre Completo</label>
                <input type="text" name="Nombre" placeholder="Introduce tu nombre..." className="border border-black dark:border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="Email" placeholder="Introduce tu correo..." className="border border-black dark:border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">Mensaje:</label>
                <textarea name="Mensaje" id="pesan" cols="45" rows="7" placeholder="Deja tu mensaje..."
                  className="border border-black dark:border-zinc-500 p-2 rounded-md" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="text-white bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-black dark:border-zinc-500 hover:bg-violet-600">Enviar Mensaje</button>
              </div>
            </div>
          </form>

        </div>
      </>
    </motion.div>
  );
}

export default App;
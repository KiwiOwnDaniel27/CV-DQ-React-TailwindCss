import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      hero_motto: "Cv Código de perseverancia. 🦉",
      hero_greeting: "Hola, Soy Daniel Quiguango",
      hero_bio_p1: "Tengo interés en el areá de las tecnologías de la información, especificamente en el campo de programación y en el diseño Ux, especialmente en la realización de proyectos de páginas web para pequeñas y grandes empresas, llevo de experiencia 3 años en este campo.",
      hero_bio_p2: "Mis próximos proyectos serán Apps creadas para cubrir necesidades de mis futuros clientes potenciales.",
      hero_bio_p3: "Tengo muchas ganas y expectativas de aprender y adquirir más conocimientos en este gran mundo de las nuevas tecnologías de la información.",
      btn_download_cv: "Descargar CV",
      btn_view_projects: "Ver Proyectos",
      about_text: "Hola, me presento, Soy Daniel Quiguango, desarrollador web Jr especializado en diseño UX/UI y en creación de productos digitales. Estoy muy consiente que el diseño y la funcionalidad de una página web o App deben ir muy de la mano con la experiencia del Usuario, y que está sea óptima, para que cada proyecto desarrollado no solo sea atractivo si no que cumpla con las expectativas de un servicio de calidad y lo más importante que sea funcional.",
      stat_projects: "Proyectos",
      stat_skills: "Skills",
      tools_title: "Herramientas Utilizadas",
      tools_subtitle: "Aquí hay algunas herramientas que utilizo para crear sitios web y diseños de Apps",
      projects_title: "Proyectos",
      projects_subtitle: "Aquí hay algunos proyectos que he realizado.",
      btn_website: "Website",
      courses_title: "Cursos y Certificaciones",
      courses_subtitle: "Adjunto algunos cursos que he realizado con certificación.",
      contact_title: "Contacto",
      contact_subtitle: "Conéctate Conmigo",
      form_name_label: "Nombre Completo",
      form_name_ph: "Introduce tu nombre...",
      form_email_label: "Email",
      form_email_ph: "Introduce tu correo...",
      form_msg_label: "Mensaje:",
      form_msg_ph: "Deja tu mensaje...",
      form_submit_btn: "Enviar Mensaje"
    }
  },
  en: {
    translation: {
      hero_motto: "Cv Code of perseverance. 🦉",
      hero_greeting: "Hi, I'm Daniel Quiguango",
      hero_bio_p1: "I am interested in Information Technology, specifically in programming and UX design, especially in web development projects for small and large businesses, with 3 years of experience in this field.",
      hero_bio_p2: "My upcoming projects will be mobile Apps created to cover the needs of my potential future clients.",
      hero_bio_p3: "I am eager and looking forward to learning and acquiring more knowledge in this great world of new information technologies.",
      btn_download_cv: "Download CV",
      btn_view_projects: "View Projects",
      about_text: "Hello, let me introduce myself, I'm Daniel Quiguango, a Jr. Web Developer specialized in UX/UI design and digital product creation. I am well aware that the design and functionality of a website or App must go hand in hand with the user experience, making sure it is optimal so that every developed project is not only attractive but also meets high quality expectations and, most importantly, is fully functional.",
      stat_projects: "Projects",
      stat_skills: "Skills",
      tools_title: "Tools Used",
      tools_subtitle: "Here are some tools I use to build websites and App designs",
      projects_title: "Projects",
      projects_subtitle: "Here are some projects I have worked on.",
      btn_website: "Website",
      courses_title: "Courses & Certifications",
      courses_subtitle: "Here are some certified courses I have completed.",
      contact_title: "Contact",
      contact_subtitle: "Connect with Me",
      form_name_label: "Full Name",
      form_name_ph: "Enter your name...",
      form_email_label: "Email",
      form_email_ph: "Enter your email...",
      form_msg_label: "Message:",
      form_msg_ph: "Leave your message...",
      form_submit_btn: "Send Message"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
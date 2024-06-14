import { StaticImageData } from 'next/image';
import { FaGlobe } from 'react-icons/fa'; 
import al1 from "@/public/al1.png";
import al2 from "@/public/al2.png";
import al3 from "@/public/al3.png";
import h1 from "@/public/h1.png";
import hs from "@/public/hs.png";
import hc from "@/public/hc.png";
import hc2 from "@/public/hc2.png";
import hc3 from "@/public/hc3.png";


interface ProjectData {
  id: number;
  src: StaticImageData[];
  title: string;
  description: string;
  link: string; 
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    src: [h1],
    title: "Holitrends",
    description: "E2E testing para el sistema CRM Holitrends. Utilizando Cypress.io, se aseguró el correcto funcionamiento del sistema, desde la interfaz de usuario hasta la gestión de datos mejorando la eficiencia del equipo de desarrollo y garantizando una experiencia fluida para los usuarios finales.",
    link: "https://holitrends.com/"
  },
  {
    id: 2,
    src: [hc, hc2, hc3],
    title: "Hpy Camper",
    description: "Sitio de reservas de campamentos en Suecia. Realicé el diseño y la navegación de las pantallas, para la versión web y móvil. Utilizando Figma, desarrollé interfaces intuitivas y estéticamente agradables que garantizan una experiencia de usuario óptima en todas las plataformas y asegurando una navegación fluida y accesible mediante de un enfoque centrado en el usuario.",
    link: "https://hpycamper.se/"
  },
  {
    id: 3,
    src: [al1, al2, al3],
    title: "Alize 2.0",
    description: "Plataforma Alize, dedicada al seguimiento de asistencia técnica y garantias. Rediseño total utilizando Figma que incluyó pantalla, animación y comportamiento centrado en los técnicos como usuarios finales.",
    link: "https://alize.es/en/plataforma-alize-en/" 
  },
  {
    id: 4,
    src: [hs],
    title: "Hypervisoul",
    description: "Diseño de pantalla para una aplicación de monitoreo de tráfico en tiempo real para escritorio. Este proyecto implicó la creación de dos pantallas como parte de un prototipo, representando mi primer trabajo como desarrolladora. El desafío fue crear algo completamente nuevo que no existía previamente.",
    link: "https://www.hypervisoul.com/es" 
  },

];

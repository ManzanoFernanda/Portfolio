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
import celebria from "@/public/celebria.jpeg";


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
    src: [celebria],
    title: "Celebria",
    description: "Design and frontend development of a web platform for event management using React.js, Tailwind CSS and JavaScript, implementing reusable components, optimizing application performance and integrating RESTful APIs.. The platform includes a calendar system, email and mobile notifications, and a database for uploading photos.The project was deployed using Vercel, ensuring mobile adaptation through responsive web and smooth user experiences.",
    link: ""
  },
  {
    id: 2,
    src: [h1],
    title: "Holitrends",
    description: "I conducted end-to-end testing for a CRM system used by travel agencies such as Despegar and Al Mundo, ensuring smooth operation from the user interface to data management. Technologies: Cypress.io, JavaScript.",
    link: "https://holitrends.com/"
  },
  {
    id: 3,
    src: [hc, hc2, hc3],
    title: "Hpy Camper",
    description: "Designed and developed frontend screens for a camping booking platform in Sweden. This project allowed me to learn a new programming language in a short period of time and in a non-educational environment which was a challenge since I had to meet the deadlines of the team I was part of. I focused on creating intuitive and accessible interfaces. Technologies: Figma, React.js, Tailwind CSS, Next.js.",
    link: "https://hpycamper.se/"
  },
  {
    id: 4,
    src: [al1, al2, al3],
    title: "Alize 2.0",
    description: "Initially, I assumed the role of designer, where I worked directly with the client, who sought a modern and agile design. The project involved a complete redesign of a web platform for technical assistance and warranty tracking, focusing on the company's employees as the end users. I also participated in the frontend development of some screens within the platform, following guidelines previously defined by the team. Technologies: C# .NET, Blazor, HTML5, CSS3, Figma.",
    link: "https://alize.es/en/plataforma-alize-en/" 
  },
  {
    id: 5,
    src: [hs],
    title: "Hypervisoul",
    description: "I designed the website for a functional prototype of a real-time traffic monitoring application. This was a challenge as I had to work from sketches, and the final result was intended to attract investors to support the project. Today, the project is co-financed by the European Union and the Spanish government. Technologies: Figma.",
    link: "https://www.hypervisoul.com/es" 
  },

];

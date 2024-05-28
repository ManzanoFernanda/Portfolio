import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const LANGUAGES_SKILL = [
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C#",
    image: "CH.png",
    width: 100,
    height: 100,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Blazor",
    image: "blazor.png",
    width:100,
    height: 100,
  },
  {
    skill_name: "React",
    image: "react.png",
    width:100,
    height: 100,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width:100,
    height: 100,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width:100,
    height: 100,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width:100,
    height: 100,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width:100,
    height: 100,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "ASP.NET",
    image: "asp.png",
    width:100,
    height: 100,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width:100,
    height: 100,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width:100,
    height: 100,
  },
] as const;

export const DATABASE_SKILL = [
  {
    skill_name: "SQL Server",
    image: "sqlservr.png",
    width: 120,
    height: 120,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 100,
    height: 100,
  },
] as const;

export const AUTOMATION_SKILL = [
  {
    skill_name: "Jenkins",
    image: "jenkins.png",
    width: 140,
    height: 140,
  },
  {
    skill_name: "Ansible",
    image: "ansible.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Vagrant",
    image: "vagrant.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    image: "kubernetes.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "SonarQube",
    image: "sonarqube.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "PowerBI",
    image: "powerbi.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "Cypress.io",
    image: "cypress.png",
    width: 100,
    height: 100,
  },
] as const;

export const DESIGN_TOOL_SKILL = [

  {
    skill_name: "Photoshop",
    image: "photoshop.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Illustrator",
    image: "illustrator.png",
    width: 70,
    height: 70,
  },

] as const;

export const AGILE_METHODOLOGY_SKILL = [
  {
    skill_name: "Jira",
    image: "jira.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Trello",
    image: "trello.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Clickup",
    image: "clickup.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

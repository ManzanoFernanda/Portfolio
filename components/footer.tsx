import Link from "next/link";
import MainLayout from "./main-layout";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-1 border-solid border-dark font-medium text-sm md:text-lg fixed bottom-0 left-0 z-10 py-4">
      <MainLayout className="py-2 px-2 md:py-1 flex items-center justify-center text-center">
        <span style={{ fontFamily: 'Arial' }}>&copy; {currentYear} Daniela Manzano</span>
      </MainLayout>
    </footer>
  );
};

export default Footer;

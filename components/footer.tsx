import Link from "next/link";
import MainLayout from "./main-layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-sm ld:text-lg dark:text-light dark:border-light fixed bottom-0 left-0 bg-yellow">
      <MainLayout className="py-4 pb-20 md:py-2 flex items-center justify-center">
        <span>&copy; {new Date().getFullYear()}</span>
      </MainLayout>
    </footer>
  );
};

export default Footer;

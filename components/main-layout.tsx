"use client";

interface MainProps {
  children: React.ReactNode;
  className: string;
}

const MainLayout = ({ children, className }: MainProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-cblue px-8  sm:px-12 lg:px-24 xl:px-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;

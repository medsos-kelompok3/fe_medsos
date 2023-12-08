import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import NavbarDekstop from "./navbar-dekstop";

interface Props {
  children: ReactNode;
}

const LayoutDekstop = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="hidden lg:block">
        <div className="flex flex-row justify-between gap-5 container font-roboto">
          <div className="w-[300px] h-full min-[1280px]:w-[500px]"></div>
          <NavbarDekstop />
          <div className="container mt-5">
            {children}
            <Toaster/>
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LayoutDekstop;

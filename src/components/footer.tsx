import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <div>
      <footer className="w-full fixed bottom-0 bg-white/90 dark:bg-black/90 z-50 lg:hidden">
        <div className="mx-auto flex container items-center justify-between px-6 py-2 md:pl-10 md:pr-10 md:pt-5 md:pb-5">
          <Link to="/home">
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
              <HomeIcon size={35} />
              <p>Home</p>
            </div>
          </Link>
          <Link to="/my-pokemon">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>My Profile</p>
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer">
            <ModeToggle />
            <p>Theme</p>
          </div>
        </div>
      </footer>
      <footer className="w-full min-h-[20vh] bg-white dark:bg-black items-center hidden lg:block">
        <div className="container p-6 h-full">
          <p>Copyright &copy;2023 Circle. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToken } from "@/utils/context/token";
import { useToast } from "./ui/use-toast";

const Footer = () => {
  const { token, changeToken, changeIdUser } = useToken();
  const { toast } = useToast();

  function handleLogout() {
    changeToken();
    changeIdUser();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <div>
      <footer className="w-full fixed bottom-0 bg-white/90 dark:bg-black/90 z-50 lg:hidden">
        <div className="mx-auto flex container items-center justify-between px-6 py-2 md:pl-10 md:pr-10 md:pt-5 md:pb-5">
          <Link to="/">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <HomeIcon size={37} />
              <p>Home</p>
            </div>
          </Link>

          <div className="flex flex-col items-center cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Welcome</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {token ? (
                  <Link to="/user/1/profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                ) : (
                  <></>
                )}
                <DropdownMenuSeparator />
                {token ? (
                  <DropdownMenuItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <Link to="/login">Login</Link>{" "}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/register">Register</Link>{" "}
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <p>My Profile</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <ModeToggle />
            <p>Theme</p>
          </div>
        </div>
      </footer>
      <footer className="w-full min-h-[20vh] bg-white dark:bg-black hidden lg:block">
        <div className="container flex justify-center items-center p-6 h-full mt-10">
          <p>Copyright &copy;2023 Circle. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

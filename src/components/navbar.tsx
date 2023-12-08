import logoCircle from "@/assets/logocircle2.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <nav className="mx-auto flex justify-center items-center p-2">
        <Link to="/">
          <img
            src={logoCircle}
            alt="logo"
            className="w-[100px] cursor-pointer mt-1"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

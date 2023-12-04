import logoCircle from "@/assets/logocircle2.svg";
import Search from "@/assets/search.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <nav className="mx-auto flex flex-row justify-between gap-3 p-5 md:p-10">
        <Link to="/home">
          <img
            src={logoCircle}
            alt="logo"
            className="w-[70px] cursor-pointer mt-1"
          />
        </Link>
        <img
          src={Search}
          alt="search"
          className="absolute w-5 ms-[75px] mt-[5px] md:ms-[85px]"
        />
        <input
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="off"
          aria-label="Search User"
          className="flex pl-8 h-8 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </nav>
    </header>
  );
};

export default Navbar;

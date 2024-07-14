import { Link } from "@tanstack/react-router";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full font-sora max-w-screen-xl h-20 bg-white border border-b mx-auto px-8 flex items-center justify-between top-0 z-50 sticky">
      <Link
        to="/"
        className="font-sora flex gap-x-2 items-center font-semibold text-xl"
      >
        <img src="/logo.svg" alt="Logo" />
        Kiys
      </Link>
      <nav className="flex gap-x-2">
        <ul className="flex gap-x-8 font-sora font-medium">
          <Link to="/keyboard">Keyboard</Link>
          <Link to="/mouse">Mouse</Link>
          <Link to="/headphone">Headphone</Link>
          <Link to="/accessories">Accesories</Link>
        </ul>
      </nav>
      <div className="flex gap-x-4">
        <Search />
        <ShoppingCart />

        <Link to="/profile">
          <CircleUserRound />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

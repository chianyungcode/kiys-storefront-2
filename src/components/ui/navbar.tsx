import { Link, useLocation } from "@tanstack/react-router";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

import { navbarItem } from "@/constant/navbar-item";
import { useAuth } from "@/context/auth-provider";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { pathname } = useLocation();
  const { accessToken } = useAuth();

  return (
    <header className="w-full font-sora max-w-screen-xl h-20 bg-white mx-auto px-8 flex items-center justify-between top-0 z-50 sticky">
      <Link
        to="/"
        className="font-sora flex gap-x-2 items-center font-semibold text-xl"
      >
        <img src="/logo.svg" alt="Logo" />
        Kiys
      </Link>
      <nav className="flex gap-x-2">
        <ul className="flex gap-x-8 font-sora font-medium">
          {navbarItem.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                pathname === `${item.href}`
                  ? "font-semibold underline"
                  : "font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-4">
        <Search />
        <Link to="/order">
          <ShoppingCart />
        </Link>
        {accessToken ? (
          <p>Logged in</p>
        ) : (
          <Link to="/login">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;

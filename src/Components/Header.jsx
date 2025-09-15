import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { myContext } from "../Context/ContextProvider";

const Header = () => {

  const { navbarOpen, setNavbarOpen, navLinks } = useContext(myContext);

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      {/* Navbar Wrapper */}
      <div className="mx-4 md:mx-8 rounded-full bg-black/30 backdrop-blur-md shadow-lg shadow-white/20">
        <nav className="px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Anish&nbsp;&nbsp;Fathima&nbsp;&nbsp;S
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-4 py-2 transition rounded-4xl font-medium text-zinc-100 hover:text-black hover:bg-white hover:rounded-4xl "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mx-4 md:mx-8 mt-2 rounded-2xl bg-black/90 backdrop-blur-lg border border-white/10 shadow-lg shadow-white/10 transform transition-all duration-300 ease-in-out origin-top ${
          navbarOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-3 py-2 text-center text-lg transition rounded-4xl font-medium text-zinc-100 hover:text-black hover:bg-white hover:rounded-4xl"
              onClick={() => setNavbarOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
// import React, { useContext } from "react";
// import { Menu, X } from "lucide-react";
// import { myContext } from "../Context/ContextProvider";

// const Header = () => {

//   const { navbarOpen, setNavbarOpen, navLinks } = useContext(myContext);

//   return (
//     <header className="fixed top-5 w-full z-50">
//       {/* Navbar Wrapper */}
//       <div className="mx-4 md:mx-8 rounded-full bg-black/30 backdrop-blur-md shadow-lg shadow-white/20">
//         <nav className="px-4 flex items-center justify-between h-16">
//           {/* Logo */}
//           <a
//             href="#home"
//             className="text-3xl font-bold tracking-tight"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             Anish&nbsp;&nbsp;Fathima&nbsp;&nbsp;S
//           </a>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-3">
//             {navLinks.map((link) => (
//               <a
//                 key={link.id}
//                 href={`#${link.id}`}
//                 className="px-4 py-2 transition rounded-4xl font-medium text-zinc-100 hover:text-black hover:bg-white hover:rounded-4xl "
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="lg:hidden text-white"
//             onClick={() => setNavbarOpen(!navbarOpen)}
//           >
//             {navbarOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden mx-4 md:mx-8 mt-2 rounded-2xl bg-black/90 backdrop-blur-lg border border-white/10 shadow-lg shadow-white/10 transform transition-all duration-300 ease-in-out origin-top ${
//           navbarOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col space-y-4 p-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.id}
//               href={`#${link.id}`}
//               className="px-3 py-2 text-center text-lg transition rounded-4xl font-medium text-zinc-100 hover:text-black hover:bg-white hover:rounded-4xl"
//               onClick={() => setNavbarOpen(false)}
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useContext, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { myContext } from "../Context/ContextProvider";

const Header = () => {
  const { navbarOpen, setNavbarOpen, navLinks } = useContext(myContext);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll listener to detect active section
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 100; // adjust offset
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <header className="fixed top-5 w-full z-50">
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
          <div className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 relative font-medium text-zinc-100 transition-all duration-300 ${
                  activeSection === link.id
                    ? "after:absolute after:left-0 after:bottom-0 after:w-20 text-center after:h-0.5 after:bg-white after:rounded-full after:transition-all after:duration-300"
                    : "after:w-0"
                } hover:text-black hover:bg-white hover:rounded-4xl`}
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
              className={`px-3 py-2 text-center text-lg font-medium text-zinc-100 transition-all duration-300 ${
                activeSection === link.id
                  ? "border-b-2 border-white"
                  : "border-b-0"
              } hover:text-black hover:bg-white hover:rounded-4xl`}
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
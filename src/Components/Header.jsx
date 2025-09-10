// import React, { useContext, useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { myContext } from "../Context/ContextProvider";

// const Header = () => {
//   const { navbarOpen, setNavbarOpen } = useContext(myContext);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section[id]");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 } 
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => sections.forEach((section) => observer.unobserve(section));
//   }, []);

//   const navLinks = [
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "education", label: "Education" },
//     { id: "projects", label: "Projects" },
//     { id: "certificates", label: "Certificates" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <header className="fixed top-4 left-0 w-full z-50">
//       {/* Navbar Wrapper */}
//       <div className="mx-4 md:mx-8 rounded-full bg-black/30 backdrop-blur-md shadow-lg shadow-white/40">
//         <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
//           {/* Logo / Brand */}
//           <a
//             href="#home"
//             className="text-3xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             Anis Fathima
//           </a>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navLinks.map((link) => (
//               <a
//                 key={link.id}
//                 href={`#${link.id}`}
//                 className={`px-3 py-1 rounded-full transition 
//                   ${
//                     activeSection === link.id
//                       ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-md"
//                       : "text-zinc-300 hover:text-white"
//                   }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Hamburger Button */}
//           <button
//             className="lg:hidden text-zinc-300 hover:text-white"
//             onClick={() => setNavbarOpen(!navbarOpen)}
//           >
//             {navbarOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Menu Dropdown */}
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
//               className={`px-3 py-2 rounded-full text-center transition
//                 ${
//                   activeSection === link.id
//                     ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-md"
//                     : "text-zinc-300 hover:text-white"
//                 }`}
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
  const { navbarOpen, setNavbarOpen } = useContext(myContext);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 👈 catches smaller sections like projects
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      {/* Navbar Wrapper */}
      <div className="mx-4 md:mx-8 rounded-full bg-black/30 backdrop-blur-md shadow-lg shadow-white/40">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Anis Fathima
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-full transition font-medium ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-md"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-zinc-300 hover:text-white"
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
              className={`px-3 py-2 rounded-full text-center transition ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-md"
                  : "text-zinc-300 hover:text-white"
              }`}
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

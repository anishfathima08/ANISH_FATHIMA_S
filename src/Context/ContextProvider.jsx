import React, { createContext, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiExpress, SiMongodb } from "react-icons/si";
import { GraduationCap, BookOpen } from "lucide-react";

export const myContext = createContext()

const ContextProvider = ({children}) => {

    // Header 

    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    // Skills

    const skills = [
      { icon: <FaHtml5 className="text-white text-5xl" />, name: "HTML", border: "border-zinc-400" },
      { icon: <FaCss3Alt className="text-white text-5xl" />, name: "CSS", border: "border-zinc-400" },
      { icon: <FaBootstrap className="text-white text-5xl" />, name: "Bootstrap", border: "border-zinc-400" },
      { icon: <SiTailwindcss className="text-white text-5xl" />, name: "Tailwind CSS", border: "border-zinc-400" },
      { icon: <FaJs className="text-white text-5xl" />, name: "JavaScript", border: "border-zinc-400" },
      { icon: <SiJquery className="text-whtie text-5xl" />, name: "jQuery", border: "border-whtie" },
      { icon: <FaReact className="text-white text-5xl" />, name: "React JS", border: "border-zinc-400" },
      { icon: <FaNodeJs className="text-white text-5xl" />, name: "Node JS", border: "border-zinc-400" },
      { icon: <SiExpress className="text-white text-5xl" />, name: "Express JS", border: "border-zinc-400" },
      { icon: <SiMongodb className="text-white text-5xl" />, name: "MongoDB", border: "border-zinc-400" },
    ];

    // Experience

     const experiences = [
        {
        period: "Feb 2025 - Present",
        role: "MERN Stack Trainer & Developer",
        company: "ILife Technologies",
        responsibilities: [
            "Conducted internships, workshops, and MERN stack courses.",
            "Trained 500+ students with hands-on projects and guidance.",
            "Delivered structured classes on frontend and backend development.",
            "Contributed to in-house development projects and scalable applications.",
        ],
        },
    ];

    // Education

    const education = [
        {
        period: "June 2021 - May 2024",
        title: "Bachelor of Computer Application ( BCA )",
        institution: "Aiman College of Arts and Science for Women, Trichy",
        details: "CGPA - 8.9",
        icon: <GraduationCap className="w-6 h-6 text-black" />,
        },
        {
        period: "June 2020 - April 2021",
        title: "Higher Secondary",
        institution: "LNP Girls Higher Secondary School, Lalgudi",
        details: "Percentage - 89.6%",
        icon: <BookOpen className="w-6 h-6 text-black" />,
        },
    ];

    const myContextValue = {

        // Header

        navbarOpen, setNavbarOpen,
        navLinks,

        // Skills

        skills,

        // Experience 

        experiences,

        // Education 

        education,

    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider
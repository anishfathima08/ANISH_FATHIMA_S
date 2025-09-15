import React, { createContext, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiExpress, SiMongodb } from "react-icons/si";
import { GraduationCap, BookOpen } from "lucide-react";

export const myContext = createContext()

const ContextProvider = ({children}) => {

    // Header 

    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const navLinks = [
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "projects", label: "Projects" },
        { id: "certificates", label: "Certificates" },
        { id: "contact", label: "Contact" },
    ];

    // Skills

    // const skills = [
    //   { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML", border: "border-orange-500" },
    //   { icon: <FaHtml5 className="text-white text-5xl" />, name: "HTML", border: "border-white" },
    //   { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS", border: "border-blue-500" },
    //   { icon: <FaBootstrap className="text-purple-600 text-5xl" />, name: "Bootstrap", border: "border-purple-600" },
    //   { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, name: "Tailwind CSS", border: "border-cyan-400" },
    //   { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript", border: "border-yellow-400" },
    //   { icon: <SiJquery className="text-blue-400 text-5xl" />, name: "jQuery", border: "border-blue-400" },
    //   { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React JS", border: "border-cyan-400" },
    //   { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node JS", border: "border-green-500" },
    //   { icon: <SiExpress className="text-gray-400 text-5xl" />, name: "Express JS", border: "border-gray-400" },
    //   { icon: <SiMongodb className="text-green-600 text-5xl" />, name: "MongoDB", border: "border-green-600" },
    // ];

    const skills = [
      { icon: <FaHtml5 className="text-white text-5xl" />, name: "HTML", border: "border-white" },
      { icon: <FaCss3Alt className="text-white text-5xl" />, name: "CSS", border: "border-white" },
      { icon: <FaBootstrap className="text-white text-5xl" />, name: "Bootstrap", border: "border-white" },
      { icon: <SiTailwindcss className="text-white text-5xl" />, name: "Tailwind CSS", border: "border-white" },
      { icon: <FaJs className="text-white text-5xl" />, name: "JavaScript", border: "border-white" },
      { icon: <SiJquery className="text-whtie text-5xl" />, name: "jQuery", border: "border-whtie" },
      { icon: <FaReact className="text-white text-5xl" />, name: "React JS", border: "border-white" },
      { icon: <FaNodeJs className="text-white text-5xl" />, name: "Node JS", border: "border-white" },
      { icon: <SiExpress className="text-white text-5xl" />, name: "Express JS", border: "border-white" },
      { icon: <SiMongodb className="text-white text-5xl" />, name: "MongoDB", border: "border-white" },
    ];

    // Experience

     const experiences = [
        {
        period: "Feb 2025 - Present",
        role: "MERN Stack Trainer & Developer",
        company: "ILife Technologies",
        responsibilities: [
            "Conducted internships, workshops, and MERN stack courses.",
            "Trained 300+ students with hands-on projects and guidance.",
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
        details: "CGPA - 8.9 | Percentage - 89%",
        icon: <GraduationCap className="w-6 h-6 text-black" />,
        },
        {
        period: "June 2024 - December 2024",
        title: "MERN Stack Course",
        institution: "ILife Academy",
        details: "Full Stack Development specialization with real-time projects",
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
import React, { createContext, useState } from 'react'

export const myContext = createContext()

const ContextProvider = ({children}) => {

    // Header 

    const [ navbarOpen, setNavbarOpen ] = useState(false);

    // Hero

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const myContextValue = {

        // Header

        navbarOpen, setNavbarOpen,

        // Hero 

        particlesInit
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider
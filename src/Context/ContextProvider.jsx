import React, { createContext, useState } from 'react'

export const myContext = createContext()

const ContextProvider = ({children}) => {

    // Header 

    const [ navbarOpen, setNavbarOpen ] = useState(false);

    const myContextValue = {

        // Header

        navbarOpen, setNavbarOpen,

    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider
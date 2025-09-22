import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'
import AOSInit from './Pages/AOSInit'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AOSInit />
        <ContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
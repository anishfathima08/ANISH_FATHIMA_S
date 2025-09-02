import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'

const App = () => {
  return (
    <>
      <BrowserRouter>
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
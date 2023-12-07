import React from 'react'
import Home from './components/Home'
import { CarProvider } from './context/CarContext'
import SingleCar from './components/SingleCar'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchForm from './components/SearchForm'


const App = () => {
  return (
    <>
      <CarProvider>
        <BrowserRouter>
          <Navbar />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/searchcar' element={<SearchForm />} />
          </Routes>
          <SingleCar />
        </BrowserRouter>
      </CarProvider>
    </>
  )
}

export default App
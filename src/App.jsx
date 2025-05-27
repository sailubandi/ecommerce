import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Products from './page/Products';
import ProductDetails from './page/ProductDetails';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Products' element={<Products/>} />
      <Route path='Products/:id' element={<ProductDetails/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </>
  );
}

export default App;
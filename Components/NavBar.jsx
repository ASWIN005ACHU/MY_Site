import React from 'react'
import Home from './home/Home'
import './NavBar.css'
import Ordered from './ordered/Ordered'
import Cart from './cart/Cart'
import About from './about/About'
import Signup from './signup/Signup'
import PageNotFound from './nopage/PageNotFound'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ordered' element={<Ordered />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Link to={'/'}>Home</Link>
      <Link to={'/ordered'}>Ordered</Link>
      <Link to={'/cart'}>Cart</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/signup'}>Signup</Link>
    </BrowserRouter>
  )
}

export default NavBar
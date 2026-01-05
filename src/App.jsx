import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Mainrendercomponent from './pages/Home'
import Login from "./pages/Login"
import Wishlist from "./pages/Wishlist"
import { useDispatch, useSelector } from 'react-redux'
import { getwishlist } from './features/wishlist/wishlistthunk'
import  Navbar  from '../src/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Showproduct from './pages/Showproduct'
import Register from './pages/Register'
import Addtocart from './pages/Cart'

function App() {
    const isauthenticated = useSelector((state) => state.auth.isauthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isauthenticated) {
            dispatch(getwishlist());
        }
    }, [isauthenticated, dispatch])
 return (
  <>
 <Navbar/>
 <div className='phalana'>
    <Routes>
        <Route
            path="/" element={<Mainrendercomponent/>}
            />
             <Route
            path="/login" element={<Login/>}
            />
             <Route
            path="/products" element={<ProductList/>}
            />
             <Route
            path="/product/:id" element={<Showproduct/>}
            />
             <Route
            path="/register" element={<Register/>}
            />
             <Route
            path="/wishlist" element={<Wishlist/>}
            />
             <Route
            path="/Cart" element={<Addtocart/>}
            />
             
        
    </Routes>

 </div>
  
  </>
 )
 }
export default App;
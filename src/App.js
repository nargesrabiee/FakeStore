import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import MainProduct from './Components/MainProduct/MainProduct';
import Category from './Components/Category/Category';
import User from './Components/User/User';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/product/:productID' element={<MainProduct/>}></Route>
                <Route path='/category/:categoryName' element={<Category />}></Route>
                <Route path='/user' element={<User />}></Route>
            </Routes>
        </>
    )
}

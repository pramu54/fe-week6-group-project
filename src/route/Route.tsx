import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Store from '../pages/Store';
import Cart from '../pages/Cart';
import History from '../pages/History';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Order from '../pages/Order';
import Profile from '../pages/Profile';
import Addproduct from '../pages/Addproduct';
import Detail from '../pages/Detail';
import ProtectedRoute from './ProtectedRoute';


const Rute = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="product/:id" element={<Detail />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="store" element={<Store />} />
                        <Route path="addproduct" element={<Addproduct />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="order" element={<Order />} />
                        <Route path="history" element={<History />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default Rute;
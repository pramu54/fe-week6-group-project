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
import { PriceContext } from '../context/priceContext';
import { QuantityContext } from '../context/quantityContext';
import Editproduct from '../pages/Editproduct';
import Editprofile from '../pages/Editprofile';




const Rute = () => {
    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)
    return (
        <BrowserRouter>
            <PriceContext.Provider value={{price, setPrice}}>
            <QuantityContext.Provider value={{quantity, setQuantity}}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="product/:id" element={<Detail />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="editprofile" element={<Editprofile />} />
                        <Route path="store" element={<Store />} />
                        <Route path="addproduct" element={<Addproduct />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="order" element={<Order />} />
                        <Route path="history" element={<History />} />
                        <Route path="editproduct/:id" element={<Editproduct />} />
                    </Route>
                </Route>
            </Routes>
            </QuantityContext.Provider>
            </PriceContext.Provider>
        </BrowserRouter>
    );
}

export default Rute;
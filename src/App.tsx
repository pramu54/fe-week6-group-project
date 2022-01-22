import React from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Store from './pages/Store';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import History from './pages/History';
import Detail from './pages/Detail';
import Addproduct from './pages/Addproduct';


function App() {
  return (
    <div className="App">
      <Header />
      
      <div style={{height:"10vh"}}></div>
      <Detail />
      <Footer />
    </div>
  );
};

export default App;

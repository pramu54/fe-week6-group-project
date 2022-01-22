import React from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Store from './pages/Store';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div style={{height:"10vh"}}></div>
      <Home />
      <Store /> 
      <Login/>*/}
      {/* <Register/> */}
      <Profile/> 
      <Footer />
    </div>
  );
};

export default App;

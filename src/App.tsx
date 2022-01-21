import React from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Store from './pages/Store';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{height:"10vh"}}></div>
      <Home />
      <Store />
       <Login/>
      <Footer />
    </div>
  );
};

export default App;

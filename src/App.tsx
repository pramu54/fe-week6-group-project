import React from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{height:"10vh"}}></div>
      <Home />
       <Login/>
      <Footer />
    </div>
  );
};

export default App;

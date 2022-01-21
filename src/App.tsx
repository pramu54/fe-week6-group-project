import React from 'react';
import './App.css';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Login/>
      <Footer />
    </div>
  );
};

export default App;

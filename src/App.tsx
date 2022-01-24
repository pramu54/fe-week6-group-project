import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Test from './components/testFetch';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Test />
    </div>
  );
};

export default App;

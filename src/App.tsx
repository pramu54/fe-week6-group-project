import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Test from './components/testFetch';



function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;

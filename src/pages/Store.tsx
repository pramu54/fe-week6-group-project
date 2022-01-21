import React from 'react';
import StoreCard from '../components/StoreCard';

function Store() {
  return (
    <div className="Store container">
      <div className='d-flex justify-content-between p-5'>
        <h2>My Store</h2>
        <button className='btn btn-success btn-lg'>Add Product</button>
      </div>
      <div className='row'>
        <StoreCard image="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          title="Lazy Chair" price="50.000" />
        <StoreCard image="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          title="title" price="50.000" />
      </div>
    </div>
  );
}

export default Store;

import React, {useState} from 'react';
import StoreCard from '../components/StoreCard';

function Store() {
  //DUMMY PRODUCT
  const [product, setProduct] = useState([
    {image:'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title:'Lazy Chair',price:'135.000'},
    {image:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
    title:'Cool Cap',price:'82.500'},
    {image:'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title:'Lazy Chair',price:'135.000'},
    {image:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
    title:'Cool Cap',price:'82.500'},
    {image:'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title:'Lazy Chair',price:'135.000'},
])
  return (
    <div className="Store container">
      <div className='d-flex justify-content-between p-5'>
        <h2>My Store</h2>
        <button className='btn btn-success btn-lg'>Add Product</button>
      </div>
      <div className='row'>
      {product.map((item:any)=>(
            <StoreCard
            image={item.image}
            title={item.title} 
            price={item.price} />
            ))}
      </div>
    </div>
  );
}

export default Store;

import React, { useState } from 'react';
import HomeCard from '../components/HomeCard';

function Home() {
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
    <div className="Home">
        <div className='Category'>
            <div className='banner d-flex justify-content-evenly py-1' style={{backgroundColor:"mediumturquoise", color:"white", fontSize:"smaller"}}>
                <p className='p-0 m-0'>Category</p>
                <p className='p-0 m-0'>Category</p>
                <p className='p-0 m-0'>Category</p>
                <p className='p-0 m-0'>Category</p>
                <p className='p-0 m-0'>Category</p>
            </div>
        </div>
        <div className='container mt-5'>
        <div className='Product row'>
            {product.map((item:any)=>(
            <HomeCard 
            image={item.image}
            title={item.title} 
            price={item.price} />
            ))}
        </div>
        </div>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import HomeCard from '../components/HomeCard';

function Home() {
    //DUMMY PRODUCT
    const [product, setProduct] = useState([])

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

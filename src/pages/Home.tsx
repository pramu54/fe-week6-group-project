import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeCard from '../components/HomeCard';

function Home() {
    //DUMMY PRODUCT
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios
            .get("http://108.136.240.34:80/products")
            .then((res) => {
                console.log(res);
                setProduct(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="Home">
            <div style={{height:"10vh"}}></div>
            <div className='Category'>
                <div className='banner d-flex justify-content-evenly py-1' style={{ backgroundColor: "mediumturquoise", color: "white", fontSize: "smaller" }}>
                    <p className='p-0 m-0'>Books</p>
                    <p className='p-0 m-0'>Computer</p>
                    <p className='p-0 m-0'>Kitchen</p>
                    <p className='p-0 m-0'>Gadget</p>
                    <p className='p-0 m-0'>Style</p>
                </div>
            </div>
            <div className='d-flex justify-content-center my-5' style={{fontFamily:"Georgia", color:"mediumturquoise"}}><h1>Welcome to MISSCLO</h1></div>
            <div className='container mt-5'>
                <div className='Product row'>
                {product.map((item: any) => (
                        <HomeCard
                            image={item.url_photo}
                            title={item.name}
                            price={item.price}
                            clickCard={()=>navigate(`/product/${item.id}`)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeCard from '../components/HomeCard';

function Home() {
    //DUMMY PRODUCT
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState<number[]>([1,2,3,4,5])
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios
            .get("/products")
            .then((res) => {
                console.log(res);
                setProduct(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const addCartHandle = (item:any) => {
        axios
            .post("/cart", {
                id_product: item.id,
                quantity: 1
              })
              .then((res) => {
                console.log(res);
                alert("product added to cart")
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
                    <p className='p-0 m-0' onClick={()=>setCategory([1,2,3,4,5])}>All Categories</p>
                    <p className='p-0 m-0' onClick={()=>setCategory([1])}>Books</p>
                    <p className='p-0 m-0' onClick={()=>setCategory([2])}>Computer</p>
                    <p className='p-0 m-0' onClick={()=>setCategory([3])}>Kitchen</p>
                    <p className='p-0 m-0' onClick={()=>setCategory([4])}>Gadget</p>
                    <p className='p-0 m-0' onClick={()=>setCategory([5])}>Style</p>
                </div>
            </div>
            <div className='d-flex justify-content-center my-5' style={{fontFamily:"Georgia", color:"mediumturquoise"}}><h1>Welcome to MISSCLO</h1></div>
            <div className='container mt-5'>
                <div className='Product row'>
                {product.filter((prod:any)=> category.includes(prod.id_product_category)).map((item: any) => (
                        <HomeCard
                            key={item.id}
                            image={item.url_photo}
                            title={item.name}
                            price={item.price}
                            clickCard={()=>navigate(`/product/${item.id}`)}
                            addCart={()=>addCartHandle(item)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

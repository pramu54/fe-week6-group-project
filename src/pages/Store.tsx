import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StoreCard from '../components/StoreCard';

function Store() {
  const [product, setProduct] = useState<any>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get(`/products?uid=${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const editHandle = (item: any) => {
    console.log(item)
  }

  const deleteHandle = (item:any)=>{
    let config = {
        headers:
        {"Authorization":`Bearer ${localStorage.getItem("loginToken")}`}
    }
    axios
        .delete(`http://108.136.240.34:80/products/${item.id}`,config
         )
        .then((res) => {
            console.log(res);
            fetchData();
        })
        .catch((err) => {
            console.log(err)
        })
}

  return (
    <div className="Store container">
      <div className='d-flex justify-content-between p-5'>
        <h2>My Store</h2>
        <button className='btn btn-success btn-lg'>Add Product</button>
      </div>
      <div className='row'>
        {product.map((item: any) => (
          <StoreCard
            image={item.url_photo}
            title={item.name}
            price={item.price}
            editClick={() => editHandle(item)}
            deleteClick={() => deleteHandle(item)} />
        ))}
      </div>
    </div>
  );
}

export default Store;

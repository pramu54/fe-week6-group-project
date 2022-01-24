import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
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
          .get("http://108.136.240.34:80/products?uid=7")
          .then((res) => {
              console.log(res);
              setProduct(res.data)
          })
          .catch((err) => {
              console.log(err)
          })
  }

  console.log(product)
  console.log(product.data)

  return (
    <div className="Store container">
      <div className='d-flex justify-content-between p-5'>
        <h2>My Store</h2>
        <button className='btn btn-success btn-lg'>Add Product</button>
      </div>
      <div className='row'>
        {product.map((item: any) => (
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

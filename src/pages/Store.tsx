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


  const deleteHandle = (item:any)=>{
  axios
      .delete(`/products/${item.id}`,
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
        <button className='btn btn-success btn-lg' onClick={()=>navigate('/addproduct')}>Add Product</button>
      </div>
      <div className='row'>
        {product.map((item: any) => (
          <StoreCard
            key={item.id}
            image={item.url_photo}
            title={item.name}
            price={item.price}
            editClick={() => navigate(`store/${item.id}`)}
            deleteClick={() => deleteHandle(item)} />
        ))}
      </div>
    </div>
  );
}

export default Store;

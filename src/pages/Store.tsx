import React, { useState, useEffect } from 'react';
import axios from 'axios'
import StoreCard from '../components/StoreCard';
import { useNavigate } from 'react-router-dom';

function Store() {
  //DUMMY PRODUCT
  const [product, setProduct] = useState<any>([])
  const idFromLocalStorage = localStorage.getItem("id")
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
}, [])

const fetchData = () => {
    axios
        .get(`/products?uid=${idFromLocalStorage}`)
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
  .delete(`/products/${item.id}`)
  .then((res) => {
    console.log(res);
    fetchData()
})
.catch((err) => {
    console.log(err)
})
}

if(product!==null){
  return (
    <div className="Store container">
      <div style={{height:"10vh"}}></div>
      <div className='d-flex justify-content-between p-5'>
        <h2>My Store</h2>
        <button className='btn btn-success btn-lg' onClick={()=>navigate("/allproduct")}>Add Product</button>
      </div>
      <div className='row'>
      {product.map((item: any) => (
          <StoreCard
          key={item.id}
            image={item.url_photo}
            title={item.name}
            price={item.price}
            edit={()=>navigate(`/editproduct/${item.id}`)}
            delete={()=>deleteHandle(item)} />
        ))}
      </div>
    </div>
  );
}else{
  return (
    <div className="Store container">
      <div style={{height:"10vh"}}></div>
      <div className='d-flex justify-content-between p-5'>
        <h2>My Store</h2>
        <button className='btn btn-success btn-lg' onClick={()=>navigate("/allproduct")}>Add Product</button>
      </div>
      <div className='row'>
        <div style={{height:"70vh"}}></div>
      </div>
    </div>
  );
}
  
}

export default Store;

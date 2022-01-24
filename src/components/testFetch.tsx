import React, {useEffect, useState} from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';

function Test() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios
            .get("http://108.136.240.34:80/products")
            .then((res) => {
                console.log(res);
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const clickHandle = ()=>{
        let config = {
            headers:
            {"Authorization":`Bearer ${localStorage.getItem("loginToken")}`}
        }
        axios
            .post("http://108.136.240.34:80/products", { 
                "id_product_category": 2,
    "name": "Samsung A8",
  "description": "HP samsung baru",
  "price": 10000,
  "quantity": 4,
  "url_photo": "example.jpg"
                }, config)
            .then((res) => {
                console.log(res);
                fetchData();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const loginHandle = ()=>{
        axios
            .post("http://108.136.240.34:80/login", { 
                username: "sirclo023",
                password: "sirclo123"
             })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('loginToken', res.data.token)
                localStorage.setItem('isAuthenticated','true')
                fetchData();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const logoutHandle = ()=>{
        localStorage.removeItem("loginToken")
        localStorage.removeItem("isAuthenticated")
    }

    const regisHandle = ()=>{
        axios
            .post(" http://108.136.240.34:80/users", { 
                name: "sircle",
                username: "sircley",
                email: "example@sirclo.com",
                password: "sircle123",
                born_date: "12/12/1997",
                gender: "male",
                url_photo: "www.iniphoto_png.com"
             })
            .then((res) => {
                console.log(res);
                fetchData();
            })
            .catch((err) => {
                console.log(err)
            })
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
    <div>
      <div style={{height:"10vh"}}></div>
     <button className='btn btn-primary' onClick={()=>clickHandle()}>test</button>
     <button className='btn btn-success' onClick={()=>loginHandle()}>login</button>
     <button className='btn btn-success' onClick={()=>regisHandle()}>Register</button>
     <button className='btn btn-danger' onClick={()=>logoutHandle()}>logout</button>
    
     {data.map((item: any) => (
                        <HomeCard
                            image={item.url_photo}
                            title={item.name}
                            price={item.price} />
                    ))}
     
    </div>
  );
}

export default Test;

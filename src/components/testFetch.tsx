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
            .get("http://108.136.240.34:80/productcategory")
            .then((res) => {
                console.log(res);
                setData(res.data)
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
                id: 23,
                id_user: 1,
                id_product_category: 1,
                name: "Samsung A6",
                price: 1000000,
                qty: 3,
                description: "HP samsung baru",
                url_photo: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
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
                name: "sirclo25",
                username: "sirclo026",
                email: "example@sirclo.com",
                password: "sirclo123",
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
                            price={item.price}
                            siu={()=>deleteHandle(item)} />
                    ))}
     
    </div>
  );
}

export default Test;

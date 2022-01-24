import React, { useEffect, useState } from 'react';
import CartCard from '../components/CartCard';
import axios from 'axios';

function Cart() {
    //DUMMY PRODUCT
    const [totalProduct, setTotalProduct] = useState<number>(0)
    const [totalQty, setTotalQty] = useState<number>(0)
    const [product, setProduct] = useState<any>([])
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios
            .get("/cart")
            .then((res) => {
                console.log(res);
                setProduct(res.data.data)
                console.log(product)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    let countPrc = 0;
    useEffect(() => {
        product.map((item: any) => {
            let subPrc = item.Product.price * item.quantity;
            countPrc += subPrc;
            setTotalProduct(countPrc)
        })
    }, [product])

    let countQty = 0;
    useEffect(() => {
        product.map((item: any) => {
            countQty += item.quantity;
            setTotalQty(countQty)
        })
    }, [product])

    const increaseQtyHandle = (item:any) => {
        let inc = item.quantity + 1
        axios
        .put(`cart/${item.id}`, {quantity: inc})
        .then((res) => {
            console.log(res);
            fetchData()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const decreaseQtyHandle = (item:any) => {
        let dec = item.quantity - 1
        if(dec>=0){
            axios
            .put(`cart/${item.id}`, {quantity: dec})
            .then((res) => {
                console.log(res);
                fetchData()
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
           dec=0;
        }
    }
    const deleteHandle=(item:any)=>{
        axios
        .delete(`/cart/${item.id}`)
        .then((res)=>{
            console.log(res)
            fetchData()
        })
        .catch((err)=>{console.log(err)})
    }
    if(product!==null){
        return (
            <div className="Store container">
                <div style={{height:"10vh"}}></div>
                <div className='d-flex justify-content-between p-5'>
                    <h2>My Cart</h2>
                    <button className='btn btn-primary'>See History</button>
                </div>
                <div className='row flex-row-reverse'>
                    <div className='container col-md-4 '>
                        <div className='Summary d-flex flex-column align-items-center pt-3'>
                            <h3 className='pb-2'>Summary</h3>
                            <p>Quantity:</p>
                            <p>{totalQty} item</p>
                            <p>Total Price</p>
                            <p>Rp.{totalProduct}</p>
                            <button className='btn btn-success'>Order</button>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        {product.map((item: any) => (
                            <CartCard
                                key={item.id}
                                image={item.Product.url_photo}
                                title={item.Product.name}
                                price={item.Product.price}
                                qty={item.quantity}
                                increaseQty={() => increaseQtyHandle(item)}
                                decreaseQty={() => decreaseQtyHandle(item)}
                                delete={()=>deleteHandle(item)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="Store container">
            <div style={{height:"10vh"}}></div>
                <div className='d-flex justify-content-between p-5'>
                    <h2>My Cart</h2>
                    <button className='btn btn-primary'>See History</button>
                </div>
                <div className='row flex-row-reverse'>
                    <div className='container col-md-4 '>
                        <div className='Summary d-flex flex-column align-items-center pt-3'>
                            <h3 className='pb-2'>Summary</h3>
                            <p>Quantity:</p>
                            <p>{totalQty} item</p>
                            <p>Total Price</p>
                            <p>Rp.{totalProduct}</p>
                            <button className='btn btn-success'>Order</button>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div style={{height:"70vh"}}></div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Cart;

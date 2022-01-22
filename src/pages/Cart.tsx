import React, { useEffect, useState } from 'react';
import CartCard from '../components/CartCard';

function Store() {
    //DUMMY PRODUCT
    const [totalProduct, setTotalProduct] = useState<number>(0)
    const [totalQty, setTotalQty] = useState<number>(0)
    const [product, setProduct] = useState([
        {
            image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            title: 'Lazy Chair', price: 135000, Qty: 2, id: 1
        },
        {
            image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
            title: 'Cool Cap', price: 82500, Qty: 1, id: 2
        },
        {
            image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            title: 'Lazy Chair', price: 135000, Qty: 2, id: 3
        },
        {
            image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
            title: 'Cool Cap', price: 82500, Qty: 1, id: 4
        },
        {
            image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            title: 'Lazy Chair', price: 135000, Qty: 2, id: 5
        },
    ])
    let countPrc = 0;
    useEffect(() => {
        product.map((item: any) => {
            countPrc += item.price;
            setTotalProduct(countPrc)
        })
    }, [])
    let countQty = 0;
    useEffect(() => {
        product.map((item: any) => {
            countQty += item.Qty;
            setTotalQty(countQty)
        })
    }, [])

    const increaseQtyHandle = () => {
        console.log("++")
    }


    const decreaseQtyHandle = () => {
        console.log("--")
    }

    return (
        <div className="Store container">
            <div className='d-flex justify-content-between p-5'>
                <h2>My Cart</h2>
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
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            qty={item.Qty}
                            increaseQty={() => increaseQtyHandle()}
                            decreaseQty={() => decreaseQtyHandle()}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Store;

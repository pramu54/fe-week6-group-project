import React, { useEffect, useState } from 'react';
import HistoryCard from '../components/HistoryCard';

function History() {
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
            <div className='justify-content-between p-5 row'>
                <h2 className='col-md-8'>My History</h2>
                <div className='col-md-4'>
                    <div className='d-flex justify-content-between'>
                        <p>Quantity:</p>
                        <p>{totalQty} item</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Total Price:</p>
                        <p>Rp{totalProduct}</p>
                    </div>
                </div>
            </div>
            <div className='row flex-row-reverse'>
                {product.map((item: any) => (
                    <HistoryCard
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        qty={item.Qty}
                        date="16 Januari 2022"
                    />
                ))}
            </div>
        </div>
    );
}

export default History;

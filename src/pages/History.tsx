import React, { useEffect, useState } from 'react';
import HistoryCard from '../components/HistoryCard';
import axios from 'axios'

function History() {
    //DUMMY PRODUCT
    const [totalProduct, setTotalProduct] = useState<number>(0)
    const [totalQty, setTotalQty] = useState<number>(0)
    const [stat, setStat] = useState<string>("DONE")
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios
            .get("/order")
            .then((res) => {
                console.log(res);
                setProduct(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    let countPrc = 0;
    useEffect(() => {
        product.map((item: any) => {
            countPrc += item.price;
            return(
            setTotalProduct(countPrc)
            )
        })
    }, [])
    let countQty = 0;
    useEffect(() => {
        product.map((item: any) => {
            countQty += item.Qty;
            return(
            setTotalQty(countQty)
            )
        })
    }, [])
    if (product !== null) {
        return (
            <div className="Store container">
                <div style={{ height: "10vh" }}></div>
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
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-success p-3 m-2' onClick={() => setStat("DONE")}>Ordered History</button>
                    <button className='btn btn-danger p-3 m-2' onClick={() => setStat("CANCELLED")}>Canceled History</button>
                </div>
                <div className='row flex-row-reverse'>
                    {product.filter((prod: any) => prod.status === stat).map((item: any) => (
                        <HistoryCard
                            image={item.product.url_photo}
                            title={item.product.name}
                            price={item.product.price}
                            qty={item.product.quantity}
                            date={item.order_date}
                            stat={stat}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="Store container">
                <div style={{ height: "10vh" }}></div>
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
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-success p-3 m-2' onClick={() => setStat("DONE")}>Ordered History</button>
                    <button className='btn btn-danger p-3 m-2' onClick={() => setStat("CANCELLED")}>Canceled History</button>
                </div>
                <div className='row flex-row-reverse'>
                    <h1>You don't have any order history</h1>
                    <div style={{ height: "70vh" }}></div>
                    ))

                </div>
            </div>
        );
    }

}

export default History;

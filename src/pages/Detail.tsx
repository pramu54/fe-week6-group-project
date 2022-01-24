import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail() {
    const [detail, setDetail] = useState<any>([])
    const params = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios
            .get(`/products/${params.id}`)
            .then((res) => {
                console.log(res);
                setDetail(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="Detail container">
            <div className='row justify-content-center'>
                <div style={{ height: "20vh" }}></div>
                <div className='col-md-6 d-flex justify-content-end'>
                    <div className='imageHolder' style={{ width: "300px", height: "300px" }}>
                        <img src={detail.url_photo} className='w-100 h-100' style={{ borderRadius: "12px" }} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <h2>{detail.name}</h2>
                    <h3>Rp.{detail.price}</h3>
                    <p style={{ fontSize: "12px" }}>{detail.description}</p>
                </div>
            </div>
            <div className=' mt-3 mb-5 d-flex justify-content-center'>
                <button className='btn btn-success btn-lg'>Add to Cart</button>
            </div>
        </div>
    );
}

export default Detail;

import React from 'react';

interface Props {
    image: string
    title: string
    price: number
    qty: number
    date: string
}

function HistoryCard(props: Props) {
    return (

        <div className=" col-md-6 p-3 d-flex justify-content-center">
            <div className="CartCard d-flex w-100">
                <div className='imageHolder' style={{ width: "250px", height: "300px" }}>
                    <img className="w-100 h-100" src={props.image} />
                </div>
                <div className='p-3 d-flex flex-column justify-content-between'>
                    <div>
                        <p className='m-0' style={{ fontSize: "12px", color: "gray" }}>{props.date}</p>
                        <p className='m-0' style={{ fontSize: "18px" }}>{props.title}</p>
                        <p className='m-0' style={{ fontSize: "12px" }}>Rp.{props.price}</p>
                        <div style={{ fontSize: "12px" }} className='d-flex align-items-center'>
                            <p className='pt-3 px-1'>Qty: {props.qty}</p>
                        </div>
                        <p>SubTotal: {props.qty * props.price}</p>
                    </div>
                    <div className='p-3'>
                        <button className='btn btn-danger mx-1'>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HistoryCard;

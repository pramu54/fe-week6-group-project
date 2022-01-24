import React from 'react';

interface Props {
    image: string
    title: string
    price: number
    qty: number
    increaseQty: any
    decreaseQty: any
    delete: any
}

function CartCard(props: Props) {
    return (

        <div className="p-3 d-flex justify-content-center">
            <div className="CartCard d-flex w-100">
                <div className='imageHolder' style={{ width: "250px", height: "300px" }}>
                    <img className="w-100 h-100" src={props.image} />
                </div>
                <div className='p-3 d-flex flex-column justify-content-between'>
                    <div>
                        <p className='m-0' style={{ fontSize: "18px" }}>{props.title}</p>
                        <p className='m-0' style={{ fontSize: "12px" }}>Rp.{props.price}</p>
                        <div style={{ fontSize: "12px" }} className='d-flex align-items-center'>
                            <p className='pt-3 px-1'>Qty: {props.qty}</p>
                            <div >
                                <p className='p-0 m-0' style={{ fontSize: "10px" }} onClick={props.increaseQty}><i className="bi bi-caret-up-fill" /></p>
                                <p className='p-0 m-0' style={{ fontSize: "10px" }} onClick={props.decreaseQty}><i className="bi bi-caret-down-fill" /></p>
                            </div>
                        </div>
                        <p>SubTotal: {props.qty * props.price}</p>
                    </div>
                    <div className='p-3'>
                        <button className='btn btn-danger mx-1' onClick={props.delete}>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CartCard;

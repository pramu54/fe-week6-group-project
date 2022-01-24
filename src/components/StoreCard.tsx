import React from 'react';

interface Props {
    image: string
    title: string
    price: string
    editClick: any
    deleteClick: any
}

function StoreCard(props: Props) {
    return (

        <div className="col-md-6 p-3 d-flex justify-content-center">
            <div className="storeCard d-flex w-100">
                <div className='imageHolder' style={{ width: "250px", height: "300px" }}>
                    <img className="w-100 h-100" src={props.image} />
                </div>
                <div className='p-3 d-flex flex-column justify-content-between'>
                    <div>
                        <p className='m-0' style={{ fontSize: "36px" }}>{props.title}</p>
                        <p className='m-0' style={{ fontSize: "24px" }}>Rp.{props.price}</p>
                    </div>
                    <div className='p-3'>
                        <button className='btn btn-primary mx-1' onClick={props.editClick}>Edit</button>
                        <button className='btn btn-danger mx-1' onClick={props.deleteClick}>Remove</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StoreCard;

import React from 'react';

interface Props {
    image: string
    title: string
    price: number
}

function HomeCard(props: Props) {
    return (
        <div className="col-md-3 p-3 d-flex justify-content-center">
            <div className='HomeCard mx-5'>
                <div className='imageHolder' style={{ width: "200px", height: "250px" }}>
                    <img src={props.image} className='w-100 h-100' />
                </div>
                <div className='d-flex justify-content-between px-2'>
                    <div className='homeInfo text-left mt-2' style={{ font: "18px" }}>
                        <p>{props.title}</p>
                        <p>Rp.{props.price}</p>
                    </div>
                    <button className='btn btn-success btn-sm h-50 m-2'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;

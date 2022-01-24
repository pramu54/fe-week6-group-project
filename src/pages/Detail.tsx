import React, { useState } from 'react';

function Detail() {
    const [detail, setDetail] = useState({
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        title: "Lazy Chair",
        price: 135000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue massa quis nunc bibendum, nec vestibulum lorem luctus. Aliquam aliquam ex eu ex rhoncus, ut ultricies odio sagittis. Ut eget pharetra metus. Integer nec lobortis erat, eu tempus ante. Morbi eu elementum nibh. Phasellus semper mollis gravida. Duis eu finibus urna. In nec quam a risus ullamcorper semper. Donec sit amet eleifend nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit consectetur arcu, a sagittis mi ornare eget. Sed sodales quam tellus, vel sodales nulla porttitor in. Nullam laoreet, tortor id pharetra scelerisque, diam dolor commodo urna, molestie pretium nunc eros nec nisi. Mauris imperdiet libero ac tincidunt accumsan. Ut at congue velit, viverra sodales massa. Nunc ullamcorper finibus justo, nec interdum nisl placerat vitae. Morbi a blandit lectus. Aenean dictum risus id justo pharetra lacinia. Nunc sagittis tortor est. Donec ac ipsum vel eros venenatis vestibulum. Morbi venenatis massa eget ligula imperdiet vehicula. Nulla vel porttitor dui. Vivamus eu mollis lectus, et convallis justo. Aliquam venenatis, augue ac viverra gravida, leo velit pharetra lorem, vitae tempor lacus velit ut metus. Sed facilisis at dui nec efficitur."
    })

    return (
        <div className="Detail mt-3 container">
            <div className='row justify-content-center'>
                <div className='col-md-6 d-flex justify-content-end'>
                    <div className='imageHolder' style={{ width: "300px", height: "300px" }}>
                        <img src={detail.image} className='w-100 h-100' style={{ borderRadius: "12px" }} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <h2>{detail.title}</h2>
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

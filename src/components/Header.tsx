import React, { useState } from 'react';

function Header() {
    const [dropDown, setDropDown] = useState(false)
    const burgerHandle = () => {
        setDropDown(!dropDown)
    }

    return (
        <div className="Header position-fixed w-100 pt-2" >
            <div className='container d-flex  justify-content-between align-items-center'>
                <h1 style={{ color: "mediumturquoise" }}>MISSCLO</h1>
                <nav>
                    <i className="bi bi-shop  px-3" style={{ fontSize: "1.3em", color: "mediumturquoise" }}></i>
                    <i className="bi bi-cart px-3" style={{ fontSize: "1.3em", color: "mediumturquoise" }}></i>
                    <div className='profileRound mx-3'></div>
                    <div className='pt-3 px-3' style={{ color: "mediumturquoise" }}><p>login</p></div>
                </nav>
                <div onClick={() => burgerHandle()} className='burger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </div>
            <div className='dropdown' style={{ display: dropDown ? "block" : "none" }}>
                <p>My Profile</p>
                <p>My Store</p>
                <p>My Cart</p>
                <p><span style={{ color: "red" }}>Logout</span></p>
            </div>
        </div>
    );
}

export default Header;

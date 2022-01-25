import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [dropDown, setDropDown] = useState(false)
    const burgerHandle = () => {
        setDropDown(!dropDown)
    }
    let navigate = useNavigate()
    const [profile, setProfile] = useState<any>({});

    const logoutHandle = () => {
        localStorage.removeItem("loginToken")
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("id")
        window.location.reload();
    }

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        await axios
            .get(`/users/${localStorage.getItem("id")}`)
            .then((res) => {
                const { data } = res;
                setProfile(data.data)
            }).catch((err) => {
                console.log(err);
            })
    }

    if (localStorage.getItem("isAuthenticated") === "true") {
        return (
            <div className="Header position-fixed w-100 pt-2" >
                <div className='container d-flex  justify-content-between align-items-center'>
                    <h1 style={{ color: "mediumturquoise" }} onClick={() => navigate("/")} >MISSCLO</h1>
                    <nav>
                        <i onClick={() => navigate("/store")} className="bi bi-shop  px-3" style={{ fontSize: "1.3em", color: "mediumturquoise" }} ></i>
                        <i onClick={() => navigate("/cart")} className="bi bi-cart px-3" style={{ fontSize: "1.3em", color: "mediumturquoise" }}></i>
                        <div onClick={() => navigate("/profile")} className='profileRound mx-3'>
                            <img src={profile.url_photo} className='w-100 h-100'></img>
                        </div>
                        <div onClick={() => logoutHandle()} className='pt-3 px-3' style={{ color: "mediumturquoise" }}><p>logout</p></div>
                    </nav>
                    <div onClick={() => burgerHandle()} className='burger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                </div>
                <div className='dropdown' style={{ display: dropDown ? "block" : "none" }}>
                    <p onClick={() => navigate("/profile")}>My Profile</p>
                    <p onClick={() => navigate("/store")}>My Store</p>
                    <p onClick={() => navigate("/cart")}>My Cart</p>
                    <p onClick={() => logoutHandle()}><span style={{ color: "red" }}>Logout</span></p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="Header position-fixed w-100 pt-2" >
                <div className='container d-flex  justify-content-between align-items-center'>
                    <h1 style={{ color: "mediumturquoise" }} onClick={() => navigate("/")} >MISSCLO</h1>
                    <nav>
                        <i onClick={() => navigate("/store")} className="bi bi-shop  px-3" style={{ fontSize: "1.3em", color: "mediumturquoise" }} ></i>
                        <i onClick={() => navigate("/cart")} className="bi bi-cart px-3" style={{ fontSize: "1.3em", color: "mediumturquoise" }}></i>
                        <div onClick={() => navigate("/profile")} className='profileRound mx-3'></div>
                        <div onClick={() => navigate("/login")} className='pt-3 px-3' style={{ color: "mediumturquoise" }}><p>login</p></div>
                    </nav>
                    <div onClick={() => burgerHandle()} className='burger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                </div>
                <div className='dropdown' style={{ display: dropDown ? "block" : "none" }}>
                    <p onClick={() => navigate("/login")}><span style={{ color: "green" }}>Login</span></p>
                </div>
            </div>
        );
    }

}

export default Header;

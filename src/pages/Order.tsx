import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PriceContext } from "../context/priceContext";
import { QuantityContext } from "../context/quantityContext";

const Order = () =>{
    const {price} = useContext(PriceContext);
    const {quantity} = useContext(QuantityContext);
    let navigate = useNavigate();
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zip: ""
    });
    const [credit, setCredit] = useState({
        type: "Visa",
        card_name: "",
        card_number: "",
        cvv_code: "",
        expiration_month: "",
        expiration_year: ""
    })
    const [cart, setCart] = useState<any>([])
    const [cartId, setCartId] = useState<any>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        let idCart:number[] = [];

        axios
            .get("/cart")
            .then((res) => {
                const { data } = res;
                console.log(data);
                setCart(data.data);
                for(let i:number = 0; i<data.data.length; i++){
                    //console.log(data.data[i].id);
                    idCart.push(data.data[i].id);
                }
                setCartId(idCart)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    const onSubmit = () => {
        //values.preventDefault()

        axios.post(`/order`,{
            id_cart: cartId,
            total_price: price,
            address_delivery: {
                street: address.street,
                city: address.city,
                state: address.state,
                zip: parseInt(address.zip)
            },
            credit_card: {
                type: credit.type,
                name: credit.card_name,
                number: credit.card_number,
                cvv: parseInt(credit.cvv_code),
                month: parseInt(credit.expiration_month),
                year: parseInt(credit.expiration_year)
            }
        }).then((e) => {
            alert("Order Berhasil !")
            console.log(e)
            //navigate("/login");
        }).catch((e) => {
            alert(e)
        })
    };

    const handleChange = (e: any) => {
        let value = e.target.value
        let name = e.target.name
        
        setAddress({ ...address, [name] : value})
        setCredit({ ...credit, [name] : value})
    }

    return(
        <div className="order container-fluid">
            <div className="row mx-5">
                <h4>Shipping Address</h4>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Address" aria-label="default input example" name="street" onChange={handleChange} value={address.street}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="City" aria-label="default input example" name="city" onChange={handleChange} value={address.city}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Province" aria-label="default input example" name="state" onChange={handleChange} value={address.state}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Zip Code" aria-label="default input example" name="zip" onChange={handleChange} value={address.zip}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-5">
                <h4>Payment Method</h4>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" value={credit.type} aria-label="readonly input example" readOnly/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Name of Card" aria-label="default input example" name="card_name" onChange={handleChange} value={credit.card_name}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <input className="form-control" type="text" placeholder="Card Number" aria-label="default input example" name="card_number" onChange={handleChange} value={credit.card_number}/>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" type="text" placeholder="CVV Code" aria-label="default input example" name="cvv_code" onChange={handleChange} value={credit.cvv_code}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Expiration Date</p>
                            </div>
                            <div className="col-md-7 mb-3">
                                <input className="form-control" type="number" placeholder="Month" aria-label="default input example" name="expiration_month" onChange={handleChange} value={credit.expiration_month}/>
                            </div>
                            <div className="col-md-3">
                                <input className="form-control" type="number" placeholder="Year" aria-label="default input example" name="expiration_year" onChange={handleChange} value={credit.expiration_year}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-5">
                <h4>Review Order</h4>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <p>Total Quantity</p>
                            </div>
                            <div className="col-3">
                                <p>:</p>
                            </div>
                            <div className="col">
                                <p>{quantity}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <p>Shipping Fee</p>
                            </div>
                            <div className="col-3">
                                <p>:</p>
                            </div>
                            <div className="col">
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <p>Total Price</p>
                            </div>
                            <div className="col-3">
                                <p>:</p>
                            </div>
                            <div className="col">
                                <p>{price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-5">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-info" onClick={e=>navigate("/cart")}>Cancel</button>
                    <button type="button" className="btn btn-info" onClick={onSubmit}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
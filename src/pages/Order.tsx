import React from "react";

const Order = () =>{
    return(
        <div className="order container-fluid">
            <div className="row mx-5">
                <h4>Shipping Address</h4>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Address" aria-label="default input example"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="City" aria-label="default input example"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Province" aria-label="default input example"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Zip Code" aria-label="default input example"/>
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
                                <input className="form-control" type="text" value="Credit/Debit Card" aria-label="readonly input example" readOnly/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Name of Card" aria-label="default input example"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <input className="form-control" type="text" placeholder="Card Number" aria-label="default input example"/>
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" type="text" placeholder="CVV Code" aria-label="default input example"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <p>Expiration Date</p>
                            </div>
                            <div className="col-md-7 mb-3">
                                <input className="form-control" type="text" placeholder="Month" aria-label="default input example"/>
                            </div>
                            <div className="col-md-3">
                                <input className="form-control" type="text" placeholder="Year" aria-label="default input example"/>
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
                                <p>8</p>
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
                                <p>Rp. 350.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-5">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-info">Cancel</button>
                    <button type="button" className="btn btn-info">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
import React from "react";
import placeholder from "../assets/imgPlaceholder.svg"

const Addproduct = () => {
    return(
        <div className="add-product container mb-5">
            <div className='row justify-content-center'>
                <div className='col-md-6 d-flex justify-content-center'>
                    <div className="text-center">
                        <div className="row">
                            <div className='imageHolder' style={{ width: "300px", height: "300px" }}>
                                <img src={placeholder} className='w-100 h-100' style={{ borderRadius: "12px" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="productImage" className="form-label">Choose Product Image</label>
                                <input className="form-control" type="file" id="productImage"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <form>
                        <div className="row mb-3 mt-4">
                            <label htmlFor="productName" className="col-md-3 col-form-label">Name</label>
                            <div className="col-md-8">
                            <input type="text" className="form-control" id="productName" placeholder="Enter Product Name"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productCategory" className="col-md-3 col-form-label">Category</label>
                            <div className="col-md-8">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productDescription" className="col-md-3 col-form-label">Description</label>
                            <div className="col-md-8">
                            <textarea className="form-control" id="productDescription" placeholder="Enter Product Description"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productPrice" className="col-md-3 col-form-label">Price</label>
                            <div className="col-md-8">
                            <input type="text" className="form-control" id="productPrice" placeholder="Enter Product Price"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productQuantity" className="col-md-3 col-form-label">Quantity</label>
                            <div className="col-md-8">
                            <input type="text" className="form-control" id="productQuantity" placeholder="Enter Product Quantity"/>
                            </div>
                        </div>
                        <div className="row md-3">
                            <div className="col-md-11">
                                <button type="submit" className="btn btn-info" style={{width:"100%"}}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproduct;
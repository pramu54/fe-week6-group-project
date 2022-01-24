import axios from "axios";
import React, { useEffect, useState } from "react";
import placeholder from "../assets/imgPlaceholder.svg"

const Addproduct = () => {
    const [input, setInput] = useState({
        id_product_category: "",
        name: "",
        description: "",
        price: "",
        quantity: "",
        url_photo: "https://pbs.twimg.com/profile_images/1305491092918292485/q6p8QmUl_400x400.jpg"
    });

    const [category, setCategory] = useState<any>([]);

    useEffect(()=>{
        getCategory();
    }, [])

    const getCategory = async() => {
        await axios
        .get("/productcategory")
        .then((res)=>{
            const { data } = res;
            console.log(res);
            setCategory(data.data)
            
        }).catch((err)=>{
            console.log(err);
        })
    }

    const onSubmit = (values: any) => {
        //values.preventDefault()
        console.log('Success:', input);

        axios.post(`/products`,{
            id_product_category: parseInt(input.id_product_category),
            name: input.name,
            description: input.description,
            price: parseInt(input.price),
            quantity: parseInt(input.quantity),
            url_photo: input.url_photo
        }).then((e) => {
            alert("Add Product Berhasil !")
            console.log(e)
            setInput({
                id_product_category: "",
                name: "",
                description: "",
                price: "",
                quantity: "",
                url_photo: "https://pbs.twimg.com/profile_images/1305491092918292485/q6p8QmUl_400x400.jpg"
            });
        }).catch((e) => {
            alert(e)
        })
    };

    const handleChange = (e: any) => {
        let value = e.target.value
        let name = e.target.name
        

        setInput({ ...input, [name] : value})
    }
    console.log(input);
    

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
                            <input type="text" className="form-control" name="name" id="productName" placeholder="Enter Product Name" onChange={handleChange} value={input.name}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productCategory" className="col-md-3 col-form-label">Category</label>
                            <div className="col-md-8">
                            
                                <select className="form-select" name="category" aria-label="Default select example" onChange={e => setInput(input=>({...input, id_product_category:e.target.value}))}>
                                    <option value="default">Select</option>
                                    {category.map((item:any)=>(
                                        <option key={item.id} value={item.id}>{item.name_category}</option>
                                    ))}
                                </select>
                            
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productDescription" className="col-md-3 col-form-label">Description</label>
                            <div className="col-md-8">
                            <textarea className="form-control" id="productDescription" name="description" placeholder="Enter Product Description" onChange={handleChange} value={input.description}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productPrice" className="col-md-3 col-form-label">Price</label>
                            <div className="col-md-8">
                            <input type="number" className="form-control" id="productPrice" name="price" placeholder="Enter Product Price" onChange={handleChange} value={input.price}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="productQuantity" className="col-md-3 col-form-label">Quantity</label>
                            <div className="col-md-8">
                            <input type="number" className="form-control" id="productQuantity" name="quantity" placeholder="Enter Product Quantity" onChange={handleChange} value={input.quantity}/>
                            </div>
                        </div>
                        <div className="row md-3">
                            <div className="col-md-11">
                                <button type="button" className="btn btn-info" style={{width:"100%"}} onClick={onSubmit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproduct;
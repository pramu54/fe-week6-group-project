import axios from "axios";
import React, { useState } from "react";
import placeholder from "../assets/imgPlaceholder.svg"

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        born_date: "",
        gender: "",
        url_photo: "https://pbs.twimg.com/profile_images/1305491092918292485/q6p8QmUl_400x400.jpg"
    });

    const onSubmit = (values: any) => {
        //values.preventDefault()
        console.log('Success:', input);

        axios.post(`/users`,{
            name: input.name,
            username: input.username,
            email: input.email,
            password: input.password,
            born_date: input.born_date,
            gender: input.gender,
            url_photo: input.url_photo
        }).then((e) => {
            alert("Register Berhasil !")
            console.log(e)
            setInput({
                name: "",
                username: "",
                email: "",
                password: "",
                born_date: "",
                gender: "",
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
        <div className="register container">
            <h1>Register</h1>
            <div className="d-md-flex flex-row-reverse">
                <div className="text-center">
                    <div className="row">
                        <img src={placeholder}></img>     
                    </div>
                    <div className="row">
                        {/* <button type="button" className="btn btn-info">Browse</button>   */}
                        <div className="mb-3">
                            <input className="form-control" type="file" accept=".png" id="profileImage"/>
                        </div>
                    </div>
                </div>
                <form className="flex-grow-1">
                    <div className="row mb-3">
                        <label htmlFor="inputFullname" className="col-md-3 col-form-label">Fullname</label>
                        <div className="col-md-8">
                        <input type="text" name="name" className="form-control" id="inputFullname" onChange={handleChange} value={input.name}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputBirthday" className="col-md-3 col-form-label">Date of Birth</label>
                        <div className="col-md-8">
                        <input type="text" name="born_date" className="form-control" id="inputBirthday" onChange={handleChange} value={input.born_date}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="inputGender" className="col-md-3 col-form-label">Gender</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadioMale" value="Male" onChange={e => setInput(input=>({...input, gender:e.target.value}))}/>
                                <label className="form-check-label" htmlFor="inlineRadioMale">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadioFemale" value="Female" onChange={e => setInput(input=>({...input, gender:e.target.value}))}/>
                                <label className="form-check-label" htmlFor="inlineRadioFemale">Female</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Email</label>
                        <div className="col-md-8">
                        <input type="email" name="email" className="form-control" id="inputEmail3" onChange={handleChange} value={input.email}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputUsername" className="col-md-3 col-form-label">Username</label>
                        <div className="col-md-8">
                        <input type="text" name="username" className="form-control" id="inputUsername" onChange={handleChange} value={input.username}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-md-3 col-form-label">Password</label>
                        <div className="col-md-8">
                        <input type="password" name="password" className="form-control" id="inputPassword3" onChange={handleChange} value={input.password}/>
                        </div>
                    </div>
                    <div className="row md-3">
                        <div className="col-md-11">
                            <button type="button" className="btn btn-info" style={{width:"100%"}} onClick={onSubmit}>Register</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row md-3">
                        <div className="col" style={{textAlign: "center"}}>
                            <span>Already have an account? <a href="#">Login</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
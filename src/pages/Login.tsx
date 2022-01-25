import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    let navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e: any) => {
        let value = e.target.value
        let name = e.target.name

        setInput({ ...input, [name] : value})
    }

    const onSubmit = (values: any) => {
        //values.preventDefault()
        console.log('Success:', input);

        axios.post(`/login`,{
            username: input.username,
            password: input.password
        }).then((e) => {
            alert("Login Berhasil !");
            console.log(e);
            let token = e.data.token;
            let id = e.data.user_id;
            
            localStorage.setItem("loginToken", token);
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("id", JSON.stringify(id));
            navigate("/profile");
            
        }).catch((e) => {
            alert(e);
        })
        // localStorage.clear()
    };

    console.log(input)



    return(
        <div className="container" style={{height:"100vh"}}>
            <div className="row">
                <div className="col">
                    <div className="login card sm-5">
                        <div className="card-head ms-5 mt-4">
                            <h1>Login</h1>
                        </div>
                        <div className="cbody card-body">
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Username</label>
                                    <div className="col-md-8">
                                    <input type="email" className="form-control" id="inputEmail3" name="username"
                                        onChange={handleChange} value={input.username}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-md-3 col-form-label">Password</label>
                                    <div className="col-md-8">
                                    <input type="password" className="form-control" id="inputPassword3" name="password" onChange={handleChange} value={input.password}/>
                                    </div>
                                </div>
                                <div className="row md-3">
                                    <div className="col-md-11">
                                        <button type="button" className="btn btn-info" style={{width:"100%"}} onClick={(onSubmit)}>Login</button>
                                    </div>
                                </div>
                                <br/>
                                <div className="row md-3">
                                    <div className="col" style={{textAlign: "center"}}>
                                        <span>Don't have an account? <a onClick={()=>navigate("/register")}>Register</a></span>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Login;
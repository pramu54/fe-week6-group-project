import React from "react";

const Login = () =>{
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
                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email/Username</label>
                                    <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputEmail3"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword3"/>
                                    </div>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Login;
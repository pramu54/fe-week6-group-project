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
                                    <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Email/Username</label>
                                    <div className="col-md-8">
                                    <input type="email" className="form-control" id="inputEmail3"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-md-3 col-form-label">Password</label>
                                    <div className="col-md-8">
                                    <input type="password" className="form-control" id="inputPassword3"/>
                                    </div>
                                </div>
                                <div className="row md-3">
                                    <div className="col-md-11">
                                        <button type="submit" className="btn btn-primary" style={{width:"100%"}}>Login</button>
                                    </div>
                                </div>
                                <br/>
                                <div className="row md-3">
                                    <div className="col" style={{textAlign: "center"}}>
                                        <span>Don't have an account? <a href="#">Register</a></span>
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
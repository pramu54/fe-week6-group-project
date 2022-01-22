import React from "react";
import placeholder from "../assets/imgPlaceholder.svg"

const Register = () => {
    return(
        <div className="register container">
            <h1>Register</h1>
            <div className="d-md-flex flex-row-reverse">
                <div className="text-center">
                    <div className="row">
                        <img src={placeholder}></img>     
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-info">Browse</button>  
                    </div>
                </div>
                <form className="flex-grow-1">
                    <div className="row mb-3">
                        <label htmlFor="inputFullname" className="col-md-3 col-form-label">Fullname</label>
                        <div className="col-md-8">
                        <input type="text" className="form-control" id="inputFullname"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputBirthday" className="col-md-3 col-form-label">Date of Birth</label>
                        <div className="col-md-8">
                        <input type="text" className="form-control" id="inputBirthday"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="inputGender" className="col-md-3 col-form-label">Gender</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioMale" value="Male"/>
                                <label className="form-check-label" htmlFor="inlineRadioMale">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioFemale" value="Female"/>
                                <label className="form-check-label" htmlFor="inlineRadioFemale">Female</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Email</label>
                        <div className="col-md-8">
                        <input type="email" className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputUsername" className="col-md-3 col-form-label">Username</label>
                        <div className="col-md-8">
                        <input type="text" className="form-control" id="inputUsername"/>
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
                            <button type="submit" className="btn btn-info" style={{width:"100%"}}>Register</button>
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
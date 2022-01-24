import axios from "axios";
import React, { useEffect, useState } from "react";
import placeholder from "../assets/imgPlaceholder.svg"

const Profile = () => {
    const [profile, setProfile] = useState<any>({});
    //DUMMY PRODUCT
    // const [profile, setProfile] = useState({
    //     fullname: '',
    //     birthday:'',
    //     gender:'',
    //     email:'',
    //     username:'',
    //     password:''
    // })

    useEffect(()=>{
        getData();
    }, [])

    const getData = async() => {
        await axios
        .get(`/users/${localStorage.getItem("id")}`)
        .then((res)=>{
            const { data } = res;
            //console.log(data);
            
            setProfile(data.data)
        }).catch((err)=>{
            console.log(err);
        })
        //.finally(()=> setIsReady(true));
    }
    
    console.log(profile);
    

    return(
    
    <div className="profile container">
            <h1>Profile</h1>
            <div className="d-md-flex flex-row-reverse">
                {/* <input type="email" placeholder="Dua" className="p-2" id="inputEmail3"/> */}
                <div className="text-center">
                    <div className="row">
                        <img src={profile.url_photo}></img>     
                    </div>
                </div>
                {/* {profile} */}
                <form className="flex-grow-1">
                    <div className="row mb-3">
                        <label htmlFor="inputFullname" className="col-md-3 col-form-label">Fullname</label>
                        <div className="col-md-8">
                        <p>{profile.name}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputBirthday" className="col-md-3 col-form-label">Date of Birth</label>
                        <div className="col-md-8">
                        <p>{profile.born_date}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputGender" className="col-md-3 col-form-label">Gender</label>
                        <div className="col-md-8">
                        <p>{profile.gender}</p>
                        </div>
                        
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-md-3 col-form-label">Email</label>
                        <div className="col-md-8">
                        <p>{profile.email}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputUsername" className="col-md-3 col-form-label">Username</label>
                        <div className="col-md-8">
                        <p>{profile.username}</p>
                        </div>
                    </div>
                    <div className="row md-3">
                        <div className="col-md-11">
                            <button type="submit" className="btn btn-info" style={{width:"100%"}}>Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile;
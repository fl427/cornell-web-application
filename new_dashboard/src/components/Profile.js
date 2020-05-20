import React, { useState,useEffect } from "react";
import { MDBView, MDBMask, MDBCol,MDBRow} from "mdbreact";

import './css/Profile.css'
import avatar_black from '../black.png'
import avatar_bg from '../avatar_bg.png'

function Profile() {
    const [username,setUsername] = useState("Little Black");
    const [email,setEmail] = useState("pg477@cornell.edu");

    return (
        <div>
        <MDBView>
            <img className="avatar-bg" src={avatar_bg}/>
            <MDBMask className="flex-center" overlay="grey-slight">

            </MDBMask>

        </MDBView>
            <div className="profile">
                <MDBCol>
                    <MDBRow className="avatar-box">
                        <div style={{height:"5.9rem",width:"5.9rem",backgroundColor:"white"}} className="rounded-circle move">

                            <img className="avatar img-fluid rounded-circle" src={avatar_black} alt="Avatar"/>

                        </div>
                    </MDBRow>

                    <MDBRow style={{marginLeft:"1rem",textAlign: "left"}} >
                        <MDBCol>
                            <MDBRow>
                                <p className="username">{username}</p>
                            </MDBRow>
                            <MDBRow>
                                <p className="email">{email}</p>
                            </MDBRow>

                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </div>
        </div>

    );
}

export default Profile;
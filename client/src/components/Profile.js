import React, {useState, useEffect, useContext} from "react";
import { MDBView, MDBMask, MDBCol,MDBRow} from "mdbreact";

import './css/Profile.css'
import avatar_black from '../pikachu.jpeg'
import avatar_bg from '../avatar_bg.png'
import {AuthContext} from "../shared/context/auth-context";
import {useHttpClient} from "../shared/hooks/http-hook";
import {useHistory, useParams} from "react-router-dom";

const Profile = () => {
    const auth = useContext(AuthContext);
    const userId = auth.userId

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUser, setLoadedUser] = useState();

    useEffect(() => {
        console.log(userId)
        const fetchUser = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/users/${userId}`
                );
                setLoadedUser(responseData.user);
            } catch (err) {}
        };
        fetchUser();
    }, [sendRequest, userId]);

    // console.log(loadedUser)

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
                            {loadedUser && (
                            <img className="avatar rounded-circle" src={`http://localhost:5000/${loadedUser.image}`} alt="Avatar"/>
                            )}
                        </div>
                    </MDBRow>

                    <MDBRow style={{marginLeft:"1rem",textAlign: "left"}} >
                        <MDBCol>
                            <MDBRow>
                                {loadedUser && (
                                <p className="username">{loadedUser.name}</p>
                                )}
                            </MDBRow>
                            <MDBRow>
                                {loadedUser && (
                                <p className="email">{loadedUser.email}</p>
                                )}
                            </MDBRow>

                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </div>
        </div>

    );
}

export default Profile;
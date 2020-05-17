import React, {useState,useEffect} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBView} from "mdbreact";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

import bg from '../bg2.png';

function Home2() {
    const [visible,setVisible] = useState({'ETCO2':true});
    const clickToggle = (vitalLabel)=>{
        let temp = JSON.parse(JSON.stringify(visible));
        temp[vitalLabel]=!temp[vitalLabel];
        setVisible(temp);
    };

    const hideCard = (vitalLabel)=>{
        let temp = JSON.parse(JSON.stringify(visible));
        temp[vitalLabel]=false;
        setVisible(temp);
    }
    return (
        <div>
            <MDBView>
                <img
                    src={bg}
                    className="img-fluid"
                    alt=""
                    style={{width:"calc(100vw)",height:"1500px"}}
                />
                <MDBMask className="text-black text-center" style={{top:"5rem",left:"-3.1rem"}}>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol lg="3" md="6"><Sidebar clickFunc={clickToggle}/></MDBCol>
                            <MDBCol lg="9" md="6">
                                <MDBRow style={{marginRight:"-60px"}}>
                                    <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol md="12"  lg="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>



                                </MDBRow>


                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>

                </MDBMask>
            </MDBView>


        </div>
    );
}

export default Home2;

import React, {useState,useEffect} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBView} from "mdbreact";
import Sidebar from "./Sidebar";
import Card from "./card/Card";

import bg from '../bg2.png';

function Home() {
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
                <MDBMask pattern="white-dark" className="text-black text-center" style={{top:"80px",left:"-55px"}}>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size="3"><Sidebar clickFunc={clickToggle}/></MDBCol>
                            <MDBCol size="9">
                                <MDBRow style={{marginRight:"-60px"}}>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
                                        {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}
                                    </MDBCol>
                                    <MDBCol size="4" style={{marginBottom: "2rem"}} >
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

export default Home;

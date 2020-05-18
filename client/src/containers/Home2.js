import React, {useState,useEffect} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBView} from "mdbreact";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Card2 from "../components/Card2";

import bg from '../bg2.png';

function Home2() {
    const [visible,setVisible] = useState({'Heart Rate':true, 'ETCO2':true, 'AWRR':true, 'SPO2':true, 'TEMP':true,
        'NIBP':true,});
    const clickToggle = (vitalLabel)=>{
        let temp = JSON.parse(JSON.stringify(visible));
        temp[vitalLabel] =! temp[vitalLabel];
        setVisible(temp);
    };

    const hideCard = (vitalLabel)=>{
        let temp = JSON.parse(JSON.stringify(visible));
        temp[vitalLabel] = false;
        setVisible(temp);
    }

    const visibleAll = (labelList)=>{
        let temp = JSON.parse(JSON.stringify(visible));
        for(let i in labelList){
            temp[labelList[i]] =! temp[labelList[i]];
        }
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
                            <MDBCol lg="3" md="6"><Sidebar clickFunc={clickToggle} visibleAllFunc={visibleAll}/></MDBCol>
                            <MDBCol lg="9" md="6">
                                <MDBRow style={{marginRight:"-60px"}}>
                                    {visible['Heart Rate']===true?(<Card vital="Heart Rate" unit="bpm" hideFunc={hideCard}/>):null}

                                    {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}

                                    {visible['AWRR']===true?(<Card vital="AWRR" unit="bpm" hideFunc={hideCard}/>):null}

                                    {visible['SPO2']===true?(<Card vital="SPO2" unit="%" hideFunc={hideCard}/>):null}

                                    {visible['TEMP']===true?(<Card vital="TEMP" unit="°F" hideFunc={hideCard}/>):null}

                                    {visible['NIBP']===true?(<Card vital="NIBP" unit="mmHg" hideFunc={hideCard}/>):null}

                                    <Card2 sound="Left Lung Sound" unit="mmHg" hideFunc={hideCard}/>
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

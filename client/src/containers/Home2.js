import React, {useState,useEffect} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBMask, MDBView, MDBDropdownItem, MDBDropdownMenu} from "mdbreact";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Card2 from "../components/Card2";


function Home2() {
    const [visible,setVisible] = useState({'Heart Rate':true, 'ETCO2':true, 'AWRR':true, 'SPO2':true, 'TEMP':true,
        'NIBP':true, 'Simulated Vocalizations': true, 'Heart Sounds': true, 'Left Lung Sounds': true, 'Right Lung Sounds': true});

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

    let vocalItems = ["Dog Bark Growl", "Dog big Bark", "Dog Bark Snarl"];
    let lungItems = ["Normal","Coarse Crakeless","Fine Crakeless","Whezzes","Stridor","stertor", "Same As Right Lung"];
    let heartItems = ["Normal","Systolic Murmur","Pansystolic Murmur","Poloystolic Murmur","Continuous Murmur",
    "Diastolic Murmur","Gallop"];


    return (
            <div style={{marginLeft:"-4.8rem"}}>
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol lg="3" md="6" ><Sidebar clickFunc={clickToggle} visibleAllFunc={visibleAll}/></MDBCol>
                            <MDBCol lg="9" md="6">
                                <MDBRow style={{marginRight:"-6rem"}}>
                                    {visible['Heart Rate']===true?(<Card vital="Heart Rate" unit="bpm" hideFunc={hideCard}/>):null}

                                    {visible['ETCO2']===true?(<Card vital="ETCO2" unit="mmHg" hideFunc={hideCard}/>):null}

                                    {visible['AWRR']===true?(<Card vital="AWRR" unit="bpm" hideFunc={hideCard}/>):null}

                                    {visible['SPO2']===true?(<Card vital="SPO2" unit="%" hideFunc={hideCard}/>):null}

                                    {visible['TEMP']===true?(<Card vital="TEMP" unit="°F" hideFunc={hideCard}/>):null}

                                    {visible['NIBP']===true?(<Card vital="NIBP" unit="mmHg" hideFunc={hideCard}/>):null}

                                    {visible['Simulated Vocalizations']===true?(<Card2 sound="Simulated Vocalizations" items={vocalItems} hideFunc={hideCard}/>):null}

                                    {visible['Heart Sounds']===true?(<Card2 sound="Heart Sounds" items={heartItems} hideFunc={hideCard}/>):null}

                                    {visible['Left Lung Sounds']===true?(<Card2 sound="Left Lung Sounds" items={lungItems} hideFunc={hideCard}/>):null}

                                    {visible['Right Lung Sounds']===true?(<Card2 sound="Right Lung Sounds" items={lungItems} hideFunc={hideCard}/>):null}


                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </div>


    );
}

export default Home2;

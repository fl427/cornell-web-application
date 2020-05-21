import React, {useState,useEffect} from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Card2 from "../components/Card2";

import {fetchValue} from "../request/fetch";




function Home2() {
    const [visible, setVisible] = useState({'Heart Rate':true, 'ETCO2':true, 'AWRR':true, 'SPO2':true, 'TEMP':true,
        'NIBP':true, 'Simulated Vocalizations': true, 'Heart Sounds': true, 'Left Lung Sounds': true, 'Right Lung Sounds': true,
        'Left Femoral Pulse': true, 'Right Femoral Pulse': true, 'Left Dorsal Pulse': true, 'Right Dorsal Pulse': true});

    const [values, setValues] = useState({'Heart Rate':90, 'ETCO2':32, 'AWRR':6, 'SPO2':95, 'TEMP':102,
        'NIBP':50, 'Simulated Vocalizations': ["Dog Bark Growl",3], 'Heart Sounds': ["Normal",8], 'Left Lung Sounds': ["Normal",6],
        'Right Lung Sounds': ["Coarse Crakeless",2]});

    const [sounds, setSounds] = useState({"Simulated Vocalizations": [0,0], "Heart Sounds": [0,0], "Left Lung Sounds": [0,0],
        "Right Lung Sounds": [0,0], "Left Femoral Pulse": [0,0], "Right Femoral Pulse": [0,0], "Left Dorsal Pulse": [0,0],
        "Right Dorsal Pulse": [0,0]});

    const [probes, setProbes] = useState({"ECG": true, "ETCO2": true, "SPO2": true, "TEMP": true, "Cuff": true});

    const convertDict = {'Heart Rate':"heartRate", 'ETCO2':"etco2", 'AWRR':"awrr", 'SPO2':"spo2", 'TEMP':"temp",
        'NIBP':"nibp"};

    const convertName = (frontendName) => {
        return convertDict[frontendName];
    };

    let vocalItems = ["Dog Bark Growl", "Dog big Bark", "Dog Bark Snarl"];
    let lungItems = ["Normal","Coarse Crakeless","Fine Crakeless","Whezzes","Stridor","stertor", "Same As Right Lung"];
    let heartItems = ["Normal","Systolic Murmur","Pansystolic Murmur","Poloystolic Murmur","Continuous Murmur",
        "Diastolic Murmur","Gallop"];
    let pulseItems = ["None", "Weak", "Medium", "Strong"];

    let vitalList = ["Heart Rate", "ETCO2", "AWRR", "SPO2", "TEMP", "NIBP"];
    let unitList = ["bpm", "mmHg", "bpm", "%", "°F", "mmHg"];
    let soundList = ["Simulated Vocalizations", "Heart Sounds", "Left Lung Sounds", "Right Lung Sounds",
        "Left Femoral Pulse", "Right Femoral Pulse", "Left Dorsal Pulse", "Right Dorsal Pulse"];
    let vitalElements = new Array();



    useEffect(() => {

        setTimeout(async() => {
            let temp = JSON.parse(JSON.stringify(values));
            let temp2 = JSON.parse(JSON.stringify(sounds));

            let allValues = await fetchValue("/api/vitals");

            console.log(allValues);

            if (allValues === undefined || allValues.data === undefined || allValues.data.values ===undefined){
                for(let i in vitalList){
                    temp[vitalList[i]] =  "--";
                    temp2[soundList[i]] = [0,"--"];
                }
            }else{
                for(let i in vitalList){
                    const name = vitalList[i];

                    const value = allValues.data.values.vital[convertName(name)];

                    temp[name] = value!==undefined ? value : "--";

                }
                for(let i in soundList){
                    const name2 =soundList[i];

                    const value2 = allValues.data.values.soundpulse[convertName(name2)];

                    temp[name2] = value2!==undefined ? value2 : "--";

                }
            }

            setValues(temp);
        }, 1000);


    });

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



    for (let i in vitalList){
        vitalElements.push(visible[vitalList[i]]===true?(
            <Card vital={vitalList[i]} unit={unitList[i]} currentValue={values[vitalList[i]]} hideFunc={hideCard}/>):null);
    }



    return (
            <div style={{marginLeft:"-4.8rem"}}>
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol lg="3" md="6" ><Sidebar clickFunc={clickToggle} visibleAllFunc={visibleAll}/></MDBCol>
                            <MDBCol lg="9" md="6">
                                <MDBRow style={{marginRight:"-7.0rem"}}>
                                    {vitalElements}

                                    {visible[soundList[1]]===true?(<Card2 sound={soundList[1]} currentValues={sounds[soundList[1]]} items={vocalItems} hideFunc={hideCard}/>):null}

                                    {visible[soundList[2]]===true?(<Card2 sound={soundList[2]} currentValues={sounds[soundList[2]]} items={heartItems} hideFunc={hideCard}/>):null}

                                    {visible[soundList[3]]===true?(<Card2 sound={soundList[3]} currentValues={sounds[soundList[3]]} items={lungItems} hideFunc={hideCard}/>):null}

                                    {visible[soundList[4]]===true?(<Card2 sound={soundList[4]} currentValues={sounds[soundList[4]]} items={lungItems} hideFunc={hideCard}/>):null}

                                    {visible[soundList[5]]===true?(<Card2 sound={soundList[5]} currentValues={sounds[soundList[5]]} items={pulseItems} hideFunc={hideCard}/>):null}

                                    {visible[soundList[6]]===true?(<Card2 sound={soundList[6]} currentValues={sounds[soundList[6]]} items={pulseItems} hideFunc={hideCard}/>):null}

                                    {visible[soundList[7]]===true?(<Card2 sound={soundList[7]} currentValues={sounds[soundList[7]]} items={pulseItems} hideFunc={hideCard}/>):null}

                                    {visible[soundList[8]]===true?(<Card2 sound={soundList[8]} currentValues={sounds[soundList[8]]} items={pulseItems} hideFunc={hideCard}/>):null}
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </div>


    );
}

export default Home2;

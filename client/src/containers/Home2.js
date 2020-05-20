import React, {useState,useEffect} from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Card2 from "../components/Card2";

import {fetchValue} from "../request/fetch";




function Home2() {
    const [visible,setVisible] = useState({'Heart Rate':true, 'ETCO2':true, 'AWRR':true, 'SPO2':true, 'TEMP':true,
        'NIBP':true, 'Simulated Vocalizations': true, 'Heart Sounds': true, 'Left Lung Sounds': true, 'Right Lung Sounds': true,
        'Left Femoral Pulse': true, 'Right Femoral Pulse': true, 'Left Dorsal Pulse': true, 'Right Dorsal Pulse': true});

    const [values,setValues] = useState({'Heart Rate':90, 'ETCO2':32, 'AWRR':6, 'SPO2':95, 'TEMP':102,
        'NIBP':50, 'Simulated Vocalizations': ["Dog Bark Growl",3], 'Heart Sounds': ["Normal",8], 'Left Lung Sounds': ["Normal",6],
        'Right Lung Sounds': ["Coarse Crakeless",2]});

    const convertDict = {'Heart Rate':"heartRate", 'ETCO2':"etco2", 'AWRR':"awrr", 'SPO2':"spo2", 'TEMP':"temp",
        'NIBP':"nibp"};

    const convertName = (frontendName) => {
        return convertDict[frontendName];
    };

    let vocalItems = ["Dog Bark Growl", "Dog big Bark", "Dog Bark Snarl"];
    let lungItems = ["Normal","Coarse Crakeless","Fine Crakeless","Whezzes","Stridor","stertor", "Same As Right Lung"];
    let heartItems = ["Normal","Systolic Murmur","Pansystolic Murmur","Poloystolic Murmur","Continuous Murmur",
        "Diastolic Murmur","Gallop"];
    let pulseItems = ["None", "Weak", "Medium", "Strong"]

    let vitalList = ["Heart Rate", "ETCO2", "AWRR", "SPO2", "TEMP", "NIBP"];
    let unitList = ["bpm", "mmHg", "bpm", "%", "°F", "mmHg"];
    let soundList = ["Simulated Vocalizations", "Heart Sounds", "Left Lung Sounds", "Right Lung Sounds",
        "Left Femoral Pulse", "Right Femoral Pulse", "Left Dorsal Pulse", "Right Dorsal Pulse"];
    let vitalElements = new Array();



    useEffect(() => {
        //postValue("http://localhost:5000/",{vital:"heartRate",target:20,duration:10});

        setTimeout(async() => {
            let temp = JSON.parse(JSON.stringify(values));

            let vitalValues = await fetchValue("/api/vitals");

            if (vitalValues === undefined){
                for(let i in vitalList){
                    temp[vitalList[i]] =  "--";
                }
            }else{
                for(let i in vitalList){
                    const name = vitalList[i];
                    const value = vitalValues.data.vital[convertName(name)];
                    temp[name] = value!==undefined ? value : "--";
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
                                <MDBRow style={{marginRight:"-6rem"}}>
                                    {vitalElements}

                                    {visible['Simulated Vocalizations']===true?(<Card2 sound="Simulated Vocalizations" items={vocalItems} hideFunc={hideCard}/>):null}

                                    {visible['Heart Sounds']===true?(<Card2 sound="Heart Sounds" items={heartItems} hideFunc={hideCard}/>):null}

                                    {visible['Left Lung Sounds']===true?(<Card2 sound="Left Lung Sounds" items={lungItems} hideFunc={hideCard}/>):null}

                                    {visible['Right Lung Sounds']===true?(<Card2 sound="Right Lung Sounds" items={lungItems} hideFunc={hideCard}/>):null}

                                    {visible['Left Femoral Pulse']===true?(<Card2 sound="Left Femoral Pulse" items={lungItems} hideFunc={hideCard}/>):null}
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </div>


    );
}

export default Home2;

import { useEffect , useState } from "react";
import React from 'react';

const Covid=()=>{
    const [data, setdata] = useState([]);
    const getCovidData=async()=>{
        try{
            var response=await fetch("https://api.covid19india.org/data.json");
            var data=await response.json();
            console.log(data.statewise[0]);
            setdata(data.statewise[0])
        }catch(err){
            throw err;
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return(
        <>
        <h1>covid data!</h1>
        <ul>
            <li className="card">
                <div className="card_main">
                <div className="inner">
                    <p className="card_name">
                        <span>OUR COUNTRY</span>
                    </p>
                    <p className="card_total card_small">
                        Maharashtra:active cases: {data.active}
                    </p>
                </div>
                </div>
            </li>
        </ul>
        </>
    )
}

export default Covid;
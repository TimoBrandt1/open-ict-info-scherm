import React from 'react'
import '../../App.css'
import { useState, useEffect } from 'react';


function BasicScreen(data) {
    //const [data, setData] = useState({});
    //const getObjectFromDatabase = async (setFunction) => {
        //const response = await fetch('http://145.89.192.107/api/formKennisdeling/'+id.id);
        //const data = await response.json();
        //setFunction(data[0]);
    //}

    //useEffect(() => {
        //getObjectFromDatabase(setData);
    //}, [setData]);


    return (

                //{Object.keys(data).map((key) => (
                    //<div>
                        //<p>{key}: {data[key]}</p>
                    //</div>
                //))}
        <div>
            <h1 className='Form'>Form Screen</h1>
            <div>
                {Object.keys(data.data).map((key) => (
                    <div>
                        <p>{key}: {data.data[key]}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default BasicScreen;
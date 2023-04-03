import React from "react";
import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import BasicScreen from "../../components/screen/BasicScreen";

function Screens () {

    const [data, setData] = useState([]); // array of objects
    const getData = async () => {
            const response = await fetch('http://145.89.192.107/api/formkennisdeling');
            const singleData = await response.json();
            setData(singleData);
    }
    useEffect(() => {
        getData();
    }, []);

    const deleteScreen = (id) => {
        fetch('http://145.89.192.107/api/deleteScreen/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify()
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    window.location.reload();
                })
                .catch((error) => {
                    console.error('Error:', error);
                }
            );

    }

    if (data.length !== 0) {

    return (
                //<BasicScreen id={id+1} />
        <div>
            {Array.from(Array(data.length).keys()).map((id) => (
                <div>
                <div style={{border: "1px solid black"}}>
                    <BasicScreen data={data[id]} />
                </div>
                <button onClick={() => deleteScreen(id+1)}>Delete</button>
                </div>
                
            ))}
        </div>
    )
    } else {
        return (
            <div>
                <h1>There are no screens</h1>
            </div>
        )
    }
}


export default Screens;
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import BasicScreen from "../screen/BasicScreen";

function Screens () {
    const [maxId, setMaxId] = useState(0);

    const getMaxId = async () => {
        const response = await fetch('http://145.89.192.107/api/getMaxId');
        const data = await response.json();
        if (data[0]['MAX(id)'] === null || data[0]['MAX(id)'] === undefined) {
            setMaxId(0);
        }
        
        else {
            setMaxId(data[0]['MAX(id)']);
        }

    }

    useEffect(() => {
        getMaxId();
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

    if (maxId !== 0) {

    return (
        <div>
            {Array.from(Array(maxId).keys()).map((id) => (
                <div>
                <div style={{border: "1px solid black"}}>
                <BasicScreen id={id+1} />
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
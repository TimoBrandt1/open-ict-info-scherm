import React from 'react'
import '../../App.scss'
import { useState } from 'react';

function BasicScreen(storageKeyPrefix) {
    const getObjectFromLocalStorage = () => { // get the data from local storage with the prefix
        const matchingKeys = Object.keys(localStorage).filter((key) => key.startsWith(storageKeyPrefix.storageKeyPrefix));
        const result = {};
        matchingKeys.forEach((key) => {
            const value = localStorage.getItem(key);
            result[key.replace(storageKeyPrefix.storageKeyPrefix + '-', '')] = value;
        });
        return result;
    }

    const [data, setData] = useState(getObjectFromLocalStorage(storageKeyPrefix));

    const checkData = () => { // check if localStorage is not the same as data
        const newData = getObjectFromLocalStorage(storageKeyPrefix);
        if (JSON.stringify(newData) !== JSON.stringify(data)) {
            setData(newData);
        }
    }

    window.setInterval(checkData, 1000); // check every second (1000ms


    return (
        <div>
            <h1 className='Form'>Form Screen</h1>
            <div>
                {Object.keys(data).map((key) => (
                    <div>
                        <p>{key}: {data[key]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BasicScreen;
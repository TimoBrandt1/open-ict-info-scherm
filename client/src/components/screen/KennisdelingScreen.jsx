import BasicScreen from "./BasicScreen";
import {useState, useEffect} from 'react';


function KennisdelingScreen() {
    const [data, setData] = useState({});
    const getData = async () => {
        const response = await fetch('http://145.89.192.107/api/kennisdeling/13');
        const singleData = await response.json();
        setData(singleData[0]);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <BasicScreen data={data} />
    );
}

export default KennisdelingScreen;

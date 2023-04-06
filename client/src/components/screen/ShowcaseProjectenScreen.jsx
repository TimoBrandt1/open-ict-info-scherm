import FormShowcaseProjecten from "../Forms/FormShowcaseProjecten";
import BasicScreen from "./BasicScreen";
import {useState, useEffect} from 'react';
import ImageDisplay from "./ImageDisplay";


function ShowcaseProjectenScreen() {
    const [data, setData] = useState({});
    const getData = async () => {
        const response = await fetch('http://145.89.192.107/api/showcaseprojecten/17');
        const singleData = await response.json();
        setData(singleData[0]);
        console.log(singleData[0]);
    }

    useEffect(() => {
        getData();
    }, []);



    return (
 <>
            {data.image && <ImageDisplay buffer={data.image} />}
        </>
    );
}

export default ShowcaseProjectenScreen;
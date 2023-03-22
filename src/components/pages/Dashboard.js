import React from 'react'
import '../../App.css'
import './Dashboard.css';
import Navbar from "../dashboard/NavBar";
import ScreenReplication from '../screen/ScreenReplication';
import FormKennisdeling from '../Forms/FormKennisdeling';

function Dashboard() {
    return (
        <div>
            <h1 className='Screen'>Dashboard Page</h1>
            <Navbar />
            <ScreenReplication src="http://localhost:3000/screen"/>
            <FormKennisdeling />
        </div>
    );
}

export default Dashboard;
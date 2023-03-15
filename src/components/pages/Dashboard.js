import React from 'react'
import '../../App.css'
import Navbar from "../dashboard/NavBar";
import ScreenReplication from '../screen/ScreenReplication';

function Dashboard() {
    return (
        <div>
            <h1 className='Screen'>Dashboard Page</h1>
            <Navbar/>
            <ScreenReplication/>
        </div>
    );
}

export default Dashboard;
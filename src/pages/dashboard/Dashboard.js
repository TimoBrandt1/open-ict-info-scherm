import React from 'react'
import '../../App.scss'
import './style.Dashboard.scss';
import Navbar from "../../components/navbar/component.Navbar";
import ScreenReplication from '../../components/screen-replication/component.ScreenReplication';
//import FormKennisdeling from '../../components/forms/FormKennisdeling';

function Dashboard() {
    return (
        <div>
            <h1 className='Screen'>Dashboard Page</h1>
            <Navbar />
            <ScreenReplication src="/screen"/>
            {/* <FormKennisdeling /> */}
        </div>
    );
}

export default Dashboard;
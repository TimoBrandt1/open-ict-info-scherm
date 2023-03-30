import React from 'react'
import '../../App.scss'
import './style.Dashboard.scss';
import Navbar from "../../components/navbar/component.Navbar";
import ScreenReplication from '../../components/screen-replication/component.ScreenReplication';
import FormKennisdeling from '../../components/Forms/FormKennisdeling';

function Dashboard() {
    return (
        <div>
            <h1 className='Screen'>Dashboard Page | Welkom!</h1>
            <wrapper>
                <Navbar />
                <content>
                    <ScreenReplication src="/screen"/>
                    <FormKennisdeling />
                </content>
            </wrapper>
        </div>
    );
}

export default Dashboard;
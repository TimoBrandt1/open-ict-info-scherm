import React from 'react'
import '../../App.css'
import './Dashboard.scss';
import Navbar from "../dashboard/NavBar";
import ScreenReplication from '../screen/ScreenReplication';
import FormBasic from './Form';

function Dashboard() {
    return (
        <div>
            <h1 className='Screen-Dashboard'>Dashboard Page | Welkom!</h1>
            <wrapper>
                <Navbar/>
                <content>
                    <ScreenReplication/>
                    <FormBasic/>
                </content>
            </wrapper>
            
        </div>
    );
}

export default Dashboard;
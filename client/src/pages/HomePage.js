import React from 'react'
import '../App.scss'
import './dashboard/style.Dashboard.scss';
import ScreenReplication from '../components/screen-replication/component.ScreenReplication';

function HomePage() {
    return (
        <div>
                <content>
                    <ScreenReplication src="/screen"/>
                </content>
        </div>
    );
}

export default HomePage;
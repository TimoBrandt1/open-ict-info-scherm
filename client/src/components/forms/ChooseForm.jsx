import React from 'react';

function ChooseForm() {
    const Kennisdelingen = () => {
        window.location.href = '/kennisdelingform';
    };

    const Projecten = () => {
        window.location.href = '/formshowcaseprojecten';
    };


    return (
        <div>
            <button onClick={Kennisdelingen}>Kennisdelingen</button>
            <button onClick={Projecten}>Projecten</button>
        </div>
    );
}


export default ChooseForm;
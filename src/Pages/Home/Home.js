import React from 'react';
import Pakeges from '../Pakeges/Pakeges';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <div>
                <h2>Welcome Doctors-Care</h2>
            </div>
            <div>
                <Pakeges></Pakeges>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;
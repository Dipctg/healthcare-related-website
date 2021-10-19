import React from 'react';
import District from '../District/District';
import Footer from '../Footer/Footer';

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
                <District></District>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;
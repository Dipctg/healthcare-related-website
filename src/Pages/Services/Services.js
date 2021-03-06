import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('doctors.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    })
    return (
        <div>
            <div>
                <h1>Our Services</h1>
            </div>
            <div className='services-container'>


                {

                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>




        </div>
    );
};

export default Services;
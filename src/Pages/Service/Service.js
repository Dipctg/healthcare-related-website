import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, degree, catagory, img, visit, about } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>{degree}</h5>
            <h5>Visit: {visit}</h5>
            <button>Details</button>
        </div>
    );
};

export default Service;
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, degree, catagory, img, visit, about } = service;
    return (
        <div className='service pb-2'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>{degree}</h5>
            <h5>Visit: {visit}</h5>


            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name}</button>
            </Link>

        </div>
    );
};

export default Service;
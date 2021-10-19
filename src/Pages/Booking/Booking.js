import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { } = useParams();
    return (
        <div className="bg-info p-2">
            <h2>Booked Your Doctor </h2>
            <p>We send Details in Your email.</p>
            <p>Thank You , Sir.</p>
        </div>
    );
};

export default Booking;
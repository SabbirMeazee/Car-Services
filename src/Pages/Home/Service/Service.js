import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, description, price } = service
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="img" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;
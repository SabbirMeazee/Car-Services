import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, description, price } = service
    return (
        <div className='service'>
            <img src={img} alt="img" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>{name}</button>
        </div>
    );
};

export default Service;
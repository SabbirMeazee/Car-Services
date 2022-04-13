import React from 'react';

const Service = ({ service }) => {
    const { img, name, description, price } = service
    return (
        <div>
            <img src={img} alt="img" />
            <h2>{name}</h2>
        </div>
    );
};

export default Service;
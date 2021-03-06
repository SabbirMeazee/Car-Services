import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom'

const Service = ({ service }) => {
    const { img, id, name, description, price } = service
    const navigate = useNavigate()
    const handleServiceDetail = id => {
        navigate(`/service/${id}`)
    }


    return (
        <div className='service'>
            <img className='w-100' src={img} alt="img" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => handleServiceDetail(id)} className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;
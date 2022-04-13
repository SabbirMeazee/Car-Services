import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className='text-center mt-4'>
            <p>This is Copyright @ <small>{year}</small>
            </p>
        </footer>
    );
};

export default Footer
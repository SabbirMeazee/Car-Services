import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {
    return (
        <div className='register-form'>
            <h1 className='text-center text-primary mb-4'>Register here</h1>
            <form>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />
                <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                <input type="password" name="password" id="" placeholder='Enter Your Password' />
                <input type="submit" value="Submit" />
            </form>
            <p>Already Have an Account?<Link to={'/login'} className={'text-danger text-decoration-none'}>Login Here</Link> </p>
        </div>
    );
};

export default Register;
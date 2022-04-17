import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user, loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate()
    if (user) {
        console.log('user', user)
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleRegisterSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }

    return (
        <div>
            <div className='register-form'>
                <h1 className='text-center text-primary mb-4'>Register here</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <input type="text" name="name" id="" placeholder='Enter Your Name' />
                    <input type="email" name="email" id="" placeholder='Enter Your Email' required />
                    <input type="password" name="password" id="" placeholder='Enter Your Password' />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="term">Accept terms and condition</label>
                    <input disabled={!agree} className='btn my-4 btn-info w-25 d-flex d-block mx-auto justify-content-center' type="submit" value="Register" />
                </form>
                <p>Already Have an Account?<Link to={'/login'} className={'text-danger text-decoration-none'}>Login Here</Link> </p>

            </div>
            <Social></Social>
        </div>
    );
};

export default Register;
import React from 'react';
import './Social.css'
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
        errorElement = <p style={{ color: 'red', textAlign: 'center' }}>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='lineFlex'>
                <div className='line'></div>
                <p>or</p>
                <div className='line'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn my-4 btn-info w-25 d-flex d-block mx-auto justify-content-center'>
                <img width={30} src={google} alt="google logo" />
                <h3 className='px-3'>Google</h3>
            </button>
            <button className='btn my-4 btn-info w-25 d-flex d-block mx-auto justify-content-center align-items-center'>
                <img width={40} src={facebook} alt="google logo" />
                <h3 className='px-3'>Facebook</h3>
            </button>
            <button onClick={() => signInWithGithub()} className='btn my-4 btn-info w-25 d-flex d-block mx-auto justify-content-center'>
                <img width={30} src={github} alt="google logo" />
                <h3 className='px-3'>Github</h3>
            </button>
        </div>
    );
};

export default Social;
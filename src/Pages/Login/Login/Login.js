import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user, loading, error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement = <p style={{ color: 'red', textAlign: 'center' }}>Error: {error.message}</p>
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = () => {
        navigate('/register')
    }
    const forgetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email')
        }
    }
    return (
        <div >
            <h1 className='text-primary text-center'>Please Login</h1>
            <Form onSubmit={handleSubmit} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>New to Genius Car Service? <Link to={'/register'} className='text-danger text-decoration-none' onClick={navigateRegister}>Register here</Link> </p>
            <p className='text-center'>Forgot Password? <button onClick={forgetPassword} className='btn btn-link text-decoration-none'>Reset Password</button> </p>
            <Social></Social>
            <ToastContainer />
        </div>
    );
}

export default Login;
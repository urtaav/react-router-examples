import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Login.css';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Login = ({ onLogin }) => {
    const [creds, setCreds] = useState({});
    const navigate = useNavigate();


    const handleLogin = () => {
        // For demonstration purposes only. Never use these checks in production!
        // Use a proper authentication implementation
        if (creds.username === 'admin' && creds.password === "123") {
            onLogin && onLogin({ username: creds.username });

            toast.success('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                onClose: () => {
                    console.log("close");
                    navigate('/stats');
                }
            });
        } else {
            toast.error('Username o password is incorrect!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <div className='login-container'>
            <br />
            <label htmlFor="username">Username:</label><br />
            <input
                type="text"
                id="username"
                onChange={(e) => setCreds({ ...creds, username: e.target.value })}
                className='input-field'
            /><br />
            <label htmlFor="password">Password:</label><br />
            <input
                type="password"
                id="password"
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                className='input-field'
            /><br /><br />
            <button onClick={handleLogin} className='login-button'>
                Login
            </button>

            <ToastContainer />
        </div>
    )
}

export default Login

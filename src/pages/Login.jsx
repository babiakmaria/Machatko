import React from 'react';

import Main from '../components/Login/Main.js';
import { useAuth } from '../AuthWrapper.js';
import { auth } from '../components/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully:', userCredential.user);
            login(userCredential.user);
        } catch (error) {
            console.log('Login error:', error.message);
        }
    };
    return <Main onLogin={handleLogin} />;
};

export default Login;

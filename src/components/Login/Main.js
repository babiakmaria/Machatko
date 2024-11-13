import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword  } from 'firebase/auth';

import styles from '../SignUp/Main.css';


export default function Main() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword (auth, email, password);
          console.log("user logged in successfully")
          navigate('/liked');
        } catch (error) {
            console.log("Login error:", error.message);
            setError("Wrong email or password");
        }
    };

    return (
        <div className={styles.main}>
        <div className={styles.left}>
        <Link to="/"><img src="/cat.png" alt="Logo" className={styles.logo} /></Link>
            <h1 className={styles.welcome}>Welcome back!</h1>
        </div>
            <div className={styles.right}>
                <h1 className={styles.signup}>З поверненням!</h1>
                    <form className={styles.signupContainer} onSubmit={handleLogin}>
                        <input type="text" 
                        name="email" 
                        placeholder="Введіть свій email" 
                        className={styles.email} 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        data-testid="email"
                        />
                    
                        <input type="password" 
                        name="password" 
                        placeholder="Введіть пароль" 
                        className={styles.password} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        data-testid="password"
                        />
                        <button type="submit" className={styles.registerbtn} data-testid="submit">Увійти</button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
            </div>
        </div>
    );
}
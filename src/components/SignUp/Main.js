import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {setDoc, doc} from 'firebase/firestore';

import styles from './Main.css';


export default function Main() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await  createUserWithEmailAndPassword (auth, email, password);
          const user = userCredential.user;
          console.log(user);
          if(user){
            await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                name: name,
            });
          }
          console.log("user registered successfully")
          navigate('/liked');
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }
    };

    return (
        <div className={styles.main}>
        <div className={styles.left}>
        <Link to="/"><img src="/cat.png" alt="Logo" className={styles.logo} /></Link>
            <h1 className={styles.welcome}>Welcome</h1>
            <div className={styles.textContainer}>
                <p className={styles.signupText}>You can sign up here and explore the benefits of doing so!</p>
            </div>
        </div>
            <div className={styles.right}>
                <div className={styles.hasAccountContainer}>
                    <Link to="/login" className={styles.hasAccount}>Вже маєте аккаунт?</Link>
                </div>
                <h1 className={styles.signup}>Створіть свій аккаунт</h1>
                    <form className={styles.signupContainer} onSubmit={handleRegister}>
                        <input type="text" 
                        name="name" 
                        placeholder="Введіть своє ім'я" 
                        className={styles.name} 
                        required
                        onChange={(e) => setName(e.target.value)}
                        />

                        <input type="text" 
                        name="email" 
                        placeholder="Введіть свій email" 
                        className={styles.email} 
                        required
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    
                        <input type="password" 
                        name="password" 
                        placeholder="Створіть пароль" 
                        className={styles.password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className={styles.registerbtn}>зареєструватись</button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
            </div>
        </div>
    );
}
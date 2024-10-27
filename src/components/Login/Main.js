import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Main.css';

export default function Main() {
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
            <h1 className={styles.signup}>Створіть свій аккаунт</h1>
                <div className={styles.signupContainer}>
                    <input type="text" placeholder="Введіть своє ім'я" className={styles.name} required></input>

                    <input type="text" placeholder="Введіть свій email" className={styles.email} required></input>
                
                    <input type="password" placeholder="Створіть пароль" className={styles.password} required></input>
                    <button type="submit" className={styles.registerbtn}>зареєструватись</button>
                </div>
            
        </div>
        </div>
    );
}
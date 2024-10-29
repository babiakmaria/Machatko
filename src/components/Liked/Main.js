import React from 'react';

//import { Link } from 'react-router-dom';
import styles from './Main.css';

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.heartContainer}>
            <img src="/heartRed.png" alt="heart" className={styles.bigHeart} />
            </div>
        </div>
    );
}

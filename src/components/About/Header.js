import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/"><img src="/cat.png" alt="Logo" className={styles.logo} /></Link>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/catalog"> Каталог</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.iconsContainer}>
                <ul className={styles.icons}>
                    <li>
                        <Link to="/signup">
                            <img src="/user.png" alt="login" className={styles.user} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
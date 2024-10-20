import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/cat.png" alt="Logo" className={styles.logo} />
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/catalog"> Каталог</Link>
                    </li>
                    <li>
                        <a href="#">Про нас</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.iconsContainer}>
                <ul className={styles.icons}>
                    <li>
                        <a href="#">
                            <img src="/moon.png" alt="dark theme" className={styles.moon} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/user.png" alt="login" className={styles.user} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

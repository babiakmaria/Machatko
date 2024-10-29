import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/circle.png" className={styles.circle}/>
                <img src="/cat.png" alt="Logo" className={styles.logo} />
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/about">Про нас</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.iconsContainer}>
                <ul className={styles.icons}>
                    <li>
                        <a href="#">
                            <img src="/moonPink.png" alt="dark theme" className={styles.moon} />
                        </a>
                    </li>
                    <li>
                        <Link to="/login">
                            <img src="/userPink.png" alt="login" className={styles.user} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

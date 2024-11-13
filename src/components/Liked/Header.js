import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/">
                <img src="/circle.png" className={styles.circle}/>
                <img src="/cat.png" alt="Logo" className={styles.logo} />
                </Link>
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
                        <Link to="/signup">
                            <img src="/userPink.png" alt="login" className={styles.user} />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

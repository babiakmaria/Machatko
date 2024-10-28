import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.iconsContainer}>
                <ul className={styles.icons}>
                    <li>
                        <Link to="#">
                            <img src="/moon.png" alt="dark theme" className={styles.moon1} />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="/user.png" alt="login" className={styles.user1} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

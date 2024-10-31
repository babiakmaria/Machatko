import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
import Popup from '../Liked/Popup.js';

export default function Header() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
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
                        <a onClick={togglePopup} className={styles.heartButton}>
                            <img src="/heartWhite.png" alt="liked items" className={styles.heart} />
                        </a>
                    </li>
                    <li>
                        <Link to="/login">
                            <img src="/user.png" alt="login" className={styles.user} />
                        </Link>
                    </li>
                </ul>
            </div>
            {showPopup && <Popup togglePopup={togglePopup} />}
        </div>
    );
}

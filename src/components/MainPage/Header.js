import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthWrapper';
import useLikedHandling from '../../hooks/useLikedHandling.js';

import styles from './Header.css';
import Popup from '../Liked/Popup.js';

export default function Header() {
    const { currentUser, logout } = useAuth();
    const [showMessage, setShowMessage] = useState(false);

    const { handleLikedItems, showPopup, setShowPopup } = useLikedHandling();

    const handleLogout = async () => {
        await logout();
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };

    return (
        <header className={styles.header}>
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
                    {currentUser.isAuthenticated && (
                        <li>
                            <button onClick={handleLogout} className={styles.logoutButton} data-testid="logout">
                                Вихід
                            </button>
                        </li>
                    )}
                </ul>
                {showMessage && (
                <div className={`${styles.successMessage} ${showMessage ? '' : styles.fadeOut}`}>
                    Вихід успішний!
                </div>
            )}
            </nav>
            <div className={styles.iconsContainer}>
                <ul className={styles.icons}>
                    <li>
                        <a onClick={handleLikedItems} className={styles.heartButton}>
                            <img src="/heartWhite.png" alt="liked items" className={styles.heart} />
                        </a>
                    </li>
                    <li>
                        <Link to="/signup">
                            <img src="/user.png" alt="login" className={styles.user} />
                        </Link>
                    </li>
                </ul>
            </div>
            {showPopup && <Popup togglePopup={() => setShowPopup(false)} />}
        </header>
    );
}

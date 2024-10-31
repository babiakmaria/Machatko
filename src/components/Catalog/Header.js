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
                <Link to="/">
                <img src="/circle.png" className={styles.circle}/>
                <img src="/cat.png" alt="Logo" className={styles.logo} /></Link>
            </div>
            <form>
                <div className={styles.search}>
                    <img src="/search.png" className={styles.searchIcon} />
                    <input className={styles.searchInput} type="search" placeholder="шукати..."></input>
                </div>
            </form>
            <div className={styles.iconsContainer}>
                <ul className={styles.icons}>
                    <li>
                    <a onClick={togglePopup} className={styles.heartButton}>
                            <img src="/heartPink.png" alt="liked items" className={styles.heart} />
                        </a>
                    </li>
                    <li>
                        <Link to="/login">
                            <img src="/userPink.png" alt="login" className={styles.user1} />
                        </Link>
                    </li>
                </ul>
            </div>
            {showPopup && <Popup togglePopup={togglePopup} />}
        </div>
    );
}

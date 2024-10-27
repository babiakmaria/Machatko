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
            <form>
                <div className={styles.search}>
                    <img src="/search.png" className={styles.searchIcon} />
                    <input className={styles.searchInput} type="search" placeholder="шукати..."></input>
                </div>
            </form>
            <div className={styles.iconsContainer}>
                <ul className={styles.icons}>
                    <li>
                        <Link to="/liked">
                            <img src="/heartPink.png" alt="liked items" className={styles.heart} />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img src="/moonPink.png" alt="dark theme" className={styles.moon1} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <img src="/userPink.png" alt="login" className={styles.user1} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

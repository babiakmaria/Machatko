import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Main.css';

export default function Main() {
    return (
        <div className={styles.main}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <h1 className={styles.logoName1}>MA</h1>
            <h1 className={styles.logoName2}>CHAT</h1>
            <h1 className={styles.logoName3}>K</h1>
            <img src="/cat.png" alt="Logo" className={styles.mainLogo} />
            <p className={styles.description} data-testid="cypress-text">
                ще з дитинства мрієте про тваринку, що стане вам найкращим другом, але можливості тримати її в квартирі
                немає чи зовсім не вистачає часу? У нас ви зможете обрати тварину з притулку та піти на прогулянку з
                нею. Подаруйте одне одному добре проведений час та хороші емоції!
            </p>
            <Link to="/catalog" className={styles.startButton}>
                START NOW
            </Link>
            <img src="/pawPink.png" alt="paw" className={styles.paw1} />
            <img src="./pawBlack.png" alt="paw" className={styles.paw2} />
            <img src="/pawBlack.png" alt="paw" className={styles.paw3} />
            <img src="/pawBlack.png" alt="paw" className={styles.paw4} />
            <img src="/pawPink.png" alt="paw" className={styles.paw5} />
            <img src="/pawBlack.png" alt="paw" className={styles.paw6} />
        </div>
    );
}

import React from 'react';

//import { Link } from 'react-router-dom';
import styles from './Main.css';

export default function Main() {
    return (
        <main className={styles.main}>
            <p className={styles.text1} data-testid="text1">
            Проєкт створюється для підтримки притулків за допомогою функції перегляду тварин та прогулянок з ними.
            </p>
            <p className={styles.text2} data-testid="text2">
            Нашою метою є показати те, що тварини з притулку не такі страшні як їх уявляють люди і те, що вони так само потребують любові
            </p>
            <img src="aboutUs.png" alt="photo of dog and his owner" className={styles.picture}></img>
        </main>
    );
}
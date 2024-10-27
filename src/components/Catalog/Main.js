import React, { useEffect, useState } from 'react';
import styles from './Main.css';

export default function Main() {

    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        fetch("/animals.json")
        .then(response => response.json())
        .then(data => setAnimals(data))
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.animalsGrid}>
                {
                    animals.map(animal => (
                        <div key={animal.id} className={styles.animalCard}>
                            <img src={`images/${animal.image}`} alt={animal.name} />
                            <div className={styles.animalCardInfo}>
                                <h3 className={styles.name}>{animal.name}</h3>
                                <p className={styles.type}>{animal.type}</p> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
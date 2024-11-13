import React from 'react';

//import { Link } from 'react-router-dom';
import styles from './Main.css';
import AnimalCard from '../Catalog/AnimalCard.js';

export default function Main({ animals = [], likedAnimals = [], toggleLiked }) {
    return (
        <div className={styles.main} data-testid="likedList">
            <div className={styles.heartContainer}>
                <img src="/heartRed.png" alt="heart" className={styles.bigHeart} />
            </div>
            <div className={styles.likedList}>
                {likedAnimals.map((id) => {
                    const animal = animals.find((animal) => animal.id === id);
                    if (!animal) return null;
                    return <AnimalCard animal={animal} key={animal.id} toggleLiked={toggleLiked} isLiked={true} />;
                })}
            </div>
        </div>
    );
}

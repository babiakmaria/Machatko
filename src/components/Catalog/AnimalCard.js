import React from 'react';

import styles from './Main.css';

export default function AnimalCard({ animal, isLiked, toggleLiked }) {
    // we use an animal here to show that animal exists
    const handleError = (e) => {
        e.target.src = 'default.jpg';
    };
    const handleClick = () => {
        toggleLiked(animal.id);
    };

    return (
        <div key={animal.id} className={styles.animalCard} data-testid="animalCard">
            <img
                src={isLiked ? '/filledHeart.png' : '/heartWhite.png'}
                onClick={handleClick}
                className={styles.heartWhite}
                data-testid="heart-button"
            />
            <img src={`images/${animal.image}`} alt={animal.name} onError={handleError} data-testid="animal-image"/>
            <div className={styles.animalCardInfo}>
                <h3 className={styles.name}>{animal.name}</h3>
                <p className={styles.type}>{animal.type}</p>
            </div>
        </div>
    );
}

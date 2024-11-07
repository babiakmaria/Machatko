import React from 'react';
import useFetch from '../../hooks/useFetch';

import styles from './Main.css';
import AnimalCard from './AnimalCard.js';

export default function Main({ searchTerm = "", likedAnimals, toggleLiked }) {
    const { animals, loading, error } = useFetch();

    const filteredAnimals = animals.filter((animal) => animal.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (loading) return <p>Loading animals...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main className={styles.main}>
            <div className={styles.animalsGrid} data-testid="animalsGrid">
                {filteredAnimals.map((animal) => (
                    <AnimalCard
                        animal={animal}
                        key={animal.id}
                        isLiked={likedAnimals.includes(animal.id)}
                        toggleLiked={toggleLiked}
                    />
                ))}
            </div>
        </main>
    );
}

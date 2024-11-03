import React from 'react';

import Header from '../components/Liked/Header';
import Main from '../components/Liked/Main';
import useAuthStatus from '../hooks/useAuthStatus';

const Liked = ({ animals, likedAnimals, toggleLiked }) => {
    const isAuthenticated = useAuthStatus();

    if (!isAuthenticated) return null;
    return (
        <>
            <Header />
            <Main animals={animals} likedAnimals={likedAnimals} toggleLiked={toggleLiked} />
        </>
    );
};

export default Liked;

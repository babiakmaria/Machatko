import React, { useState } from 'react';

import Header from '../components/Catalog/Header.js';
import Main from '../components/Catalog/Main.js';

const Catalog = ({likedAnimals, toggleLiked}) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Main searchTerm={searchTerm} likedAnimals={likedAnimals} toggleLiked={toggleLiked} />
    </>
    );
};

export default Catalog;

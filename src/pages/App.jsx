import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/MainPage/Header';
import Main from '../components/MainPage/Main';
import About from './About';
import Catalog from './Catalog';
import Liked from './Liked';
import SignUp from './SignUp';
import Login from './Login';
import ProtectedRoutes from '../components/ProtectedRoutes';
import { AuthWrapper } from '../AuthWrapper';

const App = () => {
    const [animals, setAnimals] = useState([]);
    const [likedAnimals, setLikedAnimals] = useState([]);

    const toggleLiked = (animalId) => {
        setLikedAnimals((prev) => 
            prev.includes(animalId) ? prev.filter((id) => id !== animalId) : [...prev, animalId],
        );
    };

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await fetch('/animals.json');
                const data = await response.json();
                setAnimals(data);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        };

        fetchAnimals();
    }, []);
    
    return (
        <AuthWrapper>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Main likedAnimals={likedAnimals} animals={animals} toggleLiked={toggleLiked} />
                            </>
                        }
                    />
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            path="/liked"
                            element={<Liked likedAnimals={likedAnimals} animals={animals} toggleLiked={toggleLiked} />}
                        />
                    </Route>
                    <Route
                        path="/catalog"
                        element={<Catalog likedAnimals={likedAnimals} toggleLiked={toggleLiked} />}
                    />
                    <Route path="/about" element={<About likedAnimals={likedAnimals} animals={animals} />} />
                    <Route path="/login" element={<Login likedAnimals={likedAnimals} animals={animals} />} />
                    <Route path="/signup" element={<SignUp likedAnimals={likedAnimals} animals={animals} />} />
                </Routes>
            </Router>
        </AuthWrapper>
    );
};

export default App;

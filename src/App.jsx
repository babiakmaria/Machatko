import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/MainPage/Header';
import Main from './components/MainPage/Main';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Login from './pages/Login';
import Liked from './pages/Liked';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Main />
                        </>
                    }
                />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/liked" element={<Liked />} />
            </Routes>
        </Router>
    );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/MainPage/Header';
import Main from '../components/MainPage/Main';
import About from './About';
import Catalog from './Catalog';
import Liked from './Liked';
import Login from './Login';
import ProtectedRoutes from '../components/ProtectedRoutes';

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
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/liked" element={<Liked />} />
                </Route>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;

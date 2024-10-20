import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/MainPage/Header';
import Main from './components/MainPage/Main';
import Catalog from './pages/Catalog';

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
            </Routes>
        </Router>
    );
};

export default App;

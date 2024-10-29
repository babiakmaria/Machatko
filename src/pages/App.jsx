import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from '../components/MainPage/Header';
import Main from '../components/MainPage/Main';
import About from './About';
import Catalog from './Catalog';
import Liked from './Liked';
import Login from './Login';

const AppContent = () => (
    <>
        <Header />
        <Main />
    </>
);

const router = createBrowserRouter([{
    path: '/',
    element: <AppContent />,
    errorElement: <div>404 Not Found</div>
},
{
    path: '/about',
    element: <About />
},
{
    path: '/catalog',
    element: <Catalog />
},
{
    path: '/liked',
    element: <Liked />
},
{
    path: '/login',
    element: <Login />
}
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;

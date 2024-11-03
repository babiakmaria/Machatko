import React, {useState, useEffect} from "react";
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from "../AuthWrapper.js";

import Popup from '../components/Liked/Popup.js';


const ProtectedRoutes = () => {
    const { currentUser } = useAuth();
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        if (!currentUser.isAuthenticated) {
            setPopupVisible(true); 
        } else {
            setPopupVisible(false);
        }
    }, [currentUser]);

    const togglePopup = () => {
        setPopupVisible(false);
    };

    return currentUser.isAuthenticated ? (
        <Outlet />) : (
        <>
            <Navigate to="/signup" />
            {isPopupVisible && <Popup togglePopup={togglePopup} />}
        </>
    );
};

export default ProtectedRoutes;
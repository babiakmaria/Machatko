import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthWrapper';

const useAuthStatus = () => {
    const { currentUser } = useAuth();
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser.isAuthenticated) {
            setShowPopup(true); 
        }
    }, [currentUser]);

    return { isAuthenticated: currentUser.isAuthenticated, showPopup, setShowPopup };
};

export default useAuthStatus;

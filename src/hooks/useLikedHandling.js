import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthWrapper';

const useLikedHandling = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleLikedItems = () => {
        if (currentUser.isAuthenticated) {
            navigate('/liked');
        } else {
            setShowPopup(!showPopup);
        }
    };

    return { handleLikedItems, showPopup, setShowPopup };
};

export default useLikedHandling;

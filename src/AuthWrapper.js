import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './components/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({ name: '', isAuthenticated: false });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser({ name: user.email, isAuthenticated: true });
            } else {
                setCurrentUser({ name: '', isAuthenticated: false });
            }
            console.log(user);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setCurrentUser({ name: user.email, isAuthenticated: true });
            return 'success';
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser({ name: '', isAuthenticated: false });
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };
    return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

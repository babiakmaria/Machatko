import { useState, useEffect } from 'react';

const useFetch = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await fetch('/animals.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAnimals(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAnimals();
    }, []);

    return { animals, loading, error };
};

export default useFetch;

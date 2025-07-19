import React, { createContext, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadingScreen } from './LoadingScreen';

const LoadingContext = createContext({ setIsLoading: (loading: boolean) => { } });

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        const handleNavigation = () => {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        };

        handleNavigation();
    }, [location.pathname]);

    return (
        <LoadingContext.Provider value={{ setIsLoading }}>
            {isLoading && <LoadingScreen />}
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);

import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export const OfflineAlert: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleReload = async () => {
        setIsLoading(true);
        try {
            // Check internet connection before reloading
            const response = await fetch('https://www.google.com/favicon.ico', {
                mode: 'no-cors',
            });
            if (response) {
                window.location.reload();
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-navy-900/50">
            <div className="bg-navy-800/90 border border-navy-700 rounded-xl p-8 max-w-md mx-4 text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4 font-roboto">404</h1>
                <h2 className="text-2xl font-bold text-white mb-4 font-roboto">
                    Internet Connection Lost
                </h2>
                <p className="text-gray-300 mb-6">
                    Please check your internet connection and try again.
                </p>
                <button
                    onClick={handleReload}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 w-full"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Checking Connection...</span>
                        </>
                    ) : (
                        <span>Try Again</span>
                    )}
                </button>
            </div>
        </div>
    );
};

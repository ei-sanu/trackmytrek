import { useAuth, useSignIn } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const View: React.FC = () => {
    const { signIn, isLoaded } = useSignIn();
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const handleGetStarted = async () => {
        if (!isLoaded) return;

        try {
            setIsAuthenticating(true);
            if (isSignedIn) {
                navigate('/home');
                return;
            }

            // Navigate to sign-up page instead of Google OAuth
            navigate('/sign-up');
        } catch (error) {
            console.error('Error during navigation:', error);
        } finally {
            setIsAuthenticating(false);
        }
    };

    // Redirect to home if already signed in
    React.useEffect(() => {
        if (isSignedIn) {
            navigate('/home');
        }
    }, [isSignedIn, navigate]);

    // Loading state
    if (!isLoaded || isAuthenticating) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
                <div className="w-16 h-16 mb-8">
                    <div className="w-full h-full border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-xl text-blue-200 animate-pulse">
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                    Discover Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                        Career Path
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Explore 30+ technology domains, test your skills, and build projects that matter.
                    Your journey to a successful career starts here.
                </p>

                <button
                    onClick={handleGetStarted}
                    disabled={!isLoaded || isAuthenticating}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg
                    font-medium text-xl transition-all duration-300 transform hover:scale-105
                    shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isAuthenticating ? 'Loading...' : 'Get Started'}
                </button>
            </div>
        </div>
    );
};

import { useAuth } from '@clerk/clerk-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const View: React.FC = () => {
    const { isLoaded, isSignedIn } = useAuth();
    const navigate = useNavigate();

    const handleGetStarted = () => {
        if (isSignedIn) {
            navigate('/home');
        } else {
            navigate('/sign-up');
        }
    };

    const handleSignIn = () => {
        navigate('/sign-in');
    };

    React.useEffect(() => {
        if (isSignedIn) {
            navigate('/home');
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1933] via-[#0f2447] to-[#1a365d] px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-navy-800/30 backdrop-blur-sm border border-navy-700/50 rounded-2xl p-8 md:p-12">
                    <div className="text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            Discover Your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Career Path
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Explore 30+ technology domains, test your skills, and build projects that matter.
                            Your journey to a successful career starts here.
                        </p>

                        <div className="flex justify-center gap-4 pt-4">
                            <button
                                onClick={handleGetStarted}
                                disabled={!isLoaded}
                                className="group relative bg-gradient-to-r from-blue-600 to-purple-600
                                    text-white px-8 py-4 rounded-xl font-medium text-lg
                                    transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                                    disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>

                            <button
                                onClick={handleSignIn}
                                disabled={!isLoaded}
                                className="group relative bg-transparent border-2 border-blue-400
                                    text-white px-8 py-4 rounded-xl font-medium text-lg
                                    transition-all duration-300 transform hover:scale-105
                                    hover:border-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Sign In
                            </button>
                        </div>

                        <p className="text-sm text-gray-400 mt-6">
                            Join thousands of developers starting their tech journey
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

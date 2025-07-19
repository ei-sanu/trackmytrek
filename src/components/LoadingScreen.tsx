import React from 'react';

export const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute w-40 h-40 bg-blue-500 rounded-full -top-20 -left-20 animate-blob"></div>
                <div className="absolute w-40 h-40 bg-purple-500 rounded-full top-40 right-20 animate-blob animation-delay-2000"></div>
                <div className="absolute w-40 h-40 bg-indigo-500 rounded-full bottom-20 left-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main Loader */}
            <div className="relative">
                <div className="w-24 h-24 mb-12">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 border-8 border-blue-400/30 rounded-full"></div>
                    {/* Spinning Ring */}
                    <div className="absolute inset-0 border-t-8 border-blue-400 rounded-full animate-spin"></div>
                    {/* Inner Ring */}
                    <div className="absolute inset-4 border-4 border-purple-400/30 rounded-full"></div>
                    {/* Inner Spinning Ring */}
                    <div className="absolute inset-4 border-t-4 border-purple-400 rounded-full animate-spin animation-delay-500"></div>
                </div>
            </div>

            {/* Loading Text */}
            <div className="space-y-3 text-center">
                <p className="text-2xl font-semibold text-blue-200 animate-pulse">
                    Hang on tight...
                </p>
                <p className="text-lg text-blue-300/80 animate-pulse animation-delay-200">
                    We're getting the page ready for you
                </p>
            </div>
        </div>
    );
};

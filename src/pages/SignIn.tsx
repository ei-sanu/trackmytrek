import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import React from "react";

export const SignIn: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1933] via-[#0f2447] to-[#1a365d] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">TrackMyTrek</span>
                    </h1>
                    <p className="mt-2 text-gray-300">
                        Sign in to continue your tech journey
                    </p>
                </div>

                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
                    <ClerkSignIn
                        appearance={{
                            elements: {
                                formButtonPrimary:
                                    "bg-blue-600 hover:bg-blue-700 text-white transition-colors",
                                card: "bg-transparent shadow-none",
                                headerTitle: "text-white",
                                headerSubtitle: "text-gray-300",
                                socialButtonsBlockButton:
                                    "bg-navy-700 hover:bg-navy-600 border border-navy-600 text-white",
                                formFieldLabel: "text-gray-300",
                                formFieldInput:
                                    "bg-navy-700/50 border border-navy-600 text-white placeholder-gray-400",
                                footerActionLink: "text-blue-400 hover:text-blue-300",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

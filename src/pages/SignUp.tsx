import { SignUp as ClerkSignUp, useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignedIn) {
            navigate('/home');
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1933] via-[#0f2447] to-[#1a365d] px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="bg-navy-800/30 backdrop-blur-sm border border-navy-700/50 rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            Join{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                TrackMyTrek
                            </span>
                        </h1>
                        <p className="mt-3 text-gray-300">
                            Create an account to start your learning journey
                        </p>
                    </div>

                    <ClerkSignUp
                        appearance={{
                            baseTheme: "dark",
                            elements: {
                                formButtonPrimary:
                                    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                                card: "bg-transparent shadow-none",
                                headerTitle: "text-white",
                                headerSubtitle: "text-gray-300",
                                socialButtonsBlockButton:
                                    "bg-navy-700/50 border border-navy-600 text-white hover:bg-navy-600",
                                socialButtonsBlockButtonText: "text-white",
                                dividerLine: "bg-navy-600",
                                dividerText: "text-gray-400",
                                formFieldLabel: "text-gray-300",
                                formFieldInput:
                                    "bg-navy-700/50 border border-navy-600 text-white placeholder-gray-400",
                                footerActionLink: "text-blue-400 hover:text-blue-300",
                                identityPreviewText: "text-gray-300",
                                identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
                            },
                            variables: {
                                colorPrimary: "#3b82f6",
                                colorTextOnPrimaryBackground: "#ffffff",
                                colorBackground: "transparent",
                                colorInputBackground: "rgba(15, 23, 42, 0.5)",
                                colorInputText: "#ffffff",
                                colorTextSecondary: "#94a3b8",
                            },
                        }}
                        routing="path"
                        path="/sign-up"
                        signInUrl="/sign-in"
                        redirectUrl="/home"
                        afterSignUpUrl="/home"
                    />
                </div>
            </div>
        </div>
    );
};

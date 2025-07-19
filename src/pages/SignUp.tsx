import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import React from "react";

export const SignUp: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1933] via-[#0f2447] to-[#1a365d] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Join{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            TrackMyTrek
                        </span>
                    </h1>
                    <p className="mt-2 text-gray-300">
                        Create an account to start your learning journey
                    </p>
                </div>

                <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
                    <ClerkSignUp
                        appearance={{
                            baseTheme: "dark",
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
                                dividerLine: "bg-navy-600",
                                dividerText: "text-gray-400",
                                formFieldLabelRow: "text-gray-300",
                                identityPreviewText: "text-gray-300",
                                identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
                                main: "text-white",
                                navbar: "hidden",
                                navbarMobileMenuButton: "text-gray-400",
                                headerBackRow: "text-gray-400",
                                otpCodeFieldInput: "bg-navy-700/50 border border-navy-600 text-white",
                            },
                            variables: {
                                colorPrimary: "#2563eb",
                                colorBackground: "#0A1933",
                                colorText: "#fff",
                                colorTextSecondary: "#94a3b8",
                                colorInputBackground: "rgba(15, 23, 42, 0.5)",
                                colorInputText: "#fff",
                                colorTextOnPrimaryBackground: "#fff",
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

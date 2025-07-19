import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-2">Last updated: July 19th , 2025</p>
        </div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600/20 rounded-lg">
                <Eye className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <p className="mb-2">We collect information you provide directly to us, such as:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name and email address when you create an account</li>
                  <li>Profile information you choose to provide</li>
                  <li>Test results and assessment scores</li>
                  <li>Communications you send to us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Usage Information</h3>
                <p className="mb-2">We automatically collect certain information when you use our platform:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Pages you visit and time spent on our platform</li>
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and general location information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600/20 rounded-lg">
                <Users className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Personalize your experience and recommendations</li>
                <li>Track your progress and provide analytics</li>
                <li>Communicate with you about updates and new features</li>
                <li>Improve our platform and develop new features</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-600/20 rounded-lg">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>We take data security seriously and implement appropriate measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure authentication through Clerk</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Information Sharing</h2>
            <div className="space-y-4 text-gray-300">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist us in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Update or correct your information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our platform</li>
                <li>Improve user experience</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings, but this may affect platform functionality.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

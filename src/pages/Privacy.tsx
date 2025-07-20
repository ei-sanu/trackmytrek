import { Eye, Lock, Shield } from 'lucide-react';
import React from 'react';
import { Layout } from '../components/Layout';

export const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Information Collection */}
            <div className="bg-navy-800/30 backdrop-blur-sm border border-navy-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Account information (name, email, password)</li>
                  <li>Profile information (skills, interests, experience)</li>
                  <li>Usage data and preferences</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-navy-800/30 backdrop-blur-sm border border-navy-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">How We Protect Your Data</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Secure data storage practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

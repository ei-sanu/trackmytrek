import { AlertCircle, Book, CheckCircle } from 'lucide-react';
import React from 'react';
import { Layout } from '../components/Layout';

export const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-6">
              <Book className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our platform.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <div className="bg-navy-800/30 backdrop-blur-sm border border-navy-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  By accessing or using our platform, you agree to be bound by these terms and conditions.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-navy-800/30 backdrop-blur-sm border border-navy-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  As a user of our platform, you are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Maintaining account security</li>
                  <li>Providing accurate information</li>
                  <li>Complying with all applicable laws</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

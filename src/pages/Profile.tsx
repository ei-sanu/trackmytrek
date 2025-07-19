import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Calendar, Mail, User, Award, Clock, TrendingUp } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Please sign in to view your profile</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            {user.imageUrl ? (
              <img 
                src={user.imageUrl} 
                alt={user.fullName || 'Profile'} 
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="w-12 h-12 text-white" />
            )}
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {user.fullName || 'User Profile'}
          </h1>
          <p className="text-xl text-gray-300">
            Welcome to your learning dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1">
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-600/20 rounded-lg">
                    <User className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>
                    <p className="text-white">{user.fullName || 'Not provided'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-600/20 rounded-lg">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">{user.primaryEmailAddress?.emailAddress || 'Not provided'}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-purple-600/20 rounded-lg">
                    <Calendar className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Member Since</p>
                    <p className="text-white">
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-yellow-600/20 rounded-lg">
                    <Clock className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Last Sign In</p>
                    <p className="text-white">
                      {user.lastSignInAt ? new Date(user.lastSignInAt).toLocaleDateString() : 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-4">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                <p className="text-gray-300">Tests Completed</p>
              </div>
              
              <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                <p className="text-gray-300">Domains Explored</p>
              </div>
              
              <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mx-auto mb-4">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">0</h3>
                <p className="text-gray-300">Projects Started</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="text-center py-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-600/20 rounded-full mx-auto mb-4">
                  <Clock className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-400 text-lg">No recent activity</p>
                <p className="text-gray-500 text-sm mt-2">
                  Start taking tests or exploring domains to see your activity here
                </p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Recommended for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-navy-700/50 rounded-lg p-4 hover:bg-navy-700 transition-colors">
                  <h3 className="text-white font-semibold mb-2">Take Your First Assessment</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Discover your strengths with our skill assessments
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Get Started
                  </button>
                </div>
                
                <div className="bg-navy-700/50 rounded-lg p-4 hover:bg-navy-700 transition-colors">
                  <h3 className="text-white font-semibold mb-2">Explore Domains</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Browse 30+ technology domains to find your passion
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
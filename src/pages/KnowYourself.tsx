import { Award, Brain, Clock, TrendingUp } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { domains } from '../data/domains';

export const KnowYourself: React.FC = () => {
  const difficultyLevels = [
    { name: 'Beginner', color: 'bg-green-600', description: 'Basic concepts and fundamentals' },
    { name: 'Intermediate', color: 'bg-blue-600', description: 'Practical applications and skills' },
    { name: 'Advanced', color: 'bg-yellow-600', description: 'Complex problems and solutions' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Know Yourself</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your knowledge across 30+ domains with 5 difficulty levels.
            Each test contains 15 questions with a 5-minute timer.
          </p>
        </div>

        {/* Test Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">90+ Tests</h3>
            <p className="text-gray-300 text-sm">3 levels × 30 domains</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">5 Minutes</h3>
            <p className="text-gray-300 text-sm">Per test session</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-600/20 rounded-lg mx-auto mb-4">
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">15 Questions</h3>
            <p className="text-gray-300 text-sm">Mixed difficulty</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Retakeable</h3>
            <p className="text-gray-300 text-sm">Unlimited attempts</p>
          </div>
        </div>

        {/* Difficulty Levels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Test Difficulty Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {difficultyLevels.map((level, index) => (
              <div key={index} className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-4 text-center">
                <div className={`w-8 h-8 ${level.color} rounded-full mx-auto mb-3`} />
                <h3 className="text-lg font-semibold text-white mb-2">{level.name}</h3>
                <p className="text-gray-300 text-sm">{level.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Tests */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose a Domain to Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain) => (
              <div key={domain.id} className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:bg-navy-800/70 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-3">{domain.name}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{domain.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {difficultyLevels.map((level) => (
                    <Link
                      key={level.name}
                      to={`/test/${domain.id}/${level.name.toLowerCase()}`}
                      className={`px-3 py-1 text-xs font-medium text-white rounded-full ${level.color} hover:opacity-80 transition-opacity`}
                    >
                      {level.name}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>3 difficulty levels</span>
                  <span>45 questions total</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

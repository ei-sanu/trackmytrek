import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { domains } from '../data/domains';
import { questions, getQuestionsByDomainAndDifficulty } from '../data/questions';
import { TestInterface } from '../components/TestInterface';
import { Brain, Clock, Award, TrendingUp } from 'lucide-react';

export const Test: React.FC = () => {
  const { domainId, difficulty = 'beginner' } = useParams<{ domainId: string; difficulty: string }>();
  const navigate = useNavigate();
  const [testStarted, setTestStarted] = useState(false);
  const [testResults, setTestResults] = useState<{ score: number; answers: number[] } | null>(null);

  const domain = domains.find(d => d.id === domainId);
  const testQuestions = getQuestionsByDomainAndDifficulty(domainId!, difficulty);

  if (!domain) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Domain Not Found</h1>
          <button
            onClick={() => navigate('/know-yourself')}
            className="text-blue-400 hover:text-blue-300"
          >
            Back to Tests
          </button>
        </div>
      </div>
    );
  }

  const handleTestComplete = (score: number, answers: number[]) => {
    setTestResults({ score, answers });
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-blue-400';
      case 'advance': return 'text-yellow-400';
      case 'expert': return 'text-red-400';
      case 'researcher': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRecommendation = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) {
      return {
        message: "Excellent! You have strong knowledge in this domain.",
        suggestions: [
          "Consider taking a higher difficulty test",
          "Look into advanced projects in this domain",
          "You might be ready for internship opportunities"
        ]
      };
    } else if (percentage >= 60) {
      return {
        message: "Good job! You have a solid foundation.",
        suggestions: [
          "Review the topics you missed",
          "Practice with intermediate projects",
          "Consider taking additional courses"
        ]
      };
    } else {
      return {
        message: "Keep learning! Focus on building fundamentals.",
        suggestions: [
          "Start with beginner-level resources",
          "Take foundational courses",
          "Practice with simple projects"
        ]
      };
    }
  };

  if (testResults) {
    const recommendation = getRecommendation(testResults.score, testQuestions.length);

    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Test Complete!</h1>
              <h2 className="text-xl text-gray-300 mb-2">{domain.name}</h2>
              <p className={`text-lg font-semibold ${getDifficultyColor(difficulty)}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-navy-700/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-4">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Score</h3>
                <p className={`text-3xl font-bold ${getScoreColor(testResults.score, testQuestions.length)}`}>
                  {testResults.score}/{testQuestions.length}
                </p>
                <p className="text-gray-300 text-sm">
                  {Math.round((testResults.score / testQuestions.length) * 100)}% Correct
                </p>
              </div>

              <div className="bg-navy-700/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Level</h3>
                <p className={`text-xl font-bold ${getDifficultyColor(difficulty)}`}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </p>
              </div>

              <div className="bg-navy-700/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600/20 rounded-lg mx-auto mb-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Time</h3>
                <p className="text-xl font-bold text-white">5:00</p>
              </div>
            </div>

            <div className="bg-navy-700/50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Recommendation</h3>
              <p className="text-gray-300 mb-4">{recommendation.message}</p>
              <ul className="space-y-2">
                {recommendation.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-gray-300">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setTestStarted(false);
                  setTestResults(null);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Retake Test
              </button>
              <button
                onClick={() => navigate('/know-yourself')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Try Another Test
              </button>
              <button
                onClick={() => navigate(`/domain/${domainId}`)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Domain
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!testStarted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">{domain.name}</h1>
              <p className={`text-xl font-semibold ${getDifficultyColor(difficulty)}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level Test
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-navy-700/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Questions</h3>
                <p className="text-2xl font-bold text-white">15</p>
              </div>

              <div className="bg-navy-700/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Time Limit</h3>
                <p className="text-2xl font-bold text-white">5 min</p>
              </div>

              <div className="bg-navy-700/50 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600/20 rounded-lg mx-auto mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Difficulty</h3>
                <p className={`text-xl font-bold ${getDifficultyColor(difficulty)}`}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </p>
              </div>
            </div>

            <div className="bg-navy-700/50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Test Instructions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• You have 5 minutes to complete 15 questions</li>
                <li>• Each question has multiple choice answers</li>
                <li>• You can navigate between questions using the number buttons</li>
                <li>• The test will auto-submit when time runs out</li>
                <li>• You can retake the test as many times as you want</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setTestStarted(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
              >
                Start Test
              </button>
              <button
                onClick={() => navigate('/know-yourself')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
              >
                Back to Tests
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">{domain.name}</h1>
          <p className={`text-lg font-semibold ${getDifficultyColor(difficulty)}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level Test
          </p>
        </div>

        <TestInterface
          questions={testQuestions}
          onComplete={handleTestComplete}
        />
      </div>
    </div>
  );
};

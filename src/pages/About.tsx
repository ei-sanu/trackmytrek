import { Award, BookOpen, Target, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about helping individuals discover their potential and build successful careers
            in the ever-evolving world of technology.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              To democratize career guidance and skill development by providing comprehensive resources,
              assessments, and project ideas across 30+ technology domains. We believe everyone deserves
              access to quality career guidance regardless of their background or location.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Comprehensive Learning</h3>
            <p className="text-gray-300">
              From AI and Machine Learning to Web Development and Cybersecurity, we cover all major
              technology domains with detailed roadmaps and resources.
            </p>
          </div>

          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-4">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Skill Assessment</h3>
            <p className="text-gray-300">
              Test your knowledge with 150+ assessments across 5 difficulty levels. Get personalized
              recommendations based on your performance.
            </p>
          </div>

          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Practical Projects</h3>
            <p className="text-gray-300">
              Build your portfolio with 450+ project ideas ranging from beginner to advanced levels.
              Each project includes detailed requirements and technology stacks.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">For Beginners</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Career pathway guidance across 30+ domains</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Skill requirements and learning roadmaps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Beginner-friendly project ideas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Internship platform recommendations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">For Experienced Professionals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Advanced skill assessments and certifications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Complex project challenges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Industry trends and emerging technologies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Career transition guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">30+</h3>
            <p className="text-gray-300">Technology Domains</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-green-400 mb-2">150+</h3>
            <p className="text-gray-300">Skill Assessments</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-purple-400 mb-2">450+</h3>
            <p className="text-gray-300">Project Ideas</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">3</h3>
            <p className="text-gray-300">Difficulty Levels</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-6">
            Join thousands of learners who have discovered their path to success through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Get Started Today
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

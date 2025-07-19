import { BookOpen, CheckCircle, Clock, ExternalLink, Globe, Users } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { domains } from '../data/domains';

export const DomainDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const domain = domains.find(d => d.id === id);

  if (!domain) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Domain Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Domains
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">{domain.name}</h1>
          <p className="text-xl text-gray-300">{domain.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-navy-700/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300">Duration</span>
                  </div>
                  <p className="text-white font-semibold">{domain.courseDuration}</p>
                </div>
                <div className="bg-navy-700/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-300">Opportunities</span>
                  </div>
                  <p className="text-white font-semibold">{domain.opportunities.length} roles</p>
                </div>
                <div className="bg-navy-700/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-300">Skills</span>
                  </div>
                  <p className="text-white font-semibold">{domain.skills.length} skills</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
              <ul className="space-y-3">
                {domain.requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Key Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {domain.skills.map((skill, index) => (
                  <div key={index} className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Roadmap */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Career Roadmap</h2>
              <div className="space-y-4">
                {domain.roadmap.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {domain.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-700/50 rounded-lg p-4 hover:bg-navy-700 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                      <span className="text-white">{resource.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Video */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Get Motivated</h3>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${domain.videoId}`}
                  title={`${domain.name} Introduction`}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Career Opportunities</h3>
              <div className="space-y-3">
                {domain.opportunities.map((opportunity, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-3">
                    <p className="text-white font-medium">{opportunity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship Platforms */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Find Internships</h3>
              <div className="space-y-3">
                {domain.internshipPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-navy-700/50 rounded-lg hover:bg-navy-700 transition-colors cursor-pointer"
                  >
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span className="text-white">{platform.name}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Take Action</h3>
              <div className="space-y-3">
                <Link
                  to={`/test/${domain.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center transition-colors block"
                >
                  Test Your Skills
                </Link>
                <Link
                  to={`/to-build/${domain.id}`}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg text-center transition-colors block"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

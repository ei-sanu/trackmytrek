import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ExternalLink, BookOpen } from 'lucide-react';
import { Domain } from '../data/domains';

interface DomainCardProps {
  domain: Domain;
}

export const DomainCard: React.FC<DomainCardProps> = ({ domain }) => {
  return (
    <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:bg-navy-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{domain.name}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{domain.description}</p>
        </div>
        <div className="flex items-center space-x-1 text-blue-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{domain.courseDuration}</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Key Skills</h4>
          <div className="flex flex-wrap gap-1">
            {domain.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
            {domain.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs">
                +{domain.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-1">Career Opportunities</h4>
          <div className="flex items-center space-x-1 text-gray-400">
            <Users className="w-4 h-4" />
            <span className="text-sm">{domain.opportunities.length} roles available</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <Link
          to={`/domain/${domain.id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>Explore</span>
        </Link>
        <Link
          to={`/test/${domain.id}`}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
        >
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

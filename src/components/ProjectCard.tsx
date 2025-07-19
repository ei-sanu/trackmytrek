import React from 'react';
import { Clock, Code, Star } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-600/20 text-green-300';
      case 'intermediate': return 'bg-yellow-600/20 text-yellow-300';
      case 'advance': return 'bg-red-600/20 text-red-300';
      default: return 'bg-gray-600/20 text-gray-300';
    }
  };

  return (
    <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 hover:bg-navy-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
          {project.difficulty}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{project.estimatedTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Code className="w-4 h-4" />
            <span>{project.technologies.length} tech</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                <Star className="w-3 h-3 text-yellow-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
        Start Project
      </button>
    </div>
  );
};
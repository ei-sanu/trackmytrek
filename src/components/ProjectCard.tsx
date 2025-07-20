import { Clock, Code } from 'lucide-react';
import React from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleStartProject = () => {
    window.open('https://cybercodeeditor.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-600';
      case 'intermediate': return 'bg-yellow-600';
      case 'advance': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-navy-700/50 border border-navy-600 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Estimated Time */}
        <div className="flex items-center text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{project.estimatedTime}</span>
        </div>

        {/* Difficulty */}
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm text-white ${getDifficultyColor(project.difficulty)}`}>
            {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
          </span>

          {/* Start Project Button */}
          <button
            onClick={handleStartProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700
              text-white rounded-lg transition-colors duration-200"
          >
            <Code className="w-4 h-4" />
            Start Project
          </button>
        </div>
      </div>
    </div>
  );
};

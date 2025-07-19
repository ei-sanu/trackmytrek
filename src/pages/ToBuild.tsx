import React, { useState } from 'react';
import { Search, Filter, Code, Clock, Star } from 'lucide-react';
import { domains } from '../data/domains';
import { projects, getProjectsByDomainAndDifficulty } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export const ToBuild: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const difficulties = ['beginner', 'intermediate', 'advance'];

  const filteredProjects = projects.filter(project => {
    const matchesDomain = selectedDomain === 'all' || project.domain === selectedDomain;
    const matchesDifficulty = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesDomain && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-600';
      case 'intermediate': return 'bg-yellow-600';
      case 'advance': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">To Build</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover 450+ project ideas across 30 domains. From beginner-friendly to advanced projects,
            build your portfolio and gain practical experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mx-auto mb-4">
              <Code className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">450+</h3>
            <p className="text-gray-300">Project Ideas</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-4">
              <Star className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">30</h3>
            <p className="text-gray-300">Domains</p>
          </div>
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-4">
              <Clock className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">3</h3>
            <p className="text-gray-300">Difficulty Levels</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Domain Filter */}
            <div className="relative">
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="appearance-none bg-navy-700/50 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-48"
              >
                <option value="all">All Domains</option>
                {domains.map((domain) => (
                  <option key={domain.id} value={domain.id}>
                    {domain.name}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Difficulty Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDifficulty('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedDifficulty === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-navy-700/50 text-gray-300 hover:bg-navy-700'
                }`}
              >
                All
              </button>
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDifficulty === difficulty
                      ? `${getDifficultyColor(difficulty)} text-white`
                      : 'bg-navy-700/50 text-gray-300 hover:bg-navy-700'
                  }`}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

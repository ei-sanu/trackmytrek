import { Award, Search, TrendingUp, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from '../components/Clock';
import { DomainCard } from '../components/DomainCard';
import { OfflineAlert } from '../components/OfflineAlert';
import { domains } from '../data/domains';

export const Home: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [searchTerm, setSearchTerm] = React.useState('');

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Optional: Reload the page when connection is restored
      window.location.reload();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check connection status on mount
    const checkConnection = async () => {
      try {
        await fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' });
        setIsOnline(true);
      } catch {
        setIsOnline(false);
      }
    };
    checkConnection();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const filteredDomains = domains.filter(domain =>
    domain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    domain.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    domain.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!isOnline) {
    return <OfflineAlert />;
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-slate-900 to-navy-800 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">TrackMyTrek</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Track your learning journey across 30+ technology domains, test your skills,
            and build projects that matter. Your tech trek starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/know-yourself"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Take Skill Assessment
            </Link>
            <Link
              to="/to-build"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Projects
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-700">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">30+</h3>
              <p className="text-gray-300">Technology Domains</p>
            </div>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-700">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-4">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-300">Skill Tests</p>
            </div>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-700">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mx-auto mb-4">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">450+</h3>
              <p className="text-gray-300">Project Ideas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trek Through Tech Domains
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Chart your path across cutting-edge technology landscapes
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search domains..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-navy-800/50 border border-navy-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDomains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>

          {filteredDomains.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No domains found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

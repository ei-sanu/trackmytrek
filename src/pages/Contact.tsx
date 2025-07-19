import { GithubIcon, MapPin, Send, ShieldEllipsis } from 'lucide-react';
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "9c4dbdf0-8c38-47a5-aab1-9e3b06b196db");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our platform or need help with your career journey?
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your question or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              {result && (
                <div className={`text-center p-3 rounded-lg ${result === "Sending...." ? "bg-yellow-600/20 text-yellow-400" :
                    result === "Message sent successfully!" ? "bg-green-600/20 text-green-400" :
                      "bg-red-600/20 text-red-400"
                  }`}>
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
              <p className="text-gray-300 mb-6">
                We'd love to hear from you! Whether you have questions about our platform,
                need career guidance, or want to provide feedback, we're here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-600/20 rounded-lg">
                    <ShieldEllipsis className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Portfolio</h3>
                    <a
                      href="https://somesh.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      somesh.social
                    </a>
                  </div>
                </div>


                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-600/20 rounded-lg">
                    <GithubIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Github</h3>
                    <p className="text-gray-300"><a href='https://github.com/ei-sanu'>ei-sanu</a></p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-600/20 rounded-lg">
                    <MapPin className="w-10 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Address</h3>
                    <p className="text-gray-300"> BH - 4, Lovely Professional University, Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India), 144411</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">How do I get started?</h3>
                  <p className="text-gray-300 text-sm">
                    Simply create an account and start exploring domains that interest you.
                    Take our skill assessments to get personalized recommendations.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Are the tests really free?</h3>
                  <p className="text-gray-300 text-sm">
                    Yes! All our skill assessments and project ideas are completely free.
                    We believe everyone deserves access to quality career guidance.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">How often is content updated?</h3>
                  <p className="text-gray-300 text-sm">
                    We regularly update our content to reflect the latest industry trends
                    and technologies. New domains and projects are added monthly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

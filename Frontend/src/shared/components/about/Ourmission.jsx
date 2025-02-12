import React from 'react';
import { Target } from 'lucide-react';

export default function Ourmission() {
  return (
    <div>
      {/* Mission Statement */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  ICCSI provides a dynamic platform for presenting cutting-edge research, 
                  fostering meaningful discussions, and building collaborative partnerships 
                  between academia and industry. We're committed to inspiring innovation 
                  and driving the future of computer science through knowledge exchange 
                  and networking opportunities.
                </p>
                <div className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-gray-700">Cutting-edge Research Presentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-gray-700">Industry-Academia Collaboration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-gray-700">Innovation & Knowledge Exchange</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right side image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="public/assets/images/About/ourmission.avif"
                  alt="Technology conference presentation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
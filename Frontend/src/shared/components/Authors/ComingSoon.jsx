import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight mt-25">
          International Conference on Computer Science Innovations
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <div className="flex items-center text-blue-600">
            <Calendar className="w-6 h-6 mr-2" />
            <span className="text-xl">October 15-17, 2025</span>
          </div>
          <div className="flex items-center text-blue-600">
            <MapPin className="w-6 h-6 mr-2" />
            <span className="text-xl">Vellore, Tamil Nadu</span>
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-12">
          Join us for the premier conference on computer science innovations, 
          featuring cutting-edge research, keynote speakers, and networking opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Call for Papers</h3>
            <p className="text-gray-600">Submit your research in various tracks</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Registration Open</h3>
            <p className="text-gray-600">Early bird registration available</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Keynote Speakers</h3>
            <p className="text-gray-600">World-renowned experts</p>
          </div>
        </div>

        <div className="mb-12">
          <img 
            src="/assets/images/Authors/cs1.avif"
            alt="Conference Hall"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
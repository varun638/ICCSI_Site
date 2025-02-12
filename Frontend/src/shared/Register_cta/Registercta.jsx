import React from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

const Registercta = ({handleRegisterClick}) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-20">
      {/* Decorative Elements - Responsive sizing */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent leading-tight mb-4 sm:mb-6">
            Join Us at ICCSI 2025
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience groundbreaking research presentations and network with industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Location Card */}
          <div className="group hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-4 sm:p-6 rounded-sm sm:rounded-md border-2 border-gray-300 hover:border-blue-400">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-sm group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Location</h3>
                <p className="text-base sm:text-lg text-gray-700">VIT, Vellore</p>
              </div>
            </div>
          </div>

          {/* Date Card */}
          <div className="group hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-4 sm:p-6 rounded-sm sm:rounded-md border-2 border-gray-300 hover:border-blue-400">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-sm group-hover:bg-blue-200 transition-colors">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Date</h3>
                <p className="text-base sm:text-lg text-gray-700">15th June, 2025</p>
              </div>
            </div>
          </div>

          {/* Duration Card */}
          <div className="group hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-4 sm:p-6 rounded-sm sm:rounded-md border-2 border-gray-300 hover:border-blue-400">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-sm group-hover:bg-blue-200 transition-colors">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Duration</h3>
                <p className="text-base sm:text-lg text-gray-700">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Participants Card */}
          <div className="group hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-4 sm:p-6 rounded-sm sm:rounded-md border-2 border-gray-300 hover:border-blue-400">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-sm group-hover:bg-blue-200 transition-colors">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-800" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Participants</h3>
                <p className="text-base sm:text-lg text-gray-700">Limited to 200</p>
              </div>
            </div>
          </div>
        </div>

        {/* Register CTA Button */}
        <div className="text-center mt-8">
          <button onClick={handleRegisterClick} className="w-auto bg-blue-600 text-white  font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors hover:cursor-pointer">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registercta;

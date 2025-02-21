import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function Keydate(props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Title Section */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Important <span className="text-blue-600">Dates</span>
          </h1>
          <p className="text-xl sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Mark your calendar for these key events to stay ahead of deadlines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mb-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>

          {/* Timeline Entries */}
          <div className="space-y-20">
          {props.dates.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Date marker (centered) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full z-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Calendar className="w-7 h-7 text-white" />
              </div>

              {/* Event Card */}
              <div className="w-full md:w-6/12 mt-8 md:mt-0 flex justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-blue-600 mr-5" />
                    <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-900">{item.date}</h3>
                  </div>
                  <h4 className="text-blue-600 font-semibold text-lg sm:text-lg md:text-xl mb-3">{item.event}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Time Zone Information Section */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Time Zone Information</h2>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                All deadlines are at 23:59 AoE (Anywhere on Earth) time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

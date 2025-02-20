import React from 'react';

export default function Ourmission() {
  return (
    <div>
    <div className="bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content Container */}
            <div className="w-full lg:w-1/2 justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight text-center">
               Our  <span className="text-blue-600">Mission</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  ICCSI provides a dynamic platform for presenting cutting-edge research, 
                  fostering meaningful discussions, and building collaborative partnerships 
                  between academia and industry. We're committed to inspiring innovation 
                  and driving the future of computer science through knowledge exchange 
                  and networking opportunities.
                </p>
            </div>
            {/* Right side image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="assets/images/About/ourmission.avif"
                  alt="Technology conference presentation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
          </div>
        </div>
      </section>
      </div>
      </div>
  );
}
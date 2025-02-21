import React from 'react';

export default function Orgzcomit(props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight mt-10">
           Organizing <span className="text-blue-600">Committee</span>
              </h1>
          <p className="mt-4 text-xl text-gray-600">Meet the team behind ICCSI 2025</p>
        </div>

        <div className="mt-8 w-full">
          {props.committeeMembers.map((section, index) => (
            <div key={index} className="mb-16">
              {/* Section Title */}
              <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">{section.role}</h2>

              {/* Flex container for members */}
              <div className="flex flex-wrap justify-center gap-12">
                {section.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[280px] lg:w-[280px] h-[320px] transform hover:scale-105"
                  >
                    {/* Card content */}
                    <div className="relative mb-6 w-40 h-40 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-auto h-full object-cover transform transition-all duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500 font-light">{member.title}</p>
                    <p className="text-sm text-gray-400">{member.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

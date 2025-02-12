import React from 'react';
import { useNavigate } from 'react-router';

export default function Registration({registrationTypes}) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the home page
    navigate('/');
  };
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] flex items-center justify-center bg-gradient-to-b from-gray-300 to-white">
      <div className="w-full max-w-screen-xl px-4 sm:px-6,mt-25 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 leading-tight mb-4 mt-25">
            Registration Details
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for an enriching experience. Choose your registration package below and be part of this exceptional event.
          </p>
        </div>

        {/* Registration Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {registrationTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Card Header */}
              <div className="bg-blue-600 text-white p-6 text-center">
                <div className="flex justify-center mb-4">{type.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold">{type.type}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-gray-500 text-sm">{type.regular}</span>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">{type.amount}</div>
                </div>

                {/* Button */}
                <button  onClick={handleClick} className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:cursor-pointer">
                  {type.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

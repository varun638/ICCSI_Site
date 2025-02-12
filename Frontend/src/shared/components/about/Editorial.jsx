import React from 'react';
import { Users } from 'lucide-react';

export default function Editorial() {
  return (
    <div className='min-h-[calc(100vh-theme(spacing.90))] flex items-center justify-center bg-gradient-to-b from-gray-300 to-white'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 mt-25">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight"><span className='text-blue-700'>Editorial</span> Board</h1>
          <p className="text-xl text-gray-600">Distinguished members leading the conference</p>
        </div>

        {/* Editorial Board Members Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Conference Chair */}
          <div className="bg-white p-10 rounded-xl shadow-lg transform transition-all hover:scale-102 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-14 h-14 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-blue-800">Conference Chair</h3>
            <p className="text-gray-700 text-center font-medium">Prof. David Johnson</p>
            <p className="text-gray-500 text-sm text-center">Stanford University, USA</p>
          </div>

          {/* Program Chair */}
          <div className="bg-white p-10 rounded-xl shadow-lg transform transition-all hover:scale-102 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-14 h-14 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-blue-800">Program Chair</h3>
            <p className="text-gray-700 text-center font-medium">Dr. Emily Johnson</p>
            <p className="text-gray-500 text-sm text-center">MIT, USA</p>
          </div>

          {/* Technical Chair */}
          <div className="bg-white p-10 rounded-xl shadow-lg transform transition-all hover:scale-102 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-14 h-14 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-blue-800">Technical Chair</h3>
            <p className="text-gray-700 text-center font-medium">Prof. David Chen</p>
            <p className="text-gray-500 text-sm text-center">ETH Zurich, Switzerland</p>
          </div>
        </div>

        {/* Technical Program Committee Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Program Committee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { name: "Dr. Sarah Williams", institution: "University of Oxford, UK" },
              { name: "Prof. Michael Brown", institution: "University of Tokyo, Japan" },
              { name: "Dr. Lisa Anderson", institution: "Carnegie Mellon University, USA" },
              { name: "Prof. Robert Taylor", institution: "TU Munich, Germany" },
              { name: "Dr. Maria Garcia", institution: "University of Barcelona, Spain" },
              { name: "Prof. James Wilson", institution: "University of Toronto, Canada" }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md transform transition-all hover:scale-102 hover:shadow-lg">
                <p className="font-medium text-gray-900">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

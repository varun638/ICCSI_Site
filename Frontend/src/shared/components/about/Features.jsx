import React from 'react';

export default function Features(props) {
  return (
    <div>
      {/* Features Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {props.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex justify mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

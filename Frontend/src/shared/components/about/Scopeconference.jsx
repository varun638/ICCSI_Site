import React from 'react';

export default function Scopeconference() {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            <span className="text-blue-600">Scope</span> of the Conference
          </h1>
          <p className="text-xl text-gray-700">
            Explore cutting-edge technologies shaping the future of innovation and networking.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <div className="text-2xl">🤖</div>
              <h3 className="text-xl font-semibold ml-3">Advancements in AI & ML</h3>
            </div>
            <p className="text-gray-600">
              Dive into the latest advancements in AI and ML, exploring their real-world applications and future developments in sectors like healthcare, finance, and automotive. These technologies are revolutionizing industries and creating new opportunities for automation and intelligence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <div className="text-2xl">☁️</div>
              <h3 className="text-xl font-semibold ml-3">Cloud Computing & Edge Tech</h3>
            </div>
            <p className="text-gray-600">
              Explore the transformative potential of cloud computing and edge technologies that enable businesses to scale, improve real-time data processing, and optimize performance across industries. This track will highlight cutting-edge trends and practical implementations of cloud-native architectures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <div className="text-2xl">🔐</div>
              <h3 className="text-xl font-semibold ml-3">Cybersecurity & Privacy Solutions</h3>
            </div>
            <p className="text-gray-600">
              Learn about the latest innovations in cybersecurity and privacy solutions, including encryption methods, security protocols, and privacy practices that protect data in the digital age. This track focuses on mitigating risks, preventing data breaches, and ensuring privacy for users and organizations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <div className="text-2xl">🔗</div>
              <h3 className="text-xl font-semibold ml-3">Blockchain & Distributed Systems</h3>
            </div>
            <p className="text-gray-600">
              Discover how blockchain and distributed systems are reshaping industries like finance, healthcare, and logistics. This track will explore decentralized applications, smart contracts, and blockchain’s role in enhancing security, transparency, and operational efficiency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <div className="text-2xl">🌐</div>
              <h3 className="text-xl font-semibold ml-3">IoT & Smart Systems</h3>
            </div>
            <p className="text-gray-600">
              Learn about the interconnected world of IoT devices and how they are reshaping everyday experiences. Explore the integration of smart systems in homes, cities, healthcare, and industries to improve efficiency, communication, and automation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4 text-blue-600">
              <div className="text-2xl">📊</div>
              <h3 className="text-xl font-semibold ml-3">Big Data & Data Science</h3>
            </div>
            <p className="text-gray-600">
              Discover how big data and data science are applied across industries to drive decision-making, optimize processes, and innovate. This track will cover the tools, technologies, and techniques behind big data analysis and predictive modeling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

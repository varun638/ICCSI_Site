import React from 'react'

export default function Abouts({props}) {
  return (
    <div>
    <div className={`bg-gradient-to-b from-white to-gray-50 ${props ? 'pt-16' : ''}`}>
      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image Container */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="assets/images/About/about_img.webp"
                  alt="ICCSI Conference"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/10"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/10 rounded-full -z-10"></div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 justify-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                About <span className="text-blue-600">INCOCSA</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              The International Conference on Computer Science and Applications gathers experts and researchers 
              to explore advancements in fields such as Artificial Intelligence, Machine Learning, Data Science, Cybersecurity,
              Cloud Computing, IoT, Software Engineering, and more. The conference offers a platform for knowledge sharing,
              collaboration, and networking across academia, industry, and government, featuring keynote talks, paper presentations, 
              and workshops on emerging technologies in computer science.
              </p>
              <div className="flex  items-center">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors" >
                  2025 Edition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
  )
}

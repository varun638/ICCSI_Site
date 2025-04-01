import React from 'react'

export default function Speakers() {
  return (
    <div>
      {/* Featured Speakers Section */}
      <section className="py-16 bg-gray-50 flex-1">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-light text-center mb-10">
            Featured Speakers
          </h2>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Speaker 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="assets/images/Home/Martniez.webp" alt="Martinez Fernandez" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Martinez Fernandez</h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base md:text-lg">AI & Ethics Expert</p>
                {/* Short Description */}
                <p className="text-blue-600 mb-4 text-sm sm:text-base md:text-lg">
                  Expert in AI and machine learning ethics.
                </p>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="assets/images/Home/tamil.webp" alt="Tamil Azhagan" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Tamil Azhagan</h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base md:text-lg">Cybersecurity Specialist</p>
                {/* Short Description */}
                <p className="text-blue-600 mb-4 text-sm sm:text-base md:text-lg">
                  Focused on securing financial institutions.
                </p>
              </div>
            </div>

            {/* Speaker 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="assets/images/Home/mus.webp" alt="Malik Musamir" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Malik Musamir</h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base md:text-lg">Data Science Leader</p>
                {/* Short Description */}
                <p className="text-blue-600 mb-4 text-sm sm:text-base md:text-lg">
                  Expert in predictive modeling and data science.
                </p>
              </div>
            </div>

            {/* Speaker 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="assets/images/Home/dravid.webp" alt="Dravidian" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Dravidian</h3>
                <p className="text-gray-600 mb-3 text-sm sm:text-base md:text-lg">Data Engineer</p>
                {/* Short Description */}
                <p className="text-blue-600 mb-4 text-sm sm:text-base md:text-lg">
                  Expert in Data Architecture & Design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

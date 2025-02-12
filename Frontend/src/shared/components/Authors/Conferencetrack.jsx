import React from 'react';

export default function Conferencetrack(props) {
  return (
    <div className='min-h-[calc(100vh-theme(spacing.16))] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight mt-25">
            <span className='text-blue-600'>Conference</span> Tracks
          </h1>
          <p className="text-xl text-gray-700">Explore our diverse range of research areas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {props.tracks.map((track, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4 text-blue-600">
                <div className="text-2xl">{track.icon}</div>
                <h3 className="text-xl font-semibold ml-3">{track.title}</h3>
              </div>
              <ul className="space-y-2">
                {track.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-gray-600">
                    • {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Submission Guidelines</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Papers must be original and not previously published</li>
              <li>• Maximum paper length: 8 pages (IEEE format)</li>
              <li>• All papers will undergo a double-blind peer review process</li>
              <li>• At least one author must register for the conference</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import { Calendar, MapPin, Users,} from 'lucide-react';


export default function Hero({ props , handleRegisterClick}) {

  return (
    <div>
         {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url("assets/images/Home/bg_img.webp")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
          International Conference on Computer Science and Applications
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">
          Exploring Innovation, Shaping the Future of Technology
          </p>
          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center text-lg sm:text-xl md:text-2xl">
              <Calendar className="w-5 h-5 mr-3" />
              <span>April 5 - 12, 2025</span>
            </div>
            <div className="flex items-center text-lg sm:text-xl md:text-2xl">
              <MapPin className="w-5 h-5 mr-3" />
              <span>Tamil Nadu, Vellore</span>
            </div>
            <div className="flex items-center text-lg sm:text-xl md:text-2xl">
              <Users className="w-5 h-5 mr-3" />
              <span className="inline-block animate-countup">Attendees - {props}+ </span>
            </div>
          </div>
          {/* Register Button */}
          <button onClick={handleRegisterClick} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors hover:cursor-pointer">
            Register Now
          </button>
        </div>
      </section>
    </div>
  )
}

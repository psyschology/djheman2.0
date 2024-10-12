'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X, Calendar } from 'lucide-react'
import Link from 'next/link'

export function ClientComponent({ tracks }) {
  const [showAllTracks, setShowAllTracks] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white text-black rounded-full"
      >
        {isNavOpen ? <X /> : <Menu />}
      </button>

      {/* Navigation Sidebar */}
      {isNavOpen && (
        <nav className="fixed top-0 left-0 bottom-0 w-64 bg-gray-900 z-40 p-6">
          <div className="flex flex-col space-y-6 mt-16">
            <Link href="#about" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>About</Link>
            <Link href="#music" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Music</Link>
            <Link href="#events" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Events</Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Contact</Link>
          </div>
        </nav>
      )}

      {/* Music Section */}
      <section id="music" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Latest Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.slice(0, showAllTracks ? tracks.length : 3).map((track, index) => (
              <div key={index} className="bg-black p-6 rounded-lg">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe 
                    width="100%" 
                    height="120" 
                    src={`https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=${encodeURIComponent(track.src)}`}
                    frameBorder="0"
                    title={`${track.title} by ${track.album}`}
                    className="rounded-lg"
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-gray-400 mb-4">{track.album}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            {!showAllTracks && (
              <button
                onClick={() => setShowAllTracks(true)}
                className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center"
              >
                View More <ChevronDown className="ml-2" />
              </button>
            )}
            {showAllTracks && (
              <Link
                href="#"
                className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center"
              >
                View All Tracks <ChevronRight className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

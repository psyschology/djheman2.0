'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Disc, ChevronDown, ChevronRight, Menu, X, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showAllTracks, setShowAllTracks] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const tracks = [
    { title: "Bollywood Tech House Mixtape Vol.2", album: "DJ HEMAN", src: "/DJ_HEMAN/dj-heman-bollywood-tech-house-mixtape-vol2/" },
    { title: "dj-heman-bollywood-tech-house-mixtape-1", album: "dj-heman-bollywood-tech-house-mixtape-1", src: "/DJ_HEMAN/dj-heman-bollywood-tech-house-mixtape-1/" },
    { title: "holi-party-mashup-2k24", album: "holi-party-mashup-2k24", src: "/DJ_HEMAN/holi-party-mashup-2k24/" },
    { title: "Cyber Groove", album: "Digital Rhythms", src: "/DJ_HEMAN/cyber-groove/" },
    { title: "Quantum Beat", album: "Particle Waves", src: "/DJ_HEMAN/quantum-beat/" },
    { title: "Stellar Synth", album: "Cosmic Sounds", src: "/DJ_HEMAN/stellar-synth/" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic background effect */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)`,
        }}
      />

      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white text-black rounded-full"
      >
        {isNavOpen ? <X /> : <Menu />}
      </button>

      {/* Navigation Sidebar */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 bottom-0 w-64 bg-gray-900 z-40 p-6"
          >
            <div className="flex flex-col space-y-6 mt-16">
              <Link href="#about" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>About</Link>
              <Link href="#music" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Music</Link>
              <Link href="#events" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Events</Link>
              <Link href="#contact" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Contact</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">DJ H3MAN</h1>
          <p className="text-xl mb-8">Experience the Sound of the Future</p>
          <div className="w-full max-w-xl mx-auto">
            <iframe 
              width="100%" 
              height="400" 
              src="https://player-widget.mixcloud.com/widget/iframe/?light=1&feed=%2FDJ_HEMAN%2Fdj-heman-bollywood-tech-house-mixtape-vol2%2F" 
              frameBorder="0"
              title="DJ HEMAN - Bollywood Tech House Mixtape Vol.2"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </motion.div>
        
        {/* Animated vinyl records */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 opacity-20"
        >
          <Disc size={200} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 opacity-20"
        >
          <Disc size={300} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            About HEMAN
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-center max-w-2xl mx-auto"
          >
            HEMAN is an up-and-coming DJ with a passion for blending electronic beats with futuristic soundscapes. 
            With a unique style and energetic performances, HEMAN is quickly making a name in the underground music scene.
          </motion.p>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Latest Tracks
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.slice(0, showAllTracks ? tracks.length : 3).map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-6 rounded-lg"
              >
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
              </motion.div>
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

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Upcoming Gigs
          </motion.h2>
          <div className="space-y-6">
            {[1, 2, 3].map((event) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: event * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg flex items-center"
              >
                <Calendar className="mr-4" size={32} />
                <div>
                  <h3 className="text-xl font-semibold">Event Name {event}</h3>
                  <p className="text-gray-400">Date & Venue</p>
                </div>
                <button className="ml-auto bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">
                  Get Tickets
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-2 rounded-md bg-black text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-2 rounded-md bg-black text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full mb-4 p-2 rounded-md bg-black text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} HEMAN. All rights reserved.</p>
      </footer>
    </div>
  )
}

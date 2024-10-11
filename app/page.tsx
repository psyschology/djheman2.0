'use client'


import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlayCircle, PauseCircle, Calendar, Music, Disc } from 'lucide-react'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic background effect */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="heman.png" alt="HEMAN Logo" className="h-12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#music" className="hover:text-gray-300 transition-colors">Music</a>
            <a href="#events" className="hover:text-gray-300 transition-colors">Events</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">HEMAN</h1>
          <p className="text-xl mb-8">Experience the Sound of the Future</p>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white text-black py-2 px-6 rounded-full flex items-center hover:bg-gray-200 transition-colors"
          >
            {isPlaying ? (
              <>
                <PauseCircle className="mr-2" />
                Pause Track
              </>
            ) : (
              <>
                <PlayCircle className="mr-2" />
                Play Latest Track
              </>
            )}
          </button>
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
            {[1, 2, 3].map((track) => (
              <motion.div
                key={track}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: track * 0.1 }}
                className="bg-black p-6 rounded-lg"
              >
                <div className="aspect-square bg-gray-800 mb-4 rounded-md flex items-center justify-center">
                  <Music size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Title {track}</h3>
                <p className="text-gray-400 mb-4">Album Name</p>
                <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">
                  Listen Now
                </button>
              </motion.div>
            ))}
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
        <p>&copy; 2024 HEMAN. All rights reserved.</p>
      </footer>
    </div>
  )
}
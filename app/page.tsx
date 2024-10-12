'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Disc, Music, Calendar, ChevronDown, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Linkedin, PlayCircle, PauseCircle } from 'lucide-react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showAllTracks, setShowAllTracks] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [showPastGigs, setShowPastGigs] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [showGallery, setShowGallery] = useState(false)
  const [selectedPastGig, setSelectedPastGig] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const togglePlayback = (trackSrc: string) => {
    if (isPlaying && currentTrack === trackSrc) {
      setIsPlaying(false)
      setCurrentTrack(null)
    } else {
      setIsPlaying(true)
      setCurrentTrack(trackSrc)
    }
  }

  const tracks = [
    { title: "Bollywood Tech House Mixtape Vol.2", album: "DJ HEMAN", src: "/tracks/bollywood-tech-house-vol2.mp3" },
    { title: "Electro Pulse", album: "Future Beats", src: "/tracks/electro-pulse.mp3" },
    { title: "Neon Nights", album: "Synthwave Dreams", src: "/tracks/neon-nights.mp3" },
    { title: "Cyber Groove", album: "Digital Rhythms", src: "/tracks/cyber-groove.mp3" },
    { title: "Quantum Beat", album: "Particle Waves", src: "/tracks/quantum-beat.mp3" },
    { title: "Stellar Synth", album: "Cosmic Sounds", src: "/tracks/stellar-synth.mp3" },
  ]

  const upcomingGigs = [
    { name: "Techno Nights", date: "2024-05-15", venue: "Club Neon", poster: "/images/gig-poster-1.jpg" },
    { name: "Summer Beach Party", date: "2024-06-20", venue: "Sunset Beach", poster: "/images/gig-poster-2.jpg" },
    { name: "Warehouse Rave", date: "2024-07-10", venue: "Industrial Zone", poster: "/images/gig-poster-3.jpg" },
  ]

  const pastGigs = [
    { name: "New Year's Eve Bash", date: "2023-12-31", venue: "City Square", poster: "/images/past-gig-1.jpg" },
    { name: "Valentine's Special", date: "2024-02-14", venue: "Love Lounge", poster: "/images/past-gig-2.jpg" },
    { name: "St. Patrick's Day Rave", date: "2024-03-17", venue: "Green Room", poster: "/images/past-gig-3.jpg" },
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
              <a href="#about" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>About</a>
              <a href="#music" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Music</a>
              <a href="#events" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Events</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors" onClick={() => setIsNavOpen(false)}>Contact</a>
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
          <h1 className="text-6xl font-bold mb-4">HEMAN</h1>
          <p className="text-xl mb-8">Experience the Sound of the Future</p>
          <button
            onClick={() => togglePlayback("/tracks/featured-track.mp3")}
            className="bg-white text-black py-2 px-6 rounded-full flex items-center hover:bg-gray-200 transition-colors"
          >
            {isPlaying && currentTrack === "/tracks/featured-track.mp3" ? (
              <>
                <PauseCircle className="mr-2" />
                Pause Featured Track
              </>
            ) : (
              <>
                <PlayCircle className="mr-2" />
                Play Featured Track
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
            {tracks.slice(0, showAllTracks ? tracks.length : 3).map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-6 rounded-lg"
              >
                <div className="aspect-square bg-gray-800 mb-4 rounded-md flex items-center justify-center">
                  <Music size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
                <p className="text-gray-400 mb-4">{track.album}</p>
                <button
                  onClick={() => togglePlayback(track.src)}
                  className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {isPlaying && currentTrack === track.src ? 'Pause' : 'Play'}
                </button>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            {!showAllTracks && tracks.length > 3 && (
              <button
                onClick={() => setShowAllTracks(true)}
                className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center"
              >
                View More <ChevronDown className="ml-2" />
              </button>
            )}
            {showAllTracks && (
              <a
                href="#"
                className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors inline-flex items-center"
              >
                View All Tracks <ChevronRight className="ml-2" />
              </a>
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
            {showPastGigs ? "Past Gigs" : "Upcoming Gigs"}
          </motion.h2>
          <div className="mb-8 text-center">
            <button
              onClick={() => setShowPastGigs(!showPastGigs)}
              className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors"
            >
              {showPastGigs ? "Show Upcoming Gigs" : "Show Past Gigs"}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showPastGigs ? pastGigs : upcomingGigs).map((gig, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <Image src={gig.poster} alt={gig.name} width={300} height={400} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{gig.name}</h3>
                <p className="text-gray-400 mb-2">{new Date(gig.date).toLocaleDateString()}</p>
                <p className="text-gray-400 mb-4">{gig.venue}</p>
                {showPastGigs ? (
                  <button
                    onClick={() => {
                      setSelectedPastGig(gig.name)
                      setShowGallery(true)
                    }}
                    className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedEvent(gig.name)
                      setIsModalOpen(true)
                    }}
                    className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Book Your Spot Now
                  </button>
                )}
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
            className="max-w-md mx-auto mb-12"
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
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} HEMAN. All rights reserved.</p>
            <div className="flex items-center">
              <p className="text-gray-500 mr-2">Maintained and managed by</p>
              <a href="https://jetweb.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                jetweb.in
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6">
            <Dialog.Title className="text-2xl font-bold mb-4 text-black">Book Your Spot</Dialog.Title>
            <p className="mb-4 text-gray-600">Event: {selectedEvent}</p>
            <form onSubmit={(e) => {
              e.preventDefault()
              alert(`Thanks for booking your spot at "${selectedEvent}". We will send you updates via email shortly.`)
              setIsModalOpen(false)
            }}>
              <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" required />
              <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" required />
              <textarea placeholder="Message" rows={3} className="w-full mb-4 p-2 border rounded"></textarea>
              <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Dialog>

      {/* Past Gig Gallery Modal */}
      <Dialog open={showGallery} onClose={() => setShowGallery(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg max-w-4xl w-full mx-4 p-6">
            <Dialog.Title className="text-2xl font-bold mb-4 text-black">{selectedPastGig} Gallery</Dialog.Title>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((img) => (
                <Image key={img} src={`/images/gallery-${img}.jpg`} alt={`Gallery image ${img}`} width={300} height={200} className="w-full h-48 object-cover rounded" />
              ))}
            </div>
            <button
              onClick={() => setShowGallery(false)}
              className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
            >
              Close Gallery
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

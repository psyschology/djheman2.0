import { Disc } from 'lucide-react'
import { ClientComponent } from '../components/ClientComponent'

const tracks = [
  { title: "Bollywood Tech House Mixtape Vol.2", album: "DJ HEMAN", src: "/DJ_HEMAN/dj-heman-bollywood-tech-house-mixtape-vol2/" },
  { title: "dj-heman-bollywood-tech-house-mixtape-1", album: "dj-heman-bollywood-tech-house-mixtape-1", src: "/DJ_HEMAN/dj-heman-bollywood-tech-house-mixtape-1/" },
  { title: "holi-party-mashup-2k24", album: "holi-party-mashup-2k24", src: "/DJ_HEMAN/holi-party-mashup-2k24/" },
  { title: "Cyber Groove", album: "Digital Rhythms", src: "/DJ_HEMAN/cyber-groove/" },
  { title: "Quantum Beat", album: "Particle Waves", src: "/DJ_HEMAN/quantum-beat/" },
  { title: "Stellar Synth", album: "Cosmic Sounds", src: "/DJ_HEMAN/stellar-synth/" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ClientComponent tracks={tracks} />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="text-center">
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
        </div>
        
        {/* Animated vinyl records */}
        <div className="absolute -top-20 -left-20 opacity-20">
          <Disc size={200} />
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-20">
          <Disc size={300} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About HEMAN
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            HEMAN is an up-and-coming DJ with a passion for blending electronic beats with futuristic soundscapes. 
            With a unique style and energetic performances, HEMAN is quickly making a name in the underground music scene.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Upcoming Gigs
          </h2>
          <div className="space-y-6">
            {[1, 2, 3].map((event) => (
              <div
                key={event}
                className="bg-gray-900 p-6 rounded-lg flex items-center"
              >
                <Disc className="mr-4" size={32} />
                <div>
                  <h3 className="text-xl font-semibold">Event Name {event}</h3>
                  <p className="text-gray-400">Date & Venue</p>
                </div>
                <button className="ml-auto bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">
                  Get Tickets
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Get in Touch
          </h2>
          <form className="max-w-md mx-auto">
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
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} HEMAN. All rights reserved.</p>
      </footer>
    </div>
  )
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import ProjectCard from './ProjectCard'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import IMAGES from './Images/Images';
import { projectsData } from './projectData';
import resumePdf from './pdf/resume.pdf';
import {languageIcon} from './languageIcon';


const sections = ['Intro', 'Projects', 'About', 'Contact'];

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('Intro');

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    let currentSection = 'Intro';
    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase());
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition <= bottom) {
          currentSection = section;
        }
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
    }
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
  };

  const CatImage = () => {
    const [message, setMessage] = useState('');
    const [fadeOut, setFadeOut] = useState(false);

    const handleClick = () => {
      setMessage('Dancing through the ages, one stomp at a time! 🦕🎶');
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 3000);
    };

    return (
      <div className="text-center mt-6">
        <img
          src={IMAGES.image1}
          alt="Cat walking"
          className="mx-auto border-b-2 border-white h-32 w-auto cursor-pointer object-contain "
          onClick={handleClick}
        />
        {message && (
          <p className={`mt-2 text-gray-400 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {message}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-lexend">
      {/* Intro Animation */}
      {!showContent && (
        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-white bg-black z-50 text-5xl sm:text-7xl md:text-9xl font-light px-6 py-4 rounded-lg"
          initial={{ y: 0 }}
          animate={{ y: '-100vh' }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onAnimationComplete={() => setShowContent(true)}
        >
          <p>Luqman Nurhakim</p>
        </motion.div>
      )}

      {/* Navbar */}
      {showContent && (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gray-900/80 backdrop-blur-md rounded-full flex justify-around items-center py-2 px-4 z-50 shadow-lg">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSmoothScroll(section)}
              className={`text-sm sm:text-base px-3 py-1 rounded-full transition-colors ${
                activeSection === section ? 'text-white bg-gray-800/50' : 'text-gray-400 hover:text-white'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      )}

      {/* Main Content */}
      {showContent && (
        <main className="pt-6 pb-24 px-4 sm:px-6 md:px-10">
          <section id="intro" className="min-h-screen flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1 }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Hey👋, Friends!</h2>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-400">
                I’m a developer blending tech and minimalism to craft <b>impactful, functional solutions</b>.
              </p>
              <CatImage />
            </motion.div>
          </section>

          <section id="projects" className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-5xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                  <ProjectCard
                    key={project.id}
                    name={project.title}
                    description={project.description}
                    techused={project.techused || ''}
                    link={project.path}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
                <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
                🌟 A full-time student with big dreams! I am on a journey of learning and creating things I love. 
                💻 Passionate about building impactful solutions that make a difference in the world. 
                🚀 Currently diving into React, Tailwind, Next.js, and so much more!
              </p>
              <div className="w-full max-w-5xl mx-auto mt-12">
            <Carousel
              responsive={responsive}
              autoPlay={true} // Automatically slides
              autoPlaySpeed={2000} // 3 seconds per slide
              infinite={true} // Loops infinitely
              className="pb-12"
            >
              {Object.values(languageIcon).map((iconSrc, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={iconSrc}
                    alt={`Language Icon ${index + 2}`}
                    className="w-16 h-16 object-contain rounded-full shadow-md" // Favicon-like size and style
                  />
                </div>
              ))}
            </Carousel>
          </div>
            </div>
          </section>

          

          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex items-center justify-center">
            <div className="text-center w-full max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
              <p className="mt-4 text-gray-400 text-lg">Feel free to reach out—I’d love to chat!</p>
              <form className="mt-8 flex flex-col gap-4" action="https://formspree.io/f/mnnjyogn" method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-gray-900 text-white py-3 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-gray-900 text-white py-3 px-4 rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-gray-700"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black py-3 px-6 rounded-full font-semibold transition-shadow hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)]"
                >
                  Give Me a Holla, Chief!
                </button>
              </form>
              <div className="mt-8 flex justify-center gap-6">
                <a href="https://github.com/LuqmanNurhakimRosli" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-3xl hover:text-gray-400 transition-colors"></i>
                </a>
                <a href="https://linkedin.com/in/luqman-nurhakim-rosli-21974127a" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin text-3xl hover:text-gray-400 transition-colors"></i>
                </a>
                <a href="mailto:luqmanrosli907@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope text-3xl hover:text-gray-400 transition-colors"></i>
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Resume Button */}
      {showContent && (
        <button
          className="fixed top-4 right-4 bg-white text-black py-2 px-4 rounded-full font-semibold transition-shadow hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] z-50"
        >
          <a href={resumePdf} target="_blank" rel="noopener noreferrer">
          My Resume
          </a>
        </button>
      )}

      {/* Footer */}
      {showContent && (
        <footer className="bg-black text-white pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className="font-semibold">Luqman Nurhakim</span>. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

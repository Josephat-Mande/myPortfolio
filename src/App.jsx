import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Contact from './Contact';
import { Github, ExternalLink, Mail, Linkedin, Twitter, Code, Palette, Zap, Globe, ArrowDown, Menu, X, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI-Powered Mental Health E-platform",
      description: "A modern platform for mental health support utilizing AI-driven insights and resources.",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      github: "#",
      live: "https://nuzihi-web.netlify.app",
      image: "/nuzihi.png"
    },
    {
      title: "Lecture Live Transcription App",
      description: "A web application for real-time transcription of lectures using advanced speech recognition.",
      tech: ["React", "Node.js", "WebSocket", "TensorFlow"],
      github: "https://github.com/Josephat-Mande/NoteTed.git",
      live: "https://noteted.vercel.app",
      image: "/notetedd.png"
    },
    {
      title: "School Student Organization Website",
      description: "A platform for school student organizations to manage events, resources, and communication.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Josephat-Mande/sobo-web.git",
      live: "https://sobo-uon.vercel.app",
      image: "/sobo.png"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-8 h-8" />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Globe className="w-8 h-8" />, items: ["Node.js", "Python", "MongoDB", "Supabase"] },
    { name: "Design", icon: <Palette className="w-8 h-8" />, items: ["Figma", "UI/UX", "3D Modeling", "Animation"] },
    { name: "Tools", icon: <Zap className="w-8 h-8" />, items: ["Git", "Docker", "AWS", "CI/CD"] }
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Portfolio
                  </div>
                  
                  {/* Desktop Menu */}
                  <div className="hidden md:flex space-x-8">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-blue-400 transition-colors duration-300 relative group"
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                      </a>
                    ))}
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X /> : <Menu />}
                  </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                  <div className="md:hidden mt-4 pb-4 space-y-4">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block hover:text-blue-400 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
              <div className="max-w-6xl mx-auto text-center relative z-10">
                <div className="animate-fade-in-up">
                  <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Josephat  
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Full-Stack Developer & Design Creative 
                  </p>
                  <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    Crafting digital experiences that blend cutting-edge technology with stunning design and search engine optimization.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                    onClick={() => window.location.href = '#projects'}
                     className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                      <span className="relative z-10">View My Work</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    
                    <button 
                    onClick={() => window.location.href = '/mande.pdf'}
                    className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                      Download CV
                    </button>
                  </div>

                  <div className="flex justify-center space-x-6 mt-12">
                    <a
                      href="https://github.com/josephat-mande"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/josephatmande/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="mailto:jassymande@gmail.com"
                      className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="Email"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                    <a
                      href="https://wa.me/254115911220" // Replace with your WhatsApp number in international format
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6" /> {/* Replace with WhatsApp icon if available */}
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <ArrowDown className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              {/* 3D Floating Elements */}
              <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform rotate-45 animate-spin-slow opacity-70" />
              <div className="absolute bottom-1/3 right-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full animate-pulse opacity-60" />
              <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 transform rotate-12 animate-bounce opacity-50" />
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      I'm a passionate full-stack developer with 2+ years of experience creating digital solutions that make a difference. I specialize in modern web technologies and love bringing creative ideas to life through code.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or designing user experiences that delight and inspire.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
                        <div className="text-3xl font-bold text-blue-400">10+</div>
                        <div className="text-gray-400">Projects Completed</div>
                      </div>
                      <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
                        <div className="text-3xl font-bold text-purple-400">2+</div>
                        <div className="text-gray-400">Years Experience</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full animate-spin-slow opacity-80" />
                    <div className="absolute inset-4 bg-black rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <p className="text-xl font-semibold">You Envision, We build</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Skills & Expertise
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <ul className="space-y-2">
                        {skill.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 hover:text-white transition-colors duration-200">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <div
                      key={project.title}
                      className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <a
                            href={project.github}
                            className="p-2 bg-black/50 rounded-full hover:bg-blue-600 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.live}
                            className="p-2 bg-black/50 rounded-full hover:bg-purple-600 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact-info" className="py-20 px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Let's Work Together
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Let's create something amazing together.One step away
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="mailto:jassymande@gmail.com"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </a>

                  <button
                    className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={() => navigate("/contact")}
                  >
                    <span>Hire Me</span>
                  </button>

                  <a
                    href="https://www.linkedin.com/in/josephatmande/"
                    className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800 relative z-10">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-400">
                  © 2025 Mande  Crafted with ❤️ and lots of ☕
                </p>
              </div>
            </footer>

            <style jsx>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              
              @keyframes fade-in-up {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              
              .animate-spin-slow {
                animation: spin-slow 20s linear infinite;
              }
              
              .animate-fade-in-up {
                animation: fade-in-up 1s ease-out;
              }
            `}</style>
          </div>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/#contact" element={<Contact />} />

    </Routes>
  );
};

export default Portfolio;
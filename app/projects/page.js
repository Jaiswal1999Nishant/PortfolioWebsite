'use client'

import { Github, ExternalLink, Code } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Book Shop Website(Personal)",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics. Built with modern technologies for optimal performance.",
      tech: ["Python", "Django", "SQLlite", "Stripe","BootStrap"],
      github: "https://github.com/Jaiswal1999Nishant/BookShop",
      demo: "https://demo1.com",
      featured: true
    },
    {
      title: "Mental Wellness Companion-GenAI(personal)",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking. Designed for remote teams.",
      tech: ["Python", "Strimlit", "Hugging Face Models(roberta, JHartman)", "TextBlob"],
      github: "https://github.com/Nishant1999Nishant/MentalWellnessCompanion",
      demo: "https://demo2.com",
      featured: true
    },
    {
      title: "Portfolio Website(Personal)",
      description: "SaaS platform for creating professional portfolio websites with drag-and-drop interface.",
      tech: ["Next.js", "React.js", "Tailwind CSS"],
      github: "https://github.com/Jaiswal1999Nishant/Portfolio",
      demo: "https://demo6.com",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          My Projects
        </h1>
        
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto animate-slide-in-up delay-100">
          A collection of projects I've worked on, showcasing my skills and passion for development.
        </p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <article 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-in-up transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="text-white/50 group-hover:scale-125 transition-transform duration-500" size={64} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs border border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors group/link"
                    >
                      <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                    >
                      <ExternalLink size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            More Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <article 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 animate-slide-in-up transform hover:-translate-y-2"
                style={{ animationDelay: `${(index + 3) * 0.15}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="text-white/50 group-hover:scale-125 transition-transform duration-500" size={64} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                    >
                      <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors group/link"
                    >
                      <ExternalLink size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
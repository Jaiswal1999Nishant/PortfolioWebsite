'use client'

import { Building2, Calendar, MapPin, ExternalLink, Award, TrendingUp, Code, Github, Folder } from 'lucide-react'

export default function InternshipsPage() {
  const internships = [
    {
      company: "GeniaTEQ Pvt Ltd",
      role: "Full Stack Developer Intern",
      duration: "Nov 2025 - March 2026",
      location: " Pimple Saudagar, Pune",
      type: "On-Site",
      description: "Developed and deployed 5 major features for the company's main product, improving user engagement by 25%. Worked with Next.js, React, Node.js, and MySQL in an agile environment.",
      achievements: [
        "Built a real-time  handling 10K+ daily users",
        "Optimized database queries reducing load time by 40%",
        "Collaborated with a team of 1 developer using Git and Jira",
        "Participated in code reviews and agile ceremonies"
      ],
      technologies: ["Next.js","React", "TailwindCSS","Node.js & Express.js", "MySQL", "PostgreSQL", "AWS"],
      companyUrl: "https://geniateq.com",
      certificate: true,
      projects: [
        {
          name: "Royal Holiday Tours",
          description: "Built a platform for managing travel packages and vacation tours. Designed APIs and frontend pages for package listing and tour details",
          technologies: ["Next.js","React"," TailwindCSS","MySQL", "Express.js", "Node.js"],
          impact: "Increased user engagement by 35%",
          github: "https://github.com/GeniaTeq2323Nishant/RoyalToursWebsite",
          demo: ""
        },
        {
          name: "Bizdy Business website",
          description: "Developed a business platform where companies can collaborate and get the all services of company.Implemented backend APIs for dynamic business data.",
          technologies: ["Next.js","React"," TailwindCSS","Node.js", "MySQL", "Express"],
          impact: "Implemented responsive UI.",
          github: "https://github.com/GeniaTeq2323Nishant/BizdyWebsite",
          demo: "https://bizdy.in"
        },
        {
         name: "Whatsapp Automation",
          description: "1.Developed system for template creation, scheduling and bulk messaging 2.Implemented contact list management and campaign launch functionality.",
          technologies: ["Next.js","React"," TailwindCSS","Node.js", "MySQL", "Express.js","Whatsapp API"],
          impact: "Reduced  template creation time by 60%",
          github: "https://github.com/GeniaTeq2323Nishant/BizdyWebsite",
          demo: "https://bizdy.in"
        },
        {
          name: "Paraamba & Mu-College(Modification & Bug fixing)",
          description: "Fixed production bugs and improved functionality in live client websites.Modified frontend components and resolved API integration issues",
          technologies: ["React", "Next.js","TailwindCSS","Node.js", "PostgreSQL", "Express"],
          impact: "Improved websites visualizations and working by 100%",
          github: "https://github.com/GeniaTeq2323Nishant/paraambaWebsite",
          demo: "https://paraamba.org"
        },
      ]
    }
  ]

  const stats = [
    { icon: Building2, value: "1", label: "Companies" },
    { icon: Calendar, value: "4", label: "Months Total" },
    { icon: Award, value: "2", label: "Certificates" },
    { icon: TrendingUp, value: "15+", label: "Skills Gained" }
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Internship Experience
        </h1>
        
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto animate-slide-in-up delay-100">
          Real-world experience gained through internships at leading tech companies.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="text-purple-400 mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Internships Timeline */}
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <article 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-in-up"
              style={{ animationDelay: `${(index + 4) * 0.15}s` }}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-lg group-hover:scale-110 transition-transform">
                        <Building2 className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                          {internship.role}
                        </h2>
                        <div className="flex items-center gap-2 mb-2">
                          <a 
                            href={internship.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                          >
                            {internship.company}
                            <ExternalLink size={16} />
                          </a>
                          {internship.certificate && (
                            <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs border border-green-500/30">
                              Certified
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {internship.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {internship.location}
                          </span>
                          <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/30">
                            {internship.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {internship.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Award className="text-purple-400" size={20} />
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects Section */}
                {internship.projects && internship.projects.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-800">
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <Folder className="text-cyan-400" size={20} />
                      Projects Built During Internship
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {internship.projects.map((project, pIndex) => (
                        <div 
                          key={pIndex}
                          className="bg-gray-800/50 rounded-lg p-5 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Code className="text-cyan-400" size={18} />
                              <h4 className="font-semibold text-white">{project.name}</h4>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Impact */}
                          <div className="mb-3 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm flex items-center gap-2">
                            <TrendingUp size={14} />
                            <span className="font-medium">Impact:</span>
                            <span>{project.impact}</span>
                          </div>

                          {/* Project Technologies */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.technologies.map((tech, tIndex) => (
                              <span 
                                key={tIndex}
                                className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 rounded text-xs border border-cyan-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Project Links */}
                          <div className="flex gap-3 pt-3 border-t border-gray-700">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                              >
                                <Github size={16} />
                                Code
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                              >
                                <ExternalLink size={16} />
                                Demo
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>

        {/* Skills Gained Section */}
        <div className="mt-16 animate-slide-in-up delay-500">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Skills Gained from Internships
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Skills",
                skills: ["Full Stack Development", "API Development", "Database Design", "IIS Deployment", "Version Control"]
              },
              {
                title: "Soft Skills",
                skills: ["Team Collaboration", "Agile Methodology", "Code Review", "Problem Solving", "Time Management","Critical Thinking"]
              },
              {
                title: "Tools & Practices",
                skills: ["Git & GitHub", "Docker", "CI/CD", "Testing", "Documentation"]
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section (Optional) */}
        <div className="mt-16 animate-slide-in-up delay-600">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Supervisor Feedback
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Outstanding intern who quickly became a valuable team member. Delivered high-quality code and showed great initiative.",
                author: "Ravi Yadav",
                position: "CEO, GeniaTEQ Pvt Ltd"
              },
              {
                quote: "Exceptional attention to detail and design implementation. One of the best interns we've had.",
                author: "Rahul Kshirsagar",
                position: "HR, GeniaTEQ Pvt Ltd"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
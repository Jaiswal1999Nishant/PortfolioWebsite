'use client'

import { Briefcase, Code, User, FileText } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: Briefcase, label: "4 Months", sublabel: "Experience" },
    { icon: Code, label: "7+ Projects", sublabel: "Completed" },
    { icon: User, label: "30+ Clients", sublabel: "Satisfied" },
    { icon: FileText, label: "3 Projects", sublabel: "Deployed" }
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          About Me
        </h1>
        
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto animate-slide-in-up delay-100">
          Get to know more about my journey, experience, and what drives me as a developer.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed animate-slide-in-left">
              I'm a passionate full-stack developer with over 4 Months of Internship experience creating web applications that make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-300 leading-relaxed animate-slide-in-left delay-100">
              My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a career where I get to build products that impact people's lives.
            </p>
            <p className="text-gray-300 leading-relaxed animate-slide-in-left delay-200">
              When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies.
            </p>
            <p className="text-gray-300 leading-relaxed animate-slide-in-left delay-300">
              I believe in continuous learning and staying up-to-date with the latest industry trends. My goal is to create solutions that not only work well but also provide an exceptional user experience.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="group p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.sublabel}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 animate-slide-in-up">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-white">Bachelor of Computer Application</h3>
                <p className="text-gray-400">Pune University</p>
                <p className="text-sm text-gray-500">2019 - 2022</p>
                <h3 className="text-lg font-semibold text-white">CGPA</h3>
                <p className="text-sm text-gray-500">8.36</p>
              </div>
            </div>
          </div>
          {/*bachelor degree */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 animate-slide-in-up">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-white">Master of Computer Application</h3>
                <p className="text-gray-400">Pune University</p>
                <p className="text-sm text-gray-500">2023 - 2025</p>
                <h3 className="text-lg font-semibold text-white">CGPA</h3>
                <p className="text-sm text-gray-500">7.5</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 animate-slide-in-up delay-100">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Experience
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="text-lg font-semibold text-white">Full Stack Developer(Internship)</h3>
                <p className="text-gray-400">GeniaTEQ Pvt Ltd</p>
                <p className="text-sm text-gray-500">Nov 2025 - March 2026 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
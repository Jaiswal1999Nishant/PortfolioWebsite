'use client'

export default function SkillsPage() {
  const skillCategories = {
    "Frontend Development": {
      color: "purple",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    "Backend Development": {
      color: "cyan",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Python", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 },
      ]
    },
    "Tools & Technologies": {
      color: "yellow",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Selenium", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "PowerBI", level:70},
        {name: "AI & ML", level:78}
      ]
    },
    "Interests & Hobbies": {
     color :"orange",
     skills : [
        {name :"Cyber Security", level: 85},
        {name :"Software Testing", level: 90},
        {name :"Ethical Hacking", level: 75},
        {name :"Data Analytics & Data Sceince", level:80 },
        {name :"Chess", level: 80 },
        {name :"Reading Books", level:85}

     ]

    }
  }

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-300",
        border: "border-purple-500/30",
        hover: "hover:border-purple-500/50",
        bar: "bg-purple-500"
      },
      cyan: {
        bg: "bg-cyan-500/10",
        text: "text-cyan-300",
        border: "border-cyan-500/30",
        hover: "hover:border-cyan-500/50",
        bar: "bg-cyan-500"
      },
      yellow: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-300",
        border: "border-yellow-500/30",
        hover: "hover:border-yellow-500/50",
        bar: "bg-yellow-500"
      },
      orange: {
        bg: "bg-orange-500/10",
        text: "text-orange-300",
        border: "border-orange-500/30",
        hover: "hover:border-orange-500/50",
        bar: "bg-orange-500"
      }

    }
    return colors[color]
  }

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Skills & Technologies
        </h1>
        
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto animate-slide-in-up delay-100">
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => {
            const colorClasses = getColorClasses(data.color)
            return (
              <div 
                key={category}
                className="animate-slide-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                  <span className={`w-2 h-2 ${colorClasses.bar} rounded-full animate-pulse`} />
                  {category}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {data.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className={`bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className={`font-semibold ${colorClasses.text}`}>
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`${colorClasses.bar} h-full rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 6 + index) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20 animate-slide-in-up delay-500">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Generative AI & ML Certification", year: "2025" },
              { name: "Data Science - IBM", year: "2025" },
              { name: "Advanced Java Fiundation Skill - Infosys", year: "2024" }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
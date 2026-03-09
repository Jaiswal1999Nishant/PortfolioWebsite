'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        {/* Profile Image */}
        <div className="mb-8 animate-scale-in">
          <div className="relative w-32 h-32 mx-auto group">
            {/* Image Container */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-all duration-500 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50">
              <Image
                src="/profile.jpg"
                alt="John Doe Profile Picture"
                width={128}
                height={128}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/50 animate-pulse" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-slide-in-up">
          <span className="block text-gray-400 mb-2">Hi, I'm</span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent inline-block">
            Nishant Jaiswal
          </span>
        </h1>
        
        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-slide-in-up delay-200">
          <Sparkles className="text-purple-400 animate-pulse" size={20} />
          <p className="text-xl sm:text-2xl text-gray-300">
            Full Stack Developer
          </p>
          <Sparkles className="text-cyan-400 animate-pulse" size={20} />
        </div>
        
        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-up delay-300">
          Motivated MERN Stack Developer with hands-on experience in building full-stack web applications using MySQL,MongoDB, Express.js, React.js, and Node.js. Completed a 4-month internship at GeniaTech, where I worked on live client projects including business websites, vacation management systems, and WhatsApp automation tools. Skilled in developing scalable APIs, debugging production issues, and implementing real-world solutions for business platforms.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-in-up delay-400">
          <Link
            href="/projects"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
//Duplicate code start from here
// 'use client'

// import Link from 'next/link'
// import { ArrowRight, Sparkles } from 'lucide-react'

// export default function HomePage() {
//   return (
//     <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
//       <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
//         {/* Avatar */}
//         <div className="mb-8 animate-scale-in">
//           <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold relative overflow-hidden group cursor-default">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <span className="relative z-10">NJ</span>
//             <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//           </div>
//         </div>
        
//         {/* Name */}
//         <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-slide-in-up">
//           <span className="block text-gray-400 mb-2">Hi, I'm</span>
//           <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent inline-block">
//             Nishant Jaiswal
//           </span>
//         </h1>
        
//         {/* Title */}
//         <div className="flex items-center justify-center gap-2 mb-8 animate-slide-in-up delay-200">
//           <Sparkles className="text-purple-400 animate-pulse" size={20} />
//           <p className="text-xl sm:text-2xl text-gray-300">
//             Full Stack Developer
//           </p>
//           <Sparkles className="text-cyan-400 animate-pulse" size={20} />
//         </div>
        
//         {/* Description */}
//         <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-up delay-300">
//           Crafting exceptional digital experiences with modern web technologies. 
//           Passionate about building products that make a difference.
//         </p>
        
//         {/* CTA Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 animate-slide-in-up delay-400">
//           <Link
//             href="/projects"
//             className="group px-8 py-4 bg-gradient-to-r from-purple-800 to-purple-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
//           >
//             View My Work
//             <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//           </Link>
//           <Link
//             href="/contact"
//             className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
//           >
//             Contact Me
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
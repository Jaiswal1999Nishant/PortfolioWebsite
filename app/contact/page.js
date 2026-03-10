// 'use client'

// import { useState } from 'react'
// import { Github, Linkedin, Mail, FileText, Send, MapPin, Phone } from 'lucide-react'

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })

//   const handleSubmit = async (e) => {
//   e.preventDefault()
//   setIsSubmitting(true)

//   const formDataToSend = new FormData()
//   formDataToSend.append('access_key', 'c164072d-daf3-41fe-a5f5-5e29f118d7de')
//   formDataToSend.append('name', formData.name)
//   formDataToSend.append('email', formData.email)
//   formDataToSend.append('subject', formData.subject)
//   formDataToSend.append('message', formData.message)

//   try {
//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: formDataToSend
//     })

//     if (response.ok) {
//       setStatus({
//         type: 'success',
//         message: 'Message sent successfully!'
//       })
//       setFormData({ name: '', email: '', subject: '', message: '' })
//     }
//   } catch (error) {
//     setStatus({
//       type: 'error',
//       message: 'Failed to send message.'
//     })
//   } finally {
//     setIsSubmitting(false)
//   }
// }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const socialLinks = [
//     { 
//       icon: Github, 
//       href: "https://github.com/Jaiswal1999Nishant",
//       label: "GitHub",
//       username: "@NishantJaiswal"
//     },
//     { 
//       icon: Linkedin, 
//       href: "https://linkedin.com/in/nishant-jaiswal-NJ",
//       label: "LinkedIn",
//       username: "Nishant Jaiswal"
//     },
//     { 
//       icon: Mail, 
//       href: "mailto:nj35581@gmail.com",
//       label: "Email",
//       username: "nj35581@gmail.com"
//     }
//   ]

//   const contactInfo = [
//     { icon: Mail, label: "Email", value: "your.email@example.com" },
//     { icon: Phone, label: "Phone", value: "+91 97634 73661" },
//     { icon: MapPin, label: "Location", value: "Pune, Maharashtra(India)" }
//   ]

//   return (
//     <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
//       <div className="max-w-6xl mx-auto relative z-10">
//         <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
//           Get In Touch
//         </h1>
        
//         <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto animate-slide-in-up delay-100">
//           Have a project in mind or want to collaborate? Feel free to reach out!
//         </p>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="animate-slide-in-left">
//             <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
//               <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                     placeholder="Project inquiry"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
//                 >
//                   <Send size={20} />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Contact Info & Social */}
//           <div className="space-y-8 animate-slide-in-right">
//             {/* Contact Information */}
//             <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
//               <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => {
//                   const Icon = info.icon
//                   return (
//                     <div key={index} className="flex items-center gap-4 text-gray-300">
//                       <div className="p-3 bg-purple-500/10 rounded-lg">
//                         <Icon size={20} className="text-purple-400" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">{info.label}</p>
//                         <p className="font-medium">{info.value}</p>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
//               <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
//               <div className="space-y-4">
//                 {socialLinks.map((social, index) => {
//                   const Icon = social.icon
//                   return (
//                     <a
//                       key={index}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
//                     >
//                       <div className="p-3 bg-purple-500/10 rounded-lg group-hover:scale-110 transition-transform">
//                         <Icon size={20} className="text-purple-400" />
//                       </div>
//                       <div>
//                         <p className="font-medium text-white">{social.label}</p>
//                         <p className="text-sm text-gray-400">{social.username}</p>
//                       </div>
//                     </a>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* Resume Download */}
//             <a
//               href="/public/nishant_jaiswal_resume.pdf"
//               download
//               className="block p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-1">Download Resume</h3>
//                   <p className="text-purple-100">View my complete experience</p>
//                 </div>
//                 <FileText size={32} className="text-white" />
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

//Duplicate code start from here
'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, FileText, Send, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Using Web3Forms (easiest - no npm install needed)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c164072d-daf3-41fe-a5f5-5e29f118d7de', // Get from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
        })
      })

      const result = await response.json()

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try emailing me directly at nj35581@gmail.com'
      })
      console.error('Form Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

   const socialLinks = [
  { 
       icon: Github, 
       href: "https://github.com/Jaiswal1999Nishant",
       label: "GitHub",
       username: "@NishantJaiswal"
      },
    { 
         icon: Linkedin, 
         href: "https://linkedin.com/in/nishant-jaiswal-NJ",
         label: "LinkedIn",
         username: "Nishant Jaiswal"
      },
      { 
        icon: Mail, 
       href: "mailto:nj35581@gmail.com",
       label: "Email",
       username: "nj35581@gmail.com"
     }
   ]

   const contactInfo = [
     { icon: Mail, label: "Email", value: "your.email@example.com" },
     { icon: Phone, label: "Phone", value: "+91 97634 73661" },
     { icon: MapPin, label: "Location", value: "Pune, Maharashtra(India)" }
   ]



  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Get In Touch
        </h1>
        
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto animate-slide-in-up delay-100">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {/* Status Message */}
              {status.message && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-purple-500/10 rounded-lg">
                        <Icon size={20} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-purple-500/10 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon size={20} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{social.label}</p>
                        <p className="text-sm text-gray-400">{social.username}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Resume Download */}
            <a
              href="/nishant_jaiswal_resume.pdf"
              download="Nishant_Jaiswal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
             >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Download Resume</h3>
                  <p className="text-purple-100">View my complete experience</p>
                </div>
                <FileText size={32} className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-800 py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Nishant Jaiswal</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Internships', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Jaiswal1999Nishant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nishant-jaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your.nj35581@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {currentYear} Nishant Jaiswal. Built with{' '}
            <span className="text-purple-400">Next.js</span> and{' '}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
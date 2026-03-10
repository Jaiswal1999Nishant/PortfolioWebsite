/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add this:
  async headers() {
    return [
      {
        source: '/nishant_jaiswal_resume.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="nishant_jaiswal_resume.pdf"',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
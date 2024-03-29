/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'images.getbento.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig

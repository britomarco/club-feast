/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: '4f298a53e552283bee957836a529baec',
        API_URL: 'https://api.themoviedb.org/3',
        API_IMB_URL: 'https://image.tmdb.org/t/p/w500',
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
          },
          {
            protocol: 'https',
            hostname: 'themoviedb.org'
          }
        ],
      }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

  const inProduction = process.env.NODE_ENV = 'production';
  const isDev = process.env.NODE_ENV = 'development';
const nextConfig = {
  
    basePath: inProduction? '/webkit-master/': '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
            },
            
}

module.exports = nextConfig
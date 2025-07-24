/** @type {import('next').NextConfig} */

  // const inProduction = 'production'= 'production';
  // const isDev = process.env.NODE_ENV = 'development';
const nextConfig = {
  
    basePath: '/webkit-master',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
            },
            
}

module.exports = nextConfig
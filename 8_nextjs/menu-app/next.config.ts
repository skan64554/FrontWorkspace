import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol : 'http',
        hostname : '**.kakaocdn.net',
        port : '',
        pathname:'/**'
      },
      {
        protocol : 'https',
        hostname : '**.kakaocdn.net',
        port : '',
        pathname:'/**'
      }
    ]
  }
};

export default nextConfig;

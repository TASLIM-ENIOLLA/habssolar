import type { NextConfig } from "next";

export default {
  env: {
    backendURL: "http://127.0.0.1:8090",
    
    GMAIL_ADDRESS: "oladipo1999@gmail.com",
    GMAIL_APP_PASSWORD: "ouijeldrapjpcqtm",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8090",
        pathname: '/**'
      },
    ]
  },
} satisfies NextConfig;

import type { NextConfig } from "next";
import {hostname} from "node:os";

const nextConfig: NextConfig = {
  /* config options here */
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.pexels.com",
            }
        ]
    },
  reactCompiler: true,
};

export default nextConfig;

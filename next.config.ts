import type { NextConfig } from "next";
import { SECURITY_HEADERS } from "./lib/securityConfig";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply these security headers to all routes
        source: "/:path*",
        headers: SECURITY_HEADERS.map((header) => ({
          key: header.key,
          value: header.value,
        })),
      },
    ];
  },
};

export default nextConfig;

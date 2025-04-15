/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev",
        port: "",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "easytopup.sg",
        port: "",
      },
      {

        protocol:"https",
        hostname:"upload.wikimedia.org",
        port:""
      },
      {

        protocol:"https",
        hostname:"freepik.com",
        port:""
      }
    ],
  },
};

export default nextConfig;

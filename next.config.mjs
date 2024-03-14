/** @type {import('next').NextConfig} */
const nextConfig = { 
  output: 'export',
  images: { unoptimized: true },
//  async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/pages/signin",
//         permanent: true,
//       },
//     ];
//   }
};

export default nextConfig;

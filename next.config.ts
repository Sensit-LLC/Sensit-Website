import type { NextConfig } from "next";
// import type { Redirect } from "next/dist/lib/load-custom-routes";

// nextjs does not support redirects with a static build
// const redirects = async (): Promise<Redirect[]> => [
//   {
//     source: "/resources-and-documents",
//     destination: "/resources",
//     permanent: true,
//   },
//   {
//     source: "/field-site-requirements",
//     destination: "/fsr",
//     permanent: true,
//   },
//   {
//     source: "/publications-and-documents",
//     destination: "/resources",
//     permanent: true,
//   },
//   {
//     source: "/documents",
//     destination: "/resources",
//     permanent: true,
//   },
// ];

const nextConfig: NextConfig = {
  /* config options here */
  // nextjs does not support redirects with a static build
  // redirects,
  output: "export",
  images: { unoptimized: true}
};

export default nextConfig;

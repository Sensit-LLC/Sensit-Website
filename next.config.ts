import type { NextConfig } from "next";
import type { Redirect } from "next/dist/lib/load-custom-routes";

const redirects = async (): Promise<Redirect[]> => [
  {
    source: "/resources-and-documents",
    destination: "/resources",
    permanent: true,
  },
  {
    source: "/field-site-requirements",
    destination: "/fsr",
    permanent: true,
  },
  {
    source: "/publications-and-documents",
    destination: "/resources",
    permanent: true,
  },
  {
    source: "/documents",
    destination: "/resources",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  redirects,

};

export default nextConfig;

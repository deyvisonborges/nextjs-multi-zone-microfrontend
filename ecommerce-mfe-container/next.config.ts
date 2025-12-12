
import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // ---- ZONA HOME ----
      // {
      //   source: "/",
      //   destination: process.env.HOME_DOMAIN + "/",
      // },
      {
        source: "/",
        destination: `${process.env.HOME_DOMAIN}/`,
      },
      {
        source: "/:path((?!pedidos|pdp-static|home-static).*)",
        destination: process.env.HOME_DOMAIN + "/:path*",
      },

      // Assets da HOME
      {
        source: "/home-static/:path*",
        destination: process.env.HOME_DOMAIN + "/home-static/:path*",
      },

      // ---- ZONA PDP ----
      {
        source: "/pedidos",
        destination: process.env.PDP_DOMAIN + "/pedidos",
      },
      {
        source: "/pedidos/:path*",
        destination: process.env.PDP_DOMAIN + "/pedidos/:path*",
      },

      // Assets da PDP
      {
        source: "/pdp-static/:path*",
        destination: process.env.PDP_DOMAIN + "/pdp-static/:path*",
      }
    ];
  }
};

module.exports = nextConfig;

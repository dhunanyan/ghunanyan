import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gor Hunanyan | Project Manager Portfolio",
    short_name: "Gor Portfolio",
    description:
      "Portfolio website of Gor Hunanyan focused on project management, planning, and delivery.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E192D",
    theme_color: "#0E192D",
    orientation: "portrait",
    lang: "en",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

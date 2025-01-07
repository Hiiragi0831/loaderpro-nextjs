import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["*"],
        allow: "/",
        disallow: ["/private/", "/account/"],
      },
      {
        userAgent: ["Yandex"],
        allow: "/",
        disallow: ["/private/", "/account/"],
      },
      {
        userAgent: ["Googlebot"],
        allow: "/",
        disallow: ["/private/", "/account/"],
      },
    ],
    host: process.env.NEXT_PUBLIC_HOST,
    sitemap: `${process.env.NEXT_PUBLIC_HOST}/sitemap.xml`,
  };
}

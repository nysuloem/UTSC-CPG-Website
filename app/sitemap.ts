import type { MetadataRoute } from "next";
import { outputs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://utsc-computational-physiology.boazli001.chatgpt.site";
  const routes = ["", "/about", "/research", "/people", "/hummod", "/outputs", "/join"];
  return [...routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .8 })), ...outputs.map((item) => ({ url: `${base}/outputs/${item.slug}`, changeFrequency: "yearly" as const, priority: .6 }))];
}

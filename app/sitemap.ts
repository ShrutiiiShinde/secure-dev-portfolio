import { MetadataRoute } from "next";
import { projectsData } from "@/lib/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://github.com/ShrutiiiShinde/secure-dev-portfolio";

  // Dynamic project routes
  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Core static routes
  const staticUrls = [
    "",
    "/projects",
    "/skills",
    "/writing",
    "/contact",
    "/security",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...staticUrls, ...projectUrls];
}

import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata = {
  title: "Projects | Shruti Vijay Shinde",
  description:
    "Explore full-stack software and cybersecurity projects developed with secure coding practices.",
};

export default function ProjectsPage() {
  return (
    <main className="w-full pt-8">
      <ProjectsSection />
    </main>
  );
}

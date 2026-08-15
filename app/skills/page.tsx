import SkillsSection from "@/components/sections/SkillsSection";

export const metadata = {
  title: "Skills | Shruti Vijay Shinde",
  description:
    "Technical skills and toolsets categorized by Development, Backend, Database, Cybersecurity, Networking, and Secure Development.",
};

export default function SkillsPage() {
  return (
    <main className="w-full pt-8">
      <SkillsSection />
    </main>
  );
}

import { Achievement } from "@/types";

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Security Hall of Fame Recognition",
    organization: "Vulnerability Disclosure Programs",
    period: "2024",
    badge: "Hall of Fame",
    description:
      "Formally acknowledged in Security Hall of Fame listings for discovering and reporting critical web application vulnerabilities under responsible disclosure guidelines.",
    highlights: [
      "Identified and reported web security vulnerabilities responsibly",
      "Awarded Hall of Fame letter of appreciation and official listing",
      "Collaborated with security teams on remediation validation",
    ],
  },
  {
    id: "ach-2",
    title: "Responsible Disclosure Recognition",
    organization: "Bug Bounty & Security Audits",
    period: "2023 - 2024",
    badge: "Vulnerability Disclosure",
    description:
      "Recognized for executing rigorous security assessments, submitting high-quality vulnerability reports with Proof of Concept (PoC) exploits, and adhering to strict ethical hacking principles.",
    highlights: [
      "Submitted structured VAPT vulnerability validation reports",
      "Demonstrated risk assessment and exploitability impact analysis",
      "Followed ISO/IEC 29147 responsible disclosure standards",
    ],
  },
  {
    id: "ach-3",
    title: "Academic Excellence in Cybersecurity",
    organization: "University Computer Science Division",
    period: "2020 - 2024",
    badge: "Academic Honor",
    description:
      "Graduated with top academic standing, specializing in Cybersecurity, Web Application Security, Network Architectures, and Secure Software Development Lifecycle (SSDLC).",
    highlights: [
      "Specialized in Application Security & Network Defense",
      "Led technical security workshops and peer mentoring",
      "Graduated with First Class Distinction",
    ],
  },
  {
    id: "ach-4",
    title: "Cisco Cybersecurity Certification",
    organization: "Cisco Networking Academy",
    period: "2023",
    badge: "Certified Specialist",
    description:
      "Earned official certification in Cisco CyberOps and Network Security, mastering network defense protocols, threat analysis, incident handling, and cryptographic security controls.",
    highlights: [
      "Network threat analysis and packet inspection (Wireshark/Nmap)",
      "Security Operations Center (SOC) incident response protocols",
      "Cryptographic protocols and perimeter firewall security",
    ],
  },
];

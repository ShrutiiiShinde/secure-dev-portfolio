export type SecurityHeaderItem = {
  key: string;
  value: string;
  category: string;
  purpose: string;
  mitigation: string;
};

export const SECURITY_HEADERS: SecurityHeaderItem[] = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; upgrade-insecure-requests;",
    category: "Injection Prevention",
    purpose: "Restricts resource loading origin domains (scripts, styles, images, fonts).",
    mitigation: "Mitigates Cross-Site Scripting (XSS), data injection, and clickjacking attacks.",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
    category: "Transport Security",
    purpose: "Enforces strict HTTPS connections for 2 years across all domain endpoints.",
    mitigation: "Prevents Man-in-the-Middle (MitM) SSL stripping and protocol downgrade attacks.",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
    category: "UI Redress Protection",
    purpose: "Disallows embedding the website inside <iframe>, <frame>, or <object> tags.",
    mitigation: "Protects users against Clickjacking attacks and UI redress exploits.",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
    category: "MIME Sniffing",
    purpose: "Prevents web browsers from MIME-sniffing a response away from the declared content-type.",
    mitigation: "Blocks malicious file upload executions disguised as non-executable MIME types.",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
    category: "Privacy & Telemetry",
    purpose: "Controls how much HTTP referrer information is sent when navigating away.",
    mitigation: "Prevents accidental leakage of sensitive URL path tokens to third-party domains.",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    category: "Hardware Access Control",
    purpose: "Restricts access to hardware peripherals and browser telemetry features.",
    mitigation: "Disables unauthorized hardware access (webcam, mic, location tracking).",
  },
];

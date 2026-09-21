"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldAlert } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Writing", href: "/#writing" },
    { name: "Security", href: "/security" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/#home"
          className="text-lg sm:text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          <span>Shruti Vijay Shinde</span>
          <span className="text-primary text-2xl leading-none">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                item.name === "Security"
                  ? "text-secondary hover:text-secondary hover:bg-secondary/10 flex items-center gap-1 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {item.name === "Security" && <ShieldAlert className="w-3.5 h-3.5" />}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-b border-muted/50 bg-background/95 backdrop-blur-lg px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                item.name === "Security"
                  ? "text-secondary bg-secondary/10 font-semibold flex items-center gap-2"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {item.name === "Security" && <ShieldAlert className="w-4 h-4" />}
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

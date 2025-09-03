"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Menu,
  X,
  Settings,
} from "lucide-react";
import { useSectionTheme } from "./section-theme-provider";

const navItems = [
  { name: "Home", href: "#home", icon: Home, theme: "home" as const },
  { name: "About", href: "#about", icon: User, theme: "about" as const },
  { name: "Skills", href: "#skills", icon: Settings, theme: "skills" as const },
  {
    name: "Projects",
    href: "#projects",
    icon: Code,
    theme: "projects" as const,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: Briefcase,
    theme: "experience" as const,
  },
  { name: "Contact", href: "#contact", icon: Mail, theme: "contact" as const },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setTheme } = useSectionTheme();

  // 🔹 IntersectionObserver: detects which section is visible
  useEffect(() => {
    const sections = navItems
      .map((it) => document.getElementById(it.href.substring(1)))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (!visibleEntries.length) return;

        const mostVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        setActiveSection(mostVisible.target.id);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // smooth detection
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // 🔹 Sync theme immediately
  useLayoutEffect(() => {
    const navItem = navItems.find((n) => n.href.substring(1) === activeSection);
    if (navItem) setTheme(navItem.theme);
  }, [activeSection, setTheme]);

  const handleNavClick = (href: string) => {
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop nav */}
      <nav
        className="fixed right-8 lg:top-1/2 transform -translate-y-1/2 z-50 hidden lg:block rounded-2xl shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          border: "1px solid rgba(var(--accent-rgb), 0.4)",
        }}
      >
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const sectionKey = item.href.substring(1);
            const isActive = activeSection === sectionKey;

            const activeClasses =
              item.href === "#home"
                ? " text-black font-bold"
                : "bg-[var(--accent-color)]/30 text-black font-bold";

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`p-3 rounded-xl transition-all duration-300 group relative ${
                  isActive ? activeClasses : "text-gray-200 hover:text-white"
                }`}
                title={item.name}
                aria-current={isActive ? "true" : undefined}
              >
                <Icon className="h-6 w-6" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
          borderBottom: "1px solid rgba(var(--accent-rgb), 0.4)",
        }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-white">Nikita Sain</h1>
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const sectionKey = item.href.substring(1);
              const isActive = activeSection === sectionKey;

              const activeClasses =
                item.href === "#home"
                  ? "bg-yellow-400/30 text-black font-bold"
                  : "bg-[var(--accent-color)]/30 text-black font-bold";

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    isActive
                      ? activeClasses
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}

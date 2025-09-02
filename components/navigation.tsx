// "use client";

// import { useState, useEffect } from "react";
// import {
//   Home,
//   User,
//   Code,
//   Briefcase,
//   Mail,
//   Menu,
//   X,
//   Settings,
// } from "lucide-react";
// import { useSectionTheme } from "./section-theme-provider";

// const navItems = [
//   { name: "Home", href: "#home", icon: Home, theme: "home" as const },
//   { name: "About", href: "#about", icon: User, theme: "about" as const },
//   { name: "Skills", href: "#skills", icon: Settings, theme: "skills" as const },
//   {
//     name: "Projects",
//     href: "#projects",
//     icon: Code,
//     theme: "projects" as const,
//   },
//   {
//     name: "Experience",
//     href: "#experience",
//     icon: Briefcase,
//     theme: "experience" as const,
//   },
//   { name: "Contact", href: "#contact", icon: Mail, theme: "contact" as const },
// ];

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { setTheme } = useSectionTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map((item) => item.href.substring(1));
//       const scrollPosition = window.scrollY + 110;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;

//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             const navItem = navItems.find(
//               (item) => item.href.substring(1) === section
//             );
//             if (navItem) {
//               setTheme(navItem.theme);
//             }
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [setTheme]);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (isMobileMenuOpen) setIsMobileMenuOpen(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isMobileMenuOpen]);
//   const handleNavClick = (href: string, theme: string) => {
//     const targetId = href.substring(1);
//     const element = document.getElementById(targetId);

//     if (element) {
//       const offsetTop = element.offsetTop - 80;
//       window.scrollTo({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//     }

//     setTheme(theme as any);
//     setActiveSection(targetId);
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Desktop Navigation */}
//       <nav className="fixed right-8  lg:top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
//         <div className="flex flex-col space-y-4 glass-effect rounded-2xl p-4 border border-white/10">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.name}
//                 onClick={() => handleNavClick(item.href, item.theme)}
//                 className={`nav-item p-3 rounded-xl transition-all duration-300 group relative ${
//                   activeSection === item.href.substring(1)
//                     ? "active"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//                 title={item.name}
//               >
//                 <Icon className="h-6 w-6" />
//                 <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 glass-effect text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                   {item.name}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
//         <div className="glass-effect border-b border-white/10">
//           <div className="flex items-center justify-between px-4 py-4">
//             <h1 className="text-xl font-bold gradient-text">Nikita Sain</h1>
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="p-2 text-gray-400 hover:text-white transition-colors"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           {isMobileMenuOpen && (
//             <div className="border-t border-white/10">
//               {navItems.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <button
//                     key={item.name}
//                     onClick={() => handleNavClick(item.href, item.theme)}
//                     className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
//                       activeSection === item.href.substring(1)
//                         ? "bg-white/10 text-white"
//                         : "text-gray-400 hover:text-white hover:bg-white/5"
//                     }`}
//                   >
//                     <Icon className="h-5 w-5" />
//                     <span>{item.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const TRIGGER_POS = 0.98;

    let ticking = false;
    const handle = () => {
      const triggerY = window.scrollY + window.innerHeight * TRIGGER_POS;

      for (const item of navItems) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (triggerY >= top && triggerY < top + height) {
          if (activeSection !== id) {
            setActiveSection(id);
            setTheme(item.theme);
          }
          break;
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(handle);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handle(); // initial

    return () => window.removeEventListener("scroll", onScroll);
  }, [setTheme, activeSection]);

  const handleNavClick = (href: string, theme: string) => {
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80; // adjust if you have a fixed header
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setTheme(theme as any);
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav
        className="fixed right-8 lg:top-1/2 transform -translate-y-1/2 z-50 hidden lg:block rounded-2xl shadow-lg"
        style={{
          background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`,
          border: `1px solid rgba(var(--accent-rgb), 0.4)`,
        }}
      >
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.theme)}
                className={`p-3 rounded-xl transition-all duration-300 group relative ${
                  isActive
                    ? "bg-[var(--accent-color)]/30 text-black font-bold"
                    : "text-gray-200 hover:text-white"
                }`}
                title={item.name}
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
          background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`,
          borderBottom: `1px solid rgba(var(--accent-rgb), 0.4)`,
        }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-white">Nikita Sain</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.theme)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "bg-[var(--accent-color)]/30 text-white"
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

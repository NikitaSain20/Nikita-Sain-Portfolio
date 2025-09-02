// "use client";

// import type React from "react";
// import { createContext, useContext, useEffect, useState } from "react";

// type SectionTheme =
//   | "home"
//   | "about"
//   | "skills"
//   | "projects"
//   | "experience"
//   | "contact";

// interface SectionThemeContextType {
//   currentTheme: SectionTheme;
//   setTheme: (theme: SectionTheme) => void;
// }

// const SectionThemeContext = createContext<SectionThemeContextType | undefined>(
//   undefined
// );

// const themeColors = {
//   home: {
//     gradientStart: "#ffd700",
//     gradientEnd: "#ffb300",
//     accentColor: "#ffd700",
//     accentRgb: "255, 215, 0",
//   },
//   about: {
//     gradientStart: "#00c6ff",
//     gradientEnd: "#0072ff",
//     accentColor: "#00c6ff",
//     accentRgb: "0, 198, 255",
//   },
//   skills: {
//     gradientStart: "#4ecdc4",
//     gradientEnd: "#44bd87",
//     accentColor: "#4ecdc4",
//     accentRgb: "78, 205, 196",
//   },
//   projects: {
//     gradientStart: "#a55eea",
//     gradientEnd: "#8b5cf6",
//     accentColor: "#a55eea",
//     accentRgb: "165, 94, 234",
//   },
//   experience: {
//     gradientStart: "#ff6b6b",
//     gradientEnd: "#ee5a24",
//     accentColor: "#ff6b6b",
//     accentRgb: "255, 107, 107",
//   },
//   contact: {
//     gradientStart: "#fd79a8",
//     gradientEnd: "#e84393",
//     accentColor: "#fd79a8",
//     accentRgb: "253, 121, 168",
//   },
// };

// export function SectionThemeProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [currentTheme, setCurrentTheme] = useState<SectionTheme>("home");

//   const setTheme = (theme: SectionTheme) => {
//     setCurrentTheme(theme);

//     // Update CSS variables
//     const colors = themeColors[theme];
//     const root = document.documentElement;

//     root.style.setProperty("--gradient-start", colors.gradientStart);
//     root.style.setProperty("--gradient-end", colors.gradientEnd);
//     root.style.setProperty("--accent-color", colors.accentColor);
//     root.style.setProperty("--accent-rgb", colors.accentRgb);
//   };

//   useEffect(() => {
//     // Set initial theme
//     setTheme("home");
//   }, []);

//   return (
//     <SectionThemeContext.Provider value={{ currentTheme, setTheme }}>
//       {children}
//     </SectionThemeContext.Provider>
//   );
// }

// export function useSectionTheme() {
//   const context = useContext(SectionThemeContext);
//   if (context === undefined) {
//     throw new Error(
//       "useSectionTheme must be used within a SectionThemeProvider"
//     );
//   }
//   return context;
// }
// /

"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type SectionTheme =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

interface SectionThemeContextType {
  currentTheme: SectionTheme;
  setTheme: (theme: SectionTheme) => void;
}

const SectionThemeContext = createContext<SectionThemeContextType | undefined>(
  undefined
);

const themeColors = {
  home: {
    gradientStart: "#ffd700",
    gradientEnd: "#ffb300",
    accentColor: "#ffd700",
    accentRgb: "255, 215, 0",
  },
  about: {
    gradientStart: "#00c6ff",
    gradientEnd: "#0072ff",
    accentColor: "#00c6ff",
    accentRgb: "0, 198, 255",
  },
  skills: {
    gradientStart: "#4ecdc4",
    gradientEnd: "#44bd87",
    accentColor: "#4ecdc4",
    accentRgb: "78, 205, 196",
  },
  projects: {
    gradientStart: "#a55eea",
    gradientEnd: "#8b5cf6",
    accentColor: "#a55eea",
    accentRgb: "165, 94, 234",
  },
  experience: {
    gradientStart: "#ff6b6b",
    gradientEnd: "#ee5a24",
    accentColor: "#ff6b6b",
    accentRgb: "255, 107, 107",
  },
  contact: {
    gradientStart: "#fd79a8",
    gradientEnd: "#e84393",
    accentColor: "#fd79a8",
    accentRgb: "253, 121, 168",
  },
};

export function SectionThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<SectionTheme>("home");

  const setTheme = (theme: SectionTheme) => {
    setCurrentTheme(theme);

    // Update CSS variables
    const colors = themeColors[theme];
    const root = document.documentElement;

    root.style.setProperty("--gradient-start", colors.gradientStart);
    root.style.setProperty("--gradient-end", colors.gradientEnd);
    root.style.setProperty("--accent-color", colors.accentColor);
    root.style.setProperty("--accent-rgb", colors.accentRgb);
  };

  useEffect(() => {
    // Set initial theme
    setTheme("home");
  }, []);

  return (
    <SectionThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </SectionThemeContext.Provider>
  );
}

export function useSectionTheme() {
  const context = useContext(SectionThemeContext);
  if (context === undefined) {
    throw new Error(
      "useSectionTheme must be used within a SectionThemeProvider"
    );
  }
  return context;
}

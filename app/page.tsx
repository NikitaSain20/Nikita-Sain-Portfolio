"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Experience from "./experience/page";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nikita-Sain-Resume.pdf";
    link.download = "Nikita_Sain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="h-full 2xl:min-h-screen bg-background text-foreground ">
      <div className="lg:mr-24">
        <section
          id="home"
          className="2xl:min-h-screen flex items-center justify-center px-5 lg:px-10 relative overflow-hidden py-36"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-28 md:gap-12 items-center relative z-10">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <p className="text-yellow-400 font-medium tracking-wide uppercase text-sm">
                  Hello, I am
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Nikita <span className="text-yellow-400">Sain</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 font-medium">
                  I am Software Developer
                </p>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                  Hi, I’m Nikita Sain, a full-stack developer from Punjab,
                  India. I’m passionate about creating smooth and engaging web
                  experiences. I enjoy working across the stack and would love
                  to chat with you about your project.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-56 md:w-full">
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black md:px-8 py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mt-1"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Me
                </Button>

                {isClient && (
                  <>
                    <button
                      onClick={handleDownload}
                      className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-4 rounded-lg font-semibold transition-all duration-300 bg-transparent flex items-center justify-center hover:scale-105 py-4 md:py-0"
                    >
                      <Download className="mr-2 h-4 w-5" />
                      Download Resume
                    </button>

                    {isOpen && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
                          <h2 className="text-xl font-bold mb-2 text-yellow-400">
                            ✅ Download Successful
                          </h2>
                          <p className="text-gray-300">
                            Your resume has been downloaded successfully.
                          </p>

                          <div className="mt-4 flex justify-end">
                            <button
                              onClick={() => setIsOpen(false)}
                              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/NikitaSain20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikita-sain-579a662aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:nikitasen664@gmail.com"
                  className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full animate-pulse  "></div>
                  <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
                    <Image
                      src="/nikita-profile.png"
                      alt="Nikita Sain"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transform transition-transform duration-300 
                md:hover:scale-105"
                    />
                  </div>
                </div>

                <div
                  className="absolute -top-16 -right-0 md:-top-12 md:-right-6 lg:-top-14 lg:-right-1 xl:-right-4 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 transform transition-transform duration-300 
                hover:scale-110"
                >
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-yellow-400">
                      Software Developer
                    </div>
                    <div className="text-sm text-gray-400">Nikita Sain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        <footer className="py-12 px-4 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold gradient-text mb-4">
                  Nikita Sain
                </h3>
                <p className="text-gray-400 mb-4">
                  Software Developer Intern passionate about creating innovative
                  web solutions and learning new technologies.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/NikitaSain20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-2 rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikita-sain-579a662aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-2 rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="nikitasen664@gmail.com"
                    className="social-link p-2 rounded-full"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Contact Info
                </h4>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    nikitasen664@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Nikita Sain. Built with ❤️ using
                React.js and modern web technologies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

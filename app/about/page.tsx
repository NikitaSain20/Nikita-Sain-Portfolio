"use client";

import Image from "next/image";
import { GraduationCap, Code, Target, Building } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 px-5 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-blue-500/30 to-blue-400/30 mx-auto mb-8 opacity-50"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Image
              src="/coding-workspace.png"
              alt="Nikita coding workspace"
              width={400}
              height={500}
              className="transform transition-transform duration-300 md:hover:scale-105 rounded-2xl shadow-2xl mx-auto border border-white/10"
            />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-white">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I’m Nikita Sain, a passionate Full Stack Developer with
              hands-on experience in building modern, user-friendly, and
              scalable web applications. I enjoy turning ideas into interactive
              digital solutions using technologies like React.js, Next.js,
              Node.js, Express, MongoDB, and Firebase. Over time, I’ve worked on
              projects ranging from animated landing pages with GSAP to
              real-world platforms like ArchiCraft, BookMyChowpati, and Dial A
              Meal, focusing on both functionality and clean UI/UX.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect  p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-blue-400 mr-2" />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <p className="text-sm text-gray-400">BCA at GNA University</p>
              </div>
              <div className="glass-effect p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-blue-400 mr-2" />
                  <h4 className="font-semibold">Current Role</h4>
                </div>
                <p className="text-sm text-gray-400">Software Developer</p>
              </div>
              <div className="glass-effect p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Code className="h-5 w-5 text-blue-400 mr-2" />
                  <h4 className="font-semibold">Focus</h4>
                </div>
                <p className="text-sm text-gray-400">Full-Stack Development</p>
              </div>
              <div className="glass-effect p-4 rounded-xl">
                <div className="flex items-center mb-2">
                  <Target className="h-5 w-5 text-blue-400 mr-2" />
                  <h4 className="font-semibold">Goal</h4>
                </div>
                <p className="text-sm text-gray-400">Build Amazing Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

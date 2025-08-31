"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Layers, Cloud, Settings } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-4 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent font-medium tracking-wide uppercase text-sm mb-4">
            What I Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I provide comprehensive web development solutions from concept to
            deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Frontend Development */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Layers className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-400 mb-6">
                Creating responsive and interactive user interfaces using modern
                frameworks like React.js and Next.js with beautiful designs.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  React.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  Tailwind CSS
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Cloud className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Backend Development
              </h3>
              <p className="text-gray-400 mb-6">
                Building robust server-side applications with Node.js and
                Express.js, handling databases and API integrations.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  Express.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  MongoDB
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Full-Stack Solutions */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Settings className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Full-Stack Solutions
              </h3>
              <p className="text-gray-400 mb-6">
                End-to-end web application development combining frontend and
                backend technologies for complete solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  MERN Stack
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  Firebase
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-300 border-green-500/30"
                >
                  Deployment
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-800/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-400">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Programming Languages
                </h4>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">JavaScript</span>
                    <span className="text-blue-400 font-semibold">70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Java</span>
                    <span className="text-blue-400 font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">HTML/CSS</span>
                    <span className="text-blue-400 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Technologies */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">Frontend</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                  >
                    React.js
                  </Badge>
                  <span className="text-sm text-gray-400">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                  >
                    Next.js
                  </Badge>
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                  >
                    Tailwind CSS
                  </Badge>
                  <span className="text-sm text-gray-400">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                  >
                    Bootstrap
                  </Badge>
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
              </div>
            </div>

            {/* Backend & Database */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Backend & Database
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-300 border-green-500/30"
                  >
                    Node.js
                  </Badge>
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-300 border-green-500/30"
                  >
                    Express.js
                  </Badge>
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-300 border-green-500/30"
                  >
                    MongoDB
                  </Badge>
                  <span className="text-sm text-gray-400">Beginner</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-300 border-green-500/30"
                  >
                    Firebase
                  </Badge>
                  <span className="text-sm text-gray-400">Intermediate</span>
                </div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Development Tools & Others
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full"
                  >
                    Git
                  </Badge>
                  <span className="text-xs text-gray-400 mt-1 block">
                    Version Control
                  </span>
                </div>
                <div className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full"
                  >
                    GitHub
                  </Badge>
                  <span className="text-xs text-gray-400 mt-1 block">
                    Repository
                  </span>
                </div>
                <div className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full"
                  >
                    Postman
                  </Badge>
                  <span className="text-xs text-gray-400 mt-1 block">
                    API Testing
                  </span>
                </div>
                <div className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full"
                  >
                    Redux
                  </Badge>
                  <span className="text-xs text-gray-400 mt-1 block">
                    State Management
                  </span>
                </div>
                <div className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full"
                  >
                    VS Code
                  </Badge>
                  <span className="text-xs text-gray-400 mt-1 block">
                    Code Editor
                  </span>
                </div>
                <div className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full"
                  >
                    Vercel
                  </Badge>
                  <span className="text-xs text-gray-400 mt-1 block">
                    Deployment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

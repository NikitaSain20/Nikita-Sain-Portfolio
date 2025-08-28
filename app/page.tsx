"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  // Code,
  MapPin,
  // Phone,
  ExternalLink,
  // Building,
  // Send,
  // GraduationCap,
  Target,
  Coffee,
  Music,
  Gamepad2,
  BookOpen,
  Terminal,
  Layers,
  Cloud,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import About from "./about/page";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .send(
        "service_isyg96f",
        "template_indo7i1",
        formData,
        "dyDKn3rTD3f6SCO4b"
      )
      .then(
        (result) => {
          // alert("✅ Message Sent Successfully!");
          toast.success("Message Sent Successfully!!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          // alert("❌ Failed to send, try again later.");
          toast.error("Failed to send, try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Content Container with proper spacing for navbar */}
      <ToastContainer />
      <div className="lg:mr-24">
        {/* HERO SECTION - New Modern Design */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 lg:px-8 relative overflow-hidden pt-20"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
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
                  From Punjab, India, I'm a full-stack software developer
                  working passionately about making great web experiences. I am
                  good at everything, I love to talk with you about your
                  project.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
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

            {/* Right Content - Profile Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                {/* Profile Image Container */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
                    <Image
                      src="/nikita-profile.png"
                      alt="Nikita Sain"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -top-4 -right-24 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      Software Developer
                    </div>
                    <div className="text-sm text-gray-400">Nikita Sain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - Keep existing */}
        <About />
        {/* <section id="about" className="py-20 px-4 lg:px-8 relative ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mb-8 opacity-50"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <Image
                  src="/coding-workspace.png"
                  alt="Nikita coding workspace"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl mx-auto border border-white/10"
                />
              </div>

              <div className="space-y-6 animate-slide-in-right">
                <h3 className="text-3xl font-bold text-white">My Journey</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hi, I’m Nikita Sain, a passionate Full Stack Developer with
                  hands-on experience in building modern, user-friendly, and
                  scalable web applications. I enjoy turning ideas into
                  interactive digital solutions using technologies like
                  React.js, Next.js, Node.js, Express, MongoDB, and Firebase.
                  Over time, I’ve worked on projects ranging from animated
                  landing pages with GSAP to real-world platforms like
                  ArchiCraft, BookMyChowpati, and Dial A Meal, focusing on both
                  functionality and clean UI/UX.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-effect p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold">Education</h4>
                    </div>
                    <p className="text-sm text-gray-400">
                      BCA at GNA University
                    </p>
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
                    <p className="text-sm text-gray-400">
                      Full-Stack Development
                    </p>
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
        </section> */}

        {/* SKILLS SECTION - New Modern Design */}
        <section id="skills" className="py-20 px-4 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="gradient-text font-medium tracking-wide uppercase text-sm mb-4">
                What I Do
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                My <span className="gradient-text">Services</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                I provide comprehensive web development solutions from concept
                to deployment
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
                    Creating responsive and interactive user interfaces using
                    modern frameworks like React.js and Next.js with beautiful
                    designs.
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
                    End-to-end web application development combining frontend
                    and backend technologies for complete solutions.
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

            {/* Technical Skills */}
            <div className="bg-gray-800/30 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Technical Skills
                </h3>
                <p className="text-gray-400">
                  Technologies and tools I work with
                </p>
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
                    <h4 className="text-lg font-semibold text-white">
                      Frontend
                    </h4>
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
                      <span className="text-sm text-gray-400">
                        Intermediate
                      </span>
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
                      <span className="text-sm text-gray-400">
                        Intermediate
                      </span>
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
                      <span className="text-sm text-gray-400">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-300 border-green-500/30"
                      >
                        Express.js
                      </Badge>
                      <span className="text-sm text-gray-400">
                        Intermediate
                      </span>
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
                      <span className="text-sm text-gray-400">
                        Intermediate
                      </span>
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

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-4 lg:px-8 ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
                My <span className="gradient-text">Projects</span>
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mb-8 opacity-50"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Real-world applications built with modern technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
                <div className="relative">
                  <Image
                    src="/dial-a-meal-project.png"
                    alt="Dial a Meal"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      Completed
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dial a Meal</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    A user-friendly web application offering customizable tiffin
                    service plans (daily, weekly, monthly). Users can
                    personalize their meal plans through a responsive UI.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      React.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      Firebase
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      Tailwind CSS
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-outline bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://github.com/NikitaSain20/Dial-A-Meal-React-Firebase",
                          "_blank"
                        )
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="btn-primary"
                      onClick={() =>
                        window.open(
                          "https://dial-a-meal-react-firebase.vercel.app/",
                          "_blank"
                        )
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
                <div className="relative">
                  <Image
                    src="/gofood-project.png"
                    alt="GoFood"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      Completed
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">GoFood</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    A MERN stack-based food ordering platform with features like
                    user authentication, categorized food listings, dynamic cart
                    system, and real-time order management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      Express.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      Node.js
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-outline bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://github.com/NikitaSain20/Go-Food-Mern",
                          "_blank"
                        )
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="btn-primary"
                      onClick={() =>
                        window.open(
                          "https://go-food-mern-five.vercel.app/",
                          "_blank"
                        )
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
                <div className="relative">
                  <Image
                    src="/archicraft-project.png"
                    alt="ArchiCraft"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      Completed
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">ArchiCraft</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    A full-stack platform where users can request custom
                    architectural designs. Admins manage orders, set pricing,
                    and deliver final designs post-payment, with role-based
                    functionality.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      React.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-500/30 text-blue-300"
                    >
                      MongoDB
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-outline bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://github.com/NikitaSain20/ArchiCraft-React-Firebase",
                          "_blank"
                        )
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="btn-primary"
                      onClick={() =>
                        window.open(
                          "https://archi-craft-react-firebase.vercel.app/",
                          "_blank"
                        )
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 px-4 lg:px-8 ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
                My <span className="gradient-text">Experience</span>
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mb-8 opacity-50"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Professional journey and achievements
              </p>
            </div>

            <div className="space-y-8">
              <Card className="glass-effect border-white/10">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        Software Developer
                      </h3>
                      <p className="text-xl text-gray-300">
                        Pensylvenia Enterprices Ltd, Punjab
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-orange-400 gradient-text border-orange-500/30">
                        Current
                      </Badge>
                      <p className="text-gray-400 mt-2">April 2025 - Present</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      Worked on full-stack web applications using React.js,
                      Node.js, Express, and MongoDB.
                    </li>
                    <li>
                      Collaborated with the development team to build reusable
                      UI components and implement REST APIs.
                    </li>
                    <li>
                      Improved application performance and optimized database
                      queries.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      React.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      Git
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      Agile
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        Trainee
                      </h3>
                      <p className="text-xl text-gray-300">
                        O7 Services, Punjab
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-orange-400 gradient-text border-orange-500/30">
                        Training
                      </Badge>
                      <p className="text-gray-400 mt-2">
                        June 2024 - August 2024
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      Gained practical exposure to React, Firebase, and Cloud
                      integration.
                    </li>
                    <li>
                      Built real-time web applications and practiced deployment
                      workflows.
                    </li>
                    <li>Worked on small client projects under mentorship.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      React.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      Firebase
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      CRUD
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      React Router
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        Bachelor of Computer Applications (BCA)
                      </h3>
                      <p className="text-xl text-gray-300">
                        GNA University, Phagwara, Punjab
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-orange-400 gradient-text border-orange-500/30">
                        Education
                      </Badge>
                      <p className="text-gray-400 mt-2">
                        July 2022 - June 2025
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      Completed graduation with a strong foundation in Data
                      Structures, Algorithms, DBMS, Computer Networks, and
                      Software Engineering.
                    </li>
                    <li>
                      Gained hands-on experience in MERN stack projects and
                      Firebase applications.
                    </li>
                    <li>
                      Actively participated in coding contests, hackathons, and
                      group projects.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      Data Structures & Algorithms
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      DBMS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      Computer Networks
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-orange-400 gradient-text border-orange-500/30"
                    >
                      Software Engineering
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-4 lg:px-8 pt-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mb-8 opacity-50"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Ready to embark on a thrilling coding adventure? Let's connect
                and build something amazing together!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold gradient-text">
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    {!isSubmitting ? (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary"
                      >
                        Send Message
                      </Button>
                    ) : (
                      <Button
                        // type="submit"
                        // disabled={isSubmitting}
                        className="w-full btn-primary"
                      >
                        Sending
                      </Button>
                    )}
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="glass-effect border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 gradient-text mr-3" />
                      <h3 className="text-xl font-bold">Email</h3>
                    </div>
                    <p className="text-gray-300">nikitasen664@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Response within 24 hours
                    </p>
                  </CardContent>
                </Card>

                {/* <Card className="glass-effect border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="h-6 w-6 gradient-text mr-3" />
                      <h3 className="text-xl font-bold">Phone</h3>
                    </div>
                    <p className="text-gray-300">+91 78140 82590</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Available Mon-Fri, 9 AM - 6 PM IST
                    </p>
                  </CardContent>
                </Card> */}

                <Card className="glass-effect border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 gradient-text mr-3" />
                      <h3 className="text-xl font-bold">Location</h3>
                    </div>
                    <p className="text-gray-300">Phagwara, Punjab, India</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Open to remote opportunities
                    </p>

                    {/* Social buttons below address */}
                    <div className="flex space-x-3 mt-4">
                      <a
                        href="https://github.com/NikitaSain20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nikita-sain-579a662aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                      <a
                        href="mailto:nikitasen664@gmail.com"
                        className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 gradient-text">
                      Connect With Me
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/NikitaSain20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link p-3 rounded-full"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nikita-sain-579a662aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link p-3 rounded-full"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="mailto:nikitasen664@gmail.com"
                        className="social-link p-3 rounded-full"
                      >
                        <Mail className="h-6 w-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer with Social Links */}
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
                © 2024 Nikita Sain. Built with ❤️ using React.js and modern web
                technologies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

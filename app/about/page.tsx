"use client";

import Image from "next/image";
import {
  GraduationCap,
  Code,
  Heart,
  Target,
  Award,
  Coffee,
  Music,
  Gamepad2,
  Trophy,
  Lightbulb,
  Building,
  Sparkles,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    // <div className="min-h-screen bg-background text-foreground pt-20">
    //   {/* Animated Background */}
    //   <div className="floating-shapes"></div>

    //   {/* Hero Section */}
    //   <section
    //     id="about"
    //     className="min-h-screen flex items-center justify-center px-4 py-20 section-transition"
    //   >
    //     <div className="max-w-6xl mx-auto">
    //       <div className="text-center mb-16 animate-fade-in">
    //         <h2 className="text-4xl md:text-6xl font-bold mb-6">
    //           About <span className="gradient-text">Me</span>
    //         </h2>
    //         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
    //           I'm a passionate software developer currently pursuing my BCA
    //           degree while working as a Software Developer Intern.
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    //         <div className="animate-slide-in-left">
    //           <Image
    //             src="/placeholder.svg?height=500&width=400&text=About+Me"
    //             alt="About Nikita"
    //             width={400}
    //             height={500}
    //             className="rounded-2xl shadow-2xl mx-auto border border-white/10"
    //           />
    //         </div>

    //         <div className="space-y-6 animate-slide-in-right">
    //           <h2 className="text-3xl font-bold text-white">My Journey</h2>
    //           <p className="text-gray-300 text-lg leading-relaxed">
    //             Hi, I’m Nikita Sen, a passionate Full Stack Developer with
    //             hands-on experience in building modern, user-friendly, and
    //             scalable web applications. I enjoy turning ideas into
    //             interactive digital solutions using technologies like React.js,
    //             Next.js, Node.js, Express, MongoDB, and Firebase. Over time,
    //             I’ve worked on projects ranging from animated landing pages with
    //             GSAP to real-world platforms like ArchiCraft, BookMyChowpati,
    //             and Dial A Meal, focusing on both functionality and clean UI/UX.
    //             🔹 What I bring to the table: Strong foundation in MERN stack
    //             development Experience with UI animations, responsive design,
    //             and performance optimization Practical knowledge of database
    //             design, authentication, and cloud deployment A mindset for
    //             continuous learning and problem-solving I aim to craft
    //             applications that not only work seamlessly but also create a
    //             lasting impact for users. 🚀
    //           </p>

    //           <div className="grid grid-cols-2 gap-4">
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <GraduationCap className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Education</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">BCA at GNA University</p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <Building className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Current Role</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">
    //                 Software Developer Intern
    //               </p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <Code className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Focus</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">
    //                 Full-Stack Development
    //               </p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <Target className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Goal</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">Build Amazing Apps</p>
    //             </div>
    //           </div>

    //           <div className="mt-8">
    //             <h4 className="text-xl font-semibold mb-4">
    //               When I'm not coding...
    //             </h4>
    //             <div className="flex flex-wrap gap-3">
    //               <div className="flex items-center glass-effect px-3 py-2 rounded-full">
    //                 <Coffee className="h-4 w-4 text-blue-400 mr-2" />
    //                 <span className="text-sm">Coffee</span>
    //               </div>
    //               <div className="flex items-center glass-effect px-3 py-2 rounded-full">
    //                 <Music className="h-4 w-4 text-blue-400 mr-2" />
    //                 <span className="text-sm">Music</span>
    //               </div>
    //               <div className="flex items-center glass-effect px-3 py-2 rounded-full">
    //                 <Gamepad2 className="h-4 w-4 text-blue-400 mr-2" />
    //                 <span className="text-sm">Gaming</span>
    //               </div>
    //               <div className="flex items-center glass-effect px-3 py-2 rounded-full">
    //                 <BookOpen className="h-4 w-4 text-blue-400 mr-2" />
    //                 <span className="text-sm">Learning</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="mt-16 text-center animate-bounce-in">
    //         <button className="btn-primary px-8 py-4 rounded-full text-lg font-semibold">
    //           Let's Connect
    //         </button>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Main About Content - New Layout */}
    //   <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-white/5 backdrop-blur-sm">
    //     <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    //       <div className="animate-slide-in-left">
    //         <div className="relative p-6 glass-effect rounded-2xl shadow-2xl border border-blue-500/30">
    //           <Image
    //             src="/placeholder.svg?height=500&width=400"
    //             alt="Nikita Sain"
    //             width={400}
    //             height={500}
    //             className="relative rounded-xl shadow-lg mx-auto w-full h-auto object-cover border border-white/10"
    //           />
    //           <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
    //             <p className="font-semibold text-lg">Always Learning!</p>
    //             <p className="text-sm opacity-90">
    //               Currently mastering Next.js & TypeScript
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="space-y-8 animate-slide-in-right">
    //         <h2 className="text-4xl font-bold text-white leading-tight">
    //           My Journey in <span className="gradient-text">Technology</span>
    //         </h2>
    //         <p className="text-lg text-white/80 leading-relaxed">
    //           My fascination with technology began during my school years when I
    //           first encountered programming. What started as curiosity about
    //           "how websites work" quickly evolved into a deep passion for
    //           creating digital solutions that make a difference in people's
    //           lives.
    //         </p>
    //         <p className="text-lg text-white/80 leading-relaxed">
    //           Currently pursuing my Bachelor of Computer Applications (BCA) at
    //           GNA University with an impressive 9.36 CGPA, I've discovered the
    //           perfect blend of creativity and logic that web development offers.
    //           My academic journey has been complemented by hands-on experience
    //           through internships and personal projects.
    //         </p>
    //         <p className="text-lg text-white/80 leading-relaxed">
    //           Working as a Next.js developer intern has given me invaluable
    //           real-world experience, allowing me to apply theoretical knowledge
    //           to practical challenges. I specialize in React.js and Next.js,
    //           creating dynamic and scalable web applications.
    //         </p>

    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //           <div className="flex items-center p-4 glass-effect rounded-lg shadow-md border border-white/10">
    //             <GraduationCap className="h-6 w-6 text-blue-400 mr-3" />
    //             <div>
    //               <h3 className="font-semibold text-white">BCA Student</h3>
    //               <p className="text-white/70 text-sm">9.36 CGPA</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center p-4 glass-effect rounded-lg shadow-md border border-white/10">
    //             <Briefcase className="h-6 w-6 text-emerald-400 mr-3" />
    //             <div>
    //               <h3 className="font-semibold text-white">
    //                 Software Developer Intern
    //               </h3>
    //               <p className="text-foreground/70 text-sm">
    //                 Next.js & React.js
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Values Section - New Layout */}
    //   <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
    //     <div className="max-w-6xl mx-auto">
    //       <h2 className="text-4xl font-bold text-center text-white mb-4 animate-slide-up">
    //         What Drives Me
    //       </h2>
    //       <p
    //         className="text-xl text-center text-white/80 mb-16 animate-slide-up"
    //         style={{ animationDelay: "0.1s" }}
    //       >
    //         The principles and values that guide my approach to development and
    //         learning
    //       </p>
    //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    //         <Card className="text-center p-6 glass-effect border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-4 transition-all duration-500 animate-slide-in-left group professional-border">
    //           <CardContent className="pt-6">
    //             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-slow">
    //               <Code className="h-8 w-8 text-white" />
    //             </div>
    //             <h3 className="text-xl font-semibold text-white mb-4">
    //               Clean Code
    //             </h3>
    //             <p className="text-white/80">
    //               Writing maintainable, efficient, and well-documented code that
    //               follows best practices.
    //             </p>
    //           </CardContent>
    //         </Card>

    //         <Card
    //           className="text-center p-6 glass-effect border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-4 transition-all duration-500 animate-slide-up group professional-border"
    //           style={{ animationDelay: "0.1s" }}
    //         >
    //           <CardContent className="pt-6">
    //             <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-slow">
    //               <GraduationCap className="h-8 w-8 text-white" />
    //             </div>
    //             <h3 className="text-xl font-semibold text-white mb-4">
    //               Continuous Learning
    //             </h3>
    //             <p className="text-white/80">
    //               Constantly updating my skills with the latest technologies,
    //               frameworks, and practices.
    //             </p>
    //           </CardContent>
    //         </Card>

    //         <Card
    //           className="text-center p-6 glass-effect border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-4 transition-all duration-500 animate-slide-up group professional-border"
    //           style={{ animationDelay: "0.2s" }}
    //         >
    //           <CardContent className="pt-6">
    //             <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-slow">
    //               <Heart className="h-8 w-8 text-white" />
    //             </div>
    //             <h3 className="text-xl font-semibold text-white mb-4">
    //               User-Centric
    //             </h3>
    //             <p className="text-white/80">
    //               Creating applications that prioritize user experience,
    //               accessibility, and solve real-world problems.
    //             </p>
    //           </CardContent>
    //         </Card>

    //         <Card
    //           className="text-center p-6 glass-effect border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-4 transition-all duration-500 animate-slide-in-right group professional-border"
    //           style={{ animationDelay: "0.3s" }}
    //         >
    //           <CardContent className="pt-6">
    //             <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-slow">
    //               <Target className="h-8 w-8 text-white" />
    //             </div>
    //             <h3 className="text-xl font-semibold text-white mb-4">
    //               Goal-Oriented
    //             </h3>
    //             <p className="text-white/80">
    //               Setting clear objectives and working systematically to achieve
    //               them with dedication.
    //             </p>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Education & Achievements - New Layout */}
    //   <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-white/5 backdrop-blur-sm">
    //     <div className="max-w-6xl mx-auto">
    //       <h2 className="text-4xl font-bold text-center text-white mb-12 animate-slide-up">
    //         Education & <span className="gradient-text">Achievements</span>
    //       </h2>

    //       <div className="grid lg:grid-cols-2 gap-8">
    //         {/* Education Timeline */}
    //         <div className="animate-slide-in-left relative pl-8">
    //           <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
    //           <div className="space-y-8">
    //             <div className="relative">
    //               <div className="absolute -left-8 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-black shadow-lg"></div>
    //               <Card className="glass-effect border-0 shadow-lg professional-border">
    //                 <CardHeader>
    //                   <CardTitle className="text-xl font-bold text-white">
    //                     Bachelor in Computer Application
    //                   </CardTitle>
    //                   <p className="text-blue-400 font-medium">
    //                     GNA University
    //                   </p>
    //                 </CardHeader>
    //                 <CardContent>
    //                   <p className="text-white/80">2022 - 2025</p>
    //                   <div className="flex items-center mt-2">
    //                     <Trophy className="h-4 w-4 mr-2 text-yellow-400" />
    //                     <span className="text-white font-semibold">
    //                       9.36 CGPA
    //                     </span>
    //                   </div>
    //                 </CardContent>
    //               </Card>
    //             </div>

    //             <div className="relative">
    //               <div className="absolute -left-8 top-0 w-6 h-6 bg-emerald-500 rounded-full border-4 border-black shadow-lg"></div>
    //               <Card className="glass-effect border-0 shadow-lg professional-border">
    //                 <CardHeader>
    //                   <CardTitle className="text-xl font-bold text-white">
    //                     Senior Secondary
    //                   </CardTitle>
    //                   <p className="text-emerald-400 font-medium">
    //                     SD Model School
    //                   </p>
    //                 </CardHeader>
    //                 <CardContent>
    //                   <p className="text-white/80">2022</p>
    //                   <div className="flex items-center mt-2">
    //                     <Trophy className="h-4 w-4 mr-2 text-yellow-400" />
    //                     <span className="text-white font-semibold">92%</span>
    //                   </div>
    //                 </CardContent>
    //               </Card>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Achievements Grid */}
    //         <div className="animate-slide-in-right space-y-6">
    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //             <div className="glass-effect p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center text-center">
    //               <Building className="h-10 w-10 text-blue-400 mb-3" />
    //               <h4 className="font-semibold text-white text-lg">
    //                 React & Firebase Training
    //               </h4>
    //               <p className="text-foreground/80 text-sm">
    //                 O7 Services - 3 months professional training
    //               </p>
    //             </div>
    //             <div className="glass-effect p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center text-center">
    //               <Award className="h-10 w-10 text-yellow-400 mb-3" />
    //               <h4 className="font-semibold text-white text-lg">
    //                 Academic Excellence
    //               </h4>
    //               <p className="text-foreground/80 text-sm">
    //                 2nd position in 10th (94%) and 12th (92%)
    //               </p>
    //             </div>
    //             <div className="glass-effect p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center text-center">
    //               <Code className="h-10 w-10 text-emerald-400 mb-3" />
    //               <h4 className="font-semibold text-white text-lg">
    //                 JavaScript Programming
    //               </h4>
    //               <p className="text-foreground/80 text-sm">
    //                 Advanced JavaScript course at GNA University
    //               </p>
    //             </div>
    //             <div className="glass-effect p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center text-center">
    //               <GraduationCap className="h-10 w-10 text-purple-400 mb-3" />
    //               <h4 className="font-semibold text-white text-lg">
    //                 BCA Program Excellence
    //               </h4>
    //               <p className="text-foreground/80 text-sm">
    //                 Maintaining 9.36 CGPA at GNA University
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Personal Interests - New Layout */}
    //   <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
    //     <div className="max-w-6xl mx-auto">
    //       <h2 className="text-4xl font-bold text-center text-white mb-12 animate-slide-up">
    //         Beyond the Code
    //       </h2>
    //       <div className="grid lg:grid-cols-2 gap-12 items-center">
    //         <div className="animate-slide-in-left space-y-6">
    //           <p className="text-lg text-white/80 leading-relaxed">
    //             When I'm not immersed in code, I enjoy exploring new
    //             technologies through online courses and tutorials. I'm
    //             particularly fascinated by emerging trends like AI/ML
    //             integration in web development, serverless architectures, and
    //             modern design systems.
    //           </p>
    //           <p className="text-lg text-white/80 leading-relaxed">
    //             As a BCA student, I balance my academic responsibilities with
    //             practical learning through internships and personal projects. I
    //             believe in the power of hands-on experience and continuously
    //             challenge myself with new technologies and frameworks.
    //           </p>
    //           <p className="text-lg text-white/80 leading-relaxed">
    //             I'm passionate about sharing knowledge and helping fellow
    //             students in their coding journey. Whether it's participating in
    //             college tech events, helping classmates with projects, or
    //             contributing to open-source initiatives, I believe in the power
    //             of community learning.
    //           </p>
    //           <div className="grid grid-cols-2 gap-4">
    //             <div className="glass-effect p-4 rounded-xl hover:shadow-lg transition-all duration-300 group professional-border border-white/10">
    //               <div className="flex items-center mb-2">
    //                 <Gamepad2 className="h-5 w-5 text-blue-400 mr-2 group-hover:animate-bounce" />
    //                 <h4 className="font-semibold text-white">Gaming</h4>
    //               </div>
    //               <p className="text-sm text-foreground/80">
    //                 Strategy games and coding challenges
    //               </p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl hover:shadow-lg transition-all duration-300 group professional-border border-white/10">
    //               <div className="flex items-center mb-2">
    //                 <Lightbulb className="h-5 w-5 text-emerald-400 mr-2 group-hover:animate-bounce" />
    //                 <h4 className="font-semibold text-white">Learning</h4>
    //               </div>
    //               <p className="text-sm text-foreground/80">
    //                 Tech blogs and online courses
    //               </p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl hover:shadow-lg transition-all duration-300 group professional-border border-white/10">
    //               <div className="flex items-center mb-2">
    //                 <Music className="h-5 w-5 text-purple-400 mr-2 group-hover:animate-bounce" />
    //                 <h4 className="font-semibold text-white">Music</h4>
    //               </div>
    //               <p className="text-sm text-foreground/80">
    //                 Lo-fi beats while coding
    //               </p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl hover:shadow-lg transition-all duration-300 group professional-border border-white/10">
    //               <div className="flex items-center mb-2">
    //                 <Coffee className="h-5 w-5 text-orange-400 mr-2 group-hover:animate-bounce" />
    //                 <h4 className="font-semibold text-white">Coffee</h4>
    //               </div>
    //               <p className="text-sm text-foreground/80">
    //                 Fuel for late-night coding
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="animate-slide-in-right">
    //           <div className="glass-effect p-8 rounded-2xl shadow-2xl professional-border">
    //             <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
    //               <Sparkles className="h-6 w-6 mr-3 text-cyan-400" />
    //               Fun Facts About Me
    //             </h3>
    //             <ul className="space-y-4">
    //               <li className="flex items-start">
    //                 <span className="text-2xl mr-3">☕</span>
    //                 <div>
    //                   <span className="font-semibold text-white">
    //                     Coffee Enthusiast:
    //                   </span>
    //                   <span className="block text-white/80">
    //                     I can't start my day without a perfect cup of coffee
    //                   </span>
    //                 </div>
    //               </li>
    //               <li className="flex items-start">
    //                 <span className="text-2xl mr-3">🌙</span>
    //                 <div>
    //                   <span className="font-semibold text-white">
    //                     Night Owl:
    //                   </span>
    //                   <span className="block text-white/80">
    //                     Most productive during late-night coding sessions
    //                   </span>
    //                 </div>
    //               </li>
    //               <li className="flex items-start">
    //                 <span className="text-2xl mr-3">🎯</span>
    //                 <div>
    //                   <span className="font-semibold text-white">
    //                     Goal-Oriented:
    //                   </span>
    //                   <span className="block text-white/80">
    //                     Always setting new challenges to improve my skills
    //                   </span>
    //                 </div>
    //               </li>
    //               <li className="flex items-start">
    //                 <span className="text-2xl mr-3">📚</span>
    //                 <div>
    //                   <span className="font-semibold text-white">
    //                     Continuous Learner:
    //                   </span>
    //                   <span className="block text-white/80">
    //                     Currently exploring advanced Next.js patterns
    //                   </span>
    //                 </div>
    //               </li>
    //               <li className="flex items-start">
    //                 <span className="text-2xl mr-3">🚀</span>
    //                 <div>
    //                   <span className="font-semibold text-white">
    //                     Future Vision:
    //                   </span>
    //                   <span className="block text-white/80">
    //                     Aiming to become a full-stack developer
    //                   </span>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Call to Action */}
    //   <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-white/5 backdrop-blur-sm">
    //     <div className="max-w-4xl mx-auto text-center">
    //       <div className="glass-effect p-12 rounded-2xl shadow-2xl animate-slide-up professional-border">
    //         <h2 className="text-3xl font-bold text-white mb-6">
    //           Let's Connect and Build Together!
    //         </h2>
    //         <p className="text-xl text-white/80 mb-8">
    //           I'm always excited to collaborate on interesting projects, learn
    //           from experienced developers, and contribute to meaningful
    //           initiatives. Whether you have an opportunity, need help with a
    //           project, or just want to chat about tech, I'd love to hear from
    //           you!
    //         </p>
    //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //           <Link href="/contact">
    //             <Button
    //               size="lg"
    //               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
    //             >
    //               Get In Touch
    //             </Button>
    //           </Link>
    //           <Link href="/projects">
    //             <Button
    //               size="lg"
    //               variant="outline"
    //               className="border-2 border-cyan-400 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 bg-transparent"
    //             >
    //               View My Work
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    // <section>
    //   <div
    //     id="about"
    //     className="relative bg-gradient-to-r from-blue-500/5 to-blue-500/5 py-20 px-4 lg:px-8 "
    //   >
    //     <div className="max-w-6xl mx-auto">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
    //           About <span className="gradient-text">Me</span>
    //         </h2>
    //         <div className="w-20 h-2 bg-gradient-to-r from-red-500/5 to-red-400/5 mx-auto mb-8 opacity-50"></div>
    //       </div>

    //       <div className="grid lg:grid-cols-2 gap-12 items-center">
    //         <div className="animate-slide-in-left">
    //           <Image
    //             src="/coding-workspace.png"
    //             alt="Nikita coding workspace"
    //             width={400}
    //             height={500}
    //             className="transform transition-transform duration-300
    //             hover:scale-110 rounded-2xl shadow-2xl mx-auto border border-white/10"
    //           />
    //         </div>

    //         <div className="space-y-6 animate-slide-in-right">
    //           <h3 className="text-3xl font-bold text-white">My Journey</h3>
    //           <p className="text-gray-300 text-lg leading-relaxed">
    //             Hi, I’m Nikita Sain, a passionate Full Stack Developer with
    //             hands-on experience in building modern, user-friendly, and
    //             scalable web applications. I enjoy turning ideas into
    //             interactive digital solutions using technologies like React.js,
    //             Next.js, Node.js, Express, MongoDB, and Firebase. Over time,
    //             I’ve worked on projects ranging from animated landing pages with
    //             GSAP to real-world platforms like ArchiCraft, BookMyChowpati,
    //             and Dial A Meal, focusing on both functionality and clean UI/UX.
    //           </p>

    //           <div className="grid grid-cols-2 gap-4">
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <GraduationCap className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Education</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">BCA at GNA University</p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <Building className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Current Role</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">Software Developer</p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <Code className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Focus</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">
    //                 Full-Stack Development
    //               </p>
    //             </div>
    //             <div className="glass-effect p-4 rounded-xl">
    //               <div className="flex items-center mb-2">
    //                 <Target className="h-5 w-5 text-blue-400 mr-2" />
    //                 <h4 className="font-semibold">Goal</h4>
    //               </div>
    //               <p className="text-sm text-gray-400">Build Amazing Apps</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background - Blue like Home */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* About Content */}
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
              className="transform transition-transform duration-300 hover:scale-110 rounded-2xl shadow-2xl mx-auto border border-white/10"
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
              <div className="glass-effect p-4 rounded-xl">
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

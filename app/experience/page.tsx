"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
              My <span className="gradient-text">Experience</span>
            </h1>
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
                      Software Developer Intern
                    </h3>
                    <p className="text-xl text-gray-300">PenNep Ltd, Punjab</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-500/20 gradient-text border-green-500/30">
                      Current
                    </Badge>
                    <p className="text-gray-400 mt-2">April 2025 - Present</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Worked on dynamic applications using Next.js</li>
                  <li>
                    • Contributed to a Learning Management System and a medicine
                    e-commerce platform
                  </li>
                  <li>• Collaborated using Git and Agile methodologies</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
                  >
                    React.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
                  >
                    Git
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
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
                    <p className="text-xl text-gray-300">O7 Services, Punjab</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      Training
                    </Badge>
                    <p className="text-gray-400 mt-2">
                      June 2024 - August 2024
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Built web apps using React and Firebase</li>
                  <li>• Created a complete CRUD application</li>
                  <li>• Implemented routing with React Router</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
                  >
                    React.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
                  >
                    Firebase
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
                  >
                    CRUD
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-500/30 text-blue-300"
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
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      Education
                    </Badge>
                    <p className="text-gray-400 mt-2">July 2022 - June 2025</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Currently pursuing Bachelor's degree in Computer Applications
                  with focus on modern web technologies, programming languages,
                  and software development practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

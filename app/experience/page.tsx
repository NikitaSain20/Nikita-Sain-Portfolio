"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-5 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            My{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-orange-500/30 to-orange-400/30 mx-auto mb-8 opacity-50"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {/* Job 1 */}
          <Card className="glass-effect border-white/10 md:hover:scale-105">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    Software Developer
                  </h3>
                  <p className="text-xl text-gray-300">
                    Pensylvenia Enterprices Ltd, Punjab
                  </p>
                </div>
                <div className="text-right">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    Current
                  </Badge>
                  <p className="text-gray-400 mt-2">April 2025 - Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Worked on full-stack web applications using React.js, Node.js,
                  Express, and MongoDB.
                </li>
                <li>
                  Collaborated with the development team to build reusable UI
                  components and implement REST APIs.
                </li>
                <li>
                  Improved application performance and optimized database
                  queries.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  React.js
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  Git
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  Agile
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10 md:hover:scale-105">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    Trainee
                  </h3>
                  <p className="text-xl text-gray-300">O7 Services, Punjab</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    Training
                  </Badge>
                  <p className="text-gray-400 mt-2">June 2024 - August 2024</p>
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
                  className="border-orange-500/30 text-orange-300"
                >
                  React.js
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  Firebase
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  CRUD
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  React Router
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10 md:hover:scale-105">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-xl text-gray-300">
                    GNA University, Phagwara, Punjab
                  </p>
                </div>
                <div className="text-right">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    Education
                  </Badge>
                  <p className="text-gray-400 mt-2">July 2022 - June 2025</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Completed graduation with a strong foundation in Data
                  Structures, Algorithms, DBMS, Computer Networks, and Software
                  Engineering.
                </li>
                <li>
                  Gained hands-on experience in MERN stack projects and Firebase
                  applications.
                </li>
                <li>
                  Actively participated in coding contests, hackathons, and
                  group projects.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  Data Structures & Algorithms
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  DBMS
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  Computer Networks
                </Badge>
                <Badge
                  variant="outline"
                  className="border-orange-500/30 text-orange-300"
                >
                  Software Engineering
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

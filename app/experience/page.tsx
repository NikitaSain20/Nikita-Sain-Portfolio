"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiencesData } from "@/components/constants/experience";

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

        <div className="space-y-8 lg:space-y-12">
          {experiencesData.map((exp: ExperienceDataType, index) => (
            <Card
              key={index}
              className="glass-effect border-white/10 md:hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                      {exp.status}
                    </Badge>
                    <p className="text-gray-400 mt-2">{exp.duration}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((item, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-orange-500/30 text-orange-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

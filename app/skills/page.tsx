"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Layers, Cloud, Settings } from "lucide-react"

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
              My <span className="gradient-text">Skills</span>
            </h1>
            <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mb-8 opacity-50"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-effect rounded-2xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gradient-text">
                  <Terminal className="h-6 w-6 mr-2" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">JavaScript</span>
                    <span className="gradient-text">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Java</span>
                    <span className="gradient-text">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect rounded-2xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gradient-text">
                  <Layers className="h-6 w-6 mr-2" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    React.js
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Bootstrap
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    GSAP
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Framer Motion
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect rounded-2xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gradient-text">
                  <Cloud className="h-6 w-6 mr-2" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Express.js
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect rounded-2xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gradient-text">
                  <Settings className="h-6 w-6 mr-2" />
                  Tools & DB
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    GitHub
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Redux
                  </Badge>
                  <Badge variant="secondary" className="glass-effect border-white/20">
                    Postman
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

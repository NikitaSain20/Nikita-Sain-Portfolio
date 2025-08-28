"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  status: string
  githubUrl?: string
  demoUrl?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  status,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{status}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs border-blue-500/30 text-blue-300">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {githubUrl && (
            <Button size="sm" variant="outline" className="btn-outline bg-transparent">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" className="btn-primary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

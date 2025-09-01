// src/components/sections/featured-projects.tsx
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const featuredProjects = [
  {
    title: 'Inductive Piston Position Measurement System',
    description: 'Designed firmware in C/C++ for precise position measurement using inductive sensors, integrated with STM32 microcontroller for industrial applications.',
    technologies: ['C/C++', 'STM32', 'Inductive Sensors', 'Embedded Systems'],
    category: 'Engineering',
    featured: true
  },
  {
    title: 'Communication Port Extender',
    description: 'Developed RS485 and CAN bus communication system using STM32 microcontroller to enable external device interfacing in industrial environments.',
    technologies: ['STM32', 'RS485', 'CAN Bus', 'PCB Design'],
    category: 'Engineering',
    featured: true
  },
  {
    title: 'Explosive Substances Measurement System',
    description: 'Created sensor-driven PCB system with pressure and flow sensors for automated tank level tracking, replacing manual methods for improved safety.',
    technologies: ['PCB Design', 'Eagle', 'Pressure Sensors', 'Web Interface'],
    category: 'Engineering',
    featured: true
  }
]

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of engineering projects showcasing embedded systems design, 
            IoT implementation, and innovative measurement solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

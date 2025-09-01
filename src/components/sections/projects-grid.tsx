// src/components/sections/projects-grid.tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Filter } from 'lucide-react'

const projects = [
  {
    title: 'Inductive Piston Position Measurement System',
    description: 'Industrial measurement system using inductive sensors with STM32 microcontroller for precise position tracking in harsh environments.',
    category: 'Engineering',
    technologies: ['C/C++', 'STM32', 'Inductive Sensors', 'Industrial IoT'],
    featured: true,
    status: 'Completed',
    year: '2024'
  },
  {
    title: 'Communication Port Extender',
    description: 'RS485 and CAN bus communication system enabling external device interfacing for industrial automation applications.',
    category: 'Engineering',
    technologies: ['STM32', 'RS485', 'CAN Bus', 'PCB Design'],
    featured: true,
    status: 'Completed',
    year: '2024'
  },
  {
    title: 'Explosive Substances Measurement System',
    description: 'Sensor-driven automated tank monitoring system replacing manual methods for improved safety and accuracy in hazardous environments.',
    category: 'Engineering',
    technologies: ['PCB Design', 'Eagle', 'Pressure Sensors', 'Web Dashboard'],
    featured: true,
    status: 'Completed',
    year: '2023'
  },
  {
    title: 'Programmable LED Lighting Controller',
    description: 'Research project for mosquito breeding experiments with programmable lighting patterns and environmental controls.',
    category: 'Research',
    technologies: ['Arduino', 'LED Control', 'Research', 'Data Collection'],
    featured: false,
    status: 'Completed',
    year: '2023'
  },
  {
    title: 'Next.js Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dark mode and smooth animations.',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
    status: 'Completed',
    year: '2024',
    github: 'https://github.com/nduvho-ramashia/portfolio',
    demo: 'https://nduvho-portfolio.vercel.app'
  },
  {
    title: 'IoT Environmental Monitor',
    description: 'ESP32-based environmental monitoring system with wireless data transmission and real-time dashboard visualization.',
    category: 'IoT',
    technologies: ['ESP32', 'Sensors', 'WiFi', 'MQTT', 'Dashboard'],
    featured: false,
    status: 'In Progress',
    year: '2024'
  }
]

const categories = ['All', 'Engineering', 'Web Development', 'IoT', 'Research']

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-20">
      <div className="container">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center space-x-1 rounded-lg bg-muted p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    className="absolute inset-0 rounded-md bg-background shadow-sm"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex gap-1">
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
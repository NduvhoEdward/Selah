// src/components/sections/experience.tsx
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Assistant to Services Manager',
    company: 'Integrated Mining Technologies - Kuruman Auto',
    period: 'December 2024 – January 2025',
    type: 'Contract',
    achievements: [
      'Developed Excel-based job card system streamlining service reporting',
      'Analyzed service data to identify failure trends and process bottlenecks',
      'Applied engineering KPIs (MTTR, MTBF) for performance evaluation',
      'Reduced downtime and operational costs through data-driven strategies'
    ]
  },
  {
    title: 'Junior Electrical Engineer',
    company: 'iMining (Pty) Ltd',
    period: 'February 2024 – May 2024',
    type: 'Part-time',
    achievements: [
      'Designed firmware (C/C++) for inductive piston position measurement system',
      'Implemented STM32-based communication port extender for RS485/CAN buses',
      'Developed and tested custom PCBs for embedded applications',
      'Performed circuit diagnosis and fault finding during prototype testing',
      'Collaborated with cross-functional teams on hardware/firmware alignment'
    ]
  },
  {
    title: 'Student Electrical Engineer',
    company: 'iMining (Pty) Ltd',
    period: 'December 2023 - January 2024',
    type: 'Internship',
    achievements: [
      'Designed sensor-driven PCB system for explosive substance measurement',
      'Integrated pressure/flow sensors for automated tank level tracking',
      'Created schematics in Eagle and mechanical models in Fusion 360',
      'Built system prototypes with web-based remote monitoring interface',
      'Improved safety by replacing manual measurement methods'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'Wits School of Electrical and Information Engineering',
    period: 'June - July 2023',
    type: 'Research',
    achievements: [
      'Supported programmable LED lighting systems research for mosquito studies',
      'Performed fault-finding and circuit diagnosis on lab equipment',
      'Calibrated and maintained testing equipment for reliable results',
      'Ensured laboratory safety and documentation accuracy'
    ]
  }
]

export function Experience() {
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
            Professional Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to prototype - hands-on experience in embedded systems, 
            IoT implementation, and engineering solutions across diverse industries.
          </motion.p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="outline" className="w-fit">
                        {experience.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
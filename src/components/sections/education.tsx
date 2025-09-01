// src/components/sections/education.tsx
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, BookOpen, Users, Music } from 'lucide-react'

const education = {
  degree: 'BSc (Hons) Electrical and Information Engineering',
  institution: 'University of the Witwatersrand, Johannesburg',
  year: '4th Year',
  expectedGrad: '2025',
  description: 'Specializing in embedded systems, IoT technologies, and measurement systems with hands-on experience in PCB design, firmware development, and wireless communications.'
}

const activities = [
  {
    title: 'Teaching Assistant',
    description: 'Microprocessor concepts and Assembly language programming',
    period: 'Feb 2021 – June 2021',
    icon: Users
  },
  {
    title: 'Lecturer Assistant',
    description: 'Evaluated microcontrollers and designed lab experiments',
    period: 'Nov 2020 - Feb 2021',
    icon: BookOpen
  },
  {
    title: 'Music Collaboration',
    description: 'Electric piano and bass guitar performance',
    period: 'Ongoing',
    icon: Music
  }
]

export function Education() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Education & Activities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Building a strong foundation through academic excellence and 
            diverse extracurricular involvement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{education.degree}</CardTitle>
                    <CardDescription>{education.institution}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Year:</span>
                  <span className="text-muted-foreground">{education.year}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Expected Graduation:</span>
                  <span className="text-muted-foreground">{education.expectedGrad}</span>
                </div>
                <p className="text-muted-foreground">{education.description}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent">
                      <activity.icon className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.period}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
// src/components/sections/awards.tsx
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, Globe, Shield } from 'lucide-react'

const achievements = [
  {
    title: 'CHPC-SCC 2021',
    award: '2nd Place National Finalist',
    description: 'High-Performance Computing and Data Science Competition',
    position: '2nd out of 4 national finalists',
    icon: Trophy,
    color: 'text-yellow-500'
  },
  {
    title: 'DIRISA Datathon 2020',
    award: '2nd Place National',
    description: 'Data Science and Analytics Competition',
    position: '2nd out of 9 national competitors',
    icon: Award,
    color: 'text-blue-500'
  },
  {
    title: 'ISC22-SCC',
    award: 'International Representative',
    description: 'Selected to represent South Africa at International Supercomputing Conference 2022',
    position: 'National Team Representative',
    icon: Globe,
    color: 'text-green-500'
  },
  {
    title: 'Cybersecurity Certification',
    award: 'Professional Development',
    description: 'The Cybersecurity Threat Landscape - LinkedIn Learning',
    position: 'Certified 2023',
    icon: Shield,
    color: 'text-purple-500'
  }
]

const memberships = [
  'Student Member - South African Institute of Electrical Engineers (SAIEE)',
  'Subscriber - Creamer Media (Engineering News, Mining Weekly)'
]

export function Awards() {
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
            Achievements & Recognition
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Recognition in high-performance computing, data science competitions, 
            and professional development achievements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${achievement.color}`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <Badge className="mt-2 mb-2">{achievement.award}</Badge>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary">{achievement.position}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Professional Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Professional Memberships</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {memberships.map((membership, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {membership}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

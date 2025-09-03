// src/components/sections/projects-hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Code, Cpu, Zap, Globe } from 'lucide-react'

const stats = [
  { label: 'Engineering Projects', count: '10+', icon: Zap },
  { label: 'Web Applications', count: '5+', icon: Globe },
  { label: 'PCB Designs', count: '5+', icon: Cpu },
  { label: 'Open Source', count: '5+', icon: Code },
]

export function ProjectsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* <Badge className="w-fit">Portfolio</Badge> */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Engineering Innovation
              <span className="gradient-text"> In Action</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From industrial measurement systems to web applications, explore a collection 
              of projects that demonstrate technical expertise, creative problem-solving, 
              and practical engineering solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-2">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.count}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
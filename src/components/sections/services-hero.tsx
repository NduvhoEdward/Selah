// src/components/sections/services-hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Wrench, Zap, Code, Monitor } from 'lucide-react'

export function ServicesHero() {
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
            <Badge className="w-fit">Services</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Engineering Solutions for
              <span className="gradient-text"> Modern Challenges</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to implementation, I provide comprehensive engineering services 
              that bridge the gap between innovative ideas and practical solutions. 
              Specializing in IoT, embedded systems, and full-stack development.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Zap, label: 'IoT Solutions', count: '10+' },
                { icon: Wrench, label: 'PCB Designs', count: '5+' },
                { icon: Code, label: 'Firmware Projects', count: '20+' },
                { icon: Monitor, label: 'Web Applications', count: '5+' },
              ].map((stat, index) => (
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

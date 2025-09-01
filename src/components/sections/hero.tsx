// src/components/sections/hero.tsx
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, MapPin, Calendar, Award } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '4+', icon: Calendar },
  { label: 'Projects Completed', value: '15+', icon: Award },
  { label: 'Technologies', value: '20+', icon: ArrowRight },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center space-x-2 rounded-full border bg-background/50 backdrop-blur px-4 py-2 text-sm font-medium"
            >
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for Engineering Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="block">Electrical &</span>
              <span className="block gradient-text">Information Engineer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-2xl text-xl text-muted-foreground sm:text-2xl"
            >
              IoT Innovator | Embedded Systems Specialist | Measurement Technologies Expert
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto max-w-3xl text-lg text-muted-foreground"
            >
              Specializing in measurement systems, IoT solutions, telecoms, and embedded design. 
              I transform complex engineering challenges into innovative solutions that connect 
              and empower communities through technology.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center space-x-2 text-muted-foreground"
            >
              <MapPin className="h-4 w-4" />
              <span>Johannesburg, South Africa</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Let's Build Together
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2 text-primary">
                    <stat.icon className="h-5 w-5" />
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
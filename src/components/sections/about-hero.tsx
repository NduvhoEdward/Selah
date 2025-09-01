// src/components/sections/about-hero.tsx
"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Badge className="w-fit">About Me</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering Innovation Through
              <span className="gradient-text"> Passion & Purpose</span>
            </h1>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a final-year Electrical & Information Engineering student with a deep passion 
                for embedded systems development, IoT solutions, and measurement technologies. 
                My journey has been driven by a desire to bridge the digital divide and create 
                innovative solutions that connect and empower communities.
              </p>
              
              <p>
                From firmware design in C/C++ to PCB prototyping and wireless communication systems, 
                I thrive on taking projects from concept to reality. My experience spans across 
                industrial measurement systems, communication protocols, and full-stack development.
              </p>
              
              <p>
                <strong>Selah Engineering Solutions</strong> represents my commitment to delivering 
                innovative engineering solutions. "Selah" - a biblical term meaning to pause and 
                reflect - embodies our approach: thoughtful consideration before action, ensuring 
                every solution is purposeful and impactful.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Final Year Student</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Available for Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8">
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">NR</div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-background border rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-background border rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
// src/components/sections/contact-hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Clock, Globe, CheckCircle } from 'lucide-react'

export function ContactHero() {
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
            <Badge className="w-fit">Get In Touch</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Let's Build Something
              <span className="gradient-text"> Amazing Together</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your ideas into innovative engineering solutions? 
              Whether it's IoT systems, embedded design, or web development, 
              I'm here to help bring your vision to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                {
                  icon: Clock,
                  label: 'Quick Response',
                  value: 'Within 24 hours',
                  color: 'text-green-500'
                },
                {
                  icon: Globe,
                  label: 'Remote Ready',
                  value: 'Global projects',
                  color: 'text-blue-500'
                },
                {
                  icon: CheckCircle,
                  label: 'Available',
                  value: 'New projects',
                  color: 'text-purple-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-2 ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-semibold">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

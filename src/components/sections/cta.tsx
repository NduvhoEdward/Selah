// src/components/sections/cta.tsx
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, MessageSquare } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need IoT solutions, embedded systems design, or web development, 
            I'm here to help transform your ideas into reality. Let's collaborate and 
            create innovative engineering solutions together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:hello@selah.net.za">
                <Mail className="mr-2 h-4 w-4" />
                Send an Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// src/components/sections/process.tsx
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight 
} from 'lucide-react'

const steps = [
  {
    title: 'Discovery',
    description: 'Understanding your requirements, challenges, and project goals',
    icon: MessageSquare,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'Planning',
    description: 'Developing detailed specifications, timelines, and technical approach',
    icon: Lightbulb,
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    title: 'Development',
    description: 'Building your solution with regular updates and milestone reviews',
    icon: Code,
    color: 'bg-green-500/10 text-green-500'
  },
  {
    title: 'Testing',
    description: 'Rigorous testing and validation to ensure quality and reliability',
    icon: TestTube,
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    title: 'Deployment',
    description: 'Final delivery, deployment, and handover with full documentation',
    icon: Rocket,
    color: 'bg-red-500/10 text-red-500'
  }
]

export function ProcessSection() {
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
            How We Work Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A structured approach ensuring your project is delivered on time, 
            within budget, and exceeds expectations.
          </motion.p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${step.color} mb-4`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
// src/components/sections/services-list.tsx
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  Cpu, 
  Zap, 
  Settings,
  ArrowRight,
  CheckCircle 
} from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications for businesses',
    icon: Globe,
    features: [
      'Responsive design for all devices',
      'Modern frameworks (React, Next.js)',
      'SEO optimization',
      'Performance optimization',
      'E-commerce solutions'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    pricing: 'From R5,000'
  },
  {
    title: 'IoT System Design',
    description: 'Complete IoT solutions from concept to prototype deployment',
    icon: Cpu,
    features: [
      'Sensor integration and data collection',
      'Wireless communication protocols',
      'Cloud connectivity and dashboards',
      'Real-time monitoring systems',
      'Custom hardware design'
    ],
    technologies: ['ESP32', 'STM32', 'LoRaWAN', 'MQTT', 'Cloud APIs'],
    pricing: 'From R8,000'
  },
  {
    title: 'Measurement & Embedded Systems',
    description: 'Custom PCB design, firmware development, and RF solutions',
    icon: Zap,
    features: [
      'PCB design and prototyping',
      'Firmware development (C/C++)',
      'RF and wireless communication',
      'Sensor calibration and testing',
      'Industrial control systems'
    ],
    technologies: ['Eagle', 'Fusion 360', 'C/C++', 'STM32', 'AVR'],
    pricing: 'Quote on request'
  },
  {
    title: 'Computer System Setup & Maintenance',
    description: 'Professional computer setup, optimization, and troubleshooting',
    icon: Settings,
    features: [
      'System optimization and cleanup',
      'Hardware troubleshooting',
      'Network setup and configuration',
      'Software installation and updates',
      'Data backup and recovery'
    ],
    technologies: ['Windows', 'Linux', 'Networking', 'Hardware'],
    pricing: 'From R500'
  }
]

export function ServicesList() {
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
            Professional Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive engineering services designed to bring your ideas to life 
            with precision, innovation, and professional excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <div className="text-xl font-bold text-primary">{service.pricing}</div>
                    </div>
                    <Button asChild className="group/btn">
                      <Link href="/contact">
                        Discover
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
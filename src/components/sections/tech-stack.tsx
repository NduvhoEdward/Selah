// src/components/sections/tech-stack.tsx
"use client"

import { motion } from 'framer-motion'
import { 
  Code, 
  Cpu, 
  Zap, 
  Wrench, 
  Monitor, 
  Smartphone,
  Wifi,
  Database 
} from 'lucide-react'

const technologies = [
  { name: 'C/C++', category: 'Programming', icon: Code },
  { name: 'Python', category: 'Programming', icon: Code },
  { name: 'STM32', category: 'Hardware', icon: Cpu },
  { name: 'ESP32', category: 'Hardware', icon: Wifi },
  { name: 'PCB Design', category: 'Hardware', icon: Zap },
  { name: 'Eagle/Fusion 360', category: 'Design Tools', icon: Wrench },
  { name: 'React/Next.js', category: 'Web Dev', icon: Monitor },
  { name: 'IoT Systems', category: 'Systems', icon: Smartphone },
]

const categories = [
  {
    title: 'Programming Languages',
    items: ['C/C++', 'Python', 'AVR Assembly', 'JavaScript', 'Matlab'],
    icon: Code,
    color: 'text-blue-500'
  },
  {
    title: 'Hardware Platforms',
    items: ['STM32', 'Atmel AVR', 'ESP32', 'Siemens LOGO PLC'],
    icon: Cpu,
    color: 'text-green-500'
  },
  {
    title: 'Design & Tools',
    items: ['Eagle', 'Fusion 360', 'LTspice', 'Proteus', 'Git'],
    icon: Wrench,
    color: 'text-purple-500'
  },
  {
    title: 'Specializations',
    items: ['IoT Systems', 'PCB Design', 'Firmware', 'RF Communication'],
    icon: Zap,
    color: 'text-orange-500'
  }
]

export function TechStack() {
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
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From embedded firmware to full-stack web applications, 
            I work across the complete technology stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-lg border p-6 h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
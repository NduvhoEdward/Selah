// src/components/sections/contact-info.tsx
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Clock,
  MessageSquare,
  Calendar 
} from 'lucide-react'

const contactMethods = [
  {
    title: 'Email',
    value: 'hello@Selah.net.za',
    href: 'mailto:hello@Selah.net.za',
    icon: Mail,
    description: 'Best for project inquiries'
  },
  {
    title: 'Phone',
    value: '063 853 3355',
    href: 'tel:+27638533355',
    icon: Phone,
    description: 'Available during business hours'
  },
  {
    title: 'Location',
    value: 'Johannesburg, South Africa',
    href: 'https://maps.google.com/?q=Johannesburg',
    icon: MapPin,
    description: 'Open to remote work globally'
  }
]

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/nduvho-ramashia',
    icon: Github,
    description: 'View my code and contributions'
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/nduvho-ramashia',
    icon: Linkedin,
    description: 'Professional network and updates'
  }
]

const availability = [
  {
    title: 'Response Time',
    value: 'Within 24 hours',
    icon: Clock,
    description: 'I aim to respond to all inquiries quickly'
  },
  {
    title: 'Project Availability',
    value: 'Currently Available',
    icon: Calendar,
    description: 'Accepting new projects and collaborations'
  },
  {
    title: 'Consultation',
    value: 'Free Initial Call',
    icon: MessageSquare,
    description: 'Let\'s discuss your project requirements'
  }
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={method.title} className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <method.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{method.title}:</span>
                      <a 
                        href={method.href}
                        className="text-primary hover:underline"
                        target={method.title === 'Location' ? '_blank' : undefined}
                        rel={method.title === 'Location' ? 'noopener noreferrer' : undefined}
                      >
                        {method.value}
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Connect Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((link, index) => (
                <div key={link.title} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-accent">
                      <link.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{link.title}</div>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {availability.map((item, index) => (
                <div key={item.title} className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{item.title}:</span>
                      <span className="text-green-600 dark:text-green-400">{item.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss how we can bring your engineering ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <a href="mailto:Nduvho.Ramashia@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/nduvho-ramashia" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
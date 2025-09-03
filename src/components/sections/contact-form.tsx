// src/components/sections/contact-form.tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send, CheckCircle, AlertCircle, Mail } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ApiResponse {
  success: boolean
  message: string
  errors?: Array<{ path: string[]; message: string }>
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data: ApiResponse = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setStatusMessage(data.message)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        if (data.errors && data.errors.length > 0) {
          const errorMessages = data.errors.map(err => err.message).join(', ')
          setStatusMessage(`Please fix: ${errorMessages}`)
        } else {
          setStatusMessage(data.message || 'Something went wrong. Please try again.')
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setStatusMessage('Network error. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
      // Clear status after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 8000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, requirements, timeline, etc."
                    className="min-h-[120px]"
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-950 p-3 rounded-md"
                  >
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{statusMessage}</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col space-y-3 text-red-600 bg-red-50 dark:bg-red-950 p-3 rounded-md"
                  >
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{statusMessage}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span>Or email me directly:</span>
                      <Button
                        variant="link"
                        size="sm"
                        className="h-auto p-0 text-red-600 hover:text-red-700"
                        asChild
                      >
                        <a href="mailto:hello@Selah.net.za">
                          <Mail className="h-3 w-3 mr-1" />
                          hello@Selah.net.za
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}

                <Button 
                  type="submit" 
                  className="w-full group" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
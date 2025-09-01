// src/components/sections/github-section.tsx
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Star, GitFork, ExternalLink } from 'lucide-react'

// Mock GitHub data - In production, you'd fetch this from GitHub API
const githubStats = {
  publicRepos: 12,
  followers: 45,
  following: 23,
  totalStars: 89
}

const featuredRepos = [
  {
    name: 'iot-measurement-system',
    description: 'Industrial IoT measurement system with STM32 and wireless communication',
    language: 'C++',
    stars: 15,
    forks: 3,
    url: 'https://github.com/nduvho-ramashia/iot-measurement-system'
  },
  {
    name: 'pcb-design-library',
    description: 'Collection of PCB designs and schematics for common engineering applications',
    language: 'Eagle',
    stars: 8,
    forks: 2,
    url: 'https://github.com/nduvho-ramashia/pcb-design-library'
  },
  {
    name: 'embedded-firmware-utils',
    description: 'Utility functions and drivers for embedded systems development',
    language: 'C',
    stars: 12,
    forks: 4,
    url: 'https://github.com/nduvho-ramashia/embedded-firmware-utils'
  }
]

export function GitHubSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 text-primary">
              <Github className="h-8 w-8" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Open Source Contributions
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and building together. Explore my GitHub repositories 
              featuring engineering projects, utilities, and collaborative work.
            </p>
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Public Repos', value: githubStats.publicRepos },
            { label: 'Followers', value: githubStats.followers },
            { label: 'Following', value: githubStats.following },
            { label: 'Total Stars', value: githubStats.totalStars },
          ].map((stat, index) => (
            <Card key={stat.label}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Featured Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                    {repo.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="group">
              <a href="https://github.com/nduvho-ramashia" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Repositories
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
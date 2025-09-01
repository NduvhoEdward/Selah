// src/app/projects/page.tsx
import { Metadata } from 'next'
import { ProjectsHero } from '@/components/sections/projects-hero'
import { ProjectsGrid } from '@/components/sections/projects-grid'
import { GitHubSection } from '@/components/sections/github-section'

export const metadata: Metadata = {
  title: 'Projects | Nduvho Ramashia',
  description: 'Explore my engineering and development projects including IoT solutions, embedded systems, PCB designs, and web applications.',
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <ProjectsHero />
      <ProjectsGrid />
      <GitHubSection />
    </div>
  )
}
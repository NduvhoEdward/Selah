// src/app/about/page.tsx
import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about-hero'
import { Experience } from '@/components/sections/experience'
import { Education } from '@/components/sections/education'
import { Awards } from '@/components/sections/awards'

export const metadata: Metadata = {
  title: 'About | Nduvho Ramashia',
  description: 'Learn about Nduvho Ramashia, an Electrical & Information Engineering student specializing in IoT solutions and embedded systems design.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <Experience />
      <Education />
      <Awards />
    </div>
  )
}

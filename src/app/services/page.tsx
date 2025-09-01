// src/app/services/page.tsx
import { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/services-hero'
import { ServicesList } from '@/components/sections/services-list'
import { ProcessSection } from '@/components/sections/process'

export const metadata: Metadata = {
  title: 'Services | Nduvho Ramashia',
  description: 'Professional engineering services including IoT solutions, embedded systems design, web development, and computer system maintenance.',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
    </div>
  )
}
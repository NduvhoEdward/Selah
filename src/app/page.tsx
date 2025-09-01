import { Hero } from '@/components/sections/hero'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { TechStack } from '@/components/sections/tech-stack'
import { CallToAction } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <CallToAction />
    </div>
  )
}
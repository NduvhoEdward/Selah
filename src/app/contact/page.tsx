// src/app/contact/page.tsx
import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact-hero'
import { ContactForm } from '@/components/sections/contact-form'
import { ContactInfo } from '@/components/sections/contact-info'

export const metadata: Metadata = {
  title: 'Contact | Nduvho Ramashia',
  description: 'Get in touch for engineering projects, IoT solutions, web development, or collaboration opportunities.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}

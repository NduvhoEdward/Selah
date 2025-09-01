// src/components/layout/footer.tsx
import Link from 'next/link'
import { Github, Linkedin, Mail, Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Selah Engineering Solutions</span>
                <span className="text-sm text-muted-foreground">
                  Innovating Connectivity, Empowering Communities
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Bridging the digital divide through innovative IoT solutions, embedded systems design, 
              and measurement technologies. Building the future, one connection at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/nduvho-ramashia" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nduvho-ramashia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:Nduvho.Ramashia@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Built by{' '}
            <Link href="/" className="font-medium text-primary hover:underline">
              Nduvho Ramashia
            </Link>
            {' '}| Selah Engineering Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
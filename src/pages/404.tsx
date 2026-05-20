import React from 'react'
import { SEO } from "@/components/SEO"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="Page not found"
      />
      
      <Header />
      
      <main className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <div className="glass-effect rounded-2xl p-12 border border-border/50 max-w-md mx-auto">
            <h1 className="font-serif text-6xl font-bold text-accent mb-4">404</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Sorry, we couldn't find the page you requested. This page may have been moved, deleted, or never existed.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="w-4 h-4" />
                Return to home page
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

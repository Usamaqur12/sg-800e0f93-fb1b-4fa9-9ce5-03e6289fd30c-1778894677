import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/themed-button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Sparkles, 
  ShoppingBag, 
  Star, 
  Download, 
  Shield, 
  Zap,
  Clock,
  Users,
  Video,
  Palette,
  Brain,
  TrendingUp,
  CheckCircle2,
  Instagram,
  Target,
  Lightbulb,
  Mail,
  MessageSquare
} from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO
        title="DABEL AI - Premium AI Digital Products for Content Creators"
        description="AI prompts, viral reels templates, Canva designs, and content creation tools. Instant access to 40,000+ premium assets for creators and marketers."
        image="/og-image.png"
      />
      
      <Header />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              40,000+ Premium Digital Assets
            </Badge>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Create Viral Content with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Tools
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Professional AI prompts, viral reels templates, Canva designs, and content systems. 
              Everything you need to create engaging content that stands out.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                variant="accent"
                className="text-lg px-8 py-6 h-auto"
                onClick={() => window.open("https://whop.com/joined/dabel-solutions/", "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Get Instant Access
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-border hover:border-accent"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 glass-effect rounded-lg p-4">
                <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Instant Digital Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-3 glass-effect rounded-lg p-4">
                <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Secure Payments</span>
              </div>
              <div className="flex items-center justify-center gap-3 glass-effect rounded-lg p-4">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Lifetime Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section id="products" className="container py-16 md:py-24 bg-gradient-to-b from-background to-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                What You Get
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete toolkit designed for modern content creators, marketers, and entrepreneurs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "AI Prompt Packs",
                  description: "Battle-tested prompts for ChatGPT, Claude, and Midjourney to create engaging content instantly"
                },
                {
                  icon: Video,
                  title: "Viral Reels Templates",
                  description: "Proven Instagram Reels and TikTok templates that drive engagement and views"
                },
                {
                  icon: Palette,
                  title: "Canva Templates",
                  description: "Professional designs for social media, presentations, and marketing materials"
                },
                {
                  icon: Target,
                  title: "Content Hook Packs",
                  description: "Scroll-stopping hooks and captions that capture attention and drive engagement"
                },
                {
                  icon: Lightbulb,
                  title: "AI Automation Resources",
                  description: "Workflows and systems to automate your content creation process"
                },
                {
                  icon: Instagram,
                  title: "Social Media Systems",
                  description: "Complete content calendars and posting strategies for consistent growth"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the perfect package for your content creation needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Canva Template Product */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-secondary to-card overflow-hidden">
                  <img 
                    src="/canva-template.png" 
                    alt="Canva Editable Template"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Canva Editable Template
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Professional, easy-to-customize templates for social media, presentations, and marketing materials.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "50+ professionally designed templates",
                      "Fully customizable in Canva",
                      "Commercial use license included",
                      "Instagram, Facebook, LinkedIn formats",
                      "Lifetime access and updates"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-foreground">$250</span>
                    <span className="text-muted-foreground">one-time payment</span>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant="accent"
                    onClick={() => window.open("https://whop.com/joined/dabel-solutions/products/canva-editable-template/", "_blank")}
                  >
                    Purchase Now
                  </Button>
                </div>
              </div>

              {/* Creator Mega Pack Product */}
              <div className="bg-card border-2 border-accent rounded-xl overflow-hidden hover:border-accent/80 transition-all duration-300 group relative">
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    MOST POPULAR
                  </Badge>
                </div>
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-card overflow-hidden">
                  <img 
                    src="/creator-mega-pack.png" 
                    alt="Ultimate Creator Mega Pack"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Ultimate Creator Mega Pack
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to elevate your content. 40,000+ premium assets including Lightroom presets, Canva templates, Reels templates, and more.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "40,000+ premium digital assets",
                      "Professional Lightroom presets",
                      "Instagram Reels and Stories templates",
                      "Canva templates for all platforms",
                      "Video editing assets and transitions",
                      "Commercial license for client work"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-foreground">$678</span>
                    <span className="text-muted-foreground">per month</span>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant="accent"
                    onClick={() => window.open("https://whop.com/joined/dabel-solutions/products/ultimate-creator-mega-pack-40-000-assets-bundle-lightroom-canva-reels-and-more/", "_blank")}
                  >
                    Purchase Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About DABEL AI Section */}
        <section className="container py-16 md:py-24 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why DABEL AI?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We built DABEL AI because content creators, marketers, and freelancers were spending hours creating content from scratch. The tools existed, but finding quality resources was time-consuming and expensive.
              </p>
              <p>
                Our mission is simple: <span className="text-foreground font-semibold">provide professional-grade digital assets that save you time and help you create better content.</span> Whether you're building a brand, growing your social media, or serving clients, we've got the tools you need.
              </p>
              <p>
                From AI prompts that generate engaging copy to viral reels templates that drive views, every resource in our library is designed to solve real problems for modern creators.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Why Creators Choose Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to create professional content faster
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Save Time",
                  description: "Stop starting from scratch. Use proven templates and systems to create content in minutes, not hours."
                },
                {
                  icon: TrendingUp,
                  title: "Create Faster",
                  description: "Streamlined workflows and ready-to-use assets mean you can publish more content consistently."
                },
                {
                  icon: Sparkles,
                  title: "Viral Content Systems",
                  description: "Learn what works. Our templates are based on proven viral content strategies and frameworks."
                },
                {
                  icon: Users,
                  title: "Beginner Friendly",
                  description: "No design or technical skills needed. Everything is simple to customize and use right away."
                },
                {
                  icon: Zap,
                  title: "Instant Access",
                  description: "Download immediately after purchase. No waiting, no shipping—start creating right away."
                },
                {
                  icon: CheckCircle2,
                  title: "No Experience Needed",
                  description: "Step-by-step guides and intuitive templates make professional content accessible to everyone."
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="container py-16 md:py-24 bg-gradient-to-b from-background to-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Trusted by Content Creators
              </h2>
              <p className="text-lg text-muted-foreground">
                Real feedback from creators using our tools
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Martinez",
                  role: "Instagram Creator",
                  content: "The reels templates helped me triple my engagement in just 2 weeks. The quality and variety are incredible.",
                  rating: 5
                },
                {
                  name: "Mike Johnson",
                  role: "Freelance Designer",
                  content: "These Canva templates save me hours on every client project. Worth every penny for the time savings alone.",
                  rating: 5
                },
                {
                  name: "Emma Chen",
                  role: "Marketing Manager",
                  content: "The AI prompts are game-changing. I can create months of content ideas in minutes instead of days.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refund Policy Notice */}
        <section className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Refund Policy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Due to the digital nature of our products, all sales are final once you gain access. 
                    However, duplicate payments or technical issues may qualify for review and refund. 
                    Please contact our support team if you experience any issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our products and services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-semibold text-foreground hover:text-accent hover:no-underline">
                  Why is it so affordable?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  By pooling resources and offering shared access to our suite of tools, we can significantly reduce costs. This shared model allows us to take advantage of economies of scale, ensuring that you receive a cost-effective subscription while still enjoying a seamless experience across all our services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-semibold text-foreground hover:text-accent hover:no-underline">
                  Can I get a refund after gaining access?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  All sales are final. Upon payment, you receive immediate access to exclusive content and resources. For this reason, we do not offer refunds except in cases of duplicate payments or technical issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-semibold text-foreground hover:text-accent hover:no-underline">
                  How can I cancel my subscription?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  You can cancel any time. Just open a support ticket on Discord, email us at support@dabel.ai, or login and manage subscription cancellation yourself before the next renewal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-semibold text-foreground hover:text-accent hover:no-underline">
                  Do I need design experience to use these products?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No! All our templates and tools are designed for beginners. Canva templates are fully editable with drag-and-drop, AI prompts are copy-paste ready, and everything includes simple instructions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-semibold text-foreground hover:text-accent hover:no-underline">
                  Can I use these products for client work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! All products include commercial use licenses, meaning you can use them for your own business and client projects. Perfect for freelancers and agencies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container py-16 md:py-24 bg-gradient-to-b from-card/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Need Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to assist you with any questions or issues
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <Mail className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Email Support
                </h3>
                <p className="text-muted-foreground mb-3">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a 
                  href="mailto:support@dabel.ai" 
                  className="text-accent hover:underline font-medium"
                >
                  support@dabel.ai
                </a>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 text-left">
                <MessageSquare className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Discord Community
                </h3>
                <p className="text-muted-foreground mb-3">
                  Join our community for instant support and tips
                </p>
                <p className="text-foreground font-medium">
                  Access via your member dashboard
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Average response time: <span className="text-foreground font-semibold">Under 24 hours</span>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border mt-20">
          <div className="container py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  DABEL Solutions
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium AI-powered digital assets for content creators, marketers, and entrepreneurs.
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact: <a href="mailto:support@dabel.ai" className="text-accent hover:underline">support@dabel.ai</a>
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Products</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#products" className="text-muted-foreground hover:text-accent transition-colors">
                      Canva Templates
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-muted-foreground hover:text-accent transition-colors">
                      Creator Mega Pack
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-muted-foreground hover:text-accent transition-colors">
                      AI Prompts
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/terms-of-service" className="text-muted-foreground hover:text-accent transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="text-muted-foreground hover:text-accent transition-colors">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} DABEL AI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
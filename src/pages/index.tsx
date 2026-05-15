import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
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
  MessageSquare,
  Award,
  Package,
  Film,
  Image,
  Briefcase,
  FileText,
  ChevronRight,
  Headphones
} from "lucide-react";

export default function Home() {
  const products = [
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
  ];

  return (
    <>
      <SEO
        title="DABEL AI - Premium AI Creator Assets"
        description="Instant access to AI prompts, Canva templates, viral reels assets, and creator resources designed for creators, marketers, and businesses."
        image="/og-image.png"
      />
      
      <Header />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          
          <div className="container relative py-24 md:py-32 lg:py-40">
            <div className="max-w-4xl mx-auto text-center">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-accent/20 hover:border-accent/40 transition-colors animate-fade-in">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Premium Digital Creator Assets
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight animate-fade-in-up">
                Premium AI Creator Assets for{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Modern Content Creators
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Instant access to AI prompts, Canva templates, viral reels assets, and creator resources designed for creators, marketers, and businesses.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <Button
                  size="lg"
                  variant="accent"
                  className="text-lg px-8 py-6 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all group"
                  onClick={() => window.scrollTo({ top: document.getElementById("products")?.offsetTop || 0, behavior: "smooth" })}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Get Instant Access
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-accent/30 hover:bg-accent/10 hover:border-accent/50 transition-all"
                  onClick={() => window.scrollTo({ top: document.getElementById("products")?.offsetTop || 0, behavior: "smooth" })}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Explore Products
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse-glow" />
                  <span className="group-hover:text-foreground transition-colors">Instant Digital Delivery</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse-glow" />
                  <span className="group-hover:text-foreground transition-colors">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse-glow" />
                  <span className="group-hover:text-foreground transition-colors">Beginner Friendly</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse-glow" />
                  <span className="group-hover:text-foreground transition-colors">Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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

        {/* Detailed Product Sections */}
        <section className="container py-20">
          {/* Canva Template Product */}
          <div className="max-w-6xl mx-auto mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative glass-effect rounded-2xl p-8 border border-border/50">
                  <img
                    src="/canva-template.png"
                    alt="10,000+ Canva Templates"
                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  10,000+ Templates
                </div>

                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Canva Editable Template Bundle
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get access to a massive collection of 10,000 fully editable Canva templates designed to make your work faster, easier, and more professional. Perfect for businesses, marketers, content creators, and designers who want high-quality designs without spending hours creating them from scratch.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  This bundle includes a wide variety of templates such as social media posts, Instagram posts, stories, business flyers, banners, ads, presentations, marketing graphics, and more. Every template is 100% customizable in Canva.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  No advanced design skills are required. Simply open the template in Canva, edit it in minutes, and download it for your projects.
                </p>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">10,000+ Templates</p>
                      <p className="text-sm text-muted-foreground">Professional designs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Fully Editable</p>
                      <p className="text-sm text-muted-foreground">Customize everything</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Palette className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Drag & Drop</p>
                      <p className="text-sm text-muted-foreground">Easy editing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Social Media Ready</p>
                      <p className="text-sm text-muted-foreground">Perfect formats</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">High Quality</p>
                      <p className="text-sm text-muted-foreground">Modern designs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Free Canva Account</p>
                      <p className="text-sm text-muted-foreground">No premium needed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Save Time</p>
                      <p className="text-sm text-muted-foreground">Create instantly</p>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-6">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-bold text-foreground">$250</span>
                    <span className="text-muted-foreground">one-time payment</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="accent"
                      className="text-lg px-8 py-6 w-full sm:w-auto"
                      onClick={() => window.open("https://whop.com/joined/dabel-solutions/products/canva-editable-template/", "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Get Instant Access
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 w-full sm:w-auto border-accent/30 hover:bg-accent/10"
                      onClick={() => window.open("https://whop.com/joined/dabel-solutions/products/canva-editable-template/", "_blank")}
                    >
                      Download Templates
                    </Button>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Instant Digital Delivery
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Lifetime Access
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Beginner Friendly
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultimate Creator Mega Pack Product */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Details */}
              <div className="space-y-6 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>

                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Ultimate Creator Mega Pack
                </h2>
                <p className="text-xl text-accent font-semibold">
                  40,000+ Assets Bundle
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unlock the ultimate all-in-one creator bundle packed with over 40,000+ premium digital assets designed for content creators, video editors, designers, marketers, and social media brands.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  This mega bundle includes everything you need to create professional content faster and easier — without spending hundreds of dollars on separate tools and resources.
                </p>

                {/* What's Inside */}
                <div className="space-y-3 pt-4">
                  <p className="font-semibold text-foreground text-lg">Inside the bundle:</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Lightroom Presets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Canva Templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Viral Reels Templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Video Editing Assets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Social Media Graphics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Motion Elements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Fonts & Design Resources
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Marketing Templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      Business Content Assets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      And much more
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  All assets are professionally designed and beginner friendly. Simply download, customize, and start creating high-quality content for Instagram, TikTok, YouTube, client projects, and online businesses.
                </p>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Package className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">40,000+ Assets</p>
                      <p className="text-sm text-muted-foreground">Complete bundle</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Instant Access</p>
                      <p className="text-sm text-muted-foreground">Download now</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Film className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Viral Reels</p>
                      <p className="text-sm text-muted-foreground">Social content</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Image className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Lightroom Presets</p>
                      <p className="text-sm text-muted-foreground">Pro editing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Beginner Friendly</p>
                      <p className="text-sm text-muted-foreground">Easy to use</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">For Business</p>
                      <p className="text-sm text-muted-foreground">Client work ready</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Save Hours</p>
                      <p className="text-sm text-muted-foreground">Work faster</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">High Quality</p>
                      <p className="text-sm text-muted-foreground">Professional resources</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground italic pt-4">
                  Whether you are a content creator, freelancer, agency owner, marketer, or entrepreneur, this bundle gives you a complete creator toolkit to level up your content and branding. 🚀
                </p>

                {/* Price & CTA */}
                <div className="pt-6">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-bold text-foreground">$678</span>
                    <span className="text-muted-foreground">per month</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="accent"
                      className="text-lg px-8 py-6 w-full sm:w-auto"
                      onClick={() => window.open("https://whop.com/joined/dabel-solutions/products/ultimate-creator-mega-pack-40-000-assets-bundle-lightroom-canva-reels-and-more/", "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Get Instant Access
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 w-full sm:w-auto border-accent/30 hover:bg-accent/10"
                      onClick={() => window.open("https://whop.com/joined/dabel-solutions/products/ultimate-creator-mega-pack-40-000-assets-bundle-lightroom-canva-reels-and-more/", "_blank")}
                    >
                      Download Bundle
                    </Button>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Instant Digital Delivery
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Lifetime Access
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Beginner Friendly
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      Secure Checkout
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative group lg:order-2">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative glass-effect rounded-2xl p-8 border border-border/50">
                  <img
                    src="/creator-mega-pack.png"
                    alt="Ultimate Creator Mega Pack"
                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    40,000+ Assets
                  </div>
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

        {/* Premium Enterprise Footer */}
        <footer className="relative border-t border-border/50 mt-32">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
          
          <div className="container relative">
            {/* Main Footer Content */}
            <div className="py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand Section */}
                <div className="lg:col-span-2">
                  <Logo />
                  <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
                    Premium AI creator assets, templates, and digital resources for creators, marketers, and businesses.
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex items-center gap-4 mt-6">
                    <a
                      href="https://twitter.com/dabelai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all group"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/dabelai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all group"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com/@dabelai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all group"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a
                      href="https://discord.gg/dabelai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all group"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Legal Section */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Legal
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/terms-of-service" 
                        className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/privacy-policy" 
                        className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/refund-policy" 
                        className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        Refund Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Support Section */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-accent" />
                    Support
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Email Support</p>
                      <a 
                        href="mailto:support@dabelai.com" 
                        className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-2 group"
                      >
                        <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        support@dabelai.com
                      </a>
                    </div>
                    <div className="glass-effect rounded-lg p-4 border border-border/50">
                      <p className="text-sm text-muted-foreground flex items-start gap-2">
                        <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        We typically respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/50 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  © 2026 DABEL AI. All Rights Reserved.
                </p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Secure Payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Instant Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
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
                      onClick={() => window.open("https://whop.com/checkout/plan_uhfcNszlYIPzW", "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Get Instant Access
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 w-full sm:w-auto border-accent/30 hover:bg-accent/10"
                      onClick={() => window.open("https://whop.com/checkout/plan_uhfcNszlYIPzW", "_blank")}
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
                      onClick={() => window.open("https://whop.com/checkout/plan_G4ItRh2UZoiTt", "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Get Instant Access
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 w-full sm:w-auto border-accent/30 hover:bg-accent/10"
                      onClick={() => window.open("https://whop.com/checkout/plan_G4ItRh2UZoiTt", "_blank")}
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

          {/* Digital Hustler Pack Product */}
          <div className="max-w-6xl mx-auto mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative glass-effect rounded-2xl p-8 border border-border/50">
                  <img
                    src="/digital-hustler-pack.png"
                    alt="Digital Hustler Pack"
                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Complete Bundle
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  <Zap className="w-4 h-4" />
                  ULTIMATE BUNDLE
                </div>

                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Digital Hustler Pack
                </h2>
                <p className="text-xl text-accent font-semibold">
                  Everything You Need to Create, Grow & Earn Online
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Everything you need for content creation, freelancing, social media growth, and online business in one powerful bundle.
                </p>

                {/* What's Inside */}
                <div className="space-y-3 pt-4">
                  <p className="font-semibold text-foreground text-lg">What's included:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>1000+ ChatGPT Prompts for content, marketing & sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Seaggs Vector Mockup Pack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>1000+ Elementor Pro Landing Page Templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>1000+ Gym Motivation Reels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>500+ AI Tech Reels Bundle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>2D Animation Funny Reels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Sales Message Scripts & Templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>100,000+ Editable T-Shirt Designs</span>
                    </li>
                  </ul>
                </div>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Premium Quality</p>
                      <p className="text-sm text-muted-foreground">Professional files</p>
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
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Instant Access</p>
                      <p className="text-sm text-muted-foreground">Download now</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg glass-effect hover:bg-card/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">For Hustlers</p>
                      <p className="text-sm text-muted-foreground">Creators & freelancers</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground italic pt-4">
                  🔥 The complete all-in-one bundle to create, grow & earn online faster.
                </p>

                {/* Price & CTA */}
                <div className="pt-6">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-bold text-foreground">$330</span>
                    <span className="text-muted-foreground">per month</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      variant="accent"
                      className="text-lg px-8 py-6 w-full sm:w-auto"
                      onClick={() => window.open("https://whop.com/checkout/plan_MMYJ2qFLVCiZ3", "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Get Instant Access
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 w-full sm:w-auto border-accent/30 hover:bg-accent/10"
                      onClick={() => window.open("https://whop.com/checkout/plan_MMYJ2qFLVCiZ3", "_blank")}
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
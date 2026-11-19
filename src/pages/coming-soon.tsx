import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { DabelLogo } from "@/components/DabelLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, X, ArrowRight, Sparkles, Check, Clock, Mail } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ComingSoon() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("plan");
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const heroAnimation = useScrollAnimation();
  const sceneAnimation = useScrollAnimation();
  const productAnimation = useScrollAnimation();
  const workflowAnimation = useScrollAnimation();
  const waitlistAnimation = useScrollAnimation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setError("Waitlist backend not yet configured. Please check back soon.");
      setLoading(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const getAnimationClass = (baseClass: string) => {
    return prefersReducedMotion ? "" : baseClass;
  };

  return (
    <>
      <SEO
        title="Dabel AI - Your AI Team for Ideas and Code"
        description="Join the waitlist for Dabel AI, your next workspace for AI chat, coding, and coordinated agents. Private beta coming soon."
      />

      <div className="min-h-screen bg-dabel-bg">
        {/* Floating Navigation */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
          <div className="dabel-glass rounded-full px-6 py-3 shadow-lg transition-all hover:shadow-xl">
            <div className="flex items-center justify-between">
              <DabelLogo linkTo="#hero" />

              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection("product")} className="text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors">
                  Product
                </button>
                <button onClick={() => scrollToSection("workflow")} className="text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors">
                  Agent Teams
                </button>
                <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors">
                  FAQ
                </button>
                <Button onClick={() => scrollToSection("waitlist")} className="bg-dabel-black text-white hover:bg-dabel-black/90 rounded-full transition-all hover:scale-105">
                  Join the waitlist
                </Button>
              </div>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-dabel-black">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-dabel-black/10 space-y-3">
                <button onClick={() => scrollToSection("product")} className="block w-full text-left text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors py-2">
                  Product
                </button>
                <button onClick={() => scrollToSection("workflow")} className="block w-full text-left text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors py-2">
                  Agent Teams
                </button>
                <button onClick={() => scrollToSection("faq")} className="block w-full text-left text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors py-2">
                  FAQ
                </button>
                <Button onClick={() => scrollToSection("waitlist")} className="w-full bg-dabel-black text-white hover:bg-dabel-black/90 rounded-full">
                  Join the waitlist
                </Button>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 px-4" ref={heroAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dabel-lilac/10 border border-dabel-lilac/20 ${
                  heroAnimation.isVisible ? getAnimationClass("animate-fade-in") : "opacity-0"
                }`}
                style={{ animationDelay: mounted ? "0ms" : undefined }}
              >
                <Sparkles className="w-4 h-4 text-dabel-lilac" />
                <span className="text-sm font-medium text-dabel-black">Private beta coming soon</span>
              </div>

              <h1 
                className={`font-bold text-5xl md:text-7xl lg:text-8xl text-dabel-black leading-tight ${
                  heroAnimation.isVisible ? getAnimationClass("animate-fade-in") : "opacity-0"
                }`}
                style={{ animationDelay: mounted ? "100ms" : undefined }}
              >
                Your ideas.
                <br />
                Your AI team.
              </h1>

              <p 
                className={`text-xl md:text-2xl text-dabel-black/60 max-w-3xl mx-auto leading-relaxed ${
                  heroAnimation.isVisible ? getAnimationClass("animate-fade-in") : "opacity-0"
                }`}
                style={{ animationDelay: mounted ? "200ms" : undefined }}
              >
                Meet your next workspace for AI chat, coding, and coordinated agents. Join the waitlist for early access.
              </p>

              <div 
                className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${
                  heroAnimation.isVisible ? getAnimationClass("animate-fade-in") : "opacity-0"
                }`}
                style={{ animationDelay: mounted ? "300ms" : undefined }}
              >
                <Button onClick={() => scrollToSection("waitlist")} size="lg" className="bg-dabel-black text-white hover:bg-dabel-black/90 rounded-full px-8 text-lg transition-all hover:scale-105">
                  Join the waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button onClick={() => scrollToSection("product")} variant="outline" size="lg" className="border-2 border-dabel-black/20 text-dabel-black hover:bg-dabel-black/5 rounded-full px-8 text-lg transition-all hover:scale-105">
                  Explore the vision
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Robot Scene */}
        <section className="py-20 px-4" ref={sceneAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-5xl mx-auto">
            <div className={`relative min-h-[600px] dabel-glass rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-700 ${
              sceneAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 right-10 w-64 h-64 bg-dabel-mint rounded-full blur-3xl opacity-30 ${getAnimationClass("animate-float")}`} />
                <div className={`absolute bottom-20 left-10 w-64 h-64 bg-dabel-peach rounded-full blur-3xl opacity-30 ${getAnimationClass("animate-float-slow")}`} />
              </div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-dabel-black/10 p-8 transition-all hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-sm font-medium text-dabel-black/50">Workflow</span>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-dabel-mint flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                        <svg className="w-6 h-6 text-dabel-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-dabel-black">Plan</div>
                        <div className="text-sm text-dabel-black/60">Coordinate tasks and priorities</div>
                      </div>
                      <Check className="w-5 h-5 text-dabel-mint" />
                    </div>

                    <div className="flex items-center gap-4 pl-6">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-dabel-mint to-dabel-lilac" />
                      <div className="text-xs text-dabel-black/40 font-mono">→</div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-dabel-lilac flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-dabel-black">Build</div>
                        <div className="text-sm text-dabel-black/60">Write and ship working code</div>
                      </div>
                      <div className={getAnimationClass("animate-pulse")}>
                        <div className="w-2 h-2 rounded-full bg-dabel-lilac" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pl-6">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-dabel-lilac to-dabel-peach" />
                      <div className="text-xs text-dabel-black/40 font-mono">→</div>
                    </div>

                    <div className="flex items-center gap-4 opacity-50">
                      <div className="w-12 h-12 rounded-xl bg-dabel-peach flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                        <svg className="w-6 h-6 text-dabel-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-dabel-black">Review</div>
                        <div className="text-sm text-dabel-black/60">Test and validate results</div>
                      </div>
                      <Clock className="w-5 h-5 text-dabel-black/30" />
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 top-1/4 transform -translate-y-1/2 hidden lg:block">
                  <div className={`w-20 h-20 rounded-2xl bg-dabel-mint shadow-lg flex items-center justify-center ${getAnimationClass("animate-float")} border-2 border-white transition-transform hover:scale-110`}>
                    <span className="text-2xl">📋</span>
                  </div>
                  <div className="text-xs font-medium text-center mt-2 text-dabel-black">Coordinator</div>
                </div>

                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <div className={`w-20 h-20 rounded-2xl bg-dabel-lilac shadow-lg flex items-center justify-center ${getAnimationClass("animate-float-slow")} border-2 border-white transition-transform hover:scale-110`}>
                    <span className="text-2xl">💻</span>
                  </div>
                  <div className="text-xs font-medium text-center mt-2 text-dabel-black">Builder</div>
                </div>

                <div className="absolute -right-4 bottom-8 hidden lg:block">
                  <div className={`w-20 h-20 rounded-2xl bg-dabel-peach shadow-lg flex items-center justify-center ${getAnimationClass("animate-float")} border-2 border-white transition-transform hover:scale-110`}>
                    <span className="text-2xl">✓</span>
                  </div>
                  <div className="text-xs font-medium text-center mt-2 text-dabel-black">Reviewer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Preview */}
        <section id="product" className="py-20 px-4" ref={productAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 ${
              productAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2 className="font-bold text-4xl md:text-5xl text-dabel-black mb-4">
                One workspace. Many capabilities.
              </h2>
              <p className="text-xl text-dabel-black/60 max-w-2xl mx-auto">
                From conversations to code, Dabel brings AI tools together in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z", bg: "dabel-lilac/20", color: "dabel-lilac", title: "AI Chat", desc: "Explore ideas and get clear answers. Start conversations that help you think through problems and discover solutions." },
                { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", bg: "dabel-lilac/20", color: "dabel-lilac", title: "Code Studio", desc: "Work with your project in one place. Write, test, and refine code with AI assistance that understands your codebase." },
                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", bg: "dabel-mint/40", color: "dabel-black", title: "Agent Teams", desc: "Plan, build, and review with specialist roles. Let coordinated AI agents handle different parts of your workflow." },
                { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", bg: "dabel-peach/40", color: "dabel-black", title: "Business Agents", desc: "Research and business workflows. Gather information, analyze data, and prepare reports with specialized agents.", planned: true }
              ].map((card, i) => (
                <div 
                  key={card.title}
                  className={`dabel-glass rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${
                    productAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: productAnimation.isVisible ? `${i * 100}ms` : undefined }}
                >
                  {card.planned && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-dabel-peach text-xs font-semibold text-dabel-black">
                      Planned
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl bg-${card.bg} flex items-center justify-center mb-6`}>
                    <svg className={`w-6 h-6 text-${card.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-2xl text-dabel-black mb-3">{card.title}</h3>
                  <p className="text-dabel-black/60 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Workflow */}
        <section id="workflow" className="py-20 px-4 bg-gradient-to-b from-transparent to-dabel-black/5" ref={workflowAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-5xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${
              workflowAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2 className="font-bold text-4xl md:text-5xl text-dabel-black mb-4">
                See how agents work together
              </h2>
              <p className="text-dabel-black/60 text-lg">
                Illustrative product preview — not a live task
              </p>
            </div>

            <div className={`dabel-glass rounded-2xl p-2 mb-6 inline-flex gap-2 w-full md:w-auto transition-all duration-700 ${
              workflowAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {["plan", "build", "review"].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-medium transition-all capitalize ${
                    activeTab === tab
                      ? tab === "plan" ? "bg-dabel-mint text-dabel-black shadow-sm" :
                        tab === "build" ? "bg-dabel-lilac text-white shadow-sm" :
                        "bg-dabel-peach text-dabel-black shadow-sm"
                      : "text-dabel-black/60 hover:text-dabel-black"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className={`dabel-glass rounded-2xl p-8 md:p-12 transition-all duration-700 ${
              workflowAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {activeTab === "plan" && (
                <div className={`space-y-6 ${getAnimationClass("animate-fade-in")}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-dabel-mint flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-dabel-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-dabel-black mb-2">Coordinator Agent</h3>
                      <p className="text-dabel-black/60 leading-relaxed mb-4">
                        Breaks down your request into clear steps, assigns priorities, and determines what needs to happen first.
                      </p>
                      <div className="bg-white/50 rounded-lg p-4 font-mono text-sm text-dabel-black/80 space-y-2">
                        <div>→ Analyzing request...</div>
                        <div>→ Creating task breakdown</div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-dabel-mint/30 rounded-full overflow-hidden">
                            <div className={`w-3/4 h-full bg-dabel-mint ${getAnimationClass("animate-pulse")}`} />
                          </div>
                          <span className="text-xs">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "build" && (
                <div className={`space-y-6 ${getAnimationClass("animate-fade-in")}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-dabel-lilac flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-dabel-black mb-2">Builder Agent</h3>
                      <p className="text-dabel-black/60 leading-relaxed mb-4">
                        Takes the plan and writes working code, following best practices and your project's conventions.
                      </p>
                      <div className="bg-white/50 rounded-lg p-4 font-mono text-sm text-dabel-black/80 space-y-2">
                        <div>→ Writing component files...</div>
                        <div>→ Adding type definitions</div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-dabel-lilac/30 rounded-full overflow-hidden">
                            <div className={`w-1/2 h-full bg-dabel-lilac ${getAnimationClass("animate-pulse")}`} />
                          </div>
                          <span className="text-xs">50%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "review" && (
                <div className={`space-y-6 ${getAnimationClass("animate-fade-in")}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-dabel-peach flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-dabel-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-dabel-black mb-2">Reviewer Agent</h3>
                      <p className="text-dabel-black/60 leading-relaxed mb-4">
                        Tests the output, checks for issues, and suggests improvements before delivering the final result.
                      </p>
                      <div className="bg-white/50 rounded-lg p-4 font-mono text-sm text-dabel-black/80 space-y-2">
                        <div>→ Running tests...</div>
                        <div>→ Checking code quality</div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-dabel-peach/30 rounded-full overflow-hidden">
                            <div className={`w-1/4 h-full bg-dabel-peach ${getAnimationClass("animate-pulse")}`} />
                          </div>
                          <span className="text-xs">25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 px-4" ref={waitlistAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-3xl mx-auto">
            <div className={`dabel-glass rounded-3xl p-8 md:p-12 text-center transition-all duration-700 ${
              waitlistAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2 className="font-bold text-4xl md:text-5xl text-dabel-black mb-4">
                Be first to build with Dabel.
              </h2>
              <p className="text-lg text-dabel-black/60 mb-8">
                We'll email you about beta access and launch updates.
              </p>

              {!success ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 px-6 rounded-full border-2 border-dabel-black/10 bg-white focus:border-dabel-lilac transition-colors"
                      disabled={loading}
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-dabel-black text-white hover:bg-dabel-black/90 rounded-full px-8 h-12 font-semibold transition-all hover:scale-105"
                    >
                      {loading ? "Joining..." : "Get early access"}
                    </Button>
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
                      {error}
                    </p>
                  )}
                </form>
              ) : (
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 rounded-full bg-dabel-mint flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-dabel-black" />
                  </div>
                  <p className="text-lg font-semibold text-dabel-black">
                    You're on the list!
                  </p>
                  <p className="text-dabel-black/60">
                    We'll reach out when beta access is ready.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-gradient-to-b from-dabel-black/5 to-transparent">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-bold text-4xl md:text-5xl text-dabel-black mb-12 text-center">
              Frequently asked questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="what" className="dabel-glass rounded-2xl px-6 border-none transition-all hover:shadow-lg">
                <AccordionTrigger className="text-left font-semibold text-lg text-dabel-black hover:no-underline py-6">
                  What is Dabel AI?
                </AccordionTrigger>
                <AccordionContent className="text-dabel-black/70 leading-relaxed pb-6">
                  Dabel AI is a workspace for AI-powered work. It combines AI chat, code assistance, and coordinated agent teams
                  in one platform. Think of it as your command center for getting things done with AI help.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="when" className="dabel-glass rounded-2xl px-6 border-none transition-all hover:shadow-lg">
                <AccordionTrigger className="text-left font-semibold text-lg text-dabel-black hover:no-underline py-6">
                  When can I try it?
                </AccordionTrigger>
                <AccordionContent className="text-dabel-black/70 leading-relaxed pb-6">
                  We're preparing for private beta. Join the waitlist to be notified when early access begins. Launch timing
                  will be announced as we get closer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="who" className="dabel-glass rounded-2xl px-6 border-none transition-all hover:shadow-lg">
                <AccordionTrigger className="text-left font-semibold text-lg text-dabel-black hover:no-underline py-6">
                  Who is it for?
                </AccordionTrigger>
                <AccordionContent className="text-dabel-black/70 leading-relaxed pb-6">
                  Dabel is built for developers, freelancers, and independent builders who want AI assistance that goes beyond
                  simple chat. If you're shipping projects and want AI tools that work together, Dabel is for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="desktop" className="dabel-glass rounded-2xl px-6 border-none transition-all hover:shadow-lg">
                <AccordionTrigger className="text-left font-semibold text-lg text-dabel-black hover:no-underline py-6">
                  Will there be a desktop app?
                </AccordionTrigger>
                <AccordionContent className="text-dabel-black/70 leading-relaxed pb-6">
                  We're starting with a web application that works across devices. Desktop-specific features may come later
                  based on user feedback and needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="access" className="dabel-glass rounded-2xl px-6 border-none transition-all hover:shadow-lg">
                <AccordionTrigger className="text-left font-semibold text-lg text-dabel-black hover:no-underline py-6">
                  How will early access work?
                </AccordionTrigger>
                <AccordionContent className="text-dabel-black/70 leading-relaxed pb-6">
                  Waitlist members will receive invitations in waves during the private beta period. We'll start with a smaller
                  group and expand based on feedback and system stability. Everyone on the waitlist will get access.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-dabel-black/10">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center md:items-start gap-4">
                <DabelLogo />
                <p className="text-sm text-dabel-black/60 max-w-xs text-center md:text-left">
                  Your workspace for AI chat, coding, and coordinated agents.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-dabel-black/60">
                  <Mail className="w-4 h-4" />
                  <span>
                    We'll only email you about Dabel updates and beta access. We don't share your email.
                  </span>
                </div>
                <p className="text-sm text-dabel-black/40">
                  © 2026 Dabel AI. Product in development.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
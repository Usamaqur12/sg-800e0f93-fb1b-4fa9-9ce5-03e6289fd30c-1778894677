import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { DabelLogo } from "@/components/DabelLogo";
import Link from "next/link";
import { Menu, X, Check, Clock, ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"plan" | "build" | "review">("plan");
  const prefersReducedMotion = useReducedMotion();

  const heroAnimation = useScrollAnimation(0.1);
  const sceneAnimation = useScrollAnimation(0.2);
  const productsAnimation = useScrollAnimation(0.2);
  const workflowAnimation = useScrollAnimation(0.2);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const getAnimationClass = (className: string) => {
    return prefersReducedMotion ? "" : className;
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
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setEmail("");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const tabContent = {
    plan: {
      role: "Coordinator",
      description: "Organize tasks, set priorities, and define the project structure before work begins.",
      example: "Breaking down 'Build a landing page' into wireframes, content needs, and technical requirements.",
      progress: 30,
      color: "dabel-mint",
    },
    build: {
      role: "Builder",
      description: "Write working code, implement features, and ship functional components.",
      example: "Creating responsive components, setting up routing, and integrating the design system.",
      progress: 60,
      color: "dabel-lilac",
    },
    review: {
      role: "Reviewer",
      description: "Test functionality, check quality, and validate that requirements are met.",
      example: "Running tests, checking accessibility, and ensuring cross-browser compatibility.",
      progress: 90,
      color: "dabel-peach",
    },
  };

  return (
    <>
      <SEO
        title="Dabel AI - Your ideas. Your AI team."
        description="Meet your next workspace for AI chat, coding, and coordinated agents. Join the waitlist for early access."
        image="/og-image.png"
      />

      <div className="min-h-screen bg-dabel-bg text-dabel-black">
        {/* Navigation */}
        <nav className="fixed top-4 left-0 right-0 z-50 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="dabel-glass rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
              <DabelLogo linkTo="/" />

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors"
                >
                  Product
                </button>
                <button
                  onClick={() => scrollToSection("workflow")}
                  className="text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors"
                >
                  Agent Teams
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm font-medium text-dabel-black/70 hover:text-dabel-black transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("waitlist")}
                  className="bg-dabel-black text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-dabel-black/90 transition-all shadow-md hover:shadow-lg"
                >
                  Join the waitlist
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-dabel-black/5 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-dabel-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute top-24 left-4 right-4 dabel-glass rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-left text-base font-medium text-dabel-black/70 hover:text-dabel-black transition-colors py-2"
                >
                  Product
                </button>
                <button
                  onClick={() => scrollToSection("workflow")}
                  className="text-left text-base font-medium text-dabel-black/70 hover:text-dabel-black transition-colors py-2"
                >
                  Agent Teams
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-base font-medium text-dabel-black/70 hover:text-dabel-black transition-colors py-2"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("waitlist")}
                  className="bg-dabel-black text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-dabel-black/90 transition-all shadow-md text-center mt-2"
                >
                  Join the waitlist
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4" ref={heroAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-5xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 bg-dabel-lilac/10 border border-dabel-lilac/20 px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
              heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <div className={`w-2 h-2 rounded-full bg-dabel-lilac ${getAnimationClass("animate-pulse")}`} />
              <span className="text-sm font-medium text-dabel-black">Private beta coming soon</span>
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${
              heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Your ideas.
              <br />
              <span className="text-dabel-lilac">Your AI team.</span>
            </h1>

            <p className={`text-xl md:text-2xl text-dabel-black/60 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Meet your next workspace for AI chat, coding, and coordinated agents. Join the waitlist for early access.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="bg-dabel-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-dabel-black/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Join the waitlist
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="bg-white/60 backdrop-blur-sm border border-dabel-black/10 text-dabel-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/80 transition-all shadow-md hover:shadow-lg"
              >
                Explore the vision
              </button>
            </div>
          </div>
        </section>

        {/* Animated Robot Scene */}
        <section className="py-20 px-4" ref={sceneAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-5xl mx-auto">
            <div className={`relative min-h-[600px] dabel-glass rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-700 ${
              sceneAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* Background ambient elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 right-10 w-64 h-64 bg-dabel-mint rounded-full blur-3xl opacity-30 ${getAnimationClass("animate-float")}`} />
                <div className={`absolute bottom-20 left-10 w-64 h-64 bg-dabel-peach rounded-full blur-3xl opacity-30 ${getAnimationClass("animate-float-slow")}`} />
                <div className={`absolute top-1/2 left-1/4 w-48 h-48 bg-dabel-lilac rounded-full blur-3xl opacity-20 ${getAnimationClass("animate-float")}`} />
              </div>

              {/* Central workflow panel */}
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
                    {/* Plan Step */}
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

                    {/* Build Step */}
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

                    {/* Review Step */}
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

                {/* Mint Coordinator Robot - Left */}
                <div className="absolute -left-12 top-1/4 transform -translate-y-1/2 hidden lg:block">
                  <div className={`${getAnimationClass("animate-float")} transition-transform hover:scale-110`}>
                    {/* Robot body */}
                    <div className="relative w-24 h-32">
                      {/* Head */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-dabel-mint to-emerald-200 shadow-lg border-2 border-white flex items-center justify-center">
                        {/* Eyes */}
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-dabel-black" />
                          <div className="w-2 h-2 rounded-full bg-dabel-black" />
                        </div>
                        {/* Antenna */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-dabel-black rounded-full" />
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-dabel-mint border-2 border-dabel-black" />
                      </div>
                      {/* Body */}
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-20 h-16 rounded-xl bg-gradient-to-br from-dabel-mint to-emerald-200 shadow-lg border-2 border-white">
                        {/* Planning board icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-8 h-8 text-dabel-black/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-center mt-2 text-dabel-black">Coordinator</div>
                  </div>
                </div>

                {/* Lilac Builder Robot - Right */}
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <div className={`${getAnimationClass("animate-float-slow")} transition-transform hover:scale-110`}>
                    {/* Robot body */}
                    <div className="relative w-24 h-32">
                      {/* Head */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-dabel-lilac to-purple-400 shadow-lg border-2 border-white flex items-center justify-center">
                        {/* Eyes with glow */}
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-white" />
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        {/* Antenna */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-white/80 rounded-full" />
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-dabel-lilac border-2 border-white" />
                      </div>
                      {/* Body */}
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-20 h-16 rounded-xl bg-gradient-to-br from-dabel-lilac to-purple-400 shadow-lg border-2 border-white">
                        {/* Laptop icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-center mt-2 text-dabel-black">Builder</div>
                  </div>
                </div>

                {/* Peach Reviewer Robot - Bottom Right */}
                <div className="absolute -right-6 bottom-4 hidden lg:block">
                  <div className={`${getAnimationClass("animate-float")} transition-transform hover:scale-110`} style={{ animationDelay: "1s" }}>
                    {/* Robot body */}
                    <div className="relative w-24 h-32">
                      {/* Head */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-dabel-peach to-orange-200 shadow-lg border-2 border-white flex items-center justify-center">
                        {/* Eyes */}
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-dabel-black" />
                          <div className="w-2 h-2 rounded-full bg-dabel-black" />
                        </div>
                        {/* Antenna */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-dabel-black rounded-full" />
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-dabel-peach border-2 border-dabel-black" />
                      </div>
                      {/* Body */}
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-20 h-16 rounded-xl bg-gradient-to-br from-dabel-peach to-orange-200 shadow-lg border-2 border-white">
                        {/* Review checkmark icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-8 h-8 text-dabel-black/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-center mt-2 text-dabel-black">Reviewer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Preview */}
        <section id="products" className="py-20 px-4" ref={productsAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${
              productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What you'll build with</h2>
              <p className="text-xl text-dabel-black/60 max-w-2xl mx-auto">
                Four specialized tools designed to work together seamlessly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* AI Chat */}
              <div className={`dabel-glass rounded-2xl p-8 hover:shadow-xl transition-all group ${
                productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`} style={{ transitionDelay: "100ms" }}>
                <div className="w-14 h-14 rounded-xl bg-dabel-lilac/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-dabel-lilac" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">AI Chat</h3>
                <p className="text-dabel-black/60 leading-relaxed">
                  Explore ideas and get clear answers. Natural conversation that understands your context.
                </p>
              </div>

              {/* Code Studio */}
              <div className={`dabel-glass rounded-2xl p-8 hover:shadow-xl transition-all group ${
                productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`} style={{ transitionDelay: "200ms" }}>
                <div className="w-14 h-14 rounded-xl bg-dabel-lilac/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-dabel-lilac" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Code Studio</h3>
                <p className="text-dabel-black/60 leading-relaxed">
                  Work with your project in one place. Edit, test, and deploy without context switching.
                </p>
              </div>

              {/* Agent Teams */}
              <div className={`dabel-glass rounded-2xl p-8 hover:shadow-xl transition-all group ${
                productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`} style={{ transitionDelay: "300ms" }}>
                <div className="w-14 h-14 rounded-xl bg-dabel-mint/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Agent Teams</h3>
                <p className="text-dabel-black/60 leading-relaxed">
                  Plan, build, and review with specialist roles. Coordinated agents that handle complex projects.
                </p>
              </div>

              {/* Business Agents */}
              <div className={`dabel-glass rounded-2xl p-8 hover:shadow-xl transition-all group relative ${
                productsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`} style={{ transitionDelay: "400ms" }}>
                <div className="absolute top-6 right-6">
                  <span className="bg-dabel-peach/30 text-dabel-black text-xs font-semibold px-3 py-1 rounded-full border border-dabel-black/10">
                    Planned
                  </span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-dabel-peach/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Business Agents</h3>
                <p className="text-dabel-black/60 leading-relaxed">
                  Research and business workflows. Market analysis, competitive intel, and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Workflow */}
        <section id="workflow" className="py-20 px-4" ref={workflowAnimation.ref as React.RefObject<HTMLElement>}>
          <div className="container max-w-5xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${
              workflowAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How agent teams work</h2>
              <p className="text-xl text-dabel-black/60 max-w-2xl mx-auto">
                See how specialized agents coordinate to handle complex projects.
              </p>
              <p className="text-sm text-dabel-black/40 mt-4">Illustrative product preview</p>
            </div>

            <div className={`dabel-glass rounded-2xl p-8 transition-all duration-700 ${
              workflowAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* Tabs */}
              <div className="flex gap-2 mb-8 overflow-x-auto">
                {(["plan", "build", "review"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? "bg-dabel-black text-white shadow-lg"
                        : "bg-white/50 text-dabel-black/60 hover:bg-white/70"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-dabel-black/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-${tabContent[activeTab].color} flex items-center justify-center`}>
                      <svg className="w-5 h-5 text-dabel-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{tabContent[activeTab].role}</h4>
                      <p className="text-sm text-dabel-black/60">{tabContent[activeTab].description}</p>
                    </div>
                  </div>

                  <div className="bg-dabel-black/5 rounded-lg p-4 mb-4">
                    <p className="text-sm text-dabel-black/70 italic">
                      "{tabContent[activeTab].example}"
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-dabel-black/60">Progress</span>
                      <span className="font-semibold">{tabContent[activeTab].progress}%</span>
                    </div>
                    <div className="h-2 bg-dabel-black/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${tabContent[activeTab].color} transition-all duration-500`}
                        style={{ width: `${tabContent[activeTab].progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-20 px-4">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Be first to build with Dabel.</h2>
            <p className="text-xl text-dabel-black/60 mb-10">
              We'll email you about beta access and launch updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={loading || success}
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-dabel-black/10 focus:border-dabel-lilac focus:outline-none transition-colors bg-white/60 backdrop-blur-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || success}
                  className="bg-dabel-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-dabel-black/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? "Joining..." : success ? "Joined!" : "Get early access"}
                </button>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-dabel-mint border border-emerald-200 rounded-xl p-4 text-emerald-900 text-sm">
                  🎉 You're on the list! Check your email for confirmation.
                </div>
              )}
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-4">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is Dabel AI?",
                  a: "Dabel AI is an upcoming workspace that combines AI chat, code editing, and coordinated agent teams. It's designed for developers, freelancers, and independent builders who want AI assistance that understands their entire project context."
                },
                {
                  q: "When can I try it?",
                  a: "We're currently in private beta development. Launch timing will be announced to waitlist members first. Join the waitlist above to get early access when we're ready."
                },
                {
                  q: "Who is it for?",
                  a: "Dabel is built for developers, freelancers, and independent builders worldwide who want intelligent AI assistance for their projects. Whether you're building web apps, mobile apps, or working on complex technical projects, Dabel provides the tools you need."
                },
                {
                  q: "Will there be a desktop app?",
                  a: "We're focused on delivering the best web experience first. Desktop and mobile apps may follow based on user feedback and demand during beta."
                },
                {
                  q: "How will early access work?",
                  a: "Waitlist members will receive priority invites to the private beta. We'll start with a small group and gradually expand access based on feedback and system capacity."
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="dabel-glass rounded-xl overflow-hidden group"
                >
                  <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between hover:bg-white/30 transition-colors">
                    <span className="font-semibold text-lg">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-dabel-black/70 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-dabel-black/10">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <DabelLogo className="mb-4" />
                <p className="text-sm text-dabel-black/60 leading-relaxed">
                  Your next workspace for AI chat, coding, and coordinated agents.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => scrollToSection("products")}
                      className="text-sm text-dabel-black/60 hover:text-dabel-black transition-colors"
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("workflow")}
                      className="text-sm text-dabel-black/60 hover:text-dabel-black transition-colors"
                    >
                      Agent Teams
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="text-sm text-dabel-black/60 hover:text-dabel-black transition-colors"
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => scrollToSection("waitlist")}
                      className="text-sm text-dabel-black/60 hover:text-dabel-black transition-colors"
                    >
                      Join Waitlist
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-dabel-black/10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-dabel-black/50">
                  © {new Date().getFullYear()} Dabel AI. All rights reserved.
                </p>
                <p className="text-xs text-dabel-black/40 max-w-md text-center sm:text-right">
                  When you join our waitlist, we'll only use your email to send you product updates and beta invitations.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
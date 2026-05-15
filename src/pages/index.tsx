import { SEO } from "@/components/SEO";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/themed-button";
import { Sparkles, ShoppingBag, Star } from "lucide-react";

export default function Home() {
  const products = [
    {
      title: "Canva Editable Template",
      description: "Professional, easy-to-customize Canva templates for social media, presentations, and marketing materials. Perfect for content creators and businesses.",
      price: "$250",
      priceNote: "one-time payment",
      image: "/canva-template.png",
      features: [
        { text: "50+ professionally designed templates" },
        { text: "Fully customizable in Canva" },
        { text: "Commercial use license included" },
        { text: "Instagram, Facebook, and LinkedIn formats" },
        { text: "Lifetime access and updates" },
      ],
      purchaseUrl: "https://whop.com/joined/dabel-solutions/products/canva-editable-template/",
    },
    {
      title: "Ultimate Creator Mega Pack",
      description: "Everything you need to elevate your content creation. 40,000+ premium assets including Lightroom presets, Canva templates, Instagram Reels templates, and more.",
      price: "$678",
      priceNote: "per month",
      image: "/creator-mega-pack.png",
      features: [
        { text: "40,000+ premium digital assets" },
        { text: "Professional Lightroom presets" },
        { text: "Instagram Reels and Stories templates" },
        { text: "Canva templates for all platforms" },
        { text: "Video editing assets and transitions" },
        { text: "Commercial license for client work" },
      ],
      purchaseUrl: "https://whop.com/joined/dabel-solutions/products/ultimate-creator-mega-pack-40-000-assets-bundle-lightroom-canva-reels-and-more/",
    },
  ];

  return (
    <>
      <SEO
        title="DABEL Solutions - Premium Digital Assets for Creators"
        description="Professional design templates, creator tools, and premium digital assets. Elevate your content with our curated collection."
        image="/og-image.png"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Premium Digital Resources</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Elevate Your Creative Work
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Professional-grade templates, presets, and assets designed for content creators, 
              designers, and marketers who demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="group">
                <ShoppingBag className="w-5 h-5" />
                Browse Products
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated digital assets to accelerate your creative workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed">
                "These templates have transformed my content creation workflow. 
                The quality is outstanding and the variety is incredible. Worth every penny!"
              </blockquote>
              
              <div>
                <p className="font-semibold text-foreground">Sarah Martinez</p>
                <p className="text-sm text-muted-foreground">Content Creator & Designer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border mt-20">
          <div className="container py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  DABEL Solutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Premium digital assets for creative professionals
                </p>
              </div>
              
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} DABEL Solutions. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
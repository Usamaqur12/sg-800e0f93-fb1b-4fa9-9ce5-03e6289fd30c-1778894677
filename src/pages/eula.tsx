import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Shield, AlertTriangle, Scale, Mail } from "lucide-react";
import Link from "next/link";

export default function EULA() {
  return (
    <>
      <SEO
        title="End User License Agreement (EULA) - DABEL AI"
        description="DABEL AI End User License Agreement. Review the terms and conditions for using our digital products and services."
      />
      
      <Header />
        
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-sm text-accent font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Legal Agreement
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              End User License Agreement (EULA)
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: <span className="text-accent font-semibold">February 21, 2026</span>
            </p>
          </div>

          {/* Introduction */}
          <div className="glass-effect rounded-2xl p-8 mb-8 border border-border/50">
            <p className="text-muted-foreground leading-relaxed mb-4">
              This End User License Agreement ("Agreement") is entered into between <span className="text-foreground font-semibold">DABEL AI</span> ("Company," "we," "our," or "us") and the purchaser or user ("User," "you," or "your") of any DABEL AI digital products or services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By purchasing, downloading, accessing, or using any DABEL AI products, you agree to comply with this Agreement.
            </p>
          </div>

          {/* Section 1: License Grant */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  1. License Grant
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DABEL AI grants you a <span className="text-foreground font-semibold">limited, non-exclusive, non-transferable, revocable license</span> to access and use purchased digital products for personal or approved business use only.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This license does not transfer ownership of any product or intellectual property.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Permitted Use */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  2. Permitted Use
                </h2>
                <p className="text-muted-foreground mb-4">Users may:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Use products for personal projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Use products for client work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Customize templates and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>Create content using purchased assets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Prohibited Use */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-red-500/20 bg-red-500/5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  3. Prohibited Use
                </h2>
                <p className="text-muted-foreground mb-4">Users may NOT:</p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Resell, redistribute, or share products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Upload products to marketplaces or public platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Share download links or access credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Claim ownership of DABEL AI materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Copy products for resale purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Use products for illegal, abusive, or fraudulent activities</span>
                  </li>
                </ul>
                <p className="text-red-400 font-semibold">
                  Unauthorized use may result in immediate termination of access and possible legal action.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Intellectual Property */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All products, prompts, templates, branding, graphics, files, and resources remain the <span className="text-foreground font-semibold">intellectual property of DABEL AI</span> and are protected by applicable copyright and intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Purchasing a product grants usage rights only and does not transfer ownership.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Product Delivery */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              5. Product Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Products are delivered digitally through downloadable files, secure links, cloud folders, member-only pages, or PDF access documents depending on the purchased product.
            </p>
          </div>

          {/* Section 6: No Warranty */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              6. No Warranty
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All products and services are provided <span className="text-foreground font-semibold">"as-is"</span> and <span className="text-foreground font-semibold">"as-available"</span> without warranties of any kind, express or implied.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              DABEL AI does not guarantee specific business, marketing, social media, or financial results from the use of any products or resources.
            </p>
          </div>

          {/* Section 7: Limitation of Liability */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4">DABEL AI shall not be liable for:</p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Business losses</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Revenue loss</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Platform account issues</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Data loss</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Technical interruptions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Misuse of products</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Indirect or consequential damages</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Users are solely responsible for how they use purchased materials.
            </p>
          </div>

          {/* Section 8: Termination */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              8. Termination
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate access to any user who violates this Agreement or engages in unauthorized activities.
            </p>
          </div>

          {/* Section 9: Changes to Agreement */}
          <div className="glass-effect rounded-2xl p-8 mb-6 border border-border/50">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              9. Changes to Agreement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              DABEL AI reserves the right to modify this Agreement at any time. Continued use of products after updates constitutes acceptance of revised terms.
            </p>
          </div>

          {/* Section 10: Contact Information */}
          <div className="glass-effect rounded-2xl p-8 mb-8 border border-accent/20 bg-accent/5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                  10. Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  For questions regarding this Agreement, contact:
                </p>
                <a
                  href="mailto:support@dabel.ai"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@dabel.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
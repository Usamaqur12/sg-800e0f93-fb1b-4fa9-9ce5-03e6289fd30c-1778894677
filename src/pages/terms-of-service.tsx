import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, CreditCard, Package, AlertTriangle, Scale, Mail } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service - DABEL AI"
        description="Terms of Service for DABEL AI digital products and services"
      />
      <Header />
      
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-sm text-accent font-semibold mb-6">
              <FileText className="w-4 h-4" />
              Legal Document
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: <span className="text-accent font-semibold">February 20, 2026</span>
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              {/* Section 1 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-accent" />
                  </div>
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By purchasing, accessing, or using any products or services provided by DABEL AI, you agree to comply with and be bound by these Terms of Service ("Terms"). Please read them carefully before using our services.
                </p>
              </section>

              {/* Section 2 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  2. Digital Products & Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DABEL AI provides digital products and resources related to AI and content creation, including but not limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>AI prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Reels templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Social media content templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Digital marketing resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>AI automation materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Editable design/template files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Educational and downloadable digital products</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All products are delivered digitally and do not include physical shipping.
                </p>
              </section>

              {/* Section 3 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  3. Usage Rules & Access
                </h2>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Personal Use Only</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All purchases are licensed for personal or approved business use only. Reselling, redistributing, sharing, leaking, or uploading products to other platforms is strictly prohibited.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">No Unauthorized Sharing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users may not share download links, account access, files, prompts, templates, or any premium material with third parties.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Security & Abuse</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Any fraudulent activity, unauthorized access attempts, misuse of products, or abuse of services may result in immediate suspension or permanent termination without refund.
                </p>
              </section>

              {/* Section 4 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-accent" />
                  </div>
                  4. Payments, Subscriptions & Refund Policy
                </h2>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Digital Product Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Due to the nature of digital products, all sales are final.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Once files, templates, prompts, or other digital resources are delivered or accessed, refunds, cancellations, or exchanges are not permitted.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Duplicate Payments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accidental duplicate charges may qualify for a refund after verification.
                </p>
              </section>

              {/* Section 5 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  5. Product Delivery
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Customers receive instant digital access after successful payment. Products may be delivered through downloadable files, secure access links, cloud storage folders, member-only pages, or PDF access documents depending on the purchased product.
                </p>
              </section>

              {/* Section 6 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  6. Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, prompts, templates, branding, graphics, files, resources, and materials available through DABEL AI remain the intellectual property of DABEL AI or its licensors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">Users may not:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Copy or reproduce products for resale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Claim ownership of our materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Distribute or publish products without permission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Modify and resell products as their own</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Unauthorized use may result in legal action.
                </p>
              </section>

              {/* Section 7 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-accent" />
                  </div>
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All products and services are provided on an "as-is" and "as-available" basis without warranties of any kind.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">DABEL AI is not responsible for:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Business losses or revenue loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Social media account issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Platform policy violations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Technical interruptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Data loss or misuse of products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Results obtained from using AI prompts, templates, or strategies</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Users are responsible for how they use purchased materials.
                </p>
              </section>

              {/* Section 8 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-accent" />
                  </div>
                  8. Termination of Access
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend, restrict, or permanently terminate access to any user who violates these Terms or engages in harmful, abusive, fraudulent, or unauthorized activities.
                </p>
              </section>

              {/* Section 9 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  9. Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We respect user privacy and do not sell personal information to third parties. However, users agree that basic information required for purchases, support, or account management may be collected and used for operational purposes.
                </p>
              </section>

              {/* Section 10 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Scale className="w-4 h-4 text-accent" />
                  </div>
                  10. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and interpreted under the laws of the jurisdiction in which DABEL AI operates. Any disputes shall be handled through the appropriate legal authorities of that jurisdiction.
                </p>
              </section>

              {/* Section 11 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-accent" />
                  </div>
                  11. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DABEL AI reserves the right to update or modify these Terms at any time. Continued use of our products or services after updates constitutes acceptance of the revised Terms.
                </p>
              </section>

              {/* Section 12 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-accent" />
                  </div>
                  12. No Guarantees
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DABEL AI does not guarantee specific business, financial, social media, or marketing results from the use of its products or resources.
                </p>
              </section>

              {/* Section 13 */}
              <section className="glass-effect rounded-xl p-8 border border-border/50">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  13. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For support, business inquiries, or questions regarding these Terms, please contact DABEL AI through our official support channels at{" "}
                  <a href="mailto:support@dabelai.com" className="text-accent hover:underline">
                    support@dabelai.com
                  </a>
                </p>
              </section>
            </div>

            {/* Footer Note */}
            <div className="mt-12 p-6 rounded-xl bg-accent/5 border border-accent/20">
              <p className="text-sm text-muted-foreground text-center">
                By using DABEL AI products and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
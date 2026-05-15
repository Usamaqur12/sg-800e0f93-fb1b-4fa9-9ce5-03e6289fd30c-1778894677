import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service - dabel ai"
        description="Read our terms of service and usage policies."
      />
      
      <div className="min-h-screen bg-background">
        <div className="container py-12 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="prose prose-slate max-w-none">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> February 21, 2026
            </p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By purchasing, accessing, or using any products or services provided by DABEL AI, you agree to comply with and be bound by these Terms of Service ("Terms"). Please read them carefully before using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                2. Digital Products & Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DABEL AI provides digital products and resources related to AI and content creation, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>AI prompts</li>
                <li>Reels templates</li>
                <li>Social media content templates</li>
                <li>Digital marketing resources</li>
                <li>AI automation materials</li>
                <li>Editable design/template files</li>
                <li>Educational and downloadable digital products</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All products are delivered digitally and do not include physical shipping.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                3. Usage Rules & Access
              </h2>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6">Personal Use Only</h3>
              <p className="text-muted-foreground leading-relaxed">
                All purchases are licensed for personal or approved business use only. Reselling, redistributing, sharing, leaking, or uploading products to other platforms is strictly prohibited.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6">No Unauthorized Sharing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users may not share download links, account access, files, prompts, templates, or any premium material with third parties.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6">Security & Abuse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Any fraudulent activity, unauthorized access attempts, misuse of products, or abuse of services may result in immediate suspension or permanent termination without refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                4. Payments, Subscriptions & Refund Policy
              </h2>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6">Digital Product Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Due to the nature of digital products, all sales are final.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Once files, templates, prompts, or other digital resources are delivered or accessed, refunds, cancellations, or exchanges are not permitted.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6">Duplicate Payments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accidental duplicate charges may qualify for a refund after verification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                5. Intellectual Property Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, prompts, templates, branding, graphics, files, resources, and materials available through DABEL AI remain the intellectual property of DABEL AI or its licensors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Copy or reproduce products for resale</li>
                <li>Claim ownership of our materials</li>
                <li>Distribute or publish products without permission</li>
                <li>Modify and resell products as their own</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Unauthorized use may result in legal action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All products and services are provided on an "as-is" and "as-available" basis without warranties of any kind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DABEL AI is not responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Business losses or revenue loss</li>
                <li>Social media account issues</li>
                <li>Platform policy violations</li>
                <li>Technical interruptions</li>
                <li>Data loss or misuse of products</li>
                <li>Results obtained from using AI prompts, templates, or strategies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Users are responsible for how they use purchased materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                7. Termination of Access
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend, restrict, or permanently terminate access to any user who violates these Terms or engages in harmful, abusive, fraudulent, or unauthorized activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                8. Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We respect user privacy and do not sell personal information to third parties. However, users agree that basic information required for purchases, support, or account management may be collected and used for operational purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                9. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and interpreted under the laws of the jurisdiction in which DABEL AI operates. Any disputes shall be handled through the appropriate legal authorities of that jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                DABEL AI reserves the right to update or modify these Terms at any time. Continued use of our products or services after updates constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                11. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For support, business inquiries, or questions regarding these Terms, please contact DABEL AI through our official support channels at{" "}
                <a href="mailto:support@dabel.ai" className="text-accent hover:underline">
                  support@dabel.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
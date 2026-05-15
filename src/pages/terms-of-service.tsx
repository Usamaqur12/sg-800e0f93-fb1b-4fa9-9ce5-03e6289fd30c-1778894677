import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service - DABEL Solutions"
        description="Read our Terms of Service to understand the rules and regulations for using DABEL Solutions digital products and services."
      />
      
      <div className="min-h-screen bg-background">
        <div className="container py-12 md:py-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <p className="text-muted-foreground mb-0">
                  Last updated: May 15, 2026
                </p>
              </div>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using DABEL Solutions services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. Service Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DABEL Solutions provides digital products including Canva templates, design assets, Lightroom presets, and other creative resources. All products are delivered digitally upon purchase.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. Account and Subscription
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                  <li>Subscriptions automatically renew unless canceled before the renewal date.</li>
                  <li>You can cancel your subscription at any time through your account settings or by contacting support@dabel.ai</li>
                  <li>Access to services is provided immediately upon successful payment.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. License and Usage Rights
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All digital products come with a commercial use license for client work.</li>
                  <li>You may not resell, redistribute, or share access to our digital products.</li>
                  <li>You may use our templates and assets in your own projects and for client work.</li>
                  <li>Redistribution or resale of our products in their original form is strictly prohibited.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Payment Terms
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All prices are listed in USD and are subject to change with notice.</li>
                  <li>Payment is processed securely through our payment partners.</li>
                  <li>You agree to provide accurate and complete billing information.</li>
                  <li>Failed payments may result in suspension of access until payment is resolved.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Cancellation and Refunds
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Please refer to our <Link href="/refund-policy" className="text-accent hover:underline">Refund Policy</Link> for complete information about cancellations and refund eligibility.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  7. Modifications to Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  DABEL Solutions reserves the right to modify, add, or remove features from our services. We may add or remove tools within the same subscription price without additional charges or refunds.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  8. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at <a href="mailto:support@dabel.ai" className="text-accent hover:underline">support@dabel.ai</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
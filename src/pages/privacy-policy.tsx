import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - dabel ai"
        description="Learn how we collect, use, and protect your personal information."
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
              Privacy Policy
            </h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> February 21, 2026
            </p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you access our services, including digital products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Account & Contact Information:</strong> Email, username, payment details (processed via secure payment provider).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Usage Data:</strong> Interaction logs, IP addresses, support inquiries, and activity within our product.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Service Delivery:</strong> To authenticate users, grant access, process payments, and manage subscriptions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Customer Support:</strong> Address queries, bug reports, and handle refund requests (duplicate payments only).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Product Improvement:</strong> Understand usage patterns to refine our services and user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Communications:</strong> Send updates about service, policy changes, or announcements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                4. Data Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell or rent your personal data. We may share information with:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Service Providers:</strong> Payment processors, hosting services, analytics tools—and only for the purpose outlined.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Legal Authorities:</strong> If required to respond to legal obligations or protect our rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement standard security measures to protect your personal data. However, no system is completely secure—use our services at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                6. Retention & Deletion
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data only as necessary to provide services, comply with law, or resolve issues. You may request access, correction, or deletion of your data by contacting us. We will respond within a reasonable timeframe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your jurisdiction, you may have rights including: access to data, correction, deletion, data portability, and restriction of certain processing. Contact us for these requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                8. Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy over time. Any changes will be indicated via a revised Effective Date. Continued use of our services after updates implies your agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                9. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or requests, please reach out through our official support channels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
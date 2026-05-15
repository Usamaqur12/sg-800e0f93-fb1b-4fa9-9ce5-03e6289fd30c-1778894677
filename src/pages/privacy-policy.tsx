import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - DABEL Solutions"
        description="Learn how DABEL Solutions collects, uses, and protects your personal information when using our digital products and services."
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <p className="text-muted-foreground mb-0">
                  Last updated: May 15, 2026
                </p>
              </div>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Account information (name, email address, password)</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Communication preferences and support inquiries</li>
                  <li>Usage data and analytics to improve our services</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and send transaction notifications</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Communicate with you about products, services, and promotional offers</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer service. These providers are bound by confidentiality agreements.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct or update inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent where we rely on consent to process your information</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  7. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  9. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@dabel.ai" className="text-accent hover:underline">support@dabel.ai</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
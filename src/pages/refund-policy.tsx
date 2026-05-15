import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="Refund Policy - dabel ai"
        description="Learn about our refund policy and eligibility criteria."
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
              Refund Policy
            </h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> February 21, 2026
            </p>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. All Sales Final
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Once access is granted to our services, all sales are considered final. Refunds will not be provided under normal circumstances. The only exception is for accidental duplicate payments.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Refund Eligibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Refunds may only be issued in the following situations:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Duplicate payments made accidentally (excluding gateway/transaction charges).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Non-Refundable Situations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Refunds will NOT be issued under the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Change of mind after access has been granted.</li>
                <li>Services left unused (access delivery constitutes fulfillment of the service).</li>
                <li>Forgotten subscription cancellations before renewal (responsibility of the user).</li>
                <li>Tools added or removed within the same subscription price (no refund for removed tools, no additional charge for new tools).</li>
                <li>Any situation not explicitly covered in the Refund Eligibility section.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Refund Request Process
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you believe you are eligible for a refund, you must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Contact our support team via official channels.</li>
                <li>Provide complete payment details and a clear explanation of your refund request.</li>
                <li>Wait for review (typically within 3–7 business days).</li>
                <li>If your request is approved, the refund will be issued to your original payment method.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Refund Timeline
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Approved refunds may take 3–7 working days to reflect in your account, depending on your bank or payment provider. Please note that gateway/transaction charges may not be refunded in cases of duplicate payments.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Contact for Refund Requests
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To request a refund (if eligible) or for questions regarding this policy, please contact us via our official support channels. Ensure you include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Payment transaction details</li>
                <li>Reason for refund request</li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-4 mt-6">
                <p className="text-foreground font-medium">
                  ✅ By purchasing and using our services, you agree to comply with this Refund Policy, along with our Server Rules and Terms of Service.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
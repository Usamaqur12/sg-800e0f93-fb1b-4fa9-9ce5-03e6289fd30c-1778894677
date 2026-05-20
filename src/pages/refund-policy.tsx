import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, XCircle, Clock, Mail } from "lucide-react";

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="Refund Policy - DABEL AI"
        description="Learn about DABEL AI's refund policy and eligibility criteria for digital products."
      />
      
      <Header />

      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-sm text-accent font-semibold mb-6">
              <FileText className="w-4 h-4" />
              Legal Document
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Refund Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: <span className="text-accent font-semibold">February 21, 2026</span>
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    1. All Sales Final
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Once access is granted to our services, all sales are considered final. Refunds will not be provided under normal circumstances. The only exception is for accidental duplicate payments.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    2. Refund Eligibility
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Refunds may only be issued in the following situations:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Duplicate payments made accidentally (excluding gateway/transaction charges).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    3. Non-Refundable Situations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Refunds will NOT be issued under the following circumstances:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Change of mind after access has been granted.</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Services left unused (access delivery constitutes fulfillment of the service).</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Forgotten subscription cancellations before renewal (responsibility of the user).</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Tools added or removed within the same subscription price (no refund for removed tools, no additional charge for new tools).</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Any situation not explicitly covered in the Refund Eligibility section.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    4. Refund Request Process
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you believe you are eligible for a refund, you must:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Contact our support team via official channels.</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Provide complete payment details and a clear explanation of your refund request.</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Wait for review (typically within 3–7 business days).</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>If your request is approved, the refund will be issued to your original payment method.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    5. Refund Timeline
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Approved refunds may take 3–7 working days to reflect in your account, depending on your bank or payment provider. Please note that gateway/transaction charges may not be refunded in cases of duplicate payments.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    6. Contact for Refund Requests
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To request a refund (if eligible) or for questions regarding this policy, please contact us via our official support channels. Ensure you include:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Payment transaction details</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Reason for refund request</span>
                    </li>
                  </ul>
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                    <p className="text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-green-500 inline mr-2" />
                      By purchasing and using our services, you agree to comply with this Refund Policy and our Terms of Service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
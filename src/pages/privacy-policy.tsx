import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Eye, Lock, Database, UserCheck, Cookie, Bell, Trash2, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - dabel ai"
        description="Learn how we collect, use, and protect your personal information."
      />
      
      <Header />

      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container py-12 max-w-4xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-sm text-accent font-semibold mb-6">
              <FileText className="w-4 h-4" />
              Legal Document
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: <span className="text-accent font-semibold">May 20, 2026</span>
            </p>
          </div>

          {/* Introduction */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              At <span className="text-accent font-semibold">DABEL AI</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, products, and services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using DABEL AI's services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect information that you provide directly to us and information automatically collected when you use our services.
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-14">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Personal Information:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Name, email address, and contact details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Payment information (processed securely through third-party payment processors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Account credentials and preferences</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>IP address, browser type, and device information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Usage data, including pages visited and actions taken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the collected information for various purposes to provide and improve our services.
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-14 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>To process transactions and deliver purchased products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>To provide customer support and respond to inquiries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>To send important updates, notifications, and promotional materials (with your consent)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>To improve our website, products, and user experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>To detect and prevent fraud, abuse, and security issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>To comply with legal obligations and enforce our terms</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Information Sharing */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information to third parties. We may share your information in the following circumstances:
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-14 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Service Providers:</strong> With trusted third-party vendors who assist in operating our services (e.g., payment processors, hosting providers)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Legal Compliance:</strong> When required by law, court order, or governmental authority</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">With Your Consent:</strong> When you explicitly authorize us to share your information</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Data Security */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-red-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </div>

            <div className="ml-14 space-y-3 text-muted-foreground">
              <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.</p>
            </div>
          </div>

          {/* Section 5: Cookies and Tracking */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance user experience and analyze website performance.
                </p>
              </div>
            </div>

            <div className="ml-14 space-y-3">
              <p className="text-muted-foreground">
                You can control cookie settings through your browser preferences. However, disabling cookies may limit certain features of our website.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Third-party services (e.g., analytics tools) may also use cookies. Please review their privacy policies for more information.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Your Rights */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  6. Your Privacy Rights
                </h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-14 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Correction:</strong> Request corrections to inaccurate or incomplete data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Opt-Out:</strong> Unsubscribe from marketing communications at any time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span><strong className="text-foreground">Data Portability:</strong> Request a copy of your data in a structured format</span>
              </li>
            </ul>

            <div className="ml-14 mt-4 bg-accent/5 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                To exercise these rights, please contact us at <a href="mailto:support@dabel.ai" className="text-accent hover:text-accent/80">support@dabel.ai</a>
              </p>
            </div>
          </div>

          {/* Section 7: Third-Party Links */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  7. Third-Party Links
                </h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Children's Privacy */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  8. Children's Privacy
                </h2>
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Data Retention */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Trash2 className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  9. Data Retention
                </h2>
                <p className="text-muted-foreground">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10: Changes to Privacy Policy */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-teal-400" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by:
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-14 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Posting the updated policy on our website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Sending an email notification (for major changes)</span>
              </li>
            </ul>

            <div className="ml-14 mt-4 bg-accent/5 border border-accent/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Continued use of our services after changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Section 11: Contact Us */}
          <div className="glass-effect rounded-2xl p-8 border border-border/50 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  11. Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
              </div>
            </div>

            <div className="ml-14">
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <p className="text-foreground font-semibold mb-2">DABEL AI</p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:support@dabel.ai" className="text-accent hover:text-accent/80">support@dabel.ai</a>
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  We aim to respond to all inquiries within 24-48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="glass-effect rounded-2xl p-6 border border-border/50 bg-accent/5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Your privacy matters.</strong> We are committed to transparency and protecting your personal information. If you have any concerns about how we handle your data, please don't hesitate to reach out to our support team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
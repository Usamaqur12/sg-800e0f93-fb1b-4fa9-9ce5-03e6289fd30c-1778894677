import Link from "next/link";
import { Shield, Zap, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F1419] border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-foreground text-lg">DABEL</span>
              <span className="font-semibold text-accent text-lg">Solutions</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium AI creator assets, templates, and digital resources for creators, marketers, and businesses.
            </p>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/eula"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  EULA
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-accent" />
              <h3 className="font-semibold text-foreground">Support</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email Support</p>
                <a
                  href="mailto:support@dabel.ai"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  support@dabel.ai
                </a>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-card/30 border border-border/30">
                <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  We typically respond within <span className="text-foreground font-medium">24 hours</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2026 DABEL AI. All Rights Reserved.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Instant Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
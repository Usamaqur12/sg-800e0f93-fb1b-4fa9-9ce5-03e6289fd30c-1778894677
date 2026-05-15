import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/themed-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, X, LogIn, Sparkles, ShoppingBag, Star } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80">
      {/* Sliding Announcement Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2.5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-slide-left">
          <div className="flex items-center gap-8 px-4">
            <span className="flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4" />
              Limited Time: 40% off Creator Mega Pack
            </span>
            <span className="flex items-center gap-2 font-medium">
              <ShoppingBag className="w-4 h-4" />
              New: 10,000+ Canva Templates Added
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Star className="w-4 h-4" />
              Join 50,000+ Happy Creators
            </span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-8 px-4">
            <span className="flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4" />
              Limited Time: 40% off Creator Mega Pack
            </span>
            <span className="flex items-center gap-2 font-medium">
              <ShoppingBag className="w-4 h-4" />
              New: 10,000+ Canva Templates Added
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Star className="w-4 h-4" />
              Join 50,000+ Happy Creators
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent/10">
                    <Globe className="w-4 h-4" />
                    <span>{selectedLanguage.flag}</span>
                    <span className="hidden lg:inline">{selectedLanguage.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang)}
                      className="cursor-pointer"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Login Button */}
              <Button
                variant="accent"
                size="sm"
                onClick={() => window.open("https://whop.com/joined/dabel-solutions/", "_blank")}
                className="gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/50">
              <div className="flex flex-col space-y-3">
                {/* Language Selector Mobile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{selectedLanguage.flag}</span>
                      <span>{selectedLanguage.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-full">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setMobileMenuOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        <span className="mr-2">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Login Button Mobile */}
                <Button
                  variant="accent"
                  size="sm"
                  onClick={() => {
                    window.open("https://whop.com/joined/dabel-solutions/", "_blank");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
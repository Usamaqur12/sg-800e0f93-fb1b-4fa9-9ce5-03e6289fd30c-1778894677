import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/themed-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, LogIn, Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground overflow-hidden">
        <div className="animate-slide-left whitespace-nowrap py-2">
          <span className="inline-block px-4">
            🎉 Limited Time Offer: Get 20% off on all products! Use code: SAVE20
          </span>
          <span className="inline-block px-4">
            ⚡ New: Ultimate Creator Mega Pack now available with 40,000+ assets!
          </span>
          <span className="inline-block px-4">
            🎉 Limited Time Offer: Get 20% off on all products! Use code: SAVE20
          </span>
          <span className="inline-block px-4">
            ⚡ New: Ultimate Creator Mega Pack now available with 40,000+ assets!
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
                DABEL Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
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
              className="md:hidden p-2 text-foreground hover:text-accent"
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
            <div className="md:hidden py-4 border-t border-border">
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
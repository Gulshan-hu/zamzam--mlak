"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { House, Menu, X, User, LogOut, LayoutDashboard, Home as HomeIcon, Building2, Map, Sparkles, BarChart3 } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Button } from "@/components/ui/Button";

// Mock auth state - will be replaced with real auth
type UserType = { name: string; avatar: string | null } | null;
const MOCK_USER: UserType = null; // Set to { name: "User", avatar: null } to test logged-in state

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const user = MOCK_USER;

  const navLinks = [
    { href: "/", label: "Ana Səhifə", icon: HomeIcon },
    { href: "/listings", label: "Elanlar", icon: Building2 },
    { href: "/map", label: "Xəritə", icon: Map },
    { href: "/ai-search", label: "AI Axtarış", icon: Sparkles },
    { href: "/ai-analysis", label: "AI Analiz", icon: BarChart3 },
  ];

  const userMenuItems = [
    { href: "/dashboard", label: "İdarə Paneli", icon: LayoutDashboard },
    { href: "/my-listings", label: "Mənim Elanlarım", icon: Building2 },
    { href: "/messages", label: "Mesajlar", icon: HomeIcon },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <House className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">ZamZam Əmlak</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-primary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Auth Buttons / User Menu */}
          {user ? (
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary-hover"
              >
                {user.avatar ? (
                  <Image src={user.avatar} alt={user.name} width={40} height={40} className="rounded-full" />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 top-12 w-48 rounded-xl border border-border bg-surface shadow-lg">
                  <div className="p-1">
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-text-primary transition-colors hover:bg-surface-muted"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    ))}
                    <hr className="my-1 border-border" />
                    <button
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-error transition-colors hover:bg-surface-muted"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        // Handle logout
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Çıxış
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm">
                Daxil ol
              </Button>
              <Button variant="primary" size="sm">
                Qeydiyyat
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-primary transition-all hover:bg-surface-muted md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-72 border-l border-border bg-surface p-6 shadow-xl animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Language Toggle */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-medium text-text-muted">Dil seçin</span>
              <LanguageToggle />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-primary transition-colors hover:bg-surface-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Auth Buttons */}
            {!user && (
              <div className="mt-6 space-y-2">
                <Button variant="ghost" className="w-full">
                  Daxil ol
                </Button>
                <Button variant="primary" className="w-full">
                  Qeydiyyat
                </Button>
              </div>
            )}

            {/* Mobile User Menu */}
            {user && (
              <div className="mt-6 space-y-2">
                {userMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-primary transition-colors hover:bg-surface-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
                <button
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-error transition-colors hover:bg-surface-muted"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Handle logout
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Çıxış
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { House, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/listings", label: "Elanlar" },
    { href: "/map", label: "Xəritə" },
    { href: "/ai-search", label: "AI Axtarış" },
    { href: "/ai-analysis", label: "AI Analiz" },
    { href: "/add-listing", label: "Elan Əlavə Et" },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <House className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">ZamZam Əmlak</span>
            </div>
            <p className="text-sm text-text-muted">
              Azərbaycanda müasir daşınmaz əmlak platforması. AI texnologiyası ilə ən yaxşı əmlakı tapın.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Sürətli Keçidlər</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Əlaqə</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <p>Bakı: Yasamal, Zivərbəy Əhmədbəyov küç. 42</p>
                  <p className="mt-1">Qusar: Heydər Əliyev küç. 198</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:zamcapital.biznes@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  zamcapital.biznes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-text-muted">
            © {currentYear} ZamZam Əmlak. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
}

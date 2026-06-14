"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type ContactCardProps = {
  phone: string | null;
  email: string | null;
  listingTitle: string;
};

export function ContactCard({ phone, email, listingTitle }: ContactCardProps) {
  const [showPhone, setShowPhone] = useState(false);

  const maskPhone = (phone: string): string => {
    // +994 50 123-45-67 -> +994 50 ***-**-67
    const cleaned = phone.replace(/\s/g, "");
    if (cleaned.length >= 12) {
      return `${cleaned.slice(0, 7)} ***-**-${cleaned.slice(-2)}`;
    }
    return phone;
  };

  const formatPhone = (phone: string): string => {
    // +994501234567 -> +994 50 123-45-67
    const cleaned = phone.replace(/\s/g, "");
    if (cleaned.startsWith("+994") && cleaned.length === 13) {
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}-${cleaned.slice(11)}`;
    }
    return phone;
  };

  const getWhatsAppLink = (phone: string, title: string): string => {
    const cleaned = phone.replace(/\D/g, "");
    const message = encodeURIComponent(
      `Salam! "${title}" elanı ilə maraqlanıram.`
    );
    return `https://wa.me/${cleaned}?text=${message}`;
  };

  if (!phone && !email) {
    return null;
  }

  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">
        Əlaqə məlumatları
      </h3>

      <div className="space-y-3">
        {/* Phone */}
        {phone && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-text-muted">
                Telefon
              </span>
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary-hover"
              >
                {showPhone ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Gizlət
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Göstər
                  </>
                )}
              </button>
            </div>
            <div className="mb-3 rounded-lg bg-surface-muted p-3 text-center font-mono text-lg font-medium text-text-primary">
              {showPhone ? formatPhone(phone) : maskPhone(formatPhone(phone))}
            </div>

            {showPhone && (
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => (window.location.href = `tel:${phone}`)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Zəng et
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() =>
                    window.open(getWhatsAppLink(phone, listingTitle), "_blank")
                  }
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Email */}
        {email && (
          <div>
            <span className="mb-2 block text-sm font-medium text-text-muted">
              Email
            </span>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 rounded-lg bg-surface-muted p-3 text-text-primary transition-colors hover:bg-muted"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="break-all">{email}</span>
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}

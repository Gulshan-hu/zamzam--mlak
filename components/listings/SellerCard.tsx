import Image from "next/image";
import { Building2, User, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { User as UserType, Agency } from "@/lib/types";

type SellerCardProps = {
  user: UserType;
  agency: Agency | null;
};

export function SellerCard({ user, agency }: SellerCardProps) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">
        {agency ? "Agentlik" : "Satıcı"}
      </h3>

      {agency ? (
        <div className="space-y-4">
          {/* Agency Logo */}
          {agency.logo && (
            <div className="flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-border">
                <Image
                  src={agency.logo}
                  alt={agency.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Agency Name */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-semibold text-text-primary">
                {agency.name}
              </h4>
              {agency.isVerified && (
                <ShieldCheck className="h-5 w-5 text-success" />
              )}
            </div>
          </div>

          {/* Agency Info */}
          {agency.description && (
            <p className="text-sm text-text-muted">{agency.description}</p>
          )}

          {agency.address && (
            <div className="text-sm text-text-muted">
              <span className="font-medium">Ünvan:</span> {agency.address}
            </div>
          )}

          {agency.phone && (
            <div className="text-sm text-text-muted">
              <span className="font-medium">Telefon:</span> {agency.phone}
            </div>
          )}

          {agency.email && (
            <div className="text-sm text-text-muted">
              <span className="font-medium">Email:</span> {agency.email}
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-medium text-text-primary">{user.name}</p>
            <p className="text-sm text-text-muted">Fərdi satıcı</p>
          </div>
        </div>
      )}
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Check,
  Copy,


  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CONTACT_INFO = {
  email: "darmawandoni6@gmail.com",
  phone: "+62 857-6129-8781",
  whatsapp: "https://wa.me/6285761298781",
  linkedin: "https://www.linkedin.com/in/doni-darmawan/",
  github: "https://github.com/darmawandoni6",
  location: "Depok, West Java, Indonesia",
};

export function Contact() {
  const { t } = useTranslation();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="kontak"
      className="py-20 bg-gradient-to-br from-emerald-50 to-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <Card className="p-6 flex flex-col items-center text-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Mail className="size-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                {t("contact.email.label")}
              </p>
              <p className="text-sm text-muted-foreground font-mono break-all">
                {CONTACT_INFO.email}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyEmail}
              className="gap-1.5"
            >
              {copiedEmail ? (
                <Check className="size-3.5 text-primary" />
              ) : (
                <Copy className="size-3.5" />
              )}
              {copiedEmail ? t("contact.copied") : t("contact.copy")}
            </Button>
          </Card>

          {/* WhatsApp Card */}
          <Card className="p-6 flex flex-col items-center text-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Phone className="size-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                {t("contact.whatsapp.label")}
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                {CONTACT_INFO.phone}
              </p>
            </div>
            <Button size="sm" asChild>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contact.whatsapp.cta")}
              </a>
            </Button>
          </Card>

          {/* Location & Social Card */}
          <Card className="p-6 flex flex-col items-center text-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">
                {t("contact.location.label")}
              </p>
              <p className="text-sm text-muted-foreground">
                {CONTACT_INFO.location}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn SVG */}
                  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  {/* GitHub SVG */}
                  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Send Message CTA */}
        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <a href={`mailto:${CONTACT_INFO.email}`}>
              <Mail className="size-4" />
              {t("contact.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

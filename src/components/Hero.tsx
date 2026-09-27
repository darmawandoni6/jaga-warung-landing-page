import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { FlaskConical, Gift, LayoutGrid, Play } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t("hero.headline")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("hero.subhead")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://drive.google.com/file/d/1vu52UE5iF-GonfScht5pMF0OKyHdjhXd/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.cta.download")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowVideo(true)}
              >
                <Play className="size-4" />
                {t("hero.cta.demo")}
              </Button>
            </div>
          </div>

          <div className="relative">
            <PhoneMockup
              src="/images/Screenshot_1790493365.png"
              alt="Jaga Warung Dashboard"
              maxWidth="300px"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <FlaskConical className="size-8 text-primary mx-auto mb-2" />
            <div className="text-xl font-bold text-foreground">
              {t("hero.stats.beta")}
            </div>
          </Card>
          <Card className="p-6 text-center">
            <Gift className="size-8 text-primary mx-auto mb-2" />
            <div className="text-xl font-bold text-foreground">
              {t("hero.stats.free")}
            </div>
          </Card>
          <Card className="p-6 text-center">
            <LayoutGrid className="size-8 text-primary mx-auto mb-2" />
            <div className="text-xl font-bold text-foreground">
              {t("hero.stats.features")}
            </div>
          </Card>
        </div>
      </div>

      {/* Video Dialog (shadcn/ui) */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-3xl p-4 bg-transparent border-none">
          <DialogTitle className="sr-only">{t("hero.cta.demo")}</DialogTitle>
          <DialogDescription className="sr-only">
            Jaga Warung demo video
          </DialogDescription>
          <video
            src="/demo/demo.webm"
            controls
            autoPlay
            className="max-h-[80vh] w-[20rem] mx-auto rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  );
}

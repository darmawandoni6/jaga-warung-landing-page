import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export function Screenshots() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const trackRef = useRef<HTMLDivElement>(null);

  const screens = [
    {
      id: "dashboard",
      path: "/images/Screenshot_1790492030.png",
      titleKey: "Dashboard",
      description: "App design - Dashboard home screen",
    },
    {
      id: "pos",
      path: "/images/Screenshot_1790493365.png",
      titleKey: "POS",
      description: "App design - POS/Cashier transaction screen",
    },
    {
      id: "inventory",
      path: "/images/Screenshot_1790493371.png",
      titleKey: "Inventory",
      description: "App design - Inventory/Stock management screen",
    },
    {
      id: "debt",
      path: "/images/Screenshot_1790493375.png",
      titleKey: "Debt",
      description: "App design - Debt tracking screen",
    },
    {
      id: "reports",
      path: "/images/Screenshot_1790493379.png",
      titleKey: "Reports",
      description: "App design - Financial reports screen",
    },
    {
      id: "products",
      path: "/images/Screenshot_1790493384.png",
      titleKey: "Products",
      description: "App design - Product list screen",
    },
    {
      id: "sales",
      path: "/images/Screenshot_1790493389.png",
      titleKey: "Sales",
      description: "App design - Sales history screen",
    },
    {
      id: "settings",
      path: "/images/Screenshot_1790493406.png",
      titleKey: "Settings",
      description: "App design - Settings/Profile screen",
    },
  ];

  useEffect(() => {
    const updatePerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setPerPage(1);
      else if (width < 768) setPerPage(2);
      else if (width < 1024) setPerPage(3);
      else setPerPage(4);
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const maxIndex = Math.max(0, screens.length - perPage);

  const next = () => setActive((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActive((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            {t("screenshots.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {t("screenshots.subtitle")}
          </p>
        </div>

        {/* Slider with Side Controls */}
        <div className="relative flex items-center gap-4">
          {/* Left Arrow + Dots */}
          <div className="flex flex-col items-center gap-3 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={active === 0}
              className="rounded-full shadow-sm bg-background"
            >
              <ChevronLeft className="size-4" />
            </Button>
            {perPage > 1 && maxIndex > 0 && (
              <div className="flex flex-col gap-1.5">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all ${
                      active === i
                        ? "h-6 w-1.5 bg-primary"
                        : "h-1.5 w-1.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Slide Track */}
          <div className="overflow-hidden flex-1" ref={trackRef}>
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${active * (100 / perPage)}%)`,
              }}
            >
              {screens.map((s) => (
                <div
                  key={s.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / perPage}%` }}
                >
                  {/* Android Phone Mockup */}
                  <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                    {/* Phone Frame */}
                    <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-xl">
                      {/* Side Buttons */}
                      <div className="absolute right-[-3px] top-24 w-1 h-12 bg-slate-800 rounded-l-sm" />
                      <div className="absolute right-[-3px] top-40 w-1 h-16 bg-slate-800 rounded-l-sm" />
                      <div className="absolute left-[-3px] top-20 w-1 h-8 bg-slate-800 rounded-r-sm" />
                      <div className="absolute left-[-3px] top-32 w-1 h-12 bg-slate-800 rounded-r-sm" />

                      {/* Screen */}
                      <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex items-center justify-between px-6 text-white text-xs">
                          <span>9:41</span>
                          {/* Punch Hole Camera */}
                          <div className="absolute left-1/2 top-1.5 -translate-x-1/2 w-2 h-2 bg-slate-800 rounded-full" />
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-2 border border-white/50 rounded-sm" />
                            <div className="w-4 h-2 bg-white/80 rounded-sm" />
                          </div>
                        </div>

                        {/* Screenshot Content */}
                        <img
                          src={s.path}
                          alt={s.description}
                          className="w-full h-full object-cover"
                        />

                        {/* Home Indicator */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/80 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Caption Below Phone */}
                  <CardContent className="p-4 text-center">
                    <Badge variant="secondary" className="mb-2">
                      {s.titleKey}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {s.description}
                    </p>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow + Dots (mobile fallback) */}
          <div className="flex flex-col items-center gap-3 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={active >= maxIndex}
              className="rounded-full shadow-sm bg-background"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator (bottom for mobile) */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

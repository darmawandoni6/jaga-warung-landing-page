import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "/images/icon.png";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#fitur", label: t("nav.features") },
    { href: "#harga", label: t("nav.pricing") },
    { href: "#faq", label: t("nav.faq") },
  ];

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <div className="bg-primary rounded-lg">
            <img src={logo} alt="Jaga Warung" className="size-8" />
          </div>
          Jaga Warung
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => changeLang("id")}
            className={i18n.language === "id" ? "text-primary" : ""}
          >
            ID
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => changeLang("en")}
            className={i18n.language === "en" ? "text-primary" : ""}
          >
            EN
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => changeLang("id")}
                  className={i18n.language === "id" ? "text-primary" : ""}
                >
                  ID
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => changeLang("en")}
                  className={i18n.language === "en" ? "text-primary" : ""}
                >
                  EN
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

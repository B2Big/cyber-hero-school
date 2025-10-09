import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 gap-2 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary/20"
    >
      <Globe className="w-4 h-4" />
      <span className="font-bold">{i18n.language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;

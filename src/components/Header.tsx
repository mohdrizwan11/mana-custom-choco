import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/mana custom choco logo.jpg";

const Header = () => {
  const whatsappNumber = "+919392215575";
  
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in Mana Custom Choco wrappers.`, '_blank');
  };

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Mana Custom Choco" className="h-16 w-16 object-contain rounded-full shadow-lg" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Mana Custom Choco</h1>
              <p className="text-sm text-muted-foreground">Premium Custom Chocolate Wrappers</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="whatsapp"
              size="sm"
              onClick={openWhatsApp}
              className="animate-pulse-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
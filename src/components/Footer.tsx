import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const whatsappNumber = "+919392215575";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Mana Custom Choco</h3>
            <p className="text-primary-foreground/80">
              Premium custom chocolate wrappers for birthdays, Rakhi, and all special occasions. 
              Transform ordinary chocolates into extraordinary personalized gifts.
            </p>
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
              Order Now
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="#gallery" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Design Gallery
              </a>
              <a href="#pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>Custom Wrapper Designs</div>
              <div>Bulk Orders (Min. 100 pcs)</div>
              <div>Express Delivery</div>
              <div>Design Consultation</div>
              <div>Corporate Branding</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-primary-foreground/80">{whatsappNumber}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+91 9392215575</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">nanimaddimsetti99@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <div className="text-primary-foreground/80">
                  <div>Penugonda,</div>
                  <div>West Godavari - 534320</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80">
              © {currentYear} Mana Custom Choco. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
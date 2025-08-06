import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Package, Users } from "lucide-react";
import heroImage from "@/assets/hero-chocolate.jpg";

const Hero = () => {
  const whatsappNumber = "+919392215575";
  
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order for Mana Custom Choco wrappers.`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium Chocolate Wrappers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium
            <span className="block animate-shimmer bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_100%] bg-clip-text text-transparent">
              Custom Chocolate Wrappers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            🎉 Celebrate with Mana Custom Choco! Premium quality chocolate wrappers for birthdays, Rakhi & special occasions. 
            <span className="text-accent font-semibold"> Minimum order: 100 pieces</span> with pricing starting at ₹5 per wrapper.
            <br />
            <span className="text-yellow-300 font-semibold">✨ 10,000+ satisfied customers • 5+ years trusted service • 99.8% satisfaction rate</span>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center space-x-2 text-accent">
              <Star className="h-6 w-6" />
              <span className="text-lg font-semibold">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Package className="h-6 w-6" />
              <span className="text-lg font-semibold">100+ Designs</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Users className="h-6 w-6" />
              <span className="text-lg font-semibold">1000+ Happy Customers</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={openWhatsApp}
              className="special-offer"
            >
              <MessageCircle className="h-6 w-6" />
              Order via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Gallery
            </Button>
          </div>
          
          {/* Special Offer Banner */}
          <div className="mt-8 p-4 bg-accent/20 backdrop-blur-sm rounded-lg border border-accent/30 animate-pulse-gold">
            <p className="text-lg font-semibold text-accent">
              🎉 Limited Time: Get 10% OFF on orders above 300 pieces! + FREE samples for first-time customers
            </p>
            <p className="text-sm text-white/80 mt-1">
              ⏰ Offer valid until month end • 🚚 Express delivery available • 💯 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default Hero;
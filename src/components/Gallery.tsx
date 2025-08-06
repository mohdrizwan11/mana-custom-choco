import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Gallery = () => {
  const whatsappNumber = "+919392215575";
  
  const designs = [
    {
      id: 1,
      name: "Happy Birthday Design",
      image: "/lovable-uploads/a610e813-9e2d-4d5f-9f8c-ba56e2777bd8.png",
      price: "₹5",
      tier: "Basic",
      description: "Personalized birthday chocolate wrapper with photo and colorful design elements.",
      features: ["Photo customization", "Colorful design", "Birthday theme"]
    },
    {
      id: 2,
      name: "Elegant Birthday Wrapper",
      image: "/lovable-uploads/fdfad534-57b7-4de3-953b-1ae0aefe291c.png",
      price: "₹5",
      tier: "Basic",
      description: "Clean and elegant birthday design with personal photo and sophisticated layout.",
      features: ["Personal photo", "Clean design", "Professional look"]
    },
    {
      id: 3,
      name: "Bulk Birthday Collection",
      image: "/lovable-uploads/030060d8-e3d3-4f3b-aaf2-0452ced0d7ce.png",
      price: "₹5",
      tier: "Basic",
      description: "Perfect for bulk orders with consistent design and personalization options.",
      features: ["Bulk ordering", "Consistent design", "Cost effective"]
    },
    {
      id: 4,
      name: "Premium Birthday Special",
      image: "/lovable-uploads/d7a9a6b1-1efd-4a65-ad64-472b818f526c.png",
      price: "₹12",
      tier: "Standard",
      description: "Enhanced birthday wrapper with detailed message and premium finishing.",
      features: ["Detailed messaging", "Premium quality", "Enhanced design"]
    },
    {
      id: 5,
      name: "Traditional Birthday Style",
      image: "/lovable-uploads/bd6a6b66-7f89-4097-91dd-3be05670794d.png",
      price: "₹12",
      tier: "Standard",
      description: "Beautiful traditional design perfect for cultural celebrations and special occasions.",
      features: ["Traditional design", "Cultural appeal", "Special occasions"]
    },
    {
      id: 6,
      name: "Celebration Special",
      image: "/lovable-uploads/7ac5214b-7df0-426a-a396-1ed3eb56d2c3.png",
      price: "₹12",
      tier: "Standard",
      description: "Vibrant celebration wrapper with floral elements and personalized touches.",
      features: ["Floral elements", "Vibrant colors", "Personalized"]
    },
    {
      id: 7,
      name: "Custom Photo Deluxe",
      image: "/lovable-uploads/be7bdbcb-fa94-46ab-a3cf-58846b89e2e9.png",
      price: "₹20",
      tier: "Premium",
      description: "Deluxe design with high-quality photo printing and gradient backgrounds.",
      features: ["High-quality photo", "Gradient background", "Deluxe finish"]
    },
    {
      id: 8,
      name: "Blue Theme Premium",
      image: "/lovable-uploads/f5740a4d-bcc2-48ae-8356-67c4e090bdd4.png",
      price: "₹20",
      tier: "Premium",
      description: "Premium blue-themed wrapper with professional photo placement and detailed messaging.",
      features: ["Blue theme", "Professional layout", "Detailed messaging"]
    },
    {
      id: 9,
      name: "Gradient Special Edition",
      image: "/lovable-uploads/51df5856-b8e7-4765-814a-8ff974cb0cdd.png",
      price: "₹20",
      tier: "Premium",
      description: "Special edition wrapper with beautiful gradient effects and personalized content.",
      features: ["Gradient effects", "Special edition", "Personalized content"]
    },
    {
      id: 10,
      name: "Classic Blue Premium",
      image: "/lovable-uploads/432a2f0e-2e7d-49f2-a466-16f5cd25e9e9.png",
      price: "₹20",
      tier: "Premium",
      description: "Classic blue design with premium quality printing and detailed personalization.",
      features: ["Classic design", "Premium printing", "Detailed personalization"]
    }
  ];
  
  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Premium": return "bg-accent text-accent-foreground";
      case "Standard": return "bg-secondary text-secondary-foreground";
      case "Basic": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };
  
  const orderDesign = (designName: string, price: string) => {
    const message = `Hi! I'm interested in ordering the "${designName}" chocolate wrapper design (${price} per piece).

Please provide:
- Bulk pricing for 100, 500, 1000 pieces
- Delivery timeline
- Payment options
- Any current discounts
- Design customization options

Thank you!`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Design Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🎉 Celebrate with Mana Custom Choco! Choose from our collection of personalized chocolate wrapper designs 
            perfect for birthdays, Rakhi, and all special occasions. Each design can be customized with your photos and personal touches.
          </p>
        </div>
        
        {/* Basic Tier Designs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Basic Designs - ₹5 per piece</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designs.filter(design => design.tier === "Basic").map((design, index) => (
              <Card 
                key={design.id} 
                className="group hover-lift bg-card border-border overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTierColor(design.tier)}>
                      {design.tier}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className="bg-background/90 text-primary font-bold text-lg"
                    >
                      {design.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-primary text-sm">#{design.id}. {design.name}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm">
                    {design.description}
                  </p>
                  
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground text-sm">Features:</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                      {design.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl btn-rainbow-pulse relative overflow-hidden group text-sm"
                      onClick={() => orderDesign(design.name, design.price)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <MessageCircle className="h-4 w-4 mr-2 animate-bounce relative z-10" />
                      <span className="relative z-10">🚀 Order Now!</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Standard Tier Designs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Standard Designs - ₹12 per piece</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designs.filter(design => design.tier === "Standard").map((design, index) => (
              <Card 
                key={design.id} 
                className="group hover-lift bg-card border-border overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTierColor(design.tier)}>
                      {design.tier}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className="bg-accent text-accent-foreground border-accent shadow-lg animate-pulse-gold font-bold text-lg"
                    >
                      {design.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-primary text-sm">#{design.id}. {design.name}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm">
                    {design.description}
                  </p>
                  
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground text-sm">Features:</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                      {design.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl btn-rainbow-pulse relative overflow-hidden group text-sm"
                      onClick={() => orderDesign(design.name, design.price)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <MessageCircle className="h-4 w-4 mr-2 animate-bounce relative z-10" />
                      <span className="relative z-10">🚀 Order Now!</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Tier Designs */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Premium Designs - ₹20 per piece</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designs.filter(design => design.tier === "Premium").map((design, index) => (
              <Card 
                key={design.id} 
                className="group hover-lift bg-card border-border overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTierColor(design.tier)}>
                      {design.tier}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className="bg-background/90 text-primary font-bold text-lg"
                    >
                      {design.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-primary text-sm">#{design.id}. {design.name}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm">
                    {design.description}
                  </p>
                  
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground text-sm">Features:</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                      {design.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl btn-rainbow-pulse relative overflow-hidden group text-sm"
                      onClick={() => orderDesign(design.name, design.price)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <MessageCircle className="h-4 w-4 mr-2 animate-bounce relative z-10" />
                      <span className="relative z-10">🚀 Order Now!</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Custom Design Option */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Need a Custom Design?
              </h3>
              <p className="text-muted-foreground mb-6">
                Don't see what you're looking for? We create completely custom designs 
                tailored to your celebrations and preferences. Perfect for Rakhi, birthdays, and special occasions!
              </p>
              <Button 
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl transform transition-all duration-500 hover:scale-110 btn-fire-glow btn-wiggle shadow-2xl relative overflow-hidden group text-lg"
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to discuss a custom chocolate wrapper design for my special occasion.`, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <MessageCircle className="h-6 w-6 mr-3 animate-spin relative z-10" />
                <span className="relative z-10">🎨 Get Started to Design - FREE Consultation!</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-600/20 via-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
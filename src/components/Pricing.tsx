import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, Package, Truck, Star } from "lucide-react";

const Pricing = () => {
  const whatsappNumber = "+919392215575";
  
  const pricingTiers = [
    {
      name: "Basic",
      price: "₹5",
      description: "Simple and elegant designs perfect for birthdays and celebrations",
      features: [
        "Standard paper quality",
        "Basic color printing",
        "Simple design patterns",
        "Photo customization",
        "Minimum order: 100 pieces",
        "3-5 business days delivery"
      ],
      popular: false,
      gradient: "from-muted to-muted/50"
    },
    {
      name: "Standard",
      price: "₹12",
      description: "Enhanced designs with premium features for special occasions",
      features: [
        "High-quality paper",
        "Full color printing",
        "Custom photo placement",
        "Enhanced design elements",
        "Minimum order: 100 pieces",
        "2-4 business days delivery"
      ],
      popular: true,
      gradient: "from-secondary to-accent"
    },
    {
      name: "Premium",
      price: "₹20",
      description: "Luxury wrappers with premium materials and deluxe finishes",
      features: [
        "Premium quality paper",
        "High-resolution printing",
        "Gradient backgrounds",
        "Professional photo effects",
        "Fully customizable",
        "Minimum order: 100 pieces",
        "1-3 business days delivery",
        "Free design consultation"
      ],
      popular: false,
      gradient: "from-accent to-primary-glow"
    }
  ];
  
  const deliveryInfo = [
    { range: "Within 5km", charge: "Free delivery" },
    { range: "5-15km", charge: "₹50" },
    { range: "15-30km", charge: "₹100" },
    { range: "30km+", charge: "₹150" },
    { range: "Outside city", charge: "₹200-500" }
  ];
  
  const orderTier = (tierName: string, price: string) => {
    const message = `Hi! I'm interested in the ${tierName} tier chocolate wrappers (${price} per piece).

Could you please provide:
- Bulk pricing for 100, 500, 1000, 2000 pieces
- Current discounts available
- Sample availability
- Detailed delivery timeline
- Payment options (advance %, COD availability)
- Design customization included

Looking forward to placing an order soon!`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getBulkQuote = () => {
    const message = `Hi! I need a quote for bulk chocolate wrapper order.

Order Details:
- Quantity needed: [Please specify]
- Preferred tier: [Basic/Standard/Premium]
- Event date: [When do you need them]
- Design requirements: [Custom/Choose from gallery]

Please provide:
- Best bulk pricing
- Maximum possible discount
- Fastest delivery option
- Free samples availability

Thank you!`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect pricing tier for your needs. All orders have a minimum quantity of 100 pieces.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier.name}
              className={`relative overflow-hidden hover-lift ${tier.popular ? 'ring-2 ring-accent' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 font-semibold">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${tier.gradient}`}></div>
              
              <CardHeader className={tier.popular ? 'pt-8' : ''}>
                <CardTitle className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-foreground">
                    {tier.price}
                    <span className="text-lg text-muted-foreground">/piece</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{tier.description}</p>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "premium" : "default"}
                  className="w-full"
                  onClick={() => orderTier(tier.name, tier.price)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Order {tier.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery Information */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-primary" />
                <span>Delivery Charges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {deliveryInfo.map((info, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-foreground">{info.range}</span>
                    <Badge variant="outline" className="text-primary">
                      {info.charge}
                    </Badge>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Delivery charges are calculated based on distance from our location. 
                Bulk orders may qualify for free delivery.
              </p>
            </CardContent>
          </Card>
          
          {/* Special Offers */}
          <Card className="bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-6 w-6 text-accent" />
                <span>Special Offers</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <div className="font-semibold text-accent">Bulk Discount</div>
                  <div className="text-sm text-foreground">5% OFF (500+ pieces), 10% OFF (1000+ pieces), 15% OFF (2000+ pieces)</div>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <div className="font-semibold text-secondary-foreground">Free Shipping</div>
                  <div className="text-sm text-foreground">Orders above ₹3,000 qualify for free delivery across India</div>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <div className="font-semibold text-success">First Order Bonus</div>
                  <div className="text-sm text-foreground">5% OFF + Free samples on your first order</div>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <div className="font-semibold text-orange-700">Quality Guarantee</div>
                  <div className="text-sm text-foreground">100% money back if not satisfied</div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={getBulkQuote}
              >
                Get Bulk Pricing Quote
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Contact us now to discuss your requirements and get a personalized quote 
                for your chocolate wrapper project.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'd like to get a quote for chocolate wrappers. Please help me with the details.`, '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                Get Quote via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
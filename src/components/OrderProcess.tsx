import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileImage, CreditCard, Truck, CheckCircle, Clock } from "lucide-react";

const OrderProcess = () => {
  const whatsappNumber = "+919392215575";
  
  const steps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Contact Us",
      description: "Send us your requirements via WhatsApp or fill our order form",
      action: "Start Chat",
      color: "bg-blue-500"
    },
    {
      step: 2,
      icon: FileImage,
      title: "Design Approval",
      description: "We create digital proof and share for your approval",
      action: "View Samples",
      color: "bg-purple-500"
    },
    {
      step: 3,
      icon: CreditCard,
      title: "Payment",
      description: "Pay 50% advance via UPI, bank transfer, or COD",
      action: "Payment Options",
      color: "bg-green-500"
    },
    {
      step: 4,
      icon: Clock,
      title: "Production",
      description: "We start production after payment confirmation",
      action: "Track Order",
      color: "bg-orange-500"
    },
    {
      step: 5,
      icon: Truck,
      title: "Delivery",
      description: "Secure packaging and delivery with tracking",
      action: "Track Shipment",
      color: "bg-red-500"
    },
    {
      step: 6,
      icon: CheckCircle,
      title: "Quality Check",
      description: "100% satisfaction guarantee or money back",
      action: "Leave Review",
      color: "bg-emerald-500"
    }
  ];

  const handleStepAction = (step: number) => {
    const messages = {
      1: "Hi! I'd like to place an order for custom chocolate wrappers. Can you help me get started?",
      2: "Hi! I'd like to see some design samples before placing my order.",
      3: "Hi! I'd like to know about payment options for my chocolate wrapper order.",
      4: "Hi! I'd like to track my chocolate wrapper order status.",
      5: "Hi! I'd like to track my chocolate wrapper shipment.",
      6: "Hi! I'd like to leave a review for my recent order."
    };
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[step as keyof typeof messages])}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Simple 6-Step Order Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to delivery, we make ordering custom chocolate wrappers simple and transparent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={step.step} className="relative overflow-hidden hover-lift group">
              <div className="absolute top-0 right-0 p-2">
                <Badge variant="outline" className="bg-background/90">
                  Step {step.step}
                </Badge>
              </div>
              
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${step.color} text-white`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleStepAction(step.step)}
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {step.action}
                </Button>
              </CardContent>
              
              {/* Progress Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border z-10" />
              )}
            </Card>
          ))}
        </div>

        {/* Quick Order Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Start Your Order?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Skip the hassle! Send us your requirements directly and we'll handle everything else. 
                Get your quote within 1 hour and start production immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="premium" 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi! I want to place an urgent order for chocolate wrappers. Please provide quick quote.`, '_blank')}
                >
                  <MessageSquare className="h-5 w-5" />
                  Quick Order via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;

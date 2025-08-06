import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Users, Star, Truck } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Quality Guarantee",
      description: "Money back if not satisfied"
    },
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Trusted by 10,000+ customers"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "2-5 business days delivery"
    },
    {
      icon: Users,
      title: "24/7 Customer Support",
      description: "Always here to help"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Based on 2,500+ reviews"
    },
    {
      icon: Truck,
      title: "Pan India Delivery",
      description: "Secure packaging & tracking"
    }
  ];

  return (
    <section className="py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Mana Custom Choco?
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for premium chocolate wrapper designs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <Card key={index} className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <badge.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
                <p className="text-muted-foreground text-sm">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

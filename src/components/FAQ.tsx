import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle } from "lucide-react";

const FAQ = () => {
  const whatsappNumber = "+919392215575";
  
  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantity is 100 pieces for all design tiers. This ensures cost-effectiveness for bulk production while maintaining premium quality."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery time varies by tier: Basic (3-5 business days), Standard (2-4 business days), Premium (1-3 business days). We provide tracking details once your order is dispatched."
    },
    {
      question: "Can I see a sample before placing a bulk order?",
      answer: "Yes! We offer digital proofs for approval before printing. For physical samples, we can provide 5 samples for ₹50 (adjustable against your main order if you proceed)."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, bank transfers, and cash on delivery (for orders within our delivery zones). 50% advance payment required for orders above ₹5,000."
    },
    {
      question: "Do you offer refunds or exchanges?",
      answer: "Yes, we have a 100% satisfaction guarantee. If you're not happy with the quality, we'll either remake your order or provide a full refund within 7 days of delivery."
    },
    {
      question: "Can you create completely custom designs?",
      answer: "Absolutely! Our design team can create unique designs based on your requirements. Custom design fee starts from ₹500, which is adjustable against orders of 500+ pieces."
    },
    {
      question: "Do you deliver pan-India?",
      answer: "Yes, we deliver across India. Shipping charges vary by location: Metro cities (₹100), Other cities (₹150), Remote areas (₹200). Free shipping on orders above ₹3,000."
    },
    {
      question: "What paper quality do you use?",
      answer: "We use food-grade paper suitable for chocolate wrapping. Basic tier uses 80GSM paper, Standard uses 120GSM, and Premium uses 150GSM with special coatings."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is confirmed, you'll receive a tracking number via WhatsApp. You can track your order status and delivery updates in real-time."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! 5% discount on orders of 500+ pieces, 10% on 1000+ pieces, and 15% on 2000+ pieces. Corporate and bulk orders get special pricing."
    }
  ];

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I have some questions about your chocolate wrapper designs. Can you help me?`, '_blank');
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-accent/20 rounded-full">
              <HelpCircle className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <Card className="border-none shadow-md">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <CardHeader className="p-0">
                      <CardTitle className="text-left text-lg font-semibold text-primary">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our customer support team is available 24/7 to help you with any queries or concerns.
              </p>
              <Button 
                variant="premium" 
                size="lg"
                onClick={openWhatsApp}
              >
                <MessageCircle className="h-5 w-5" />
                Chat with Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

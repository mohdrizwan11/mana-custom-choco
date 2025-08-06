import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const whatsappNumber = "+919392215575";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! My name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create beautiful custom chocolate wrappers? Contact us via WhatsApp 
            or fill out the form below for inquiries and bookings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements - design preferences, quantity, occasion, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>
                
                <Button type="submit" variant="premium" className="w-full">
                  <MessageCircle className="h-5 w-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="whatsapp" 
                  className="w-full justify-start"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp: {whatsappNumber}
                </Button>
                
                <div className="flex items-center space-x-3 text-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Call: +91 9392215575</span>
                </div>
                
                <div className="flex items-center space-x-3 text-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>nanimaddimsetti99@gmail.com</span>
                </div>
                
                <div className="flex items-start space-x-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div>Penugonda,</div>
                    <div>West Godavari - 534320</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
                    <div>Sunday: 10:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
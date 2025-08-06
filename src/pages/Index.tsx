import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import OrderProcess from "@/components/OrderProcess";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <OrderProcess />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

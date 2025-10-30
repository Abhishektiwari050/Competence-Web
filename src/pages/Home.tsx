import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Target, Shield, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import heroImage from "@/assets/hero-global-trade.jpg";
import alibabaImage from "@/assets/alibaba-consulting.jpg";
import exportImage from "@/assets/export-consulting.jpg";

const Home = () => {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);

  const handleLeadSubmit = (data: { name: string; email: string; phone: string }) => {
    console.log("Lead captured:", data);
  };

  const services = [
    {
      icon: Globe,
      title: "Alibaba Supplier Membership",
      description: "Get verified on Alibaba.com and reach millions of global buyers with our expert guidance.",
      link: "/services#alibaba",
      image: alibabaImage,
    },
    {
      icon: TrendingUp,
      title: "Export Consulting",
      description: "Complete export documentation, compliance guidance, and market research support.",
      link: "/services#export",
      image: exportImage,
    },
    {
      icon: Target,
      title: "E-Commerce Strategy",
      description: "Enhance product visibility, optimize listings, and build a strong global brand presence.",
      link: "/services#digital",
      image: alibabaImage,
    },
  ];

  const whyChooseUs = [
    { icon: CheckCircle, text: "Official Alibaba Channel Partner", color: "text-accent" },
    { icon: Globe, text: "Pan-India Presence (Rajasthan, Gujarat, Delhi NCR, UP)", color: "text-primary" },
    { icon: Shield, text: "Aligned with 'Vocal for Local' Initiative", color: "text-accent" },
    { icon: Star, text: "950+ Clients with 100% Satisfaction", color: "text-primary" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Premium Textiles Pvt Ltd",
      industry: "Textiles",
      quote: "Competence Consulting helped us transform from a local manufacturer to a global exporter. Their Alibaba expertise is unmatched!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "TechElectro Industries",
      industry: "Electronics",
      quote: "Professional, knowledgeable, and result-oriented. We've seen a 300% increase in international inquiries within 6 months.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Handicrafts Exports",
      industry: "Handicrafts",
      quote: "The team guided us through every step of the export process. Now we're successfully exporting to 15 countries!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Simplified Hero Section with calming image */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Global Trade" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-accent hover:bg-accent text-accent-foreground text-sm px-4 py-2 animate-fade-in-up">
              India's Trusted Alibaba Channel Partner
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Transform Your Business with Expert E-Commerce Consulting
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl animate-fade-in-up animation-delay-400">
              Join 950+ successful businesses who trust us to expand their reach on global platforms like Alibaba. 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Button
                onClick={() => setIsLeadPopupOpen(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 text-base hover-lift shadow-xl"
              >
                Get Free Export Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm hover-lift">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">12+</div>
              <div className="text-sm md:text-base text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">950+</div>
              <div className="text-sm md:text-base text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30+</div>
              <div className="text-sm md:text-base text-muted-foreground">Cities Covered</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help your business reach global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-lift group overflow-hidden animate-fade-in-up border border-border/50 shadow-md"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-56 overflow-hidden bg-muted">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <div className="mb-4 p-3 bg-accent/10 rounded-xl inline-block">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 text-accent font-medium">
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Your success partner with proven expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card 
                  key={index} 
                  className="hover-lift animate-fade-in-up border border-border/50 shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 pb-6 flex items-start gap-4">
                    <div className={`p-3 bg-accent/10 rounded-xl flex-shrink-0`}>
                      <item.icon className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base md:text-lg font-semibold text-foreground">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-fade-in-up border border-border/50 shadow-sm"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg md:text-xl">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.company} • {testimonial.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 shadow-md">
              <Link to="/testimonials">
                View All Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/95 via-primary to-primary/95 text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-success rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <Zap className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-primary-foreground/90">
              Join 950+ successful businesses who trust us with their export journey
            </p>
            <Button 
              onClick={() => setIsLeadPopupOpen(true)}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg hover-lift shadow-xl"
            >
              Get Free Consultation <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <LeadCapturePopup
        isOpen={isLeadPopupOpen}
        onClose={() => setIsLeadPopupOpen(false)}
        onSubmit={handleLeadSubmit}
      />
    </div>
  );
};

export default Home;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Users, Award, Zap, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import heroImage from "@/assets/hero-global-trade.jpg";
import alibabaImage from "@/assets/alibaba-consulting.jpg";
import exportImage from "@/assets/export-consulting.jpg";
import digitalImage from "@/assets/digital-marketing.jpg";

const Home = () => {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);

  const handleLeadSubmit = (data: { name: string; email: string; phone: string }) => {
    console.log("Lead captured:", data);
    // Here you would send data to your backend/email service
  };

  const services = [
    {
      icon: Globe,
      title: "Alibaba Supplier Membership",
      description: "Get verified on Alibaba.com and reach millions of global buyers with our expert guidance.",
      link: "/services#alibaba",
    },
    {
      icon: TrendingUp,
      title: "Export Consulting",
      description: "Complete export documentation, compliance guidance, and market research support.",
      link: "/services#export",
    },
    {
      icon: Users,
      title: "Digital Marketing & Branding",
      description: "Enhance product visibility, optimize listings, and build a strong global brand presence.",
      link: "/services#digital",
    },
  ];

  const whyChooseUs = [
    "Official Alibaba Channel Partner",
    "Pan-India Presence (Delhi, Jaipur, Surat)",
    "Aligned with 'Vocal for Local' Initiative",
    "500+ Successful Client Partnerships",
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Premium Textiles Pvt Ltd",
      industry: "Textiles",
      quote: "Competence Consulting helped us transform from a local manufacturer to a global exporter. Their Alibaba expertise is unmatched!",
    },
    {
      name: "Priya Sharma",
      company: "TechElectro Industries",
      industry: "Electronics",
      quote: "Professional, knowledgeable, and result-oriented. We've seen a 300% increase in international inquiries within 6 months.",
    },
    {
      name: "Amit Patel",
      company: "Handicrafts Exports",
      industry: "Handicrafts",
      quote: "The team guided us through every step of the export process. Now we're successfully exporting to 15 countries!",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2 animate-fade-in-down">
              Official Alibaba Channel Partner
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              India's Trusted Alibaba Channel Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Promote Local. Sell Global. Transform Your Business with Expert E-Commerce Consulting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <Button
                onClick={() => setIsLeadPopupOpen(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 hover-lift"
              >
                Get Free Export Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-lift">
                <Link to="/services">
                  Learn More About Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Globe className="h-16 w-16 text-primary-foreground/20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float animation-delay-400">
          <TrendingUp className="h-20 w-20 text-primary-foreground/20" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help your business reach global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift overflow-hidden group animate-fade-in-up">
              <div className="relative h-48 overflow-hidden">
                <img src={alibabaImage} alt="Alibaba Consulting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <CardHeader>
                <Globe className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">Alibaba Supplier Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Get verified on Alibaba.com and reach millions of global buyers with our expert guidance.
                </CardDescription>
                <Button asChild variant="link" className="p-0 text-accent hover-scale">
                  <Link to="/services#alibaba">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden group animate-fade-in-up animation-delay-200">
              <div className="relative h-48 overflow-hidden">
                <img src={exportImage} alt="Export Consulting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">Export Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Complete export documentation, compliance guidance, and market research support.
                </CardDescription>
                <Button asChild variant="link" className="p-0 text-accent hover-scale">
                  <Link to="/services#export">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden group animate-fade-in-up animation-delay-400">
              <div className="relative h-48 overflow-hidden">
                <img src={digitalImage} alt="Digital Marketing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">Digital Marketing & Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Enhance product visibility, optimize listings, and build a strong global brand presence.
                </CardDescription>
                <Button asChild variant="link" className="p-0 text-accent hover-scale">
                  <Link to="/services#digital">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-secondary via-background to-secondary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Competence Consulting?
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted expertise and proven results in global e-commerce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 rounded-lg bg-card hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <span className="text-lg font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover-lift">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from businesses we've helped go global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-lift bg-card/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <Award className="h-10 w-10 text-accent" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.company} • {testimonial.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
            <Button asChild variant="outline" className="hover-lift">
              <Link to="/testimonials">
                View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent/30 text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Zap className="h-16 w-16 text-accent mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Take Your Business Global?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful Indian businesses that are now exporting worldwide with our expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                onClick={() => setIsLeadPopupOpen(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg hover-lift"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-10 py-6 text-lg hover-lift">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="flex flex-col items-center gap-3 animate-fade-in-up animation-delay-200">
                <Target className="h-12 w-12 text-accent" />
                <h3 className="font-semibold text-lg">Expert Guidance</h3>
                <p className="text-sm text-primary-foreground/80">Personalized consulting for your business</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-fade-in-up animation-delay-400">
                <Shield className="h-12 w-12 text-accent" />
                <h3 className="font-semibold text-lg">Proven Results</h3>
                <p className="text-sm text-primary-foreground/80">500+ successful partnerships</p>
              </div>
              <div className="flex flex-col items-center gap-3 animate-fade-in-up animation-delay-600">
                <Globe className="h-12 w-12 text-accent" />
                <h3 className="font-semibold text-lg">Global Reach</h3>
                <p className="text-sm text-primary-foreground/80">Access to worldwide markets</p>
              </div>
            </div>
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

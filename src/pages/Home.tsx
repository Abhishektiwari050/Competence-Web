import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LeadCapturePopup from "@/components/LeadCapturePopup";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2">
              Official Alibaba Channel Partner
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              India's Trusted Alibaba Channel Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Promote Local. Sell Global. Transform Your Business with Expert E-Commerce Consulting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => setIsLeadPopupOpen(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                Get Free Export Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/services">
                  Learn More About Services
                </Link>
              </Button>
            </div>
          </div>
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help your business reach global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 text-accent">
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
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Competence Consulting?
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted expertise and proven results in global e-commerce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <span className="text-lg">{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from businesses we've helped go global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <Award className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
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

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/testimonials">
                View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Business Global?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of successful Indian businesses that are now exporting worldwide with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsLeadPopupOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
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

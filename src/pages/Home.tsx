import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Globe, TrendingUp, Target, Shield, Star, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroGlobalTrade from "@/assets/hero-global-trade.jpg";
import heroPartnership from "@/assets/hero-partnership.jpg";
import heroLogistics from "@/assets/hero-logistics.jpg";
import heroProducts from "@/assets/hero-products.jpg";
import alibabaImage from "@/assets/alibaba-consulting.jpg";
import exportImage from "@/assets/export-consulting.jpg";

const Home = () => {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-stagger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLeadSubmit = (data: { name: string; email: string; phone: string }) => {
    console.log("Lead captured:", data);
  };

  const heroSlides = [
    {
      image: heroPartnership,
      title: "Your Trusted Partner in Global Trade",
      description: "Official Alibaba channel partner helping Indian businesses reach international markets with confidence.",
    },
    {
      image: heroLogistics,
      title: "Seamless Export Solutions",
      description: "Complete support from documentation to delivery. We handle the complexity so you can focus on growth.",
    },
    {
      image: heroProducts,
      title: "Showcase Your Products Globally",
      description: "Get your products in front of millions of buyers worldwide with optimized listings and strategic marketing.",
    },
  ];

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
      title: "Export Consulting And Services",
      description: "Complete export documentation, compliance guidance, and market research support.",
      link: "/services#export",
      image: exportImage,
    },
    {
      icon: Target,
      title: "E-Commerce Strategy And Growth",
      description: "Enhance product visibility, optimize listings, and build a strong global brand presence.",
      link: "/services#digital",
      image: alibabaImage,
    },
  ];

  const whyChooseUs = [
    { icon: CheckCircle, text: "Official Alibaba Channel Partner", color: "text-accent" },
    { icon: Globe, text: "Pan-India Presence", color: "text-primary" },
    { icon: Shield, text: "Aligned with 'Vocal for Local' Initiative", color: "text-accent" },
    { icon: Star, text: "750+ Clients with 90% Satisfaction", color: "text-primary" },
  ];

  const testimonials = [
    {
      quote: "Competence Consulting helped us transform from a local manufacturer to a global exporter. Their Alibaba expertise is unmatched!",
      name: "Rajesh Kumar",
      designation: "CEO, Premium Textiles Pvt Ltd",
      src: "/placeholder.svg",
    },
    {
      quote: "Professional, knowledgeable, and result-oriented. We've seen a 300% increase in international inquiries within 6 months.",
      name: "Priya Sharma",
      designation: "Director, TechElectro Industries",
      src: "/placeholder.svg",
    },
    {
      quote: "The team guided us through every step of the export process. Now we're successfully exporting to 15 countries!",
      name: "Amit Patel",
      designation: "Founder, Handicrafts Exports",
      src: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Carousel Section */}
      <section className="relative min-h-[85vh]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative min-h-[85vh] flex items-center bg-transparent text-primary-foreground overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src={slide.image} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                      <Badge className="mb-6 bg-accent hover:bg-accent text-accent-foreground text-sm px-4 py-2 animate-fade-in-up shadow-lg">
                        India's Trusted Alibaba Channel Partner
                      </Badge>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl animate-fade-in-up animation-delay-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                        {slide.description}
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
                        <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 backdrop-blur-sm hover-lift shadow-lg">
                          <Link to="/services">
                            Explore Our Services
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <CarouselPrevious className="relative left-0 translate-y-0 bg-background/80 hover:bg-background" />
            <CarouselNext className="relative right-0 translate-y-0 bg-background/80 hover:bg-background" />
          </div>
        </Carousel>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center scroll-animate-stagger">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">12+</div>
              <div className="text-sm md:text-base text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">750+</div>
              <div className="text-sm md:text-base text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">30+</div>
              <div className="text-sm md:text-base text-muted-foreground">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm md:text-base text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help your business reach global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto scroll-animate-stagger">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative p-8">
                  <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Your success partner with proven expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-animate-stagger">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white border-2 border-gray-100 p-6 hover:border-accent/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors duration-300">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="scroll-animate-scale">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>

          <div className="text-center mt-8 scroll-animate">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 shadow-md">
              <Link to="/testimonials">
                View All Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto scroll-animate-scale">
            <Zap className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-primary/90">
              Join 750+ successful businesses who trust us with their export journey
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg hover-lift shadow-xl"
            >
              <Link to="/contact">Get Free Consultation <ArrowRight className="ml-2 h-6 w-6" /></Link>
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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Users, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import heroServices from "@/assets/service.jpeg";

const Services = () => {
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

    document.querySelectorAll('.scroll-animate, .scroll-animate-stagger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const alibabaFeatures = [
    "Supplier account setup and verification",
    "Product listing optimization",
    "Keyword research and SEO",
    "Professional product photography guidance",
    "Competitive pricing strategy",
    "RFQ management training",
    "Minisite Development",
    "Account Diagnosis",
  ];

  const exportFeatures = [
    "Export documentation assistance",
    "IEC (Import Export Code) support",
    "RCMC and other certification guidance",
    "Customs and compliance consultation",
    "Market research and analysis",
    "International payment solutions",
  ];

  const partnerFeatures = [
    "Attractive commission structure",
    "Comprehensive training program",
    "Marketing materials and support",
    "Dedicated partner dashboard",
    "Regular performance incentives",
    "Ongoing professional development",
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroServices}
            alt="Global trade services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Holisitic E-Commerce & Export Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              End-to-end services to help your business succeed in global markets
            </p>
          </div>
        </div>
      </section>

      {/* Alibaba Supplier Membership */}
      <section id="alibaba" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <Globe className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Alibaba Global Gold Supplier Membership
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Become a verified supplier on the world's largest B2B marketplace
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 mb-8 animate-fade-in-up animation-delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What We Offer</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">Complete setup and optimization of your Alibaba presence</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alibabaFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover-lift shadow-lg min-h-[48px]">
                <Link to="/contact">
                  Get Started with Alibaba <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Consulting */}
      <section id="export" className="bg-gradient-to-br from-secondary via-background to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Export Consulting Services
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Navigate the complexities of international trade with expert guidance
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 mb-8 animate-fade-in-up animation-delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Comprehensive Export Support</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">From documentation to compliance, we handle it all</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover-lift shadow-lg min-h-[48px]">
                <Link to="/contact">
                  Start Exporting Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section id="partner" className="bg-gradient-to-br from-secondary via-background to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Partner Program
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Join our network and earn attractive commissions
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 mb-8 animate-fade-in-up animation-delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Become a Sales Partner</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">Earn while helping businesses grow globally</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partnerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover-lift shadow-lg min-h-[48px]">
                <Link to="/contact">
                  Join as Partner <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent/20 text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Target className="h-16 w-16 text-accent mx-auto mb-6 animate-bounce-in" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your business goals and find the perfect solution for you.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg hover-lift">
            <Link to="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Services;

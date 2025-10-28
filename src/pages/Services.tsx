import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Users, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const alibabaFeatures = [
    "Supplier account setup and verification",
    "Product listing optimization",
    "Keyword research and SEO",
    "Professional product photography guidance",
    "Competitive pricing strategy",
    "RFQ management training",
  ];

  const exportFeatures = [
    "Export documentation assistance",
    "IEC (Import Export Code) support",
    "RCMC and other certification guidance",
    "Customs and compliance consultation",
    "Market research and analysis",
    "International payment solutions",
  ];

  const digitalFeatures = [
    "Product visibility enhancement",
    "Multi-channel marketing strategy",
    "Content creation for global audience",
    "Social media management",
    "Email marketing campaigns",
    "Performance analytics and reporting",
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
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive E-Commerce & Export Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              End-to-end services to help your business succeed in global markets
            </p>
          </div>
        </div>
      </section>

      {/* Alibaba Supplier Membership */}
      <section id="alibaba" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Globe className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Alibaba Supplier Membership
              </h2>
              <p className="text-lg text-muted-foreground">
                Become a verified supplier on the world's largest B2B marketplace
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">What We Offer</CardTitle>
                <CardDescription className="text-base">
                  Complete setup and optimization of your Alibaba presence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alibabaFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Get Started with Alibaba <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Consulting */}
      <section id="export" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Export Consulting Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Navigate the complexities of international trade with expert guidance
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Comprehensive Export Support</CardTitle>
                <CardDescription className="text-base">
                  From documentation to compliance, we handle it all
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Start Exporting Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section id="digital" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Digital Marketing & Brand Building
              </h2>
              <p className="text-lg text-muted-foreground">
                Boost your online visibility and reach more global buyers
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Digital Solutions</CardTitle>
                <CardDescription className="text-base">
                  Build a strong brand and generate quality leads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {digitalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Enhance Your Brand <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section id="partner" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Partner Program
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our network and earn attractive commissions
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Become a Sales Partner</CardTitle>
                <CardDescription className="text-base">
                  Earn while helping businesses grow globally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partnerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Join as Partner <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your business goals and find the perfect solution for you.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

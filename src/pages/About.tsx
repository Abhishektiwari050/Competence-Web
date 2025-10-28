import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const offices = [
    { city: "Delhi NCR", region: "North India" },
    { city: "Jaipur", region: "Rajasthan" },
    { city: "Surat", region: "Gujarat" },
    { city: "Mumbai", region: "Maharashtra" },
  ];

  const milestones = [
    { year: "2013", achievement: "Company Founded" },
    { year: "2015", achievement: "Became Official Alibaba Channel Partner" },
    { year: "2018", achievement: "Served 100+ Clients" },
    { year: "2020", achievement: "Expanded Pan-India Presence" },
    { year: "2023", achievement: "500+ Successful Export Partnerships" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Indian Businesses to Go Global
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We are India's trusted Alibaba channel partner, dedicated to helping businesses succeed in international markets through expert e-commerce consulting and strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower Indian manufacturers, traders, and wholesalers to achieve global success by providing expert guidance, comprehensive support, and proven strategies for international e-commerce and export business.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Eye className="h-12 w-12 text-accent mb-4" />
                <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading force in transforming Indian businesses into globally recognized brands, making "Made in India" a symbol of quality and trust worldwide through digital innovation and strategic partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promote Local, Sell Global */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Promote Local. Sell Global.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our tagline embodies our core belief: Indian businesses have world-class products and services that deserve global recognition. We are aligned with the Government of India's "Vocal for Local" initiative, helping local businesses gain international visibility and success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By leveraging our expertise as an official Alibaba channel partner and our deep understanding of export processes, we bridge the gap between local excellence and global opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Alibaba Partnership */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Official Alibaba Channel Partner
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As an authorized Alibaba channel partner, we have direct access to Alibaba's resources, training, and support systems. This partnership enables us to provide our clients with:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Comprehensive knowledge of Alibaba's platform, algorithms, and best practices for supplier success.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">Priority Support</h3>
                  <p className="text-muted-foreground">
                    Direct communication channels with Alibaba's team for faster resolution of issues and queries.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Access to special rates and packages for Alibaba supplier memberships and premium features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-primary mb-2">Latest Updates</h3>
                  <p className="text-muted-foreground">
                    First access to new features, tools, and marketplace trends to keep you ahead of competition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Presence */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pan-India Presence
              </h2>
              <p className="text-lg text-muted-foreground">
                We operate across major business hubs in India, bringing our expertise closer to you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {offices.map((office, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-primary text-lg">{office.city}</h3>
                    <p className="text-sm text-muted-foreground">{office.region}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Journey
            </h2>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 font-bold text-2xl text-accent">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-lg font-medium">{milestone.achievement}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve global success.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, MapPin, ArrowRight, Globe, Rocket, Zap, Heart, Users as UsersIcon, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";
import heroImage from "@/assets/hero-global-trade.jpg";

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
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in-down">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Empowering Indian Businesses to Go Global
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Your trusted partner in navigating the world of international e-commerce and export markets
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-10 animate-float">
          <Rocket className="h-16 w-16 text-primary-foreground/20" />
        </div>
        <div className="absolute top-20 right-10 animate-float animation-delay-400">
          <Globe className="h-20 w-20 text-primary-foreground/20" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift bg-card border-2 animate-fade-in-up">
              <CardContent className="pt-10">
                <div className="mb-6 p-4 bg-accent/10 rounded-2xl inline-block">
                  <Target className="h-16 w-16 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower Indian manufacturers, traders, and wholesalers to achieve global success by providing expert guidance, comprehensive support, and proven strategies for international e-commerce and export business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-2 animate-fade-in-up animation-delay-200">
              <CardContent className="pt-10">
                <div className="mb-6 p-4 bg-accent/10 rounded-2xl inline-block">
                  <Eye className="h-16 w-16 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading force in transforming Indian businesses into globally recognized brands, making "Made in India" a symbol of quality and trust worldwide through digital innovation and strategic partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Photo & Story */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden hover-lift animate-fade-in-up">
                <img src={teamPhoto} alt="Our Expert Team" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Meet Our Expert Team</h3>
                  <p className="text-white/90">Dedicated professionals committed to your success</p>
                </div>
              </div>
              
              <div className="space-y-6 animate-fade-in-up animation-delay-200">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a vision to bridge the gap between Indian manufacturers and global buyers, 
                  Competence Consulting E-Commerce LLP has been at the forefront of India's export revolution 
                  for over a decade.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As an official Alibaba Channel Partner, we've helped transform hundreds of local businesses 
                  into successful international exporters. Our expertise spans across industries, from textiles 
                  and handicrafts to electronics and industrial machinery.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the 'Vocal for Local' initiative and are committed to promoting Indian products 
                  on the global stage while maintaining the highest standards of quality and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alibaba Partnership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-6">
                <Award className="h-16 w-16 text-accent mx-auto" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Official Alibaba Channel Partner
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                As an authorized Alibaba channel partner, we have direct access to Alibaba's resources, training, and support systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: "Expert Guidance", desc: "Comprehensive knowledge of Alibaba's platform, algorithms, and best practices for supplier success." },
                { icon: Zap, title: "Priority Support", desc: "Direct communication channels with Alibaba's team for faster resolution of issues and queries." },
                { icon: TrendingUp, title: "Competitive Pricing", desc: "Access to special rates and packages for Alibaba supplier memberships and premium features." },
                { icon: Rocket, title: "Latest Updates", desc: "First access to new features, tools, and marketplace trends to keep you ahead of competition." }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8">
                    <div className="p-3 bg-accent/10 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Presence */}
      <section className="bg-gradient-to-br from-secondary via-background to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-6">
                <MapPin className="h-16 w-16 text-accent mx-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pan-India Presence
              </h2>
              <p className="text-lg text-muted-foreground">
                We operate across major business hubs in India, bringing our expertise closer to you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <Card 
                  key={index} 
                  className="text-center hover-scale animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <h3 className="font-bold text-primary text-xl mb-2">{office.city}</h3>
                    <p className="text-sm text-muted-foreground">{office.region}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center animate-fade-in-up">
              Our Journey
            </h2>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-24 font-bold text-3xl text-accent">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <Card className="hover-lift">
                      <CardContent className="pt-6 pb-6">
                        <p className="text-xl font-semibold text-primary">{milestone.achievement}</p>
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
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent/20 text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Heart className="h-16 w-16 text-accent mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss how we can help your business achieve global success.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg hover-lift">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
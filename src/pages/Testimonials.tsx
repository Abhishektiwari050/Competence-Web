import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bannerTestimonials from "@/assets/test.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Premium Textiles Pvt Ltd",
      industry: "Textiles",
      location: "Surat, Gujarat",
      rating: 5,
      quote: "Competence Consulting helped us transform from a local manufacturer to a global exporter. Their Alibaba expertise is unmatched! Within 6 months, we started receiving inquiries from USA, Europe, and Middle East. The team's dedication and professional approach made the entire process smooth and stress-free.",
      image: "/placeholder.svg",
    },
    {
      name: "Priya Sharma",
      company: "TechElectro Industries",
      industry: "Electronics",
      location: "Delhi NCR",
      rating: 5,
      quote: "Professional, knowledgeable, and result-oriented. We've seen a 300% increase in international inquiries within 6 months. The export documentation support and digital marketing services have been exceptional. Highly recommend their services to any business looking to expand globally.",
      image: "/placeholder.svg",
    },
    {
      name: "Amit Patel",
      company: "Handicrafts Exports",
      industry: "Handicrafts",
      location: "Jaipur, Rajasthan",
      rating: 5,
      quote: "The team guided us through every step of the export process. Now we're successfully exporting to 15 countries! Their understanding of both Indian and international markets is impressive. They not only helped us set up on Alibaba but also trained our team to manage it effectively.",
      image: "/placeholder.svg",
    },
    {
      name: "Sunita Mehta",
      company: "Spice World Exports",
      industry: "Food & Spices",
      location: "Mumbai, Maharashtra",
      rating: 5,
      quote: "Working with Competence Consulting was the best decision for our business. They helped us navigate complex export regulations and documentation. Today, our spices are reaching customers in 20+ countries. Their ongoing support and market insights are invaluable.",
      image: "/placeholder.svg",
    },
    {
      name: "Vikram Singh",
      company: "Metal Craft Industries",
      industry: "Metal Products",
      location: "Ludhiana, Punjab",
      rating: 5,
      quote: "As a first-time exporter, I was overwhelmed with the process. Competence Consulting made it simple and straightforward. From IEC to our first international order, they were with us every step of the way. Our Alibaba Gold Supplier membership is already generating excellent leads.",
      image: "/placeholder.svg",
    },
    {
      name: "Meera Reddy",
      company: "Fashion Forward Exports",
      industry: "Garments",
      location: "Bangalore, Karnataka",
      rating: 5,
      quote: "The digital marketing and branding support we received has completely transformed our online presence. Our product visibility on Alibaba increased dramatically, and we're now competing with established international brands. Great ROI on our investment!",
      image: "/placeholder.svg",
    },
    {
      name: "Arun Krishnan",
      company: "Kerala Coir Products",
      industry: "Coir & Natural Fiber",
      location: "Kochi, Kerala",
      rating: 5,
      quote: "Excellent service from start to finish. They understood our niche market and helped position our eco-friendly products effectively on global platforms. The team's commitment to our success is evident in their proactive approach and regular follow-ups.",
      image: "/placeholder.svg",
    },
    {
      name: "Deepak Agarwal",
      company: "Furniture Exports India",
      industry: "Furniture",
      location: "Jodhpur, Rajasthan",
      rating: 5,
      quote: "We've been working with Competence Consulting for over 2 years now. Their consistent support and strategic guidance have helped us grow our export business by 400%. They're not just service providers, but true business partners invested in our success.",
      image: "/placeholder.svg",
    },
    {
      name: "Neha Gupta",
      company: "Ayurveda Wellness Exports",
      industry: "Ayurvedic Products",
      location: "Haridwar, Uttarakhand",
      rating: 5,
      quote: "Entering international markets for ayurvedic products required special attention to certifications and compliance. Competence Consulting's expertise in export documentation was crucial. They helped us meet all requirements and now we're exporting to wellness markets worldwide.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerTestimonials} alt="Testimonials banner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Client Testimonials
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories from Our Clients
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Read what businesses across India say about their journey to global markets with us
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">950+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-1">{testimonial.company}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.industry}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <Quote className="h-8 w-8 text-accent mb-3" />
                  <p className="text-muted-foreground italic leading-relaxed flex-1">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    <span className="font-semibold">Location:</span> {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their export operations with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift shadow-xl">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              <Link to="/services">Learn About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

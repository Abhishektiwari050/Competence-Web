import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, MapPin, ArrowRight, Rocket, Zap, Heart, Users as UsersIcon, TrendingUp, CheckCircle, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";
import heroImage from "@/assets/about.jpeg";
import ajayImage from "@/assets/ajay.png";
import simpleRajpalImage from "@/assets/simple-rajpal.png";
import amitImage from "@/assets/amit.png";
import ankitBidaniImage from "@/assets/ankit-bidani.png";
import kanikaImage from "@/assets/kanika.png";
import mananImage from "@/assets/manan.png";
import { useEffect } from "react";

const About = () => {
  const offices = [
    { state: "Delhi NCR", description: "National Capital Region" },
    { state: "Rajasthan", description: "Heritage & Textiles Hub" },
    { state: "Gujarat", description: "Industrial Powerhouse" },
    { state: "Uttar Pradesh", description: "Manufacturing Center" },
  ];

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



  return (
    <div className="min-h-screen">
      {/* Hero Section (no carousel elements, cohesive brand color) */}
      <section className="relative min-h-[70vh] flex items-center bg-[#315796] text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <img
            src={heroImage}
            alt="Partnership-driven global trade — professional 2D banner"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in-down">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Empowering Indian Businesses to Go Global
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Your trusted partner in international e-commerce and export markets
            </p>
          </div>
        </div>
        

  </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto scroll-animate-stagger">
            <Card className="hover-lift bg-card border-2">
              <CardContent className="pt-10">
                <div className="mb-6 p-4 bg-accent/10 rounded-2xl inline-block">
                  <Target className="h-16 w-16 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower Indian manufacturers, traders, wholesalers and exporters to achieve global success by providing expert guidance, comprehensive support, and proven strategies for international e-commerce and export business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-2">
              <CardContent className="pt-10">
                <div className="mb-6 p-4 bg-accent/10 rounded-2xl inline-block">
                  <Eye className="h-16 w-16 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the leading channel partner of Alibaba.com in India, offering end-to-end digital trade solutions and empowering businesses to thrive in the global e-commerce ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Photo & Story (2D imagery, optimized, brand-consistent) */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden hover-lift scroll-animate-left">
                <img
                  src={teamPhoto}
                  alt="Competence Consulting expert team — professional 2D photo"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Meet Our Expert Team</h3>
                  <p className="text-white/90">Dedicated professionals committed to your success</p>
                </div>
              </div>
              
              <div className="space-y-6 scroll-animate-right">
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
                  We believe in the 'Promote Local Sell Global' initiative and are committed to promoting Indian products 
                  on the global stage while maintaining the highest standards of quality and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">Our Leadership</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-primary">Meet Our Expert Team</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Seasoned professionals driving your global success</p>
            </div>

            <div className="space-y-16 scroll-animate-stagger">
              {[
                {
                  name: "Ajay Rajpal",
                  role: "Director",
                  bio: "Chartered Accountant, with 25+ years’ expertise, has managed multi-crore equity infusions, led restructuring for numerous companies, and established key tax and banking partnerships—delivering transformational results across India’s evolving business landscape.",
                  image: ajayImage
                },
                {
                  name: "Simple Rajpal",
                  role: "Director",
                  bio: "Chartered Accountant and finance leader, recognized for pioneering financial strategies, driving corporate growth, leading major restructurings, successfully managing private equity infusion, and securing high-value contracts in advertising and technology—delivering transformative results and sustainable business impact.",
                  image: simpleRajpalImage
                },
                {
                  name: "Amit Midha",
                  role: "Head of Sales",
                  bio: "Sales leadership professional with 13+ years experience. Achieved 300% revenue growth through innovative sales strategies. Specializes in client relations and building long-term partnerships.",
                  image: amitImage
                },
                {
                  name: "Ankit Bidani",
                  role: "Chief Operations Officer",
                  bio: "Operations excellence specialist with 14+ years experience. Streamlined processes resulting in 40% efficiency gains. Expert in supply chain management and process optimization for export businesses.",
                  image: ankitBidaniImage
                },
                {
                  name: "Kanika Shekhawat",
                  role: "HOD(Service)",
                  bio: "Customer service excellence leader with 12+ years experience. Ensures seamless client experience and maintains 95% satisfaction rate through dedicated support and quality service delivery.",
                  image: kanikaImage
                },
                {
                  name: "Manan Saxena Jain",
                  role: "Business Analyst",
                  bio: "Young and dynamic Business Analyst who brings a data-driven approach to business operations. He has contributed to optimizing workflows and supporting decisions that impact over 900+ clients. With a strong analytical mindset and enthusiasm for process improvement, he focuses on creating efficiency and measurable growth within the organization.",
                  image: mananImage
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-xl text-accent font-semibold">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-accent font-semibold text-lg mb-4">{member.role}</p>
                      <p className="text-gray-700 leading-relaxed text-lg">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alibaba Partnership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-6">
                <Award className="h-16 w-16 text-accent mx-auto" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Authorized Alibaba Channel Partner
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                As an authorized Alibaba channel partner, we have direct access to Alibaba's resources, training, and support systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-animate-stagger">
              {[
                { icon: Target, title: "Official Partnership", desc: "Recognized by Alibaba.com as an Authorized Channel Partner, ensuring genuine support and verified services. Trusted bridge between Indian exporters and the world’s largest B2B marketplace." },
                { icon: Zap, title: "Customized Growth Strategy", desc: "We create a personalized export success roadmap, tailored to your industry, product category, and target regions. Our experts analyze your business potential, optimize your Alibaba presence, and guide you with data-driven strategies to maximize global reach and sales performance." },
                { icon: TrendingUp, title: "After-Sales & Ongoing Support", desc: "Continuous account monitoring and performance reviews to ensure clients stay competitive. Assistance with renewals, upselling opportunities, and success strategy planning." },
                { icon: Rocket, title: "Verified Seller Privileges", desc: "Get prioritized verification support to become a Gold or Verified Supplier, boosting your trust score, visibility, and buyer confidence. Enjoy faster approvals, premium credibility, and higher chances of attracting quality global buyers." }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative p-8">
                    <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  
                  <div className="h-1 bg-gradient-to-r from-accent via-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Presence */}
      <section className="bg-gradient-to-br from-secondary via-background to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-animate-stagger">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 text-center hover:shadow-2xl hover:border-accent/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-accent transition-colors duration-300">{office.state}</h3>
                    <p className="text-sm text-gray-600">{office.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">Achievements</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-primary">Milestones, Metrics, and Recognitions</h2>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 scroll-animate-stagger">
              {[
                { icon: CheckCircle, value: "90%", label: "Customer Satisfaction", color: "from-green-500 to-green-600" },
                { icon: UsersIcon, value: "950+", label: "Successful Export Partnerships", color: "from-accent to-accent/80" },
                { icon: BarChart3, value: "12+", label: "Years of Industry Experience", color: "from-primary to-primary/80" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 text-center hover:shadow-2xl hover:border-accent/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-5xl font-extrabold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">{item.value}</div>
                    <p className="text-gray-600">{item.label}</p>
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
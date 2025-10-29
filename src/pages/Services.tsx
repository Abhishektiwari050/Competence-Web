import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Users, Target, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import BlogPostModal from "@/components/BlogPostModal";
import blogDocumentation from "@/assets/blog-documentation.jpg";
import blogAlibaba from "@/assets/blog-alibaba.jpg";
import blogExportProducts from "@/assets/blog-export-products.jpg";

const Services = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const partnerFeatures = [
    "Attractive commission structure",
    "Comprehensive training program",
    "Marketing materials and support",
    "Dedicated partner dashboard",
    "Regular performance incentives",
    "Ongoing professional development",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Exporting from India: Step-by-Step Process",
      excerpt: "Learn everything you need to know about starting your export business from India, including documentation, compliance, and best practices.",
      content: `Starting an export business from India requires careful planning and understanding of various regulations. In this comprehensive guide, we'll walk you through every step of the export process.

First, you need to obtain an Import Export Code (IEC) from the Directorate General of Foreign Trade (DGFT). This is a mandatory requirement for anyone looking to export from India.

Next, you'll need to register with relevant export promotion councils and obtain necessary certifications like RCMC (Registration cum Membership Certificate). These certifications not only help with compliance but also provide access to various government schemes and benefits.

Understanding export documentation is crucial. Key documents include Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and various insurance documents.

Market research is another critical aspect. Identify your target markets, understand local regulations, cultural preferences, and competition. This will help you tailor your products and marketing strategies effectively.

Payment terms and methods need careful consideration. Letter of Credit (LC) and advance payment are common in international trade, but understanding the pros and cons of each is essential.

Finally, logistics and shipping arrangements require attention to detail. Choose reliable freight forwarders and understand Incoterms to avoid any confusion about responsibilities.`,
      category: "Export Guides",
      author: "Competence Team",
      date: "2024-01-15",
      readTime: "8 min read",
      image: blogExportProducts,
    },
    {
      id: 2,
      title: "How to Become an Alibaba Verified Supplier: Requirements & Benefits",
      excerpt: "Discover the process of becoming a verified supplier on Alibaba.com and unlock access to millions of global buyers.",
      content: `Becoming a verified supplier on Alibaba.com can significantly boost your export business by connecting you with millions of potential buyers worldwide.

The verification process involves several steps. First, you need to choose the right membership plan that suits your business needs. Alibaba offers various packages with different features and benefits.

Gold Supplier membership is the most popular option. It provides enhanced visibility, priority customer service, and access to premium features. The verification process includes company authentication, where Alibaba's partner agencies verify your business legitimacy.

Product listing optimization is crucial for success on the platform. Use high-quality images, detailed descriptions, and relevant keywords. Our team can help you create compelling product listings that attract buyers.

Understanding Alibaba's algorithm is key to getting your products noticed. Factors like response time, product quality score, and transaction history all play a role in your ranking.

Regular engagement with the platform is important. Respond promptly to inquiries, update your products regularly, and participate in Alibaba's promotional events.

The benefits of being a verified supplier are substantial: increased credibility, higher visibility in search results, access to buyer data and analytics, and priority customer support from Alibaba.`,
      category: "Alibaba Tips",
      author: "Expert Team",
      date: "2024-01-10",
      readTime: "6 min read",
      image: blogAlibaba,
    },
    {
      id: 3,
      title: "Export Documentation Checklist: Essential Papers You Need",
      excerpt: "A comprehensive checklist of all the documents required for successful export operations from India.",
      content: `Export documentation can seem overwhelming, but having a proper checklist ensures smooth operations and compliance with international trade regulations.

Commercial Invoice is the primary document that describes the transaction between exporter and importer. It should include details like product description, quantity, price, and terms of delivery.

Packing List provides detailed information about the shipment's contents, including weight, dimensions, and packaging type. This helps customs officials and freight handlers manage your cargo properly.

Bill of Lading (or Airway Bill) serves as a receipt for the goods and a contract of carriage. It's one of the most important documents in international shipping.

Certificate of Origin certifies the country where goods were manufactured. Many countries require this for customs clearance and to determine applicable duties.

Insurance Certificate protects your shipment against loss or damage during transit. While not always mandatory, it's highly recommended for valuable cargo.

Export License may be required for certain restricted products. Check with DGFT to determine if your products need special clearance.

Bank Certificate of Payment or Letter of Credit documentation ensures that payment will be received as per agreed terms.

GST documentation and other tax-related papers need to be in order for claiming benefits and complying with Indian tax laws.`,
      category: "Documentation",
      author: "Compliance Team",
      date: "2024-01-01",
      readTime: "7 min read",
      image: blogDocumentation,
    },
  ];

  const handleViewPost = (post: any) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive E-Commerce & Export Solutions
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
            <div className="text-center mb-12 animate-fade-in-up">
              <Globe className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Alibaba Supplier Membership
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Become a verified supplier on the world's largest B2B marketplace
              </p>
            </div>

            <Card className="mb-8 hover-lift border-2 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">What We Offer</CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Complete setup and optimization of your Alibaba presence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alibabaFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover-lift">
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
            <div className="text-center mb-12 animate-fade-in-up">
              <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Export Consulting Services
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Navigate the complexities of international trade with expert guidance
              </p>
            </div>

            <Card className="mb-8 hover-lift border-2 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Comprehensive Export Support</CardTitle>
                <CardDescription className="text-base md:text-lg">
                  From documentation to compliance, we handle it all
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover-lift">
                <Link to="/contact">
                  Start Exporting Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section id="digital" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Expert Guides & Resources
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Learn from our expertise - comprehensive guides to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="hover-lift group overflow-hidden border-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="mb-3 w-fit">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <Button 
                      onClick={() => handleViewPost(post)}
                      variant="link" 
                      className="p-0 text-accent"
                    >
                      Read Full Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="hover-lift border-2">
                <Link to="/blog">
                  View All Resources <ArrowRight className="ml-2 h-5 w-5" />
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
            <div className="text-center mb-12 animate-fade-in-up">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                Partner Program
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Join our network and earn attractive commissions
              </p>
            </div>

            <Card className="mb-8 hover-lift border-2 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Become a Sales Partner</CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Earn while helping businesses grow globally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partnerFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 hover-lift">
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

      <BlogPostModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPost(null);
        }}
      />
    </div>
  );
};

export default Services;

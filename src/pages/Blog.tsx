import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "export", name: "Export Guides" },
    { id: "alibaba", name: "Alibaba Tips" },
    { id: "documentation", name: "Documentation" },
    { id: "success", name: "Success Stories" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Exporting from India: Step-by-Step Process",
      excerpt: "Learn everything you need to know about starting your export business from India, including documentation, compliance, and best practices.",
      category: "export",
      author: "Competence Team",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "How to Become an Alibaba Verified Supplier: Requirements & Benefits",
      excerpt: "Discover the process of becoming a verified supplier on Alibaba.com and unlock access to millions of global buyers.",
      category: "alibaba",
      author: "Expert Team",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Top 10 Products to Export from India in 2024",
      excerpt: "Explore the most profitable product categories for Indian exporters and learn how to tap into global demand.",
      category: "export",
      author: "Market Research Team",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Export Documentation Checklist: Essential Papers You Need",
      excerpt: "A comprehensive checklist of all the documents required for successful export operations from India.",
      category: "documentation",
      author: "Compliance Team",
      date: "2024-01-01",
      readTime: "7 min read",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "From Local to Global: Success Story of a Textile Exporter",
      excerpt: "Read how a small textile manufacturer from Surat transformed into a successful global brand with our guidance.",
      category: "success",
      author: "Success Stories",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Optimizing Your Alibaba Product Listings for Maximum Visibility",
      excerpt: "Master the art of creating compelling product listings that rank higher and attract more buyers on Alibaba.",
      category: "alibaba",
      author: "Digital Team",
      date: "2023-12-20",
      readTime: "9 min read",
      image: "/placeholder.svg",
    },
  ];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Export Insights & Industry Expertise
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stay updated with the latest trends, tips, and strategies for successful international trade
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-accent hover:bg-accent/90" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {categories.find(c => c.id === post.category)?.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="link" className="p-0 mt-4 text-accent self-start">
                    <Link to={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Learn More About Exporting?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly export tips and industry insights delivered to your inbox.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">
              Contact Us for Expert Guidance <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import blogDocumentation from "@/assets/blog-documentation.jpg";
import blogAlibaba from "@/assets/blog-alibaba.jpg";
import blogExportProducts from "@/assets/blog-export-products.jpg";
import bannerFaq from "@/assets/banner-faq.jpg";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}

const Blog = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [adminPosts, setAdminPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Load posts from localStorage (Admin panel)
  useEffect(() => {
    const saved = localStorage.getItem("blogPosts");
    if (saved) {
      const posts = JSON.parse(saved);
      setAdminPosts(posts.filter((p: BlogPost) => p.status === "published"));
    }
  }, []);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "Alibaba Tips", name: "Alibaba Tips" },
    { id: "Export Guide", name: "Export Guides" },
    { id: "Success Stories", name: "Success Stories" },
    { id: "Industry News", name: "Industry News" },
    { id: "How-To Guides", name: "How-To Guides" },
  ];

  // Convert admin posts to display format
  const allPosts = adminPosts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.content.slice(0, 150) + "...",
    category: post.category.toLowerCase().replace(/ /g, ""),
    author: "Competence Team",
    date: post.createdAt,
    readTime: Math.ceil(post.content.split(" ").length / 200) + " min read",
    image: post.image || blogExportProducts,
  }));

  const filteredPosts = selectedCategory === "all"
    ? allPosts
    : allPosts.filter(post => {
        const postCategory = post.category.toLowerCase().replace(/ /g, "");
        const selectedCat = selectedCategory.toLowerCase().replace(/ /g, "");
        return postCategory === selectedCat || postCategory.includes(selectedCat) || selectedCat.includes(postCategory);
      });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerFaq} alt="Blog banner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Export Insights & Industry Expertise
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
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
                className={`min-h-[48px] ${selectedCategory === category.id ? "bg-accent hover:bg-accent/90" : ""}`}
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
              <Card key={post.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
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
                  <Button asChild className="mt-4 bg-accent hover:bg-accent/90 w-full min-h-[48px]">
                    <Link to={`/blog/${post.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            Want to Learn More About Exporting?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get expert guidance and personalized support for your export journey.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift shadow-xl">
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

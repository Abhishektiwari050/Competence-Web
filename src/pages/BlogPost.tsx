import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Lock } from "lucide-react";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import blogDocumentation from "@/assets/blog-documentation.jpg";
import blogAlibaba from "@/assets/blog-alibaba.jpg";
import blogExportProducts from "@/assets/blog-export-products.jpg";

interface AdminBlogPost {
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

const BlogPost = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isContentUnlocked, setIsContentUnlocked] = useState(false);
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);
  const [adminPosts, setAdminPosts] = useState<AdminBlogPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, id]);

  useEffect(() => {
    // Check if content is already unlocked via cookie
    const cookies = document.cookie.split(';');
    const hasUnlockedCookie = cookies.some(cookie => 
      cookie.trim().startsWith('contentUnlocked=true')
    );
    setIsContentUnlocked(hasUnlockedCookie);

    // Load admin posts
    const saved = localStorage.getItem("blogPosts");
    if (saved) {
      const posts = JSON.parse(saved);
      setAdminPosts(posts.filter((p: AdminBlogPost) => p.status === "published"));
    }
  }, []);

  const blogPosts = [
    {
      id: "1",
      title: "Complete Guide to Exporting from India: Step-by-Step Process",
      excerpt: "Learn everything you need to know about starting your export business from India, including documentation, compliance, and best practices.",
      content: `Starting an export business from India requires careful planning and understanding of various regulations. In this comprehensive guide, we'll walk you through every step of the export process.

## Getting Started with Export Business

First, you need to obtain an Import Export Code (IEC) from the Directorate General of Foreign Trade (DGFT). This is a mandatory requirement for anyone looking to export from India. The IEC is a 10-digit code that serves as a business identification number for importers and exporters.

### Step 1: Register Your Business

Before applying for an IEC, ensure your business is properly registered. You can operate as:
- Sole Proprietorship
- Partnership Firm
- Limited Liability Partnership (LLP)
- Private Limited Company
- Public Limited Company

### Step 2: Obtain IEC

The IEC application can be submitted online through the DGFT portal. You'll need:
- PAN card of the business
- Bank certificate with account details
- Business registration documents
- Address proof

### Step 3: Register with Export Promotion Councils

Next, you'll need to register with relevant export promotion councils and obtain necessary certifications like RCMC (Registration cum Membership Certificate). These certifications not only help with compliance but also provide access to various government schemes and benefits.

## Understanding Export Documentation

Understanding export documentation is crucial. Key documents include:

### Commercial Invoice
This is the primary document that describes the transaction between exporter and importer. It should include detailed information about products, prices, and terms.

### Packing List
Provides detailed information about the shipment's contents, including weight, dimensions, and packaging type. This helps customs officials and freight handlers manage your cargo properly.

### Bill of Lading
Serves as a receipt for the goods and a contract of carriage. It's one of the most important documents in international shipping.

### Certificate of Origin
Certifies the country where goods were manufactured. Many countries require this for customs clearance and to determine applicable duties.

## Market Research and Selection

Market research is another critical aspect. Identify your target markets, understand:
- Local regulations and import requirements
- Cultural preferences and buying patterns
- Competition and market gaps
- Distribution channels
- Pricing strategies

### Popular Export Markets for Indian Products

1. **United States**: Large market for textiles, handicrafts, and IT services
2. **UAE**: Gateway to Middle East markets
3. **China**: Growing demand for Indian goods
4. **UK**: Traditional market with strong ties
5. **Singapore**: Hub for Southeast Asian trade

## Payment Terms and Methods

Payment terms and methods need careful consideration. Common options include:

### Letter of Credit (LC)
Provides security to both parties. Bank guarantees payment once documents are submitted.

### Advance Payment
Buyer pays before shipment. Best for established relationships.

### Open Account
Goods shipped before payment. Requires strong trust.

### Documentary Collection
Bank acts as intermediary for document exchange.

## Logistics and Shipping

Finally, logistics and shipping arrangements require attention to detail:

### Choosing a Freight Forwarder
Select experienced freight forwarders who understand:
- International shipping regulations
- Documentation requirements
- Customs procedures
- Insurance options

### Understanding Incoterms
Incoterms define responsibilities between buyer and seller:
- **FOB**: Free On Board
- **CIF**: Cost, Insurance, and Freight
- **EXW**: Ex Works
- **DDP**: Delivered Duty Paid

## Government Schemes and Support

Take advantage of government schemes:

### Merchandise Exports from India Scheme (MEIS)
Rewards exporters with duty credit scrips.

### Export Promotion Capital Goods (EPCG) Scheme
Allows import of capital goods at zero duty.

### Advance Authorization Scheme
Duty-free import of inputs for export production.

## Conclusion

Starting an export business requires dedication and knowledge, but with proper guidance and planning, you can successfully tap into global markets. Our team at Competence Consulting is here to support you at every step of your export journey.`,
      category: "Export Guides",
      author: "Competence Team",
      date: "2024-01-15",
      readTime: "15 min read",
      image: blogExportProducts,
    },
    {
      id: "2",
      title: "How to Become an Alibaba Verified Supplier: Requirements & Benefits",
      excerpt: "Discover the process of becoming a verified supplier on Alibaba.com and unlock access to millions of global buyers.",
      content: `Becoming a verified supplier on Alibaba.com can significantly boost your export business by connecting you with millions of potential buyers worldwide. This comprehensive guide will walk you through the entire process.

## Why Become an Alibaba Verified Supplier?

Alibaba.com is the world's largest B2B marketplace, connecting suppliers with buyers from over 190 countries. As a verified supplier, you gain:

- Enhanced credibility and trust
- Higher visibility in search results
- Access to millions of global buyers
- Priority customer support
- Advanced analytics and insights
- Protection against fraud

## Understanding Alibaba Membership Plans

### Free Membership
- Basic product listings
- Limited features
- Lower visibility
- Good for testing the platform

### Gold Supplier Membership
- Enhanced visibility
- Verified by third-party
- Priority customer service
- Premium features
- Better search ranking
- Trade Assurance eligible

This is the most popular option for serious exporters.

### Choosing the Right Plan

Consider these factors:
- Your business size and budget
- Export experience
- Product categories
- Target markets
- Growth objectives

## The Verification Process

### Step 1: Registration
Create your Alibaba account with:
- Business email
- Company details
- Contact information
- Business license

### Step 2: Company Authentication
Alibaba's partner agencies verify:
- Business registration
- Company address
- Legal status
- Ownership details
- Financial standing

### Step 3: Documentation
Prepare required documents:
- Business license
- Tax registration
- Export license (if applicable)
- Bank statements
- Company profile
- Product certifications

### Step 4: Site Visit (for Gold Supplier)
Third-party agencies conduct:
- Physical verification of premises
- Production capacity assessment
- Quality control evaluation
- Management interviews

## Optimizing Your Alibaba Presence

### Product Listing Excellence

#### High-Quality Images
- Professional photography
- Multiple angles
- Size comparisons
- Packaging shots
- Lifestyle images
- White background for main image

#### Detailed Descriptions
Include:
- Product specifications
- Materials and components
- Dimensions and weights
- Packaging details
- Minimum order quantities
- Lead times
- Customization options

#### Keyword Optimization
Research and use:
- Industry-specific terms
- Buyer search patterns
- Product variations
- Technical specifications
- Application areas

### Understanding Alibaba's Algorithm

Key ranking factors:
1. **Response Time**: Reply within 24 hours
2. **Product Quality Score**: Based on completeness
3. **Transaction History**: Successful orders
4. **Buyer Feedback**: Ratings and reviews
5. **Activity Level**: Regular updates
6. **Trade Assurance**: Participation

## Pricing Strategy

### Competitive Pricing
- Research competitor prices
- Consider total landed cost
- Factor in shipping
- Include customization costs
- Offer volume discounts

### Transparent Pricing
Be clear about:
- Base price
- MOQ requirements
- Additional charges
- Payment terms
- Delivery conditions

## Managing Buyer Inquiries

### Quick Response
- Set up auto-responses
- Use mobile app
- Assign team members
- Create response templates

### Professional Communication
- Address buyers by name
- Understand requirements
- Provide detailed quotes
- Follow up regularly
- Build relationships

## Leveraging Alibaba Features

### Trade Assurance
Benefits:
- Buyer confidence
- Secure payments
- Order protection
- Dispute resolution

### Request for Quotation (RFQ)
- Monitor RFQ section daily
- Respond quickly
- Customize quotes
- Stand out from competitors

### Alibaba Analytics
Track:
- Product views
- Visitor sources
- Conversion rates
- Popular products
- Peak inquiry times

## Building Your Reputation

### Collect Reviews
- Encourage satisfied buyers
- Follow up after delivery
- Request feedback
- Address concerns promptly

### Showcase Certifications
Display:
- Quality certifications (ISO, CE, etc.)
- Industry awards
- Export licenses
- Testing reports

### Company Profile
Create compelling:
- About us section
- Company history
- Production capabilities
- Quality control processes
- Team introduction
- Factory tour video

## Common Mistakes to Avoid

1. Incomplete product information
2. Poor quality images
3. Slow response times
4. Unrealistic pricing
5. Ignoring buyer questions
6. No regular updates
7. Weak company profile

## Success Tips

### Daily Activities
- Check and respond to messages
- Update product listings
- Monitor competitors
- Engage with RFQs
- Analyze performance

### Monthly Tasks
- Add new products
- Refresh old listings
- Review analytics
- Update pricing
- Optimize keywords

## Conclusion

Becoming a successful Alibaba verified supplier requires commitment, but the rewards are substantial. With our guidance at Competence Consulting, you can navigate the platform effectively and maximize your export potential.`,
      category: "Alibaba Tips",
      author: "Expert Team",
      date: "2024-01-10",
      readTime: "12 min read",
      image: blogAlibaba,
    },
    {
      id: "3",
      title: "Export Documentation Checklist: Essential Papers You Need",
      excerpt: "A comprehensive checklist of all the documents required for successful export operations from India.",
      content: `Export documentation can seem overwhelming, but having a proper checklist ensures smooth operations and compliance with international trade regulations. This comprehensive guide covers all essential documents you need for successful exports.

## Why Documentation Matters

Proper documentation is crucial for:
- Customs clearance
- International payment
- Legal compliance
- Shipment tracking
- Insurance claims
- Dispute resolution

Missing or incorrect documents can lead to:
- Shipment delays
- Additional costs
- Customs penalties
- Payment issues
- Loss of buyer trust

## Commercial Documents

### 1. Commercial Invoice

The most important document in international trade.

**Must Include:**
- Exporter and importer details
- Invoice number and date
- Product description
- HS codes
- Quantity and unit price
- Total value
- Currency
- Payment terms
- Delivery terms (Incoterms)
- Country of origin

**Tips:**
- Be accurate and consistent
- Match with other documents
- Use official company letterhead
- Sign and stamp properly

### 2. Packing List

Provides detailed cargo information.

**Details Required:**
- Description of packages
- Number of packages
- Type of packaging
- Gross and net weight
- Dimensions
- Volume
- Marks and numbers
- Contents of each package

**Purpose:**
- Cargo handling
- Customs inspection
- Freight calculation
- Insurance coverage

### 3. Proforma Invoice

Preliminary invoice before shipment.

**Used For:**
- Buyer's import permission
- Letter of credit opening
- Foreign exchange arrangements
- Advance payment collection

## Transport Documents

### 4. Bill of Lading (B/L)

Contract of carriage for sea freight.

**Types:**
- **Original B/L**: Negotiable, required for cargo release
- **Sea Waybill**: Non-negotiable, faster clearance
- **Charter Party B/L**: For full container loads

**Key Elements:**
- Shipper and consignee
- Notify party
- Port of loading/discharge
- Vessel details
- Container numbers
- Description of goods
- Freight terms

### 5. Airway Bill (AWB)

For air cargo shipments.

**Features:**
- Non-negotiable
- Direct delivery to consignee
- Faster than ocean freight
- Higher cost

## Certification Documents

### 6. Certificate of Origin

Proves where goods were manufactured.

**Types:**
- **Non-Preferential**: General purpose
- **Preferential**: For countries with trade agreements
- **GSP**: Generalized System of Preferences

**Issued By:**
- Export promotion councils
- Chambers of commerce
- Trade associations

**Benefits:**
- Customs duty concessions
- Trade agreement benefits
- Import clearance

### 7. Quality/Inspection Certificate

Confirms product quality standards.

**Types:**
- Pre-shipment inspection
- Quality assurance certificate
- Testing laboratory reports
- Grade certificates

**Required For:**
- Certain products (food, pharma, etc.)
- Buyer requirements
- Import regulations
- Letter of credit terms

### 8. Phytosanitary Certificate

For agricultural products.

**Purpose:**
- Proves products are pest-free
- Meets importing country standards
- Required for plant products

## Insurance Documents

### 9. Marine Insurance Policy/Certificate

Protects against loss or damage.

**Coverage Options:**
- All risks
- Named perils
- Free from particular average (FPA)

**Information Needed:**
- Insured value
- Coverage type
- Transit route
- Commodity details

## Government Documents

### 10. Shipping Bill

Customs document for exports.

**Types:**
- Duty drawback shipping bill
- DEPB shipping bill
- Export promotion scheme shipping bill
- Free shipping bill

**Contains:**
- Exporter details
- Product description
- Value and quantity
- Port of destination
- Terms of shipment

### 11. Export License

Required for restricted items.

**When Needed:**
- Prohibited goods
- Restricted items
- Canalised products
- Special chemicals

**Issued By:**
- DGFT (Directorate General of Foreign Trade)
- Specific authorities for special items

### 12. GST Documentation

Tax-related documents.

**Required:**
- GST invoice
- Export declaration
- Shipping bill
- Bill of lading
- Bank realization certificate (for refund)

## Payment Documents

### 13. Letter of Credit (LC)

Bank guarantee for payment.

**Types:**
- Revocable/Irrevocable
- Confirmed/Unconfirmed
- Sight/Usance
- Transferable/Non-transferable

**Key Points:**
- Check terms carefully
- Meet all conditions
- Submit documents on time
- Avoid discrepancies

### 14. Bill of Exchange

Negotiable instrument for payment.

**Types:**
- Sight draft: Immediate payment
- Time draft: Payment after period
- Clean draft: Without documents
- Documentary draft: With documents

## Additional Documents

### 15. Export Declaration

Filed with customs.

**Purpose:**
- Statistical records
- Regulatory compliance
- Export benefits eligibility

### 16. Import License (Buyer's Country)

Sometimes required for:
- Restricted imports
- Quota items
- Controlled goods

### 17. Analysis Certificate

For products requiring:
- Chemical composition proof
- Purity certificates
- Grade specifications

## Digital Documentation

### Electronic Documents
Modern exports use:
- E-Way bills
- Digital signatures
- Electronic certificates
- Online customs filing

### Document Management Tips

**Organization:**
- Maintain master file
- Keep copies of everything
- Digital and physical backups
- Systematic filing

**Checklist Before Shipment:**
1. ✓ Commercial invoice
2. ✓ Packing list
3. ✓ Bill of lading/Airway bill
4. ✓ Certificate of origin
5. ✓ Insurance certificate
6. ✓ Inspection certificate
7. ✓ Export license (if needed)
8. ✓ Letter of credit
9. ✓ Shipping bill
10. ✓ GST documents

## Common Documentation Errors

**Avoid These Mistakes:**

1. **Inconsistencies**
   - Different product descriptions
   - Varying quantities
   - Mismatched values

2. **Missing Information**
   - Incomplete addresses
   - Missing signatures
   - Absent HS codes

3. **Incorrect Details**
   - Wrong consignee
   - Incorrect port names
   - Misspelled company names

4. **Late Submission**
   - Missing LC deadlines
   - Late customs filing
   - Delayed insurance

## Document Timeline

**Before Production:**
- Proforma invoice
- Letter of credit
- Export order

**During Production:**
- Quality certificates
- Inspection reports

**Before Shipment:**
- Commercial invoice
- Packing list
- Insurance certificate

**During Shipment:**
- Bill of lading
- Shipping bill
- Customs clearance

**After Shipment:**
- Bank documents
- Realization certificates
- Claim documents (if needed)

## Working with Freight Forwarders

Good freight forwarders help with:
- Documentation preparation
- Customs filing
- Shipping arrangements
- Door-to-door delivery

## Conclusion

Proper documentation is the backbone of successful export operations. While the list may seem long, with experience and the right guidance, it becomes routine. At Competence Consulting, we help exporters navigate documentation requirements smoothly, ensuring compliant and hassle-free international trade.`,
      category: "Documentation",
      author: "Compliance Team",
      date: "2024-01-01",
      readTime: "20 min read",
      image: blogDocumentation,
    },
  ];

  // Build display post
  type DisplayPost = {
    id: string;
    title: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    excerpt: string;
  };

  let post: DisplayPost | undefined;
  const adminPost = adminPosts.find(p => p.id === id);
  if (adminPost) {
    post = {
      id: adminPost.id,
      title: adminPost.title,
      content: adminPost.content,
      category: adminPost.category,
      author: "Admin",
      date: adminPost.createdAt,
      readTime: Math.ceil(adminPost.content.split(" ").length / 200) + " min read",
      image: adminPost.image || blogExportProducts,
      excerpt: adminPost.content.slice(0, 150) + "...",
    };
  } else {
    const defaultPost = blogPosts.find(p => p.id === id);
    if (defaultPost) {
      post = {
        id: defaultPost.id,
        title: defaultPost.title,
        content: defaultPost.content,
        category: defaultPost.category,
        author: "Competence Team",
        date: defaultPost.date,
        readTime: defaultPost.readTime,
        image: defaultPost.image,
        excerpt: defaultPost.excerpt,
      };
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleLeadSubmit = (data: { name: string; email: string; phone: string }) => {
    console.log("Lead captured:", data);
    setIsContentUnlocked(true);
  };

  // Split content for teaser (show first 50% for free)
  const contentParagraphs = post.content.split('\n\n');
  const teaserLength = Math.floor(contentParagraphs.length * 0.5);
  const teaserContent = contentParagraphs.slice(0, teaserLength).join('\n\n');
  const fullContent = post.content;

  // Simple content renderer - converts markdown-style formatting to HTML
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Skip empty paragraphs
      if (!paragraph.trim()) return null;

      // Headers (## Header)
      if (paragraph.startsWith('## ')) {
        const text = paragraph.replace(/^## /, '');
        return (
          <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
            {text}
          </h2>
        );
      }

      // Subheaders (### Subheader)
      if (paragraph.startsWith('### ')) {
        const text = paragraph.replace(/^### /, '');
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {text}
          </h3>
        );
      }

      // Lists (lines starting with -)
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
        return (
          <ul key={index} className="list-disc pl-6 space-y-2">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^- /, '')}</li>
            ))}
          </ul>
        );
      }

      // Numbered lists (lines starting with numbers)
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split('\n').filter(line => /^\d+\./.test(line.trim()));
        return (
          <ol key={index} className="list-decimal pl-6 space-y-2">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        );
      }

      // Regular paragraphs
      return (
        <p key={index} className="leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6 text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <Badge className="mb-4 bg-accent text-accent-foreground">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div>
                By {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl animate-fade-in-up">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none animate-fade-in-up animation-delay-200">
              <div className="text-muted-foreground leading-relaxed space-y-4">
                {renderContent(isContentUnlocked ? fullContent : teaserContent)}
              </div>

              {/* Lock Overlay */}
              {!isContentUnlocked && (
                <div className="relative mt-8">
                  {/* Gradient Fade */}
                  <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                  
                  {/* Lock Card */}
                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6 animate-bounce-in">
                        <Lock className="h-10 w-10 text-accent" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        Unlock Full Guide
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Get instant access to the complete {post.readTime} guide with detailed insights, expert tips, and actionable strategies. Plus, receive exclusive export resources directly to your inbox!
                      </p>
                      
                      <Button
                        onClick={() => setIsLeadPopupOpen(true)}
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg hover-lift"
                      >
                        Unlock Now - It's Free!
                        <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                      </Button>
                      
                      <p className="text-sm text-muted-foreground mt-6">
                        No credit card required • Instant access • 100% free
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Call to Action */}
            {isContentUnlocked && (
              <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border-2 border-primary/20 text-center animate-fade-in-up">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Need Expert Guidance?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team of export specialists is ready to help you implement these strategies for your business.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">
                    Schedule Free Consultation
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </article>

      <LeadCapturePopup
        isOpen={isLeadPopupOpen}
        onClose={() => setIsLeadPopupOpen(false)}
        onSubmit={handleLeadSubmit}
      />
    </div>
  );
};

export default BlogPost;

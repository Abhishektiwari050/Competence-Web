import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import bannerFaq from "@/assets/faq.jpeg";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Competence Consulting and what services do you offer?",
          answer: "Competence Consulting E-Commerce LLP is India's Authorized Alibaba channel partner. We offer comprehensive services including Alibaba supplier membership setup, export consulting, brand building, and complete export documentation support to help Indian businesses succeed in international markets.",
        },
        {
          question: "Who can benefit from your services?",
          answer: "Our services are perfect for SME business owners, manufacturers, export houses, traders, wholesalers, and anyone looking to export products from India or establish a strong presence in Global markets. Whether you're just starting or looking to expand your existing export business, we can help.",
        },
        {
          question: "How do I get started with Competence Consulting?",
          answer: "Getting started is easy! Simply fill out our contact form, give us a call, or reach out via WhatsApp. Our team will schedule a consultation to understand your business needs and recommend the best solutions for your specific requirements.",
        },
      ],
    },
    {
      category: "Alibaba Membership",
      questions: [
        {
          question: "What is Alibaba supplier membership and why do I need it?",
          answer: "Alibaba supplier membership gives you access to the world's largest B2B marketplace with millions of global buyers. As a verified supplier, you get enhanced visibility, trust badges, and priority placement in search results. It's essential for reaching international customers and growing your export business.",
        },
        {
          question: "Why Alibaba is better than its competitors?",
          answer: "Right Now Alibaba is the only B2B marketplace in the world with millions of global buyers. It has the largest verified buyer base which results in daily 5 lakh genuine enquiries. Also, Alibaba showcases your products in more than 200 countries.",
        },
        {
          question: "How much does Alibaba membership cost in India?",
          answer: "Alibaba membership pricing starts at Rs 8250/month and varies based on the package and features you choose. As an official channel partner, we can offer competitive rates and help you select the most cost-effective package for your business. Contact us for detailed pricing information and current offers.",
        },
        {
          question: "How long does it take to set up an Alibaba account?",
          answer: "With our expert guidance, the complete setup including verification typically takes 7-14 days. This includes company verification, product listing optimization, and initial training on using the platform effectively.",
        },
      ],
    },
    {
      category: "Export Process",
      questions: [
        {
          question: "What documents are needed to start an export business in India?",
          answer: "Essential documents include: IEC (Import Export Code), GST registration, PAN card, and product-specific certifications. We guide you through obtaining all necessary documentation.",
        },
        {
          question: "How do I get an IEC (Import Export Code)?",
          answer: "IEC can be obtained from the DGFT (Directorate General of Foreign Trade) website. The process takes only few hours. We provide complete assistance with the application process, documentation, and follow-up to ensure smooth approval.",
        },
        {
          question: "What are the export compliance requirements?",
          answer: "Export compliance includes following customs regulations, obtaining necessary licenses, proper product classification (HS codes), adhering to destination country regulations, and maintaining proper documentation. Our team helps ensure complete compliance for hassle-free exports.",
        },
        {
          question: "How does payment work in international trade?",
          answer: "Alibaba.com has recently launched Trade Assurance which is a secure way for the payments, it protects unforeseen circumstances between buyer and suppliers related to purchase. Also, Common payment methods include Letter of Credit (LC), advance payment via wire transfer, and payment through trade platforms. We guide you on the safest payment terms and help set up international banking facilities for smooth transactions.",
        },
      ],
    },
    {
      category: "Pricing & Packages",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing varies based on the services you need. We offer flexible packages for Alibaba membership, export consulting, and digital marketing. Contact us for a customized quote based on your specific business requirements and goals.",
        },
        {
          question: "Do you offer any free consultations?",
          answer: "Yes! We offer a free initial consultation to understand your business needs and recommend appropriate solutions. This helps you make an informed decision about which services will benefit your business most.",
        },
        {
          question: "Are there any hidden charges?",
          answer: "No, we believe in complete transparency. All costs are clearly outlined before you commit to any service. The pricing we quote includes all standard services, and any additional requirements will be discussed and agreed upon beforehand.",
        },
      ],
    },
    {
      category: "Support & Training",
      questions: [
        {
          question: "What kind of support do you provide after setup?",
          answer: "After the setup Alibaba.com provides you a dedicated service manager who will help you with ongoing support including platform training, inquiry management guidance, product listing optimization, performance monitoring, and regular strategy consultations.",
        },
        {
          question: "Do you provide training on using Alibaba?",
          answer: "Yes, comprehensive training is included in our service. We cover everything from managing inquiries and RFQs to optimizing product listings, using analytics, and best practices for engaging with international buyers.",
        },
        {
          question: "How much time do I need to dedicate on Alibaba.com?",
          answer: "Since, Alibaba.com is DIY platform so, we recommend dedicating at least 1-2 hours per day to Alibaba.com. This includes managing inquiries, responding to RFQs, optimizing product listings, and using analytics to track performance. Regular training sessions are also provided to ensure you stay up-to-date with the latest best practices.",
        },
        {
          question: "What if I don’t have time to manage this service myself?",
          answer: "We completely understand the value of your time. That’s why we offer some service packages that save you efforts and boost your business exponentially. Contact us to explore the best time-saving plan for you.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories
    .map(category => ({
      ...category,
      questions: category.questions.filter(
        q =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerFaq} alt="FAQ banner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              FAQ
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Find answers to common questions about our services, Alibaba, and export processes
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length > 0 ? (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold text-primary mb-6">
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg px-6">
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No questions found matching your search.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us and we'll provide personalized answers to your specific questions.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift shadow-xl">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

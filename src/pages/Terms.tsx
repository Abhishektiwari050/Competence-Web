import { Badge } from "@/components/ui/badge";

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Terms & Conditions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Competence Consulting E-Commerce LLP website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Competence Consulting provides e-commerce consulting, Alibaba supplier membership assistance, export consulting, digital marketing, and related services to businesses in India. All services are provided subject to these terms and any specific service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account information</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not misuse our services or interfere with their operation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Competence Consulting or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment for services must be made according to the agreed-upon terms in your service agreement. We reserve the right to suspend or terminate services for non-payment. All fees are non-refundable unless otherwise specified in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Service Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide excellent service, we make no guarantees regarding specific outcomes or results. Export success depends on various factors beyond our control, including market conditions, product quality, and client engagement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Competence Consulting shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the fees paid by you for the specific service giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services may involve third-party platforms (such as Alibaba). We are not responsible for the terms, policies, or performance of these third-party services. You agree to comply with their respective terms and conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This obligation continues even after the termination of services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with written notice according to the terms in the service agreement. We reserve the right to immediately terminate services for breach of these terms or for any conduct we deem inappropriate or harmful.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">11. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold Competence Consulting harmless from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="font-semibold text-primary">Competence Consulting E-Commerce LLP</p>
                  <p className="text-muted-foreground">Email: info@competenceconsulting.in</p>
                  <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                  <p className="text-muted-foreground">Address: Delhi NCR, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

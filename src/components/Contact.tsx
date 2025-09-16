import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-kraft/20 text-primary border-kraft mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Start Your 
            <span className="text-beetroot block">Wellness Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need personalized recommendations? 
            We're here to help you find the perfect organic superfoods for your lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're new to superfoods or a wellness enthusiast, our team is ready 
                to guide you toward the best organic products for your needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="border-kraft/30 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Get detailed product information and personalized recommendations
                      </p>
                      <a 
                        href="mailto:hello@baylithos.com" 
                        className="text-beetroot hover:text-beetroot-light font-medium"
                      >
                        hello@baylithos.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-kraft/30 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Call Us</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Speak with our wellness experts Monday - Friday, 9AM - 6PM
                      </p>
                      <a 
                        href="tel:+1-555-ORGANIC" 
                        className="text-beetroot hover:text-beetroot-light font-medium"
                      >
                        +1 (555) ORGANIC
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-kraft/30 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Visit Us</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Stop by our store to see and sample our products
                      </p>
                      <address className="text-beetroot not-italic">
                        123 Organic Avenue<br />
                        Wellness District, CA 90210
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:pl-8">
            <Card className="border-kraft/30 bg-gradient-organic p-8 text-center">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Start Your Order Today
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to experience the power of organic superfoods? Browse our collection 
                    or contact us for personalized product recommendations.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button variant="organic" size="lg" className="w-full shadow-natural">
                    Shop Now
                  </Button>
                  <Button variant="natural" size="lg" className="w-full">
                    Get Recommendations
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-kraft/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">Free</div>
                      <div className="text-xs text-muted-foreground">Shipping $50+</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">30-Day</div>
                      <div className="text-xs text-muted-foreground">Returns</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
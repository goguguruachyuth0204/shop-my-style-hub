import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Award, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our products are certified organic, grown without harmful pesticides or chemicals"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only the finest ingredients and maintain strict quality control standards"
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "A family business dedicated to bringing you the best of nature's bounty"
  },
  {
    icon: Shield,
    title: "Lab Tested",
    description: "Every batch is tested for purity, potency, and safety to ensure excellence"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="bg-kraft/20 text-primary border-kraft mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Committed to 
                <span className="text-beetroot block">Pure & Natural</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At BayLithos, we believe that nature provides the best ingredients for 
                  optimal health and wellness. Our journey began with a simple mission: 
                  to bring you the purest, most potent organic superfoods available.
                </p>
                <p>
                  Every product we create is carefully crafted using traditional methods 
                  combined with modern quality standards. We work directly with organic 
                  farmers who share our commitment to sustainable, chemical-free agriculture.
                </p>
                <p>
                  When you choose BayLithos, you're not just buying a product – you're 
                  joining a community that values health, sustainability, and the power 
                  of natural nutrition.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-kraft/30 bg-card hover:shadow-natural transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
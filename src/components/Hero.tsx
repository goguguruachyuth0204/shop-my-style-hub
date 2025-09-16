import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-organic.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-organic">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-kraft/20 text-primary border-kraft">
                <Leaf className="w-3 h-3 mr-1" />
                100% Organic & Natural
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                Pure Organic
                <span className="text-beetroot block">Superfood Powders</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Premium dried delights from nature's finest ingredients. 
                No added chemicals, just pure organic goodness in every scoop.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-beetroot" />
                <span className="text-foreground">Certified Organic</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4 text-beetroot" />
                <span className="text-foreground">Health Focused</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Leaf className="w-4 h-4 text-beetroot" />
                <span className="text-foreground">100% Natural</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="organic" size="lg" className="shadow-natural">
                Shop Our Products
              </Button>
              <Button variant="natural" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="Organic superfood powders and fresh ingredients beautifully arranged" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-6 shadow-product border border-kraft/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
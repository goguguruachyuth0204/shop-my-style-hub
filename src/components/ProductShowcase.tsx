import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import beetrootImage from "@/assets/beetroot-powder.jpg";
import turmericImage from "@/assets/turmeric-powder.jpg";
import spirulinaImage from "@/assets/spirulina-powder.jpg";

const products = [
  {
    id: 1,
    name: "Organic Beetroot Powder",
    price: 24.99,
    originalPrice: 29.99,
    image: beetrootImage,
    description: "Pure & natural beetroot powder, rich in nitrates and antioxidants",
    weight: "100GM",
    rating: 4.9,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Organic Turmeric Powder",
    price: 19.99,
    originalPrice: 24.99,
    image: turmericImage,
    description: "Premium turmeric powder with high curcumin content for wellness",
    weight: "100GM",
    rating: 4.8,
    badge: "Anti-inflammatory"
  },
  {
    id: 3,
    name: "Organic Spirulina Powder",
    price: 34.99,
    originalPrice: 39.99,
    image: spirulinaImage,
    description: "Nutrient-dense spirulina powder packed with proteins and vitamins",
    weight: "100GM",
    rating: 4.9,
    badge: "Superfood"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-kraft/20 text-primary border-kraft mb-4">
            Premium Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Organic Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium organic superfood powders, 
            each packed with natural goodness and free from harmful chemicals.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-hover transition-all duration-300 border-kraft/30 bg-card">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-beetroot/90 text-white border-none"
                  >
                    {product.badge}
                  </Badge>
                  {product.originalPrice > product.price && (
                    <Badge 
                      variant="destructive" 
                      className="absolute top-4 right-4 bg-accent text-accent-foreground"
                    >
                      SAVE ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating & Weight */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                      <span className="text-muted-foreground">(50+ reviews)</span>
                    </div>
                    <Badge variant="outline" className="border-kraft text-kraft">
                      {product.weight}
                    </Badge>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-kraft/20">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button variant="organic" size="sm" className="gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="kraft" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
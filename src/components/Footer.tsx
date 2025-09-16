import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kraft/20 border-t border-kraft/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-primary">BayLithos</h3>
                <p className="text-sm text-earth">Dried.Delights</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium organic superfood powders for a healthier, more vibrant you. 
              Nature's finest ingredients, carefully crafted with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Beetroot Powder</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Turmeric Powder</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Spirulina Powder</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Moringa Powder</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">All Products</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-beetroot transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Our Story</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Quality Promise</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Sustainability</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-beetroot transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Track Order</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-kraft/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 BayLithos. All rights reserved. Made with love for your wellness.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-beetroot transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              COSMIC <span className="text-primary">PIZZA</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Canada's best halal pizza & donair. Where quality meets customer service - 100% Halal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer" data-testid="link-footer-menu">
                    Menu
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ingredients">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer" data-testid="link-footer-ingredients">
                    Our Ingredients
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>100% Halal Certified</li>
              <li>Fresh Daily Ingredients</li>
              <li>Catering Available</li>
              <li>Franchise Opportunities</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="button-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Cosmic Pizza & Donair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

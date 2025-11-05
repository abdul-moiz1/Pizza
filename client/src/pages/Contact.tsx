import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  // TODO: Remove mock data - replace with API calls
  const [searchQuery, setSearchQuery] = useState('');

  const locations = [
    {
      id: 1,
      name: 'Downtown Location',
      address: '123 Main Street',
      city: 'Toronto, ON M5V 2T6',
      phone: '(416) 555-0123',
      hours: 'Mon-Sun: 11:00 AM - 11:00 PM'
    },
    {
      id: 2,
      name: 'North York Location',
      address: '456 Yonge Street',
      city: 'North York, ON M2N 5S3',
      phone: '(416) 555-0456',
      hours: 'Mon-Sun: 11:00 AM - 11:00 PM'
    },
    {
      id: 3,
      name: 'Mississauga Location',
      address: '789 Hurontario Street',
      city: 'Mississauga, ON L5B 1N2',
      phone: '(905) 555-0789',
      hours: 'Mon-Sun: 11:00 AM - 11:00 PM'
    }
  ];

  const filteredLocations = searchQuery
    ? locations.filter(loc =>
        loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : locations;

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            FIND YOUR <span className="text-primary">LOCATION</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your favorite Cosmic Pizza store close by
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <Input
                type="search"
                placeholder="Search by city or postal code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                data-testid="input-location-search"
              />
              <Button data-testid="button-search">
                Search
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location) => (
              <Card key={location.id} className="hover-elevate" data-testid={`card-location-${location.id}`}>
                <CardHeader>
                  <CardTitle>{location.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p>{location.address}</p>
                      <p className="text-muted-foreground">{location.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm">{location.phone}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm text-muted-foreground">{location.hours}</p>
                  </div>
                  <Button className="w-full" data-testid={`button-order-${location.id}`}>
                    Order from Here
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Have questions? Want to learn about catering or franchise opportunities?
                  We'd love to hear from you!
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Catering Inquiries</h3>
                    <p className="text-sm text-muted-foreground">
                      We cater all events - weddings, corporate gatherings, and special occasions.
                    </p>
                    <Button variant="outline" className="mt-4" data-testid="button-catering">
                      Learn More
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Franchise Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Be part of Cosmic. Join our dynamic team and grow with us.
                    </p>
                    <Button variant="outline" className="mt-4" data-testid="button-franchise">
                      Connect Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

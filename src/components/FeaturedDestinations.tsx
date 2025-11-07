import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const destinations = [
  {
    id: 'sigiriya',
    name: "Sigiriya Rock Fortress",
    description: "Ancient rock fortress and UNESCO World Heritage site with stunning frescoes and gardens",
    image: "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Central Province",
    duration: "Half day",
    rating: 4.8,
    category: "Historical"
  },
  {
    id: 'mirissa',
    name: "Mirissa Beach",
    description: "Perfect golden sand beach for whale watching, surfing, and tropical relaxation",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southern Coast",
    duration: "Full day",
    rating: 4.7,
    category: "Beach"
  },
  {
    id: 'nuwara-eliya',
    name: "Nuwara Eliya Tea Country",
    description: "Rolling green tea plantations and cool mountain climate in the hill country",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Hill Country",
    duration: "2-3 days",
    rating: 4.9,
    category: "Nature"
  },
  {
    id: 'yala',
    name: "Yala National Park",
    description: "Premier wildlife sanctuary famous for leopards, elephants, and diverse bird species",
    image: "https://images.unsplash.com/photo-1674556275226-47b6b393d623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGVsZXBoYW50JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southeast Coast",
    duration: "1-2 days",
    rating: 4.6,
    category: "Wildlife"
  }
];

interface FeaturedDestinationsProps {
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations', destination?: string) => void;
}

export function FeaturedDestinations({ onNavigate }: FeaturedDestinationsProps) {
  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Sri Lanka's Must-Visit Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ancient fortresses to pristine beaches, explore the diverse beauty of the Pearl of the Indian Ocean
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => onNavigate('destination', destination.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {destination.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => onNavigate('destinations')}
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
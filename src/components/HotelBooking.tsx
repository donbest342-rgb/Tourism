import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Waves } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const hotels = [
  {
    id: 1,
    name: "Shangri-La Colombo",
    description: "Luxury waterfront hotel in the heart of Colombo with stunning ocean views",
    image: "https://images.unsplash.com/photo-1732272106767-9dc0a3af6404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc1NTc4Njg2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Colombo",
    rating: 4.8,
    price: 280,
    originalPrice: 350,
    amenities: ["Free WiFi", "Pool", "Restaurant", "Parking"],
    category: "Luxury"
  },
  {
    id: 2,
    name: "Heritance Tea Factory",
    description: "Unique hotel converted from a colonial tea factory in the mountains",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Nuwara Eliya",
    rating: 4.7,
    price: 180,
    originalPrice: 220,
    amenities: ["Mountain Views", "Restaurant", "Spa", "Tours"],
    category: "Heritage"
  },
  {
    id: 3,
    name: "Cape Weligama Resort",
    description: "Clifftop resort with private villas overlooking the Indian Ocean",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Weligama",
    rating: 4.9,
    price: 450,
    originalPrice: 550,
    amenities: ["Private Beach", "Infinity Pool", "Spa", "Butler Service"],
    category: "Resort"
  }
];

const amenityIcons = {
  "Free WiFi": Wifi,
  "Pool": Waves,
  "Restaurant": Coffee,
  "Parking": Car,
  "Mountain Views": MapPin,
  "Spa": Star,
  "Tours": MapPin,
  "Private Beach": Waves,
  "Infinity Pool": Waves,
  "Butler Service": Star
};

interface HotelBookingProps {
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations') => void;
}

export function HotelBooking({ onNavigate }: HotelBookingProps) {
  return (
    <section id="hotels" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Hotels & Resorts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience world-class hospitality in Sri Lanka's finest accommodations, from luxury resorts to heritage hotels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {hotel.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{hotel.rating}</span>
                  </div>
                </div>
                {hotel.originalPrice > hotel.price && (
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-red-500 text-white">
                      Save ${hotel.originalPrice - hotel.price}
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                      {hotel.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-gray-500 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      {hotel.originalPrice > hotel.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ${hotel.originalPrice}
                        </span>
                      )}
                      <span className="text-xl font-bold text-green-600">
                        ${hotel.price}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">per night</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4">
                  {hotel.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 4).map((amenity) => {
                    const IconComponent = amenityIcons[amenity] || Star;
                    return (
                      <div key={amenity} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-1">
                        <IconComponent className="h-3 w-3" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => onNavigate('hotels')}
          >
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
}
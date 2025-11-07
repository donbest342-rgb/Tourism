import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { 
  Star, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  Waves, 
  Utensils,
  Dumbbell,
  Plane,
  Search,
  Filter,
  Heart,
  ArrowLeft
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HotelsPageProps {
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations') => void;
}

const allHotels = [
  {
    id: 1,
    name: "Shangri-La Colombo",
    description: "Luxury waterfront hotel in the heart of Colombo with stunning ocean views and world-class amenities",
    image: "https://images.unsplash.com/photo-1732272106767-9dc0a3af6404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3JpJTIwbGFua2F8ZW58MXx8fHwxNzU1OTQ3NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Colombo",
    rating: 4.8,
    price: 280,
    originalPrice: 350,
    amenities: ["Free WiFi", "Pool", "Restaurant", "Parking", "Spa", "Gym"],
    category: "Luxury",
    type: "City Hotel",
    reviews: 1247
  },
  {
    id: 2,
    name: "Heritance Tea Factory",
    description: "Unique hotel converted from a colonial tea factory in the cool mountains of Nuwara Eliya",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Nuwara Eliya",
    rating: 4.7,
    price: 180,
    originalPrice: 220,
    amenities: ["Mountain Views", "Restaurant", "Spa", "Tours", "Free WiFi"],
    category: "Heritage",
    type: "Mountain Resort",
    reviews: 892
  },
  {
    id: 3,
    name: "Cape Weligama Resort",
    description: "Clifftop resort with private villas overlooking the Indian Ocean and pristine beaches",
    image: "https://images.unsplash.com/photo-1743592322694-4ccb9c78b3bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMHNyaSUyMGxhbmthJTIwc3Vuc2V0fGVufDF8fHx8MTc1NTk0Nzc4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Weligama",
    rating: 4.9,
    price: 450,
    originalPrice: 550,
    amenities: ["Private Beach", "Infinity Pool", "Spa", "Butler Service", "Fine Dining"],
    category: "Resort",
    type: "Beach Resort",
    reviews: 634
  },
  {
    id: 4,
    name: "Amangalla Galle",
    description: "Historic luxury hotel within the UNESCO World Heritage site of Galle Fort",
    image: "https://images.unsplash.com/photo-1689075309597-65efe4f6347b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBzcmklMjBsYW5rYSUyMHBvb2x8ZW58MXx8fHwxNzU1OTQ3NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Galle",
    rating: 4.9,
    price: 520,
    originalPrice: 600,
    amenities: ["Historic Architecture", "Pool", "Spa", "Restaurant", "Library"],
    category: "Luxury",
    type: "Heritage Hotel",
    reviews: 456
  },
  {
    id: 5,
    name: "Cinnamon Lodge Habarana",
    description: "Eco-friendly resort surrounded by lush gardens and wildlife, perfect for safari adventures",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Habarana",
    rating: 4.5,
    price: 150,
    originalPrice: 180,
    amenities: ["Safari Tours", "Pool", "Restaurant", "Wildlife Viewing", "Garden Views"],
    category: "Eco Resort",
    type: "Wildlife Lodge",
    reviews: 1089
  },
  {
    id: 6,
    name: "The Fortress Koggala",
    description: "Contemporary beachfront resort with minimalist design and spectacular ocean views",
    image: "https://images.unsplash.com/photo-1674556275226-47b6b393d623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzcmklMjBsYW5rYSUyMGVsZXBoYW50JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Koggala",
    rating: 4.6,
    price: 320,
    originalPrice: 400,
    amenities: ["Beach Access", "Pool", "Spa", "Yoga Classes", "Water Sports"],
    category: "Boutique",
    type: "Beach Resort",
    reviews: 723
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
  "Butler Service": Star,
  "Fine Dining": Utensils,
  "Historic Architecture": MapPin,
  "Library": Coffee,
  "Safari Tours": MapPin,
  "Wildlife Viewing": MapPin,
  "Garden Views": MapPin,
  "Beach Access": Waves,
  "Yoga Classes": Dumbbell,
  "Water Sports": Waves,
  "Gym": Dumbbell
};

export function HotelsPage({ onNavigate }: HotelsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const filteredHotels = allHotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || hotel.location === locationFilter;
    const matchesCategory = categoryFilter === "all" || hotel.category === categoryFilter;
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    
    return matchesSearch && matchesLocation && matchesCategory && matchesPrice;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="text-green-600 hover:text-green-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Hotels & Resorts in Sri Lanka
              </h1>
              <p className="text-lg text-gray-600">
                {sortedHotels.length} properties found • From luxury resorts to boutique hotels
              </p>
            </div>

            {/* Search */}
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search hotels or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All locations</SelectItem>
                      <SelectItem value="Colombo">Colombo</SelectItem>
                      <SelectItem value="Galle">Galle</SelectItem>
                      <SelectItem value="Kandy">Kandy</SelectItem>
                      <SelectItem value="Nuwara Eliya">Nuwara Eliya</SelectItem>
                      <SelectItem value="Weligama">Weligama</SelectItem>
                      <SelectItem value="Habarana">Habarana</SelectItem>
                      <SelectItem value="Koggala">Koggala</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All categories</SelectItem>
                      <SelectItem value="Luxury">Luxury</SelectItem>
                      <SelectItem value="Resort">Resort</SelectItem>
                      <SelectItem value="Heritage">Heritage</SelectItem>
                      <SelectItem value="Boutique">Boutique</SelectItem>
                      <SelectItem value="Eco Resort">Eco Resort</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={600}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                </div>

                {/* Clear Filters */}
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setLocationFilter("all");
                    setCategoryFilter("all");
                    setPriceRange([0, 600]);
                    setSearchTerm("");
                  }}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sort */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-600">Showing {sortedHotels.length} results</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Best Rating</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Hotel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedHotels.map((hotel) => (
                <Card key={hotel.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
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
                    <div className="absolute top-3 right-3 flex gap-2">
                      <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{hotel.rating}</span>
                      </div>
                      <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {hotel.originalPrice > hotel.price && (
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-red-500 text-white">
                          Save ${hotel.originalPrice - hotel.price}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-green-600 transition-colors">
                          {hotel.name}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{hotel.location}</span>
                          <span className="text-xs text-gray-400">• {hotel.type}</span>
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

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {hotel.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {hotel.amenities.slice(0, 5).map((amenity) => {
                        const IconComponent = amenityIcons[amenity] || Star;
                        return (
                          <div key={amenity} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-1">
                            <IconComponent className="h-3 w-3" />
                            <span>{amenity}</span>
                          </div>
                        );
                      })}
                      {hotel.amenities.length > 5 && (
                        <div className="text-xs text-gray-500 px-2 py-1">
                          +{hotel.amenities.length - 5} more
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{hotel.rating}</span>
                        <span>({hotel.reviews} reviews)</span>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedHotels.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>No hotels found matching your criteria</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setLocationFilter("all");
                    setCategoryFilter("all");
                    setPriceRange([0, 600]);
                    setSearchTerm("");
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Star, 
  MapPin, 
  Clock, 
  Camera,
  Mountain,
  Waves,
  TreePine,
  Building,
  Search,
  Filter,
  Heart,
  ArrowLeft,
  Users,
  Calendar
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DestinationsPageProps {
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations', destination?: string) => void;
}

const allDestinations = [
  {
    id: 'sigiriya',
    name: "Sigiriya Rock Fortress",
    description: "Ancient rock fortress and UNESCO World Heritage site with stunning frescoes, impressive gardens, and a remarkable palace complex built by King Kashyapa in the 5th century.",
    image: "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Central Province",
    province: "Central",
    duration: "Half day",
    rating: 4.8,
    category: "Historical",
    difficulty: "Moderate",
    bestTime: "Dec-Apr",
    entryFee: "$30",
    highlights: ["Ancient frescoes", "Mirror Wall", "Lion's Gate", "Royal palace ruins"]
  },
  {
    id: 'mirissa',
    name: "Mirissa Beach",
    description: "Perfect golden sand beach renowned for whale watching, surfing, and tropical relaxation with crystal clear waters and swaying palm trees.",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southern Coast",
    province: "Southern",
    duration: "Full day",
    rating: 4.7,
    category: "Beach",
    difficulty: "Easy",
    bestTime: "Nov-Apr",
    entryFee: "Free",
    highlights: ["Whale watching", "Surfing", "Beach relaxation", "Sunset views"]
  },
  {
    id: 'nuwara-eliya',
    name: "Nuwara Eliya Tea Country",
    description: "Rolling green tea plantations and cool mountain climate in the hill country, known as 'Little England' for its colonial architecture.",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Hill Country",
    province: "Central",
    duration: "2-3 days",
    rating: 4.9,
    category: "Nature",
    difficulty: "Easy",
    bestTime: "Dec-Mar",
    entryFee: "Varies",
    highlights: ["Tea factory tours", "Mountain views", "Cool climate", "Colonial architecture"]
  },
  {
    id: 'yala',
    name: "Yala National Park",
    description: "Premier wildlife sanctuary famous for leopards, elephants, and diverse bird species. Best place in Sri Lanka for wildlife photography.",
    image: "https://images.unsplash.com/photo-1674556275226-47b6b393d623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGVsZXBoYW50JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Southeast Coast",
    province: "Uva",
    duration: "1-2 days",
    rating: 4.6,
    category: "Wildlife",
    difficulty: "Easy",
    bestTime: "Feb-Jul",
    entryFee: "$25",
    highlights: ["Leopard sightings", "Elephant herds", "Bird watching", "Safari adventures"]
  },
  {
    id: 'kandy',
    name: "Kandy Sacred City",
    description: "The cultural capital of Sri Lanka, home to the Temple of the Sacred Tooth Relic and beautiful botanical gardens.",
    image: "https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYW5keSUyMHRlbXBsZSUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc1NTk0Nzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Kandy",
    province: "Central",
    duration: "1-2 days",
    rating: 4.7,
    category: "Cultural",
    difficulty: "Easy",
    bestTime: "Dec-Apr",
    entryFee: "$10",
    highlights: ["Temple of Tooth", "Botanical Gardens", "Cultural shows", "Lake views"]
  },
  {
    id: 'galle',
    name: "Galle Dutch Fort",
    description: "UNESCO World Heritage Dutch colonial fort with cobblestone streets, ramparts, and stunning ocean views.",
    image: "https://images.unsplash.com/photo-1704797390682-76479a29dc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZSUyMGZvcnQlMjBzcmklMjBsYW5rYXxlbnwxfHx8fDE3NTU4NDQ1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Galle",
    province: "Southern",
    duration: "Half day",
    rating: 4.5,
    category: "Historical",
    difficulty: "Easy",
    bestTime: "Nov-Mar",
    entryFee: "Free",
    highlights: ["Dutch architecture", "Fort ramparts", "Museums", "Ocean views"]
  },
  {
    id: 'ella',
    name: "Ella Hill Country",
    description: "Picturesque mountain town famous for its train journey, Nine Arch Bridge, and stunning mountain vistas.",
    image: "https://images.unsplash.com/photo-1704797389166-c7dac99fc633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGxhJTIwc3JpJTIwbGFua2ElMjB0cmFpbnxlbnwxfHx8fDE3NTU4NDQ1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "Ella",
    province: "Uva",
    duration: "1-2 days",
    rating: 4.8,
    category: "Nature",
    difficulty: "Moderate",
    bestTime: "Dec-Mar",
    entryFee: "Free",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Train journey", "Tea plantations"]
  },
  {
    id: 'anuradhapura',
    name: "Anuradhapura Ancient City",
    description: "Ancient capital with sacred Buddhist temples, massive dagobas, and ruins dating back over 2,000 years.",
    image: "https://images.unsplash.com/photo-1524508570421-362500b7fd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWdpcml5YSUyMHJvY2slMjBzcmklMjBsYW5rYSUyMGFlcmlhbHxlbnwxfHx8fDE3NTU5Mzk0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "North Central",
    province: "North Central",
    duration: "Full day",
    rating: 4.6,
    category: "Historical",
    difficulty: "Easy",
    bestTime: "Dec-Mar",
    entryFee: "$25",
    highlights: ["Sacred Bodhi Tree", "Ancient dagobas", "Ruins exploration", "Buddhist heritage"]
  }
];

const categoryIcons = {
  "Historical": Building,
  "Beach": Waves,
  "Nature": TreePine,
  "Wildlife": Camera,
  "Cultural": Building,
  "Mountain": Mountain
};

export function DestinationsPage({ onNavigate }: DestinationsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [provinceFilter, setProvinceFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDestinations = allDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || destination.category === categoryFilter;
    const matchesProvince = provinceFilter === "all" || destination.province === provinceFilter;
    const matchesDuration = durationFilter === "all" || destination.duration === durationFilter;
    
    return matchesSearch && matchesCategory && matchesProvince && matchesDuration;
  });

  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      case "location":
        return a.location.localeCompare(b.location);
      default:
        return 0;
    }
  });

  const categories = ["Historical", "Beach", "Nature", "Wildlife", "Cultural"];
  const provinces = ["Central", "Southern", "Uva", "North Central"];
  const durations = ["Half day", "Full day", "1-2 days", "2-3 days"];

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
                Explore Sri Lanka's Top Destinations
              </h1>
              <p className="text-lg text-gray-600">
                {sortedDestinations.length} destinations found • From ancient temples to pristine beaches
              </p>
            </div>

            {/* Search */}
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search destinations..."
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
        {/* Category Quick Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={categoryFilter === "all" ? "default" : "outline"}
            onClick={() => setCategoryFilter("all")}
            className={categoryFilter === "all" ? "bg-green-600 hover:bg-green-700" : ""}
          >
            All Categories
          </Button>
          {categories.map((category) => {
            const IconComponent = categoryIcons[category] || Building;
            return (
              <Button
                key={category}
                variant={categoryFilter === category ? "default" : "outline"}
                onClick={() => setCategoryFilter(category)}
                className={categoryFilter === category ? "bg-green-600 hover:bg-green-700" : ""}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Province Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Province</label>
                  <Select value={provinceFilter} onValueChange={setProvinceFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All provinces" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All provinces</SelectItem>
                      {provinces.map(province => (
                        <SelectItem key={province} value={province}>{province}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Duration</label>
                  <Select value={durationFilter} onValueChange={setDurationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any duration</SelectItem>
                      {durations.map(duration => (
                        <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters */}
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setCategoryFilter("all");
                    setProvinceFilter("all");
                    setDurationFilter("all");
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
                <span className="text-gray-600">Showing {sortedDestinations.length} destinations</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Best Rating</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Destination Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedDestinations.map((destination) => {
                const CategoryIcon = categoryIcons[destination.category] || Building;
                return (
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
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {destination.category}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3 flex gap-2">
                        <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{destination.rating}</span>
                        </div>
                        <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-green-600 text-white">
                          {destination.entryFee}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="mb-3">
                        <h3 className="font-semibold text-lg group-hover:text-green-600 transition-colors mb-1">
                          {destination.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{destination.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{destination.duration}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {destination.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Best Time:</span>
                          <span className="font-medium">{destination.bestTime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Difficulty:</span>
                          <Badge variant="secondary" className={`
                            ${destination.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : ''}
                            ${destination.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${destination.difficulty === 'Hard' ? 'bg-red-100 text-red-800' : ''}
                          `}>
                            {destination.difficulty}
                          </Badge>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {destination.highlights.slice(0, 3).map((highlight, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                          {destination.highlights.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{destination.highlights.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button size="sm" variant="outline">
                              <Calendar className="h-4 w-4 mr-1" />
                              Plan Visit
                            </Button>
                            <Button size="sm" variant="outline">
                              <Users className="h-4 w-4 mr-1" />
                              Book Tour
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {sortedDestinations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>No destinations found matching your criteria</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setCategoryFilter("all");
                    setProvinceFilter("all");
                    setDurationFilter("all");
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
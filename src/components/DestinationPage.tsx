import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  MapPin, 
  Clock, 
  Star, 
  Calendar, 
  Users, 
  Camera, 
  Mountain, 
  Plane,
  Car,
  Utensils,
  Wifi,
  Shield,
  ThermometerSun,
  CloudRain
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DestinationPageProps {
  destination: string;
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination', destination?: string) => void;
}

// Mock destination data
const destinationData = {
  sigiriya: {
    name: "Sigiriya Rock Fortress",
    location: "Central Province, Sri Lanka",
    description: "Sigiriya, also known as Lion Rock, is an ancient rock fortress and UNESCO World Heritage site rising dramatically from the central plains of Sri Lanka. This archaeological wonder features stunning frescoes, impressive gardens, and a remarkable palace complex built by King Kashyapa in the 5th century.",
    images: [
      "https://images.unsplash.com/photo-1524508570421-362500b7fd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWdpcml5YSUyMHJvY2slMjBzcmklMjBsYW5rYSUyMGFlcmlhbHxlbnwxfHx8fDE3NTU5Mzk0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGthbmR5JTIwdGVtcGxlfGVufDF8fHx8MTc1NTkzOTQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    rating: 4.8,
    category: "Historical",
    duration: "Half day",
    bestTime: "December to April",
    difficulty: "Moderate",
    entryFee: "$30",
    highlights: [
      "Ancient frescoes of celestial maidens",
      "Mirror Wall with ancient graffiti",
      "Lion's Gate entrance",
      "Royal palace ruins",
      "Water gardens and terraces",
      "Panoramic views from the summit"
    ],
    activities: [
      "Rock climbing and hiking",
      "Photography tours",
      "Sunrise/sunset viewing",
      "Archaeological exploration",
      "Cultural heritage tours",
      "Bird watching"
    ],
    nearbyAttractions: [
      "Dambulla Cave Temple (20 km)",
      "Pidurangala Rock (2 km)",
      "Minneriya National Park (25 km)",
      "Polonnaruwa Ancient City (50 km)"
    ],
    weather: {
      temperature: "24-32°C",
      season: "Dry Season",
      rainfall: "Low"
    },
    facilities: [
      "Visitor Center",
      "Guided Tours",
      "Parking",
      "Restrooms",
      "Souvenir Shop",
      "First Aid"
    ]
  }
};

export function DestinationPage({ destination, onNavigate }: DestinationPageProps) {
  const data = destinationData[destination as keyof typeof destinationData] || destinationData.sigiriya;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <ImageWithFallback
          src={data.images[0]}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                {data.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.name}</h1>
            <div className="flex items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>{data.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{data.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="planning">Planning</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {data.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {data.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Key Highlights</h3>
                        <ul className="space-y-2">
                          {data.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Star className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Nearby Attractions</h3>
                        <ul className="space-y-2">
                          {data.nearbyAttractions.map((attraction, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{attraction}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activities" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Things to Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.activities.map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Camera className="h-5 w-5 text-green-600" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Photo Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.images.map((image, index) => (
                        <div key={index} className="aspect-video rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={image}
                            alt={`${data.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="planning" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Getting There</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Plane className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">By Air</p>
                          <p className="text-sm text-gray-600">Fly to Bandaranaike International Airport, then 3-hour drive</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">By Road</p>
                          <p className="text-sm text-gray-600">4-hour drive from Colombo, taxi or rental car available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Facilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {data.facilities.map((facility, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Entry Fee</span>
                  <span className="font-semibold">{data.entryFee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Best Time</span>
                  <span className="font-semibold">{data.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Difficulty</span>
                  <Badge variant="secondary">{data.difficulty}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{data.duration}</span>
                </div>
              </CardContent>
            </Card>

            {/* Weather */}
            <Card>
              <CardHeader>
                <CardTitle>Current Weather</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <ThermometerSun className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium">Temperature</p>
                    <p className="text-sm text-gray-600">{data.weather.temperature}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CloudRain className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Rainfall</p>
                    <p className="text-sm text-gray-600">{data.weather.rainfall}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Book Now */}
            <Card>
              <CardHeader>
                <CardTitle>Plan Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Tour
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Find Guide
                </Button>
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  Nearby Hotels
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to destinations */}
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            onClick={() => onNavigate('home')}
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            ← Back to All Destinations
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, MapPin, Users, Clock, Star, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const planningSteps = [
  {
    icon: Calendar,
    title: "Choose Your Dates",
    description: "Pick the perfect time to visit based on weather and activities you want to enjoy",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: MapPin,
    title: "Select Destinations",
    description: "Explore our curated list of must-visit places from beaches to mountains",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Users,
    title: "Plan Activities",
    description: "Discover unique experiences, tours, and adventures for your group",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Clock,
    title: "Create Itinerary",
    description: "Build a day-by-day schedule that maximizes your time in Sri Lanka",
    color: "bg-orange-100 text-orange-600"
  }
];

const quickPlans = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    duration: "7 Days",
    destinations: ["Kandy", "Sigiriya", "Anuradhapura"],
    image: "https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Ancient temples", "UNESCO sites", "Cultural shows"],
    rating: 4.8
  },
  {
    id: 2,
    title: "Beach & Wildlife Safari",
    duration: "10 Days",
    destinations: ["Mirissa", "Yala", "Galle"],
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Whale watching", "Leopard spotting", "Beach relaxation"],
    rating: 4.9
  },
  {
    id: 3,
    title: "Hill Country Adventure",
    duration: "5 Days",
    destinations: ["Ella", "Nuwara Eliya", "Adam's Peak"],
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlights: ["Train journeys", "Tea factory tours", "Mountain hikes"],
    rating: 4.7
  }
];

interface TripPlanningProps {
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations' | 'plan-trip' | 'travel-guide') => void;
}

export function TripPlanning({ onNavigate }: TripPlanningProps) {
  return (
    <section id="plan" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plan Your Perfect Sri Lankan Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From cultural treasures to pristine beaches, create an unforgettable journey with our expert planning tools
          </p>
        </div>

        {/* Planning Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {planningSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.title} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${step.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Plan Templates */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Popular Itinerary Templates
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickPlans.map((plan) => (
              <Card key={plan.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{plan.rating}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg group-hover:text-green-600 transition-colors">
                      {plan.title}
                    </h4>
                    <span className="text-sm text-gray-500 font-medium">{plan.duration}</span>
                  </div>

                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Destinations:</strong> {plan.destinations.join(", ")}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {plan.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => onNavigate('plan-trip')}
                  >
                    Use This Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => onNavigate('plan-trip')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Start Planning Your Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('travel-guide')}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Browse Travel Guide
            </Button>
          </div>
          
          <p className="text-gray-600">
            Not sure where to start? Check out our comprehensive travel guide for insider tips and essential information.
          </p>
        </div>
      </div>
    </section>
  );
}
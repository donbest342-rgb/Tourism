import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft,
  Plane,
  MapPin,
  CreditCard,
  Shield,
  Phone,
  Clock,
  ThermometerSun,
  Utensils,
  Car,
  Camera,
  Heart,
  AlertTriangle,
  Info,
  Zap,
  Wifi
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TravelGuidePageProps {
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations' | 'plan-trip' | 'travel-guide') => void;
}

const essentialInfo = [
  {
    icon: Plane,
    title: "Visa Requirements",
    content: "30-day tourist visa on arrival for most countries. Passport valid for 6 months required.",
    color: "blue"
  },
  {
    icon: CreditCard,
    title: "Currency",
    content: "Sri Lankan Rupee (LKR). USD also widely accepted. Credit cards accepted in major establishments.",
    color: "green"
  },
  {
    icon: Phone,
    title: "Language",
    content: "Sinhala and Tamil are official languages. English widely spoken in tourist areas.",
    color: "purple"
  },
  {
    icon: Clock,
    title: "Time Zone",
    content: "UTC +5:30 (Same as India). No daylight saving time.",
    color: "orange"
  }
];

const regions = [
  {
    name: "Western Province",
    highlights: ["Colombo", "Negombo", "Mount Lavinia"],
    description: "Commercial capital with beaches and urban attractions",
    image: "https://images.unsplash.com/photo-1732272106767-9dc0a3af6404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3JpJTIwbGFua2F8ZW58MXx8fHwxNzU1OTQ3NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Central Province",
    highlights: ["Kandy", "Nuwara Eliya", "Sigiriya"],
    description: "Cultural heart with ancient temples and tea country",
    image: "https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYW5keSUyMHRlbXBsZSUyMHNyaSUyMGxhbmthfGVufDF8fHx8MTc1NTk0Nzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Southern Province",
    highlights: ["Galle", "Mirissa", "Yala National Park"],
    description: "Historic forts, beautiful beaches, and wildlife",
    image: "https://images.unsplash.com/photo-1715431789876-acc2751a95be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU1Nzg2ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Hill Country",
    highlights: ["Ella", "Adam's Peak", "Horton Plains"],
    description: "Scenic mountains, tea plantations, and cool climate",
    image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzU1Nzg2ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const practicalTips = [
  {
    category: "Transportation",
    icon: Car,
    tips: [
      "Trains are scenic and affordable for long distances",
      "Tuk-tuks are great for short distances - always negotiate",
      "Private drivers offer flexibility for sightseeing",
      "Public buses are cheap but can be crowded"
    ]
  },
  {
    category: "Health & Safety",
    icon: Shield,
    tips: [
      "Drink bottled water to avoid stomach issues",
      "Use mosquito repellent, especially in tropical areas",
      "Sun protection is essential - strong UV rays",
      "Travel insurance highly recommended"
    ]
  },
  {
    category: "Cultural Etiquette",
    icon: Heart,
    tips: [
      "Remove shoes when entering temples",
      "Dress modestly, especially at religious sites",
      "Don't point feet toward Buddha statues",
      "Ask permission before photographing people"
    ]
  },
  {
    category: "Food & Dining",
    icon: Utensils,
    tips: [
      "Try rice and curry - the national dish",
      "Street food is generally safe and delicious",
      "Spice levels can be intense - start mild",
      "Fresh tropical fruits are abundant and cheap"
    ]
  }
];

const seasons = [
  {
    name: "Peak Season",
    period: "December - March",
    weather: "Dry and sunny on west/south coasts",
    pros: ["Perfect beach weather", "Ideal for wildlife viewing", "Cultural festivals"],
    cons: ["Higher prices", "Crowded tourist areas"],
    color: "green"
  },
  {
    name: "Shoulder Season",
    period: "April - June",
    weather: "Hot and humid, some rain",
    pros: ["Lower prices", "Fewer crowds", "Good for hill country"],
    cons: ["Very hot temperatures", "Some rain showers"],
    color: "yellow"
  },
  {
    name: "Monsoon Season",
    period: "July - November",
    weather: "Heavy rain on west/south coasts",
    pros: ["Lowest prices", "Lush green landscapes", "Good for east coast"],
    cons: ["Heavy rainfall", "Some attractions may close"],
    color: "blue"
  }
];

export function TravelGuidePage({ onNavigate }: TravelGuidePageProps) {
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
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Complete Sri Lanka Travel Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know for an amazing trip to the Pearl of the Indian Ocean
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="essentials" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="essentials">Essentials</TabsTrigger>
            <TabsTrigger value="regions">Regions</TabsTrigger>
            <TabsTrigger value="seasons">Best Time</TabsTrigger>
            <TabsTrigger value="practical">Practical Tips</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
          </TabsList>

          <TabsContent value="essentials" className="space-y-6">
            {/* Essential Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {essentialInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card key={info.title} className="text-center">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        info.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        info.color === 'green' ? 'bg-green-100 text-green-600' :
                        info.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-sm text-gray-600">{info.content}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5" />
                    Entry Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Visa Information</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 30-day tourist visa on arrival for most countries</li>
                      <li>• $20 USD visa fee (some countries exempt)</li>
                      <li>• Passport valid for at least 6 months</li>
                      <li>• Return/onward ticket required</li>
                      <li>• Apply online for Electronic Travel Authorization (ETA)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Customs Regulations</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Duty-free: 2L alcohol, 200 cigarettes</li>
                      <li>• Prohibited: Drugs, weapons, pornography</li>
                      <li>• Declare amounts over $15,000 USD</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Money & Banking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Currency Exchange</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 1 USD ≈ 320 LKR (rates fluctuate)</li>
                      <li>• Exchange at banks for best rates</li>
                      <li>• Airport exchange available 24/7</li>
                      <li>• Hotels offer convenience but poor rates</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Payment Methods</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Cash preferred for small vendors</li>
                      <li>• Credit cards accepted in major establishments</li>
                      <li>• ATMs widely available in cities</li>
                      <li>• Mobile payments gaining popularity</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((region) => (
                <Card key={region.name} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Destinations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.highlights.map((highlight) => (
                          <Badge key={highlight} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seasons" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {seasons.map((season) => (
                <Card key={season.name} className={`border-l-4 ${
                  season.color === 'green' ? 'border-l-green-500' :
                  season.color === 'yellow' ? 'border-l-yellow-500' :
                  'border-l-blue-500'
                }`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ThermometerSun className="h-5 w-5" />
                      {season.name}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {season.period}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{season.weather}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-green-600">Pros:</h4>
                      <ul className="text-sm space-y-1">
                        {season.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-orange-600">Cons:</h4>
                      <ul className="text-sm space-y-1">
                        {season.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalTips.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Card key={section.category}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5" />
                        {section.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Practical Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="h-5 w-5" />
                    Internet & Communication
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">Mobile Networks</h4>
                    <p className="text-sm text-gray-600">Dialog, Mobitel, Hutch offer good coverage. Buy SIM cards at airport.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Internet Access</h4>
                    <p className="text-sm text-gray-600">WiFi available in most hotels, cafes, and restaurants. 4G coverage in major cities.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Electricity & Utilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">Power Supply</h4>
                    <p className="text-sm text-gray-600">230V, 50Hz. Type D, G, and M plugs. Bring universal adapter.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Water & Sanitation</h4>
                    <p className="text-sm text-gray-600">Tap water not safe to drink. Bottled water widely available and affordable.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Police Emergency</span>
                      <Badge variant="outline" className="bg-red-50 text-red-700">119</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Medical Emergency</span>
                      <Badge variant="outline" className="bg-red-50 text-red-700">110</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tourist Police</span>
                      <Badge variant="outline" className="bg-red-50 text-red-700">1912</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fire & Rescue</span>
                      <Badge variant="outline" className="bg-red-50 text-red-700">111</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Important Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Embassy Contacts</h4>
                    <p className="text-sm text-gray-600 mb-2">Contact your embassy in case of lost passport or legal issues:</p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• US Embassy Colombo: +94 11 249 8500</li>
                      <li>• UK Embassy Colombo: +94 11 539 0639</li>
                      <li>• Australian Embassy: +94 11 539 0695</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Health Facilities</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Apollo Hospital Colombo (Private)</li>
                      <li>• Asiri Medical Hospital (Private)</li>
                      <li>• General Hospital Colombo (Public)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Travel Insurance Reminder</h3>
                    <p className="text-blue-800 text-sm">
                      Always have comprehensive travel insurance that covers medical emergencies, trip cancellation, 
                      and personal belongings. Keep digital and physical copies of all important documents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-4">
            <Button onClick={() => onNavigate('plan-trip')} className="bg-green-600 hover:bg-green-700">
              Start Planning Your Trip
            </Button>
            <Button variant="outline" onClick={() => onNavigate('destinations')}>
              Browse Destinations
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Ready to explore Sri Lanka? Use our trip planner to create your perfect itinerary!
          </p>
        </div>
      </div>
    </div>
  );
}
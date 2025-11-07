import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { 
  Calendar as CalendarIcon,
  MapPin, 
  Clock, 
  Users, 
  DollarSign,
  Plane,
  Car,
  Camera,
  Mountain,
  Waves,
  Building,
  TreePine,
  ArrowLeft,
  Plus,
  Trash2,
  Save,
  Download,
  Share
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PlanTripPageProps {
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations' | 'plan-trip' | 'travel-guide') => void;
}

interface TripDay {
  id: string;
  date: string;
  destinations: string[];
  activities: string[];
  accommodation: string;
  notes: string;
}

interface TripPlan {
  name: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: number;
  interests: string[];
  days: TripDay[];
}

const destinations = [
  { id: 'colombo', name: 'Colombo', region: 'Western', type: 'City' },
  { id: 'kandy', name: 'Kandy', region: 'Central', type: 'Cultural' },
  { id: 'sigiriya', name: 'Sigiriya', region: 'Central', type: 'Historical' },
  { id: 'galle', name: 'Galle', region: 'Southern', type: 'Historical' },
  { id: 'ella', name: 'Ella', region: 'Uva', type: 'Nature' },
  { id: 'mirissa', name: 'Mirissa', region: 'Southern', type: 'Beach' },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya', region: 'Central', type: 'Nature' },
  { id: 'yala', name: 'Yala National Park', region: 'Uva', type: 'Wildlife' }
];

const activities = [
  'Temple visits', 'Beach relaxation', 'Wildlife safari', 'Tea plantation tours',
  'Cultural shows', 'Hiking', 'Whale watching', 'Train journeys',
  'Photography', 'Local cuisine', 'Shopping', 'Spa treatments'
];

const interests = [
  'History & Culture', 'Nature & Wildlife', 'Beaches', 'Adventure',
  'Photography', 'Food & Cuisine', 'Relaxation', 'Spiritual'
];

const budgetRanges = [
  { label: '$500 - $1,000', value: 750 },
  { label: '$1,000 - $2,000', value: 1500 },
  { label: '$2,000 - $3,000', value: 2500 },
  { label: '$3,000+', value: 4000 }
];

export function PlanTripPage({ onNavigate }: PlanTripPageProps) {
  const [activeTab, setActiveTab] = useState("basics");
  const [tripPlan, setTripPlan] = useState<TripPlan>({
    name: '',
    startDate: '',
    endDate: '',
    travelers: 2,
    budget: 1500,
    interests: [],
    days: []
  });

  const addDay = () => {
    const newDay: TripDay = {
      id: `day-${Date.now()}`,
      date: '',
      destinations: [],
      activities: [],
      accommodation: '',
      notes: ''
    };
    setTripPlan(prev => ({
      ...prev,
      days: [...prev.days, newDay]
    }));
  };

  const removeDay = (dayId: string) => {
    setTripPlan(prev => ({
      ...prev,
      days: prev.days.filter(day => day.id !== dayId)
    }));
  };

  const updateDay = (dayId: string, updates: Partial<TripDay>) => {
    setTripPlan(prev => ({
      ...prev,
      days: prev.days.map(day => 
        day.id === dayId ? { ...day, ...updates } : day
      )
    }));
  };

  const generateItinerary = () => {
    // Auto-generate itinerary based on preferences
    const days = [];
    if (tripPlan.startDate && tripPlan.endDate) {
      const startDate = new Date(tripPlan.startDate);
      const endDate = new Date(tripPlan.endDate);
      const dayCount = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      
      // Generate suggested itinerary based on interests
      for (let i = 0; i < dayCount; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        
        const suggestedDestinations = destinations.slice(0, Math.min(2, destinations.length));
        const suggestedActivities = activities.slice(0, 3);
        
        days.push({
          id: `day-${i + 1}`,
          date: date.toISOString().split('T')[0],
          destinations: suggestedDestinations.map(d => d.name),
          activities: suggestedActivities,
          accommodation: '',
          notes: `Day ${i + 1} suggestions based on your interests`
        });
      }
    }
    
    setTripPlan(prev => ({ ...prev, days }));
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

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
                Plan Your Perfect Sri Lankan Adventure
              </h1>
              <p className="text-lg text-gray-600">
                Create a personalized itinerary with our step-by-step trip planner
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save Trip
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="basics">Trip Basics</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="budget">Budget & Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trip Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tripName">Trip Name</Label>
                    <Input
                      id="tripName"
                      placeholder="My Sri Lankan Adventure"
                      value={tripPlan.name}
                      onChange={(e) => setTripPlan(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Select 
                      value={tripPlan.travelers.toString()} 
                      onValueChange={(value) => setTripPlan(prev => ({ ...prev, travelers: parseInt(value) }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="5">5+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="startDate"
                        type="date"
                        value={tripPlan.startDate}
                        onChange={(e) => setTripPlan(prev => ({ ...prev, startDate: e.target.value }))}
                        className="pl-10"
                      />
                    </div>
                    {tripPlan.startDate && (
                      <p className="text-sm text-gray-600">{formatDate(tripPlan.startDate)}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="endDate"
                        type="date"
                        value={tripPlan.endDate}
                        onChange={(e) => setTripPlan(prev => ({ ...prev, endDate: e.target.value }))}
                        className="pl-10"
                        min={tripPlan.startDate}
                      />
                    </div>
                    {tripPlan.endDate && (
                      <p className="text-sm text-gray-600">{formatDate(tripPlan.endDate)}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setActiveTab("preferences")}>
                    Next: Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What interests you most?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interests.map((interest) => {
                    const isSelected = tripPlan.interests.includes(interest);
                    return (
                      <Button
                        key={interest}
                        variant={isSelected ? "default" : "outline"}
                        className={`p-4 h-auto ${isSelected ? 'bg-green-600 hover:bg-green-700' : ''}`}
                        onClick={() => {
                          setTripPlan(prev => ({
                            ...prev,
                            interests: isSelected 
                              ? prev.interests.filter(i => i !== interest)
                              : [...prev.interests, interest]
                          }));
                        }}
                      >
                        {interest}
                      </Button>
                    );
                  })}
                </div>

                <div className="space-y-2">
                  <Label>Budget Range (USD)</Label>
                  <Select 
                    value={tripPlan.budget.toString()} 
                    onValueChange={(value) => setTripPlan(prev => ({ ...prev, budget: parseInt(value) }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value.toString()}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("basics")}>
                    Previous
                  </Button>
                  <Button onClick={() => setActiveTab("itinerary")}>
                    Next: Build Itinerary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="itinerary" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Itinerary</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={generateItinerary}>
                      <Camera className="h-4 w-4 mr-2" />
                      Auto-Generate
                    </Button>
                    <Button onClick={addDay}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Day
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {tripPlan.days.length === 0 ? (
                  <div className="text-center py-12">
                    <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500 mb-4">No days planned yet</p>
                    <div className="flex justify-center gap-3">
                      <Button onClick={generateItinerary}>Auto-Generate Itinerary</Button>
                      <Button variant="outline" onClick={addDay}>Add Day Manually</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {tripPlan.days.map((day, index) => (
                      <Card key={day.id} className="border-l-4 border-l-green-600">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary">Day {index + 1}</Badge>
                              {day.date && (
                                <span className="text-sm text-gray-600">
                                  {formatDate(day.date)}
                                </span>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeDay(day.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Date</Label>
                              <Input
                                type="date"
                                value={day.date}
                                onChange={(e) => updateDay(day.id, { date: e.target.value })}
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label>Destination</Label>
                              <Select 
                                value={day.destinations[0] || ""} 
                                onValueChange={(value) => updateDay(day.id, { destinations: [value] })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select destination" />
                                </SelectTrigger>
                                <SelectContent>
                                  {destinations.map((dest) => (
                                    <SelectItem key={dest.id} value={dest.name}>
                                      {dest.name} ({dest.type})
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Activity</Label>
                            <Select 
                              value={day.activities[0] || ""} 
                              onValueChange={(value) => updateDay(day.id, { activities: [value] })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select activity" />
                              </SelectTrigger>
                              <SelectContent>
                                {activities.map((activity) => (
                                  <SelectItem key={activity} value={activity}>
                                    {activity}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label>Accommodation</Label>
                            <Input
                              placeholder="Hotel or accommodation name"
                              value={day.accommodation}
                              onChange={(e) => updateDay(day.id, { accommodation: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Notes</Label>
                            <Textarea
                              placeholder="Add notes, reminders, or special instructions..."
                              value={day.notes}
                              onChange={(e) => updateDay(day.id, { notes: e.target.value })}
                              rows={2}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("preferences")}>
                    Previous
                  </Button>
                  <Button onClick={() => setActiveTab("budget")}>
                    Next: Budget & Tips
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Budget Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accommodation (40%)</span>
                      <span className="font-medium">${Math.round(tripPlan.budget * 0.4)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transportation (25%)</span>
                      <span className="font-medium">${Math.round(tripPlan.budget * 0.25)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Food & Dining (20%)</span>
                      <span className="font-medium">${Math.round(tripPlan.budget * 0.2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Activities & Tours (10%)</span>
                      <span className="font-medium">${Math.round(tripPlan.budget * 0.1)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Miscellaneous (5%)</span>
                      <span className="font-medium">${Math.round(tripPlan.budget * 0.05)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total Budget</span>
                        <span>${tripPlan.budget}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Money-Saving Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Travel during off-season (May-September) for better rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Use public transport and local buses for budget travel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Eat at local restaurants and street food for authentic cuisine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Book accommodations in advance for better deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Consider guesthouses and homestays over luxury hotels</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("itinerary")}>
                Previous
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Complete Trip Plan
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
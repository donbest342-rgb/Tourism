import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1737008233497-e68685c8142f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZSUyMHNpZ2lyaXlhfGVufDF8fHx8MTc1NTc4Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sigiriya Rock Fortress, Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discover the Pearl of the Indian Ocean
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Explore ancient temples, pristine beaches, lush tea plantations, and vibrant culture in beautiful Sri Lanka
        </p>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Destination
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="colombo">Colombo</SelectItem>
                  <SelectItem value="kandy">Kandy</SelectItem>
                  <SelectItem value="galle">Galle</SelectItem>
                  <SelectItem value="ella">Ella</SelectItem>
                  <SelectItem value="sigiriya">Sigiriya</SelectItem>
                  <SelectItem value="nuwara-eliya">Nuwara Eliya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Check-in
              </label>
              <Input type="date" className="bg-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Check-out
              </label>
              <Input type="date" className="bg-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Guests
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Search Hotels & Experiences
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
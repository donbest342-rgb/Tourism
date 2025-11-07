import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedDestinations } from "./components/FeaturedDestinations";
import { HotelBooking } from "./components/HotelBooking";
import { TripPlanning } from "./components/TripPlanning";
import { Footer } from "./components/Footer";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { DestinationPage } from "./components/DestinationPage";
import { HotelsPage } from "./components/HotelsPage";
import { DestinationsPage } from "./components/DestinationsPage";
import { PlanTripPage } from "./components/PlanTripPage";
import { TravelGuidePage } from "./components/TravelGuidePage";

export type Page = 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations' | 'plan-trip' | 'travel-guide';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const navigateTo = (page: Page, destination?: string) => {
    setCurrentPage(page);
    if (destination) {
      setSelectedDestination(destination);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'signin':
        return <SignIn onNavigate={navigateTo} />;
      case 'signup':
        return <SignUp onNavigate={navigateTo} />;
      case 'destination':
        return <DestinationPage destination={selectedDestination} onNavigate={navigateTo} />;
      case 'hotels':
        return <HotelsPage onNavigate={navigateTo} />;
      case 'destinations':
        return <DestinationsPage onNavigate={navigateTo} />;
      case 'plan-trip':
        return <PlanTripPage onNavigate={navigateTo} />;
      case 'travel-guide':
        return <TravelGuidePage onNavigate={navigateTo} />;
      default:
        return (
          <>
            <Hero />
            <FeaturedDestinations onNavigate={navigateTo} />
            <HotelBooking onNavigate={navigateTo} />
            <TripPlanning onNavigate={navigateTo} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      {renderPage()}
      <Footer />
    </div>
  );
}
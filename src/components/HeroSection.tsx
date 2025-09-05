import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Trophy } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  const handleJoinClan = () => {
    window.open('https://link.clashofclans.com/en?action=OpenClanProfile&tag=PJ00QGGQ', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-medieval text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 drop-shadow-lg">
          <span className="text-primary">Ascended</span>
          <br />
          <span className="text-foreground">Angels</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
          Rising together since 2015
        </p>
        
        <p className="text-lg sm:text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to Ascended Angels — a clan built on fun, respect, and teamwork. 
          Join us and be part of our legacy.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center space-x-2 text-primary">
            <Users className="h-6 w-6" />
            <span className="text-lg font-semibold">Active Community</span>
          </div>
          <div className="flex items-center space-x-2 text-primary">
            <Trophy className="h-6 w-6" />
            <span className="text-lg font-semibold">Since 2015</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleJoinClan}
          size="lg"
          className="bg-gradient-gold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-4 h-auto"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          Join Our Clan
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          Click to open in Clash of Clans
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
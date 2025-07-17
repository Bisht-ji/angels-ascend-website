import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, MessageCircle, Shield, Users } from 'lucide-react';

const JoinSection = () => {
  const handleJoinClan = () => {
    window.open('https://link.clashofclans.com/en?action=OpenClanProfile&tag=PJ00QGGQ', '_blank');
  };

  const handleJoinDiscord = () => {
    window.open('https://discord.com/invite/YuAwXNdzjP', '_blank');
  };

  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Join the <span className="text-primary">Angels</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to ascend to greatness? Join our clan and become part of a legendary community 
            that's been conquering together since 2015.
          </p>
        </div>

        {/* Join Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Join Clan Card */}
          <Card className="bg-card border-border shadow-stone hover:shadow-glow transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mb-4">
                <Shield className="h-12 w-12 mx-auto text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl text-foreground">Join Our Clan</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Click the button below to open our clan profile in Clash of Clans and request to join.
              </p>
              <Button
                onClick={handleJoinClan}
                size="lg"
                className="w-full bg-gradient-gold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Open in Clash of Clans
              </Button>
              <p className="text-xs text-muted-foreground">
                Clan Tag: #PJ00QGGQ
              </p>
            </CardContent>
          </Card>

          {/* Join Discord Card */}
          <Card className="bg-card border-border shadow-stone hover:shadow-glow transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mb-4">
                <MessageCircle className="h-12 w-12 mx-auto text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-2xl text-foreground">Join Our Discord</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Connect with clan members, get war strategies, and stay updated on clan events.
              </p>
              <Button
                onClick={handleJoinDiscord}
                variant="outline"
                size="lg"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Discord Server
              </Button>
              <p className="text-xs text-muted-foreground">
                Chat, strategize, and have fun!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Requirements */}
        <Card className="bg-card border-border shadow-stone">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-xl text-primary">
              <Users className="mr-3 h-5 w-5" />
              What We're Looking For
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-primary font-semibold">Active Players</div>
                <div className="text-sm text-muted-foreground">
                  Regular participation in clan activities
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-semibold">Team Players</div>
                <div className="text-sm text-muted-foreground">
                  Respectful and supportive clan members
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-semibold">War Ready</div>
                <div className="text-sm text-muted-foreground">
                  Willing to participate in clan wars
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-primary">Remember:</span> Follow our clan rules, 
                speak English in chat, and stay active. We're here to have fun and win together!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default JoinSection;
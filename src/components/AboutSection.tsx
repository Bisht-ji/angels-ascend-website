import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Swords, Trophy, Target, Calendar, Crown } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Our Clan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
        </div>

        {/* Story */}
        <Card className="mb-12 bg-card border-border shadow-stone">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Shield className="mr-3 h-6 w-6" />
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground leading-relaxed">
              This clan was made in 2015 just to hold my mini accounts. Somewhere along the line a new member joined, 
              then another and so on. It has been a fun clan — I've met some nice people and I'm glad that it's still 
              going strong.
            </p>
          </CardContent>
        </Card>

        {/* Clan Rules */}
        <Card className="mb-12 bg-card border-border shadow-stone">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Shield className="mr-3 h-6 w-6" />
              Clan Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>No bad language or harassing other members.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Only English in clan chat — so everyone understands and feels comfortable.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Inactive for 5 days? Key active members will be kicked.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* War Rules */}
          <Card className="bg-card border-border shadow-stone">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <Swords className="mr-3 h-5 w-5" />
                War Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground">
              <p><span className="text-primary font-semibold">War Co-Leaders:</span> Avatar, Mob, Eva</p>
              <p>• Normal war participation is optional but recommended</p>
              <p>• If opted in, both attacks must be used</p>
              <p>• Always attack your mirror first, then recommended target after 2 hours</p>
              <p>• If your base is cleared, hit your recommended target or move up/down</p>
              <p>• Missing an attack? Banned from next war. You can rejoin after skipping 2 wars</p>
            </CardContent>
          </Card>

          {/* CWL Rules */}
          <Card className="bg-card border-border shadow-stone">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <Crown className="mr-3 h-5 w-5" />
                CWL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground">
              <p>• Compulsory for those signed up</p>
              <p>• Attack your mirror unless told otherwise by leaders</p>
              <p>• CWL bonus is based on chat participation, donations, activity, and performance</p>
              <p>• Miss an attack? No CWL bonus for you</p>
            </CardContent>
          </Card>

          {/* Clan Games */}
          <Card className="bg-card border-border shadow-stone">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <Target className="mr-3 h-5 w-5" />
                Clan Games
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground">
              <p>• Starts around the last week of each month</p>
              <p>• Not mandatory — but if you join, minimum 2000 points required</p>
              <p>• Below 2000 = kicked and cannot return</p>
              <p>• Aim for max points to help unlock all rewards</p>
            </CardContent>
          </Card>

          {/* Weekend Raids */}
          <Card className="bg-card border-border shadow-stone">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <Calendar className="mr-3 h-5 w-5" />
                Weekend Raids
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground">
              <p>• Finish what you start — don't leave less than 2000 points</p>
              <p>• Use all attacks</p>
              <p>• Donate to the priority list only — marked with a green ribbon</p>
              <p>• Starting upgrades or donating to non-priority upgrades? Kicked</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Shield, Star, User } from 'lucide-react';

const MembersSection = () => {
  const members = [
    { name: "Avatar", role: "Leader", icon: Crown, favorite: "Dragons & Lightning" },
    { name: "Mob", role: "Co-Leader", icon: Shield, favorite: "GoWiPe Master" },
    { name: "Eva", role: "Co-Leader", icon: Shield, favorite: "Hog Rider Specialist" },
    { name: "StormBreaker", role: "Elder", icon: Star, favorite: "Balloon Attacks" },
    { name: "GoldenKnight", role: "Elder", icon: Star, favorite: "Miner Control" },
    { name: "ShadowHunter", role: "Elder", icon: Star, favorite: "LavaLoon" },
    { name: "DragonSlayer", role: "Member", icon: User, favorite: "Mass Dragons" },
    { name: "ArcaneMage", role: "Member", icon: User, favorite: "Wizard Attacks" },
    { name: "IronFist", role: "Member", icon: User, favorite: "Giant Healer" },
    { name: "PhoenixRider", role: "Member", icon: User, favorite: "Electro Dragons" },
    { name: "CrystalArcher", role: "Member", icon: User, favorite: "Queen Walk" },
    { name: "ThunderBolt", role: "Member", icon: User, favorite: "Zap Dragons" },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Leader": return "text-yellow-400";
      case "Co-Leader": return "text-orange-400";
      case "Elder": return "text-purple-400";
      default: return "text-blue-400";
    }
  };

  return (
    <section id="members" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Warriors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the brave warriors who defend our clan and fight for glory in every battle.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card key={index} className="bg-card border-border shadow-stone hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className={`h-8 w-8 mx-auto ${getRoleColor(member.role)} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${getRoleColor(member.role)}`}>
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Specialty: {member.favorite}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Member Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-sm text-muted-foreground">Leader</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Co-Leaders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Elders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
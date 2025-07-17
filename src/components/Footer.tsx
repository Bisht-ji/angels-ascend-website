import { Shield, ExternalLink, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleJoinClan = () => {
    window.open('https://link.clashofclans.com/en?action=OpenClanProfile&tag=PJ00QGGQ', '_blank');
  };

  const handleJoinDiscord = () => {
    window.open('https://discord.com/invite/YuAwXNdzjP', '_blank');
  };

  return (
    <footer className="bg-stone-light border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-medieval font-bold text-lg text-foreground">
                Ascendant Angels
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Rising together since 2015. Join our legendary Clash of Clans clan 
              and become part of our epic journey.
            </p>
            <p className="text-xs text-muted-foreground">
              Clan Tag: <span className="text-primary font-mono">#PJ00QGGQ</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Our Clan
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('members')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Meet Our Members
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Join Our Clan
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect With Us</h3>
            <div className="space-y-2">
              <button
                onClick={handleJoinClan}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Join in Clash of Clans</span>
              </button>
              <button
                onClick={handleJoinDiscord}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Discord Server</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ascendant Angels Clan. Built with passion for Clash of Clans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
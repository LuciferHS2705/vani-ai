import { BottomNav } from "@/components/BottomNav";
import { GlassCard } from "@/components/GlassCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { User, Settings, Bell, HelpCircle, LogOut, Palette } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Profile</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your account settings</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
        {/* User Info */}
        <GlassCard className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-3xl shadow-xl">
            V
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">VANI User</h2>
            <p className="text-sm text-muted-foreground">user@vani.app</p>
          </div>
          <Button variant="outline" className="mx-auto">
            Edit Profile
          </Button>
        </GlassCard>

        {/* Settings Menu */}
        <GlassCard className="divide-y divide-border/50">
          {[
            { icon: User, label: "Account Settings", desc: "Manage your personal information" },
            { icon: Palette, label: "Theme", desc: "Dark mode toggle", component: <ThemeToggle /> },
            { icon: Bell, label: "Notifications", desc: "Configure your alerts" },
            { icon: Settings, label: "App Preferences", desc: "Customize your experience" },
            { icon: HelpCircle, label: "Help & Support", desc: "Get assistance" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="w-full flex items-center gap-4 p-4 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-foreground">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                {'component' in item && item.component}
              </div>
            );
          })}
        </GlassCard>

        {/* Logout */}
        <Button variant="destructive" className="w-full">
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;

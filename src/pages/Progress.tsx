import { BottomNav } from "@/components/BottomNav";
import { GlassCard } from "@/components/GlassCard";
import { TrendingUp, Calendar, Award, Target } from "lucide-react";

const Progress = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-foreground">Your Progress</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your improvement journey</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GlassCard hover={false} className="text-center space-y-2">
            <TrendingUp className="w-8 h-8 mx-auto text-primary" />
            <div className="text-2xl font-bold text-foreground">85%</div>
            <p className="text-xs text-muted-foreground">Overall Score</p>
          </GlassCard>
          
          <GlassCard hover={false} className="text-center space-y-2">
            <Calendar className="w-8 h-8 mx-auto text-secondary" />
            <div className="text-2xl font-bold text-foreground">5</div>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </GlassCard>
          
          <GlassCard hover={false} className="text-center space-y-2">
            <Target className="w-8 h-8 mx-auto text-accent" />
            <div className="text-2xl font-bold text-foreground">24</div>
            <p className="text-xs text-muted-foreground">Sessions Done</p>
          </GlassCard>
          
          <GlassCard hover={false} className="text-center space-y-2">
            <Award className="w-8 h-8 mx-auto text-primary" />
            <div className="text-2xl font-bold text-foreground">7</div>
            <p className="text-xs text-muted-foreground">Badges Earned</p>
          </GlassCard>
        </div>

        {/* Weekly Activity */}
        <GlassCard>
          <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Activity</h3>
          <div className="flex justify-between items-end h-40 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
              const height = [60, 80, 40, 90, 70, 30, 50][index];
              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{day}</span>
                </div>
              );
            })}
          </div>
        </GlassCard>

        {/* Recent Achievements */}
        <GlassCard>
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            {[
              { title: "5 Day Streak", desc: "Keep practicing daily!", icon: "🔥" },
              { title: "First Interview", desc: "Completed mock interview", icon: "🎯" },
              { title: "Speech Master", desc: "10 speech sessions done", icon: "🎤" },
            ].map((achievement) => (
              <div key={achievement.title} className="flex items-center gap-4 p-3 rounded-xl bg-card/40 hover:bg-card/60 transition-all">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <BottomNav />
    </div>
  );
};

export default Progress;

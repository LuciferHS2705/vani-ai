import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Mic, Play, Square, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GroupDiscussion = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<"setup" | "discussion">("setup");
  const [isActive, setIsActive] = useState(false);
  const [config, setConfig] = useState({
    participants: 3,
    aggression: "balanced",
    topic: "",
  });

  const topics = [
    "Remote Work vs Office Work",
    "Impact of AI on Jobs",
    "Social Media Influence",
    "Education System Reform",
    "Climate Change Actions",
    "Startup Culture in India",
  ];

  const aggressionLevels = [
    { value: "polite", label: "Polite", desc: "Respectful, turn-taking" },
    { value: "balanced", label: "Balanced", desc: "Natural flow" },
    { value: "competitive", label: "Competitive", desc: "Interruptions allowed" },
  ];

  const handleStartDiscussion = () => {
    if (!config.topic) {
      toast({
        title: "Topic Required",
        description: "Please select a discussion topic",
        variant: "destructive",
      });
      return;
    }
    setStep("discussion");
    setIsActive(true);
    toast({
      title: "Discussion Started",
      description: "AI participants are ready to discuss",
    });
  };

  const aiParticipants = [
    { name: "Rahul", color: "from-blue-500 to-blue-600", avatar: "R" },
    { name: "Priya", color: "from-pink-500 to-pink-600", avatar: "P" },
    { name: "Amit", color: "from-green-500 to-green-600", avatar: "A" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-foreground">Group Discussion</h1>
              <p className="text-xs text-muted-foreground">Practice with AI participants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 pb-24 animate-fade-in">
        {step === "setup" && (
          <>
            {/* Topic Selection */}
            <GlassCard>
              <h3 className="text-lg font-semibold text-foreground mb-4">Discussion Topic</h3>
              <div className="space-y-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setConfig({ ...config, topic })}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      config.topic === topic
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <p className="font-medium text-foreground">{topic}</p>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Number of Participants */}
            <GlassCard>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                AI Participants: {config.participants}
              </h3>
              <div className="flex gap-3">
                {[2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setConfig({ ...config, participants: num })}
                    className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all ${
                      config.participants === num
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <Users className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-sm font-medium">{num} AI</p>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Aggression Level */}
            <GlassCard>
              <h3 className="text-lg font-semibold text-foreground mb-4">Discussion Style</h3>
              <div className="space-y-3">
                {aggressionLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setConfig({ ...config, aggression: level.value })}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      config.aggression === level.value
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <p className="font-medium text-foreground">{level.label}</p>
                    <p className="text-sm text-muted-foreground">{level.desc}</p>
                  </button>
                ))}
              </div>
            </GlassCard>

            <Button
              variant="hero"
              size="lg"
              onClick={handleStartDiscussion}
              className="w-full"
              disabled={!config.topic}
            >
              <Play className="w-5 h-5" />
              Start Discussion
            </Button>
          </>
        )}

        {step === "discussion" && (
          <>
            {/* Topic Display */}
            <GlassCard className="text-center bg-gradient-to-r from-primary/10 to-secondary/10">
              <h3 className="text-xl font-bold text-foreground mb-2">{config.topic}</h3>
              <p className="text-sm text-muted-foreground">
                {config.participants} AI participants • {config.aggression} style
              </p>
            </GlassCard>

            {/* Participants */}
            <GlassCard>
              <h3 className="text-sm font-semibold text-foreground mb-4">Participants</h3>
              <div className="flex items-center gap-4 flex-wrap">
                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                    You
                  </div>
                  <div>
                    <p className="font-medium text-foreground">You</p>
                    <p className="text-xs text-muted-foreground">Human</p>
                  </div>
                </div>

                {/* AI Participants */}
                {aiParticipants.slice(0, config.participants).map((participant) => (
                  <div key={participant.name} className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${participant.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {participant.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{participant.name}</p>
                      <p className="text-xs text-muted-foreground">AI</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Discussion Feed */}
            <GlassCard className="min-h-[300px] max-h-[400px] overflow-y-auto space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    R
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Rahul</p>
                    <p className="text-sm text-muted-foreground">
                      I believe remote work offers better work-life balance and reduces commute stress...
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    You
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">You</p>
                    <p className="text-sm text-muted-foreground italic">
                      {isActive ? "Listening..." : "Your turn to speak"}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Controls */}
            <GlassCard className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {isActive && (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg animate-pulse">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {isActive ? "Discussion Active" : "Discussion Paused"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Duration: 00:00
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant={isActive ? "secondary" : "hero"}
                    onClick={() => setIsActive(!isActive)}
                  >
                    <MessageSquare className="w-4 h-4" />
                    {isActive ? "Pause" : "Resume"}
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setStep("setup");
                      setIsActive(false);
                    }}
                  >
                    <Square className="w-4 h-4" />
                    End
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Participation Stats */}
            <div className="grid grid-cols-3 gap-4">
              <GlassCard hover={false} className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <p className="text-xs text-muted-foreground mt-1">Your Points</p>
              </GlassCard>
              <GlassCard hover={false} className="text-center">
                <div className="text-2xl font-bold text-secondary">3</div>
                <p className="text-xs text-muted-foreground mt-1">Interruptions</p>
              </GlassCard>
              <GlassCard hover={false} className="text-center">
                <div className="text-2xl font-bold text-accent">65%</div>
                <p className="text-xs text-muted-foreground mt-1">Clarity</p>
              </GlassCard>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GroupDiscussion;

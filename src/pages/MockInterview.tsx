import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase, Mic, Play, Square } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MockInterview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<"setup" | "interview" | "feedback">("setup");
  const [isListening, setIsListening] = useState(false);
  const [config, setConfig] = useState({
    role: "",
    difficulty: "medium",
    type: "behavioral",
  });

  const jobRoles = [
    "Software Engineer",
    "Product Manager",
    "Data Analyst",
    "Marketing Manager",
    "Sales Executive",
    "HR Professional",
  ];

  const difficulties = ["easy", "medium", "hard"];
  const interviewTypes = ["behavioral", "technical", "situational", "general"];

  const handleStartInterview = () => {
    if (!config.role) {
      toast({
        title: "Role Required",
        description: "Please select a job role",
        variant: "destructive",
      });
      return;
    }
    setStep("interview");
    toast({
      title: "Interview Started",
      description: "The AI interviewer will begin shortly",
    });
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

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
              <h1 className="text-xl font-bold text-foreground">Mock Interview</h1>
              <p className="text-xs text-muted-foreground">Practice with AI interviewer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 pb-24 animate-fade-in">
        {step === "setup" && (
          <>
            {/* Job Role Selection */}
            <GlassCard>
              <h3 className="text-lg font-semibold text-foreground mb-4">Select Job Role</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {jobRoles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setConfig({ ...config, role })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      config.role === role
                        ? "border-primary bg-primary/10 shadow-lg scale-105"
                        : "border-border bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <Briefcase className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium text-foreground">{role}</p>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Difficulty Level */}
            <GlassCard>
              <h3 className="text-lg font-semibold text-foreground mb-4">Difficulty Level</h3>
              <div className="flex gap-3">
                {difficulties.map((level) => (
                  <button
                    key={level}
                    onClick={() => setConfig({ ...config, difficulty: level })}
                    className={`flex-1 px-4 py-3 rounded-xl border-2 capitalize transition-all ${
                      config.difficulty === level
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Interview Type */}
            <GlassCard>
              <h3 className="text-lg font-semibold text-foreground mb-4">Interview Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {interviewTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setConfig({ ...config, type })}
                    className={`px-4 py-3 rounded-xl border-2 capitalize transition-all ${
                      config.type === type
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </GlassCard>

            <Button
              variant="hero"
              size="lg"
              onClick={handleStartInterview}
              className="w-full"
              disabled={!config.role}
            >
              <Play className="w-5 h-5" />
              Start Interview
            </Button>
          </>
        )}

        {step === "interview" && (
          <>
            {/* Interview Configuration Display */}
            <GlassCard className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interviewing for</p>
                  <h3 className="text-xl font-bold text-foreground">{config.role}</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground capitalize">{config.type}</p>
                  <p className="text-xs text-muted-foreground capitalize">{config.difficulty} difficulty</p>
                </div>
              </div>
            </GlassCard>

            {/* Question Display */}
            <GlassCard className="text-center space-y-6">
              <div className="space-y-4 animate-fade-in">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-xl">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Question 1 of 5</h3>
                  <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                    "Tell me about a time when you faced a challenging situation at work. How did you handle it, and what was the outcome?"
                  </p>
                </div>
              </div>

              {isListening && (
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl animate-pulse">
                      <Mic className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 animate-glow" />
                  </div>
                </div>
              )}

              <Button
                variant={isListening ? "destructive" : "hero"}
                size="lg"
                onClick={toggleListening}
              >
                {isListening ? (
                  <>
                    <Square className="w-5 h-5" />
                    Stop Answer
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5" />
                    Start Answer
                  </>
                )}
              </Button>
            </GlassCard>

            {/* Progress */}
            <GlassCard hover={false}>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">20%</span>
                </div>
                <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                  <div className="h-full w-1/5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500" />
                </div>
              </div>
            </GlassCard>
          </>
        )}
      </div>
    </div>
  );
};

export default MockInterview;

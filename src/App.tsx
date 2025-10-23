import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import SpeechPractice from "./pages/SpeechPractice";
import MockInterview from "./pages/MockInterview";
import PresentationPractice from "./pages/PresentationPractice";
import GroupDiscussion from "./pages/GroupDiscussion";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div>
      <AuthPage />
    </div>
  );
}

export default App;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vani-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/practice/speech" element={<SpeechPractice />} />
            <Route path="/practice/interview" element={<MockInterview />} />
            <Route path="/practice/presentation" element={<PresentationPractice />} />
            <Route path="/practice/group" element={<GroupDiscussion />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

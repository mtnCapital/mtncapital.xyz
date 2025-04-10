import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import OA from "./pages/OA";
import NotFound from "./pages/NotFound";
import TokenLaunchDisclaimer from "./pages/disclaimer";
import Resources from "./pages/resources";
import InvestmentProposalTemplate from "./pages/investment-proposal-template";
import IdleCapitalRFP from "./pages/idle-capital-rfp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/oa" element={<OA />} />
          <Route path="/disclaimer" element={<TokenLaunchDisclaimer />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/investment-proposal-template" element={<InvestmentProposalTemplate />} />
          <Route path="/resources/idle-capital-rfp" element={<IdleCapitalRFP />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

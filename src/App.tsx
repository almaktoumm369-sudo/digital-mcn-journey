import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import ArtworkDetail from "./pages/ArtworkDetail";
import Tickets from "./pages/Tickets";
import VirtualTour from "./pages/VirtualTour";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen dark">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/artwork/:id" element={<ArtworkDetail />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/virtual-tour" element={<VirtualTour />} />
                <Route path="/events" element={<Events />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

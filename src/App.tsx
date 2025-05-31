import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster as Sonner } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <div className="transition-page">
            <Routes>
              <Route path="/" element={<Index />} />  
              <Route path="/demo" element={<Demo />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

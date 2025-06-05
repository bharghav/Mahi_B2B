
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import ProductPage from "./pages/ProductPage";
import SellerLogin from "./pages/SellerLogin";
import BuyerLogin from "./pages/BuyerLogin";
import Registration from "./pages/Registration";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerProfile from "./pages/SellerProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/subcategory/:subcategoryId" element={<SubcategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/buyer-login" element={<BuyerLogin />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/seller/:sellerId" element={<SellerProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

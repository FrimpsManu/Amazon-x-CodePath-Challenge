import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQPage from './pages/FAQPage';
import FoodSafetyPage from './pages/FoodSafetyPage';
import JoinProviderPage from './pages/JoinProviderPage';
import BusinessBenefitsPage from './pages/BusinessBenefitsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import TaxBenefitsPage from './pages/TaxBenefitsPage';
import PartnerResourcesPage from './pages/PartnerResourcesPage';
import MissionPage from './pages/MissionPage';
import ImpactPage from './pages/ImpactPage';
import CareersPage from './pages/CareersPage';
import PressPage from './pages/PressPage';
import ContactPage from './pages/ContactPage';
import AccessibilitySettings from './pages/AccessibilitySettings'; 
import { AuthProvider } from './contexts/AuthContext';
import { RealtimeProvider } from './contexts/RealtimeContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <RealtimeProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/food-safety" element={<FoodSafetyPage />} />
            <Route path="/join-as-provider" element={<JoinProviderPage />} />
            <Route path="/business-benefits" element={<BusinessBenefitsPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/tax-benefits" element={<TaxBenefitsPage />} />
            <Route path="/partner-resources" element={<PartnerResourcesPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/accessibility" element={<AccessibilitySettings />} /> {/* ✅ Add this route */}
          </Routes>
        </RealtimeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

import { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import LoadingScreen from "./components/ui/LoadingScreen";

const Hero = lazy(() => import("./components/Hero"));
const LoanProcess = lazy(() => import("./components/LoanProcess"));
const Services = lazy(() => import("./components/Services"));
const Calculator = lazy(() => import("./components/Calculator"));
const TrustAndFAQ = lazy(() => import("./components/TrustAndFAQ"));
const Footer = lazy(() => import("./components/Footer"));
const LegalModal = lazy(() => import("./components/ui/LegalModal"));

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState("terms");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Ensure the loading screen is visible for at least 1.5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const openLegalModal = (type) => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {showLoader && <LoadingScreen />}

      <Header />
      <main>
        <Suspense fallback={!showLoader ? <LoadingScreen /> : null}>
          <Hero openLegalModal={openLegalModal} />
          <LoanProcess />
          <Services />
          <Calculator />
          <TrustAndFAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer openLegalModal={openLegalModal} />
        <LegalModal
          isOpen={legalModalOpen}
          onClose={() => setLegalModalOpen(false)}
          type={legalModalType}
        />
      </Suspense>
    </div>
  );
}

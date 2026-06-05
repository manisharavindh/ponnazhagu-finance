import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Calculator from "./components/Calculator";
import TrustAndFAQ from "./components/TrustAndFAQ";
import Footer from "./components/Footer";
import LegalModal from "./components/ui/LegalModal";

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState("terms");

  const openLegalModal = (type) => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero openLegalModal={openLegalModal} />
        <Services />
        <Calculator />
        <TrustAndFAQ />
      </main>
      <Footer openLegalModal={openLegalModal} />

      <LegalModal 
        isOpen={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
        type={legalModalType} 
      />
    </div>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Calculator from "./components/Calculator";
import TrustAndFAQ from "./components/TrustAndFAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Calculator />
        <TrustAndFAQ />
      </main>
      <Footer />
    </div>
  );
}

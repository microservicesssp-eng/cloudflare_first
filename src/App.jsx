import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Certificates from "./pages/Certificates";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
      <Footer />
      {/* Виджет чата виден на всех страницах всегда */}
      <ChatWidget />
    </div>
  );
}

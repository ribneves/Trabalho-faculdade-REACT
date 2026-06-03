import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GaragemProvider } from './context/GaragemContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Patio from './pages/Patio';
import Garagem from './pages/Garagem';
import Contato from './pages/Contato';
import AdminCrud from './pages/AdminCrud';

export default function App() {
  return (
    <GaragemProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/patio" element={<Patio />} />
          <Route path="/garagem" element={<Garagem />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/admin" element={<AdminCrud />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GaragemProvider>
  );
}

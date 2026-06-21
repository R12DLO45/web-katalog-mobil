import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterKategori from './components/FilterKategori';
import MobilPopuler from './components/MobilPopuler';
import Perbandingan from './components/Perbandingan';
import Artikel from './components/Artikel';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <FilterKategori />
      
      {/* Sisa konten yang tadi "hilang" udah balik lagi di sini */}
      <MobilPopuler />
      <Perbandingan />
      <Artikel />
      
      <Footer />
    </div>
  );
}
import React from 'react';
import { Search, MapPin, Moon, CarFront, LayoutGrid, ChevronDown} from 'lucide-react';
import mobilHero from './assets/mobil-hero.png';
import { dataMobil } from './data/mobil';
import CarCard from './components/CarCard';

const tipeBody = [
  { tipe: "City Car", model: "45 Model", img: "https://placehold.co/150x80?text=City+Car" },
  { tipe: "Hatchback", model: "120 Model", img: "https://placehold.co/150x80?text=Hatchback" },
  { tipe: "MPV", model: "230 Model", img: "https://placehold.co/150x80?text=MPV" },
  { tipe: "SUV", model: "350 Model", img: "https://placehold.co/150x80?text=SUV" },
  { tipe: "Sedan", model: "150 Model", img: "https://placehold.co/150x80?text=Sedan" },
  { tipe: "Pickup", model: "50 Model", img: "https://placehold.co/150x80?text=Pickup" },
];

const merekPopuler = [
  "Toyota", "Honda", "Daihatsu", "Suzuki", "Mitsubishi", "Nissan", "Wuling", "BYD"
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      
      {/* 1. TOP BAR (Bagian paling atas yang gelap) */}
      <div className="bg-[#1e293b] text-gray-300 text-sm py-2 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1 hover:text-white cursor-pointer"><MapPin size={16} /> Indonesia</span>
          <span className="hover:text-white cursor-pointer">Tentang Kami</span>
          <span className="hover:text-white cursor-pointer">Kontak</span>
          <span className="hover:text-white cursor-pointer">Sitemap</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1 cursor-pointer hover:text-white">Dark Mode <Moon size={16} /></span>
          <div className="flex space-x-3 border-l border-gray-600 pl-4">
          </div>
        </div>
      </div>

      {/* 2. NAVBAR (Logo, Menu, dan Pencarian) */}
      <nav className="bg-white px-8 py-4 flex justify-between items-center border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center gap-2 text-blue-600">
          <CarFront size={32} strokeWidth={2.5} />
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Katalog<span className="text-blue-600">Mobil</span></span>
        </div>
        
        <ul className="flex space-x-8 font-medium text-gray-600">
          <li className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">Beranda</li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Katalog <span className="text-xs">▼</span></li>
          <li className="hover:text-blue-600 cursor-pointer">Merek</li>
          <li className="hover:text-blue-600 cursor-pointer">Berita</li>
          <li className="hover:text-blue-600 cursor-pointer">Perbandingan</li>
        </ul>

        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Cari mobil, merek, atau tipe..." 
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </nav>

      {/* 3. HERO SECTION (Banner Utama) */}
      <main className="max-w-7xl mx-auto px-8 pt-12 pb-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        {/* Latar Belakang Gedung (Simulasi siluet background) */}
        <div className="absolute bottom-0 right-0 w-2/3 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none"></div>

        {/* Konten Kiri (Teks & Tombol) */}
        <div className="flex-1 z-10 relative">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Katalog Mobil <br />
            Indonesia <br />
            Lengkap & Terupdate
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
            Temukan informasi mobil terbaru, harga, spesifikasi, foto, dan perbandingan dari berbagai merek mobil favorit di Indonesia.
          </p>
          
          <div className="flex gap-4 mb-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-200 transition-all flex items-center gap-2">
              <Search size={20} /> Jelajahi Katalog
            </button>
            <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-sm">
              <LayoutGrid size={20} /> Bandingkan Mobil
            </button>
          </div>

          {/* Statistik Info */}
          <div className="flex gap-8 border-t border-gray-200 pt-6">
            <div>
              <p className="text-xl font-bold text-gray-900 flex items-center gap-2"><CarFront size={20} className="text-blue-500"/> 150+</p>
              <p className="text-sm text-gray-500">Merek Mobil</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 flex items-center gap-2"><LayoutGrid size={20} className="text-blue-500"/> 1500+</p>
              <p className="text-sm text-gray-500">Model Mobil</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 flex items-center gap-2"><span className="text-blue-500">🕒</span> Terupdate</p>
              <p className="text-sm text-gray-500">Setiap Hari</p>
            </div>
          </div>
        </div>

        {/* Konten Kanan (Gambar Mobil) */}
        <div className="flex-1 z-10 relative">
          {/* Menggunakan gambar mobil dari Unsplash sebagai placeholder yang mirip dengan gambar aslinya */}
          <img 
            src={mobilHero} 
            alt="Hero Car" 
            className="w-full h-auto drop-shadow-2xl object-contain rounded-xl mix-blend-multiply"
          />
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-8 pb-16">
        
        {/* 1. FILTER PENCARIAN */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 -mt-8 relative z-20 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Cari Mobil Impianmu</h2>
          <p className="text-sm text-gray-500 mb-5">Filter berdasarkan kebutuhan dan temukan mobil yang tepat untukmu.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Dropdown 1 */}
            <div className="border border-gray-200 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-blue-400">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Merek</p>
                <p className="text-sm font-semibold text-gray-800">Pilih Merek</p>
              </div>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
            {/* Dropdown 2 */}
            <div className="border border-gray-200 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-blue-400">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Tipe Body</p>
                <p className="text-sm font-semibold text-gray-800">Pilih Tipe Body</p>
              </div>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
            {/* Dropdown 3 */}
            <div className="border border-gray-200 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-blue-400">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Rentang Harga</p>
                <p className="text-sm font-semibold text-gray-800">Pilih Harga</p>
              </div>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
            {/* Dropdown 4 */}
            <div className="border border-gray-200 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-blue-400">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Jenis BBM</p>
                <p className="text-sm font-semibold text-gray-800">Pilih Jenis BBM</p>
              </div>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
            {/* Tombol Cari */}
            <button className="bg-[#1e293b] hover:bg-black text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors">
              <Search size={18} /> Cari Mobil
            </button>
          </div>
        </div>

        {/* 2. JELAJAHI BERDASARKAN TIPE BODY */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Jelajahi Berdasarkan Tipe Body</h2>
            <a href="#" className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              Lihat Semua <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {tipeBody.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer">
                <img src={item.img} alt={item.tipe} className="w-full h-16 object-cover mb-3 rounded" />
                <h3 className="text-sm font-bold text-gray-900">{item.tipe}</h3>
                <p className="text-xs text-gray-500">{item.model}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. MEREK POPULER (Fokus Jepang & China) */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Merek Populer di Indonesia</h2>
            <a href="#" className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              Lihat Semua <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
            {merekPopuler.map((merek, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
                {/* Menggunakan inisial/teks sebagai placeholder logo */}
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 mb-2">
                  {merek.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-gray-700">{merek}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* --- BERHENTI DI SINI --- */}

    </div>
  );
}
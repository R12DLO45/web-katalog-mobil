import React from 'react';
import { Search, MapPin, Moon, CarFront } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <div className="bg-[#1e293b] text-gray-300 text-sm py-2 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1 hover:text-white cursor-pointer"><MapPin size={16} /> Indonesia</span>
          <span className="hover:text-white cursor-pointer">Tentang Kami</span>
          <span className="hover:text-white cursor-pointer">Kontak</span>
          <span className="hover:text-white cursor-pointer">Sitemap</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1 cursor-pointer hover:text-white">Dark Mode <Moon size={16} /></span>
        </div>
      </div>

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
          <input type="text" placeholder="Cari mobil, merek, atau tipe..." className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
      </nav>
    </>
  );
}
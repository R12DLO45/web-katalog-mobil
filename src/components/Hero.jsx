import React from 'react';
import { Search, LayoutGrid } from 'lucide-react';
import { CarFront } from 'lucide-react';

export default function Hero() {
  return (
    <main className="w-full px-8 pt-12 pb-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-2/3 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none"></div>

      <div className="flex-1 z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Katalog Mobil <br /> Indonesia <br /> Lengkap & Terupdate
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

      <div className="flex-1 z-10 relative">
        <img src="/images/Zenix.png" alt="Hero Car" className="w-full h-auto drop-shadow-2xl object-contain rounded-xl mix-blend-multiply" />
      </div>
    </main>
  );
}
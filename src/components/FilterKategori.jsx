import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { tipeBody, merekPopuler } from '../data/mobil';

export default function FilterKategori() {
  return (
    <div className="w-full px-8 pb-12">
      {/* 1. FILTER PENCARIAN */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 -mt-8 relative z-20 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Cari Mobil Impianmu</h2>
        <p className="text-sm text-gray-500 mb-5">Filter berdasarkan kebutuhan dan temukan mobil yang tepat untukmu.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {['Merek', 'Tipe Body', 'Rentang Harga', 'Jenis BBM'].map((filter, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-3 flex justify-between items-center cursor-pointer hover:border-blue-400">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{filter}</p>
                <p className="text-sm font-semibold text-gray-800">Pilih {filter}</p>
              </div>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          ))}
          <button className="bg-[#1e293b] hover:bg-black text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors">
            <Search size={18} /> Cari Mobil
          </button>
        </div>
      </div>

      {/* 2. JELAJAHI BERDASARKAN TIPE BODY */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Jelajahi Berdasarkan Tipe Body</h2>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">Lihat Semua &rarr;</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {tipeBody.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer">
              <img src={item.img} alt={item.tipe} className="w-full h-36 object-contain mb-4 rounded" />
              <h3 className="text-sm font-bold text-gray-900">{item.tipe}</h3>
              <p className="text-xs text-gray-500">{item.model}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MEREK POPULER */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Merek Populer di Indonesia</h2>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">Lihat Semua &rarr;</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
          {merekPopuler.map((merek, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 mb-2">
                {merek.charAt(0)}
              </div>
              <span className="text-xs font-semibold text-gray-700">{merek}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { mobilPopuler } from '../data/mobil'; // Pastikan pakai .js biar Vite gak error

export default function MobilPopuler() {
  return (
    <section className="w-full px-8 mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Rekomendasi Mobil Populer</h2>
          <p className="text-gray-500 text-sm mt-1">Pilihan mobil terbaik yang paling banyak dicari bulan ini.</p>
        </div>
        <button className="text-blue-600 font-semibold text-sm hover:text-blue-800">Lihat Semua Katalog &rarr;</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {mobilPopuler.map((mobil, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-50 p-4 aspect-[4/3] flex items-center justify-center relative">
              <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-bold text-gray-700 shadow-sm">Baru</span>
              <img src={mobil.img} alt={mobil.model} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">{mobil.merk}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{mobil.model}</h3>
              <p className="text-sm text-gray-500 mb-4">{mobil.varian}</p>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500">Mulai dari</p>
                  <p className="text-blue-600 font-bold">{mobil.harga}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';
import { artikelTerbaru } from '../data/mobil'; // Pakai .js

export default function Artikel() {
  return (
    <section className="w-full px-8 mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Berita & Artikel Otomotif Terkini</h2>
          <p className="text-gray-500 text-sm mt-1">Update informasi terbaru seputar dunia otomotif.</p>
        </div>
        <button className="text-blue-600 font-semibold text-sm hover:text-blue-800">Indeks Artikel &rarr;</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artikelTerbaru.map((artikel, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <img src={artikel.img} alt={artikel.judul} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{artikel.kategori}</span>
            </div>
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">{artikel.tanggal}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">{artikel.judul}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">{artikel.deskripsi}</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Baca Selengkapnya</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';

export default function Perbandingan() {
  return (
    <section className="bg-blue-50 py-16 mb-16">
      <div className="w-full px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bandingkan Mobil Pilihanmu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Masih bingung pilih yang mana? Bandingkan spesifikasi, fitur, dan harga mobil impianmu secara *head-to-head*.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div className="flex-1 w-full flex flex-col items-center">
            <img src="https://placehold.co/300x200?text=Mobil+A" alt="Mobil Kiri" className="w-full h-32 object-contain mb-4" />
            <button className="border-2 border-dashed border-gray-300 text-gray-500 px-6 py-2 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors w-full">
              Pilih Mobil
            </button>
          </div>

          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg z-10">
            VS
          </div>

          <div className="flex-1 w-full flex flex-col items-center">
            <img src="https://placehold.co/300x200?text=Mobil+B" alt="Mobil Kanan" className="w-full h-32 object-contain mb-4" />
            <button className="border-2 border-dashed border-gray-300 text-gray-500 px-6 py-2 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors w-full">
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { CarFront } from 'lucide-react';

export default function Footer() {
  return (
    // 1. PEMBUNGKUS UTAMA
    <footer className="w-full bg-gradient-to-b from-[#1e293b]/70 via-[#111827] to-[#111827] text-white pt-16 pb-8 rounded-t-[40px] mt-16">
      
      {/* 2. LEBAR KONTEN */}
      <div className="w-full px-8">
        
        {/* --- SECTION NEWSLETTER --- */}
        <div className="w-full relative border-b border-gray-800/60 py-20 flex flex-col md:flex-row items-center justify-between">
          
          {/* Teks diangkat ke atas dikit sesuai request lu sebelumnya */}
          <div className="z-10 md:w-1/2 transform -translate-y-10">
            <h2 className="text-3xl font-bold mb-3">Dapatkan Info Mobil Terbaru</h2>
            <p className="text-bg text-gray-400 mb-8 max-w-md">
              Berlangganan newsletter kami untuk mendapatkan update mobile terbaru, promo, dan tips otomotif setiap minggu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Masukkan email kamu..." 
                className="px-4 py-3.5 rounded-lg flex-1 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3.5 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
          
          {/* PERBAIKAN GAMBAR:
              1. Efek "box" (border, shadow, rounded, overflow-hidden) GUA HAPUS TOTAL.
              2. h-[240px] diganti 'h-auto' biar gambar gak kepotong sama sekali.
              3. object-cover dibalikin jadi 'object-contain object-right' biar nempel kanan polosan.
              4. (Opsional tapi keren) Gua tambahin 'drop-shadow-2xl', ini beda sama shadow biasa. Dia cuma ngasih bayangan ngikutin lekukan bodi mobil lu, bukan bikin kotak!
          */}
          <div className="hidden md:block absolute right-0 top-[27%] transform -translate-y-1/2 w-[45%] z-10 pointer-events-none">
            <img 
              src="/images/Typer.png" 
              alt="Mobil Footer" 
              className="w-full h-auto object-contain object-right drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]" 
            />
          </div>
        </div>

        {/* --- SUSUNAN LINK FOOTER --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-y-12 gap-x-16 lg:gap-x-18 border-b border-gray-800 pb-12 mb-8 pt-12">
          
          {/* Kolom Logo & Deskripsi */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <CarFront className="text-blue-500" size={28} />
              <span className="text-xl font-bold tracking-tight">KatalogMobil</span>
            </div>
            <p className="text-bg text-gray-400 leading-relaxed mb-6 w-11/12">
              Situs katalog mobil indonesia terlengkap yang menyajikan informasi mobil terbaru, harga, spesifikasi, berita, dan panduan otomotif untuk car enthusiast.
            </p>
            <div className="flex gap-3">
              {['IG', 'FB', 'YT', 'TK'].map((medsos) => (
                <div key={medsos} className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer text-[10px] font-bold text-gray-400 hover:text-white transition-colors">
                  {medsos}
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Katalog */}
          <div>
            <h4 className="font-bold mb-4 text-xl tracking-wide">Katalog</h4>
            <ul className="space-y-3 text-bg text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Semua Mobil</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobil Terbaru</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobil Populer</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobil LCGC</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobil Listrik</li>
            </ul>
          </div>

          {/* Kolom Merek */}
          <div>
            <h4 className="font-bold mb-4 text-xl tracking-wide">Merek</h4>
            <ul className="space-y-3 text-bg text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Toyota</li>
              <li className="hover:text-white cursor-pointer transition-colors">Honda</li>
              <li className="hover:text-white cursor-pointer transition-colors">Daihatsu</li>
              <li className="hover:text-white cursor-pointer transition-colors">Suzuki</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mitsubishi</li>
              <li className="hover:text-white cursor-pointer text-blue-500 transition-colors">Lihat Semua</li>
            </ul>
          </div>

          {/* Kolom Informasi */}
          <div>
            <h4 className="font-bold mb-4 text-xl tracking-wide">Informasi</h4>
            <ul className="space-y-3 text-bg text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Berita Otomotif</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tips & Panduan</li>
              <li className="hover:text-white cursor-pointer transition-colors">Perbandingan Mobil</li>
              <li className="hover:text-white cursor-pointer transition-colors">Promo & Diskon</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sitemap</li>
            </ul>
          </div>

          {/* Kolom Bantuan */}
          <div>
            <h4 className="font-bold mb-4 text-xl tracking-wide">Bantuan</h4>
            <ul className="space-y-3 text-bg text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Tentang Kami</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kontak Kami</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kebijakan Privasi</li>
              <li className="hover:text-white cursor-pointer transition-colors">Syarat & Ketentuan</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="text-center text-[14px] text-gray-500 pt--1">
          &copy; 2026 KatalogMobil Indonesia. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
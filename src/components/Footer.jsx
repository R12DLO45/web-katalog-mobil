import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 rounded-t-[40px] mt-12 w-full">
      <div className="w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <span className="text-2xl font-bold tracking-tight">Katalog<span className="text-blue-500">Mobil</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Platform terpercaya untuk menemukan informasi, spesifikasi, dan harga mobil terbaru di Indonesia.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Merek Terpopuler</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Toyota</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Honda</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Daihatsu</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Mitsubishi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Tentang Kami</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Hubungi Kami</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Kebijakan Privasi</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 KatalogMobil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
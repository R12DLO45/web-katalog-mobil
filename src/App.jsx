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

const mobilPopuler = [
  { merk: "Toyota", model: "Avanza", varian: "1.5 G M/T", harga: "Rp 242.100.000", img: "https://placehold.co/300x200?text=Avanza" },
  { merk: "Honda", model: "Brio", varian: "Satya S M/T", harga: "Rp 165.900.000", img: "https://placehold.co/300x200?text=Brio" },
  { merk: "Toyota", model: "Raize", varian: "1.2 G CVT", harga: "Rp 235.000.000", img: "https://placehold.co/300x200?text=Raize" },
  { merk: "Daihatsu", model: "Sigra", varian: "1.2 R M/T", harga: "Rp 137.200.000", img: "https://placehold.co/300x200?text=Sigra" }
];

const artikelTerbaru = [
  {
    kategori: "Berita",
    judul: "Daftar Mobil SUV Terbaru 2024 di Indonesia",
    deskripsi: "Intip daftar SUV terbaru yang meluncur di Indonesia tahun 2024, lengkap dengan harga dan spesifikasinya.",
    tanggal: "20 Mei 2024",
    img: "https://placehold.co/400x250?text=SUV+Terbaru"
  },
  {
    kategori: "Panduan",
    judul: "Cara Kredit Mobil yang Benar untuk Pemula",
    deskripsi: "Panduan lengkap cara kredit mobil untuk pemula agar proses disetujui dan tidak memberatkan keuangan.",
    tanggal: "18 Mei 2024",
    img: "https://placehold.co/400x250?text=Kredit+Mobil"
  },
  {
    kategori: "Tips & Trik",
    judul: "Perbedaan Mobil LCGC dan City Car",
    deskripsi: "Memahami perbedaan LCGC dan city car dari segi harga, performa, hingga efisiensi bbm.",
    tanggal: "15 Mei 2024",
    img: "https://placehold.co/400x250?text=LCGC+vs+City+Car"
  }
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

        {/* 4. MOBIL TERPOPULER */}
        <div className="mt-12 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Mobil Terpopuler</h2>
            <a href="#" className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              Lihat Semua <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {mobilPopuler.map((mobil, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                <img src={mobil.img} alt={mobil.model} className="w-full h-32 object-contain mb-4" />
                <h3 className="text-sm font-bold text-gray-900">{mobil.merk} {mobil.model}</h3>
                <p className="text-xs text-gray-500 mt-1 mb-3">{mobil.varian}</p>
                <p className="text-sm font-bold text-blue-600 mt-auto">{mobil.harga}</p>
                <p className="text-[10px] text-gray-400 mt-1">Harga OTR Jakarta</p>
              </div>
            ))}
            
            {/* Tombol panah slider (opsional, dummy dlu kayak di desain) */}
            <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 gap-2">
              <button className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-400 shadow-sm">&lt;</button>
              <button className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 hover:border-gray-400 shadow-sm">&gt;</button>
            </div>
          </div>
        </div>

        {/* 5. PERBANDINGAN MOBIL */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Perbandingan Mobil</h2>
            <a href="#" className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              Lihat Semua <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-2xl p-8 relative hover:shadow-md transition-shadow">
            {/* Badge VS di tengah absolut */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg shadow-sm z-10 pb-1">
              VS
            </div>

            <div className="flex justify-between items-center w-full mb-6">
              {/* Mobil Kiri */}
              <div className="flex flex-col items-center w-5/12 text-center cursor-pointer">
                <img src="https://placehold.co/300x150?text=Avanza" alt="Avanza" className="w-full h-32 object-contain mb-4" />
                <h3 className="text-sm font-bold text-gray-900">Toyota Avanza</h3>
                <p className="text-xs text-gray-500 mt-1 mb-2">1.5 G M/T</p>
                <p className="text-sm font-bold text-blue-600">Rp 242.100.000</p>
              </div>

              {/* Mobil Kanan */}
              <div className="flex flex-col items-center w-5/12 text-center cursor-pointer">
                <img src="https://placehold.co/300x150?text=Mobilio" alt="Mobilio" className="w-full h-32 object-contain mb-4" />
                <h3 className="text-sm font-bold text-gray-900">Honda Mobilio</h3>
                <p className="text-xs text-gray-500 mt-1 mb-2">1.5 E CVT</p>
                <p className="text-sm font-bold text-blue-600">Rp 259.000.000</p>
              </div>
            </div>

            {/* Tombol Bandingkan */}
            <div className="flex justify-center mt-2">
              <button className="bg-[#1e293b] hover:bg-black text-white px-8 py-3 rounded-lg font-semibold text-sm transition-colors">
                Bandingkan Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* 6. ARTIKEL & BERITA TERBARU */}
        <div className="mt-16 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Artikel & Berita Terbaru</h2>
            <a href="#" className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-800">
              Lihat Semua <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artikelTerbaru.map((artikel, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                <img src={artikel.img} alt={artikel.judul} className="w-full h-44 object-cover" />
                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                      {artikel.kategori}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">{artikel.judul}</h3>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-3">{artikel.deskripsi}</p>
                  <p className="text-[10px] text-gray-400 mt-auto">{artikel.tanggal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 

      {/* 7. SECTION FOOTER & NEWSLETTER */}
      <footer className="bg-[#111827] text-white pt-12 pb-8 rounded-t-3xl mt-12 w-full">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Box Newsletter (Dapatkan Info Mobil Terbaru) */}
          <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden border border-gray-800 shadow-xl">
            <div className="z-10 md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Dapatkan Info Mobil Terbaru</h2>
              <p className="text-sm text-gray-400 mb-6">Berlangganan newsletter kami untuk mendapatkan update mobil terbaru, promo, dan tips otomotif setiap minggu.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Masukkan email kamu..." 
                  className="px-4 py-3 rounded-lg flex-1 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap">
                  Berlangganan
                </button>
              </div>
            </div>
            {/* Dekorasi Gambar Mobil Footer (nanti diganti PNG transparan) */}
            <div className="hidden md:block absolute right-[-5%] top-0 bottom-0 w-[55%]">
              <img src="https://placehold.co/600x300/1e293b/475569?text=Mobil+Gelap+Keren" alt="Mobil Footer" className="w-full h-full object-cover opacity-60 mix-blend-lighten" />
            </div>
          </div>

          {/* Navigasi Footer */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 border-b border-gray-800 pb-12">
            
            {/* Info Web */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <CarFront className="text-blue-500" size={28} />
                <span className="text-xl font-bold tracking-tight">KatalogMobil</span>
              </div>
              <p className="text-xs text-gray-400 mb-6 w-11/12 leading-relaxed">
                Situs katalog mobil indonesia terlengkap yang menyajikan informasi mobil terbaru, harga, spesifikasi, berita, dan panduan otomotif untuk car enthusiast.
              </p>
              {/* Ikon Sosial Media (Dummy kotak-kotak) */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer transition-colors"><span className="text-[10px]">IG</span></div>
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer transition-colors"><span className="text-[10px]">TW</span></div>
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer transition-colors"><span className="text-[10px]">YT</span></div>
                <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 cursor-pointer transition-colors"><span className="text-[10px]">TK</span></div>
              </div>
            </div>

            {/* Link Menu 1 */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Katalog</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Semua Mobil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobil Terbaru</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobil Populer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobil LCGC</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobil Listrik</a></li>
              </ul>
            </div>

            {/* Link Menu 2 */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Merek</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Toyota</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Honda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Daihatsu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suzuki</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mitsubishi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lihat Semua</a></li>
              </ul>
            </div>

            {/* Link Menu 3 */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Informasi</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Berita Otomotif</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tips & Panduan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Perbandingan Mobil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Promo & Diskon</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>

            {/* Link Menu 4 */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Bantuan</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

          </div>

          <div className="text-center text-[11px] text-gray-500 pt-6">
            &copy; 2026 KatalogMobil Indonesia. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
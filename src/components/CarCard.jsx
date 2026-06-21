export default function CarCard({ mobil }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={mobil.gambar} 
        alt={mobil.model} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">{mobil.merek} {mobil.model}</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {mobil.tahun}
          </span>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>⚙️ Mesin: <span className="font-medium">{mobil.mesin}</span></p>
          <p>🕹️ Transmisi: <span className="font-medium">{mobil.transmisi}</span></p>
        </div>
      </div>
    </div>
  );
}
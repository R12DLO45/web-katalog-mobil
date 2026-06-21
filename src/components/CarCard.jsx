const CarCard = ({ mobil }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={mobil.gambar} 
        alt={mobil.model} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{mobil.merk} {mobil.model}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {mobil.tahun}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {mobil.deskripsi}
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CarCard;
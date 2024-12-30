export default function Product02() {
    const movies = [
      {
        title: "The Fifth Day",
        genre: "Comedy",
        duration: "180 Mins",
        image: "https://simg.zalopay.com.vn/zlp-website/assets/phim_chieu_rap_viet_nam_hai_huoc_13_f0ecada03f.jpg", // Thay bằng đường dẫn thực tế
      },
      {
        title: "Black and White Twins",
        genre: "Animation, Comedy",
        duration: "190 Mins",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/c/o/conan_movie_26_-_vietnamese_poster.jpg",
      },
      {
        title: "The Scariest Dream",
        genre: "Thriller",
        duration: "180 Mins",
        image: "https://cdn.galaxycine.vn/media/2024/12/11/mufasa-500_1733891077187.jpg",
      },
      {
        title: "The Pursuit of Dreams",
        genre: "Animation",
        duration: "180 Mins",
        image: "https://m.baotuyenquang.com.vn/media/images/2024/02/img_20240211235754.jpg",
      },
    ];
  
    return (
      <div className="bg-gray-50 ">
        {/* Header Section */}
        <div className="text-center py-12">
          <p className="text-orange-600 font-medium">Phim nổi bật</p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">PHIM NỔI BẬT CUỐI TUẦN</h1>
        </div>
  
        {/* Movies List */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Movie Image */}
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-56 object-cover"
                />
              </div>
  
              {/* Movie Details */}
              <div className="p-4">
                <p className="text-sm text-gray-500">
                  {movie.genre} / {movie.duration}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {movie.title}
                </h3>
                <button className="mt-4 px-4 py-2 w-full bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-900">
                  Get Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
        </div>
      </div>
    );
  }
  
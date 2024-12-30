"use client";
import { useState } from "react";

export default function FavoritesPage() {
  // Dữ liệu giả lập các tập phim yêu thích
  const favoriteEpisodes = [
    {
      id: 1,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://media.thethaovanhoa.vn/Upload/O5NP4aFt6GVwE7JTFAOaA/files/2019/07/nguoi-nhen.jpg",
    },
    {
      id: 2,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://media.viez.vn/prod/2022/7/23/large_bay_nnn_2_jpeg_4122_1644492964_6309_1647916490_858db3fc26.jpg",
    },
    {
      id: 3,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://static.minhtuanmobile.com/uploads/editer/images/2024/04/top-3-phim-chieu-rap-thang-5-khong-the-bo-lo-1.webp",
    },
    {
      id: 4,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2024/11/22/teaser-poster-17322821253831121948833.jpg",
    },
    {
      id: 5,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/9/0ezhzlyi7cy1695697737017.jpg",
    },
    {
      id: 6,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://cdn-www.vinid.net/3f44f821-phim-hoat-hinh-chieu-rap-7.jpg",
    },
    {
      id: 7,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://thethaovanhoa.mediacdn.vn/372676912336973824/2024/1/28/poster-spyxfamily-1706412903019607312779.jpg",
    },
    {
      id: 8,
      title: "The Beginning of a Journey",
      description: "A thrilling start to the adventure.",
      imageUrl: "https://cdn-images.vtv.vn/2022/12/28/poster-mbsd-16722023097352086945880.jpg",
    }
    
  ];

  const [favorites, setFavorites] = useState(favoriteEpisodes);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((episode) => episode.id !== id));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-black py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="font-bold text-lg">Aovis Movies</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-semibold text-center text-orange-500 mb-10">Danh sách yêu thích của bạn</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((episode) => (
            <div
              key={episode.id}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={episode.imageUrl}
                alt={episode.title}
                className="w-full h-48 object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:blur-sm"
              />
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-semibold text-orange-400">{episode.title}</h2>
                <p className="text-gray-400 mt-2">{episode.description}</p>
                <button
  onClick={() => removeFavorite(episode.id)}
  className="absolute bottom-4 right-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
>
  Xóa
</button>

              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}

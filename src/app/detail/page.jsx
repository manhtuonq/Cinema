"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleBooking = () => {
    toast.success('Đặt vé thành công!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-black text-white flex items-center justify-center mt-4">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 p-4">
        {/* Bên trái - Ảnh */}
        <div className="w-full lg:w-1/3">
          <img
            src="https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/3/5/350x495-lgvm.jpg"
            alt="Movie Poster"
            width={400}
            height={600}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Bên phải - Chi tiết */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <h1 className="text-4xl font-bold mb-4">Chị Dậu (T16)</h1>
          <p className="text-lg mb-2">
            <span className="font-semibold">Thể loại:</span> Drama, Hài
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Thời lượng:</span> 100'
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Quốc gia:</span> Việt Nam
          </p>
          <p className="text-yellow-400 font-semibold mb-4">
            T16: Phim dành cho khán giả từ đủ 16 tuổi trở lên (16+)
          </p>
          <h2 className="text-2xl font-semibold mb-2">Mô tả</h2>
          <p className="mb-4">
            Đạo diễn: Khuong Ngoc <br />
            Diễn viên: Việt Hương, Hồng Đào, Lê Khánh, Ngọc Trinh
          </p>
          <p className="mb-6">
            Chuyện bắt đầu khi bà Nhị - con dâu cả của gia đình...{' '}
            <span className="text-blue-400 cursor-pointer">Xem thêm</span>
          </p>
          {/* Nút Đặt vé */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Đặt vé
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white text-black p-8 rounded-lg shadow-lg w-[90%] max-w-md">
            {/* Nút tắt popup */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Điền thông tin đặt vé</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleBooking();
              }}
            >
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-2 border rounded mb-4"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg w-full hover:bg-yellow-600 transition"
              >
                Xác nhận đặt vé
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      <ToastContainer />
    </div>
  );
};

export default Detail;

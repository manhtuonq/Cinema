"use client"
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Thêm dòng này để khai báo state cho dropdown
  const [showSearch, setShowSearch] = useState(false); // Trạng thái hiển thị input
  const [searchValue, setSearchValue] = useState(""); // Lưu giá trị input

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserClick = () => setDropdownOpen(!dropdownOpen); // Toggle dropdown khi click vào icon user

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg px-14">
      <div className="container mx-auto flex justify-between items-center py-8 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
          <span className="font-bold text-lg">aovis</span>
        </div>

        {/* Hamburger Icon (mobile) */}
        <div className="lg:hidden flex items-center">
          <FaBars 
            className="text-white cursor-pointer" 
            onClick={toggleMenu}
          />
        </div>

        {/* Navigation */}
        <nav className={`lg:flex items-center space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} lg:block`}>
          <a href="/" className="hover:text-orange-500">Trang chủ</a>
          <a href="/detail" className="hover:text-orange-500">Chi tiết</a>
          <a href="/login" className="hover:text-orange-500">Đăng nhập</a>
          <a href="/register" className="hover:text-orange-500">Đăng ký</a>
          <a href="/ListLove" className="hover:text-orange-500">Danh sách yêu thích</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Ô input tìm kiếm */}
          <div className="relative flex items-center">
            {showSearch && (
              <input
                type="text"
                className="absolute top-0 ml-[-230] mt-[-7] p-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
                placeholder="Nhập từ khóa..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} // Cập nhật giá trị input
                style={{ minWidth: "200px" }} // Đảm bảo độ rộng cố định
              />
            )}
            {/* Icon Tìm kiếm */}
            <FaSearch
              className="text-white cursor-pointer hover:text-orange-500"
              onClick={() => setShowSearch(!showSearch)} // Toggle hiển thị input
            />
          </div>

          {/* Icon User */}
          <div className="relative">
            <FaUser 
              className="text-white cursor-pointer hover:text-orange-500" 
              onClick={handleUserClick} // Đổi từ hover sang click
            />

            {dropdownOpen && (
              <div className="absolute right-0 top-10 bg-gray-900 text-white rounded-lg shadow-lg w-40 p-2">
                <p className="text-sm text-gray-400 mb-2">tuong@gmail.com</p>
                <ul>
                  <li className="hover:underline hover:text-cyan-500 mb-2">Thông tin</li>
                  <li className="hover:underline hover:text-red-500">Đăng xuất</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

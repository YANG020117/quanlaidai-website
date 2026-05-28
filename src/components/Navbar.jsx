import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "首页", path: "/" },
    { name: "产品中心", path: "/products" },
    { name: "典型案例", path: "/cases" },
    { name: "关于我们", path: "/about" },
    { name: "新闻动态", path: "/news" },
    { name: "联系我们", path: "/contact" },
  ];

  // 监听滚动，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-white/95 shadow-md"
      }`}
    >
      <div className="container-custom mx-auto py-3 flex justify-between items-center">
        {/* Logo 区域 - 带悬浮放大效果 */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src={logo}
            className="h-10 w-auto transform transition-transform group-hover:scale-105"
          />
          
        </Link>

        {/* 桌面端菜单 - 带下划线动画 */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group ${
                location.pathname === link.path ? "text-blue-600" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                  location.pathname === link.path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* 移动端菜单按钮 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 移动端下拉菜单 - 带动画效果 */}
      {isOpen && (
        <div className="md:hidden glass border-t mt-2 animate-fadeInUp">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-gray-600 hover:text-blue-600 transition py-2 ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

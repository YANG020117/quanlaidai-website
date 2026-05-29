import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '产品中心', path: '/products', dropdown: true },
    { name: '典型案例', path: '/cases', dropdown: true },
    { name: '关于我们', path: '/about', dropdown: true },
    { name: '新闻动态', path: '/news' },
    { name: '联系我们', path: '/contact' }
  ]

  // 下拉菜单内容
  const dropdownItems = {
    '/products': ['智能充电柜', '汽车充电桩', '智慧云平台', '智能插座', '换电柜', '电池检测设备'],
    '/cases': ['北京市政府项目', '北京亚洲金融大厦', '顺丰京东物流', '新发地市场'],
    '/about': ['公司简介', '发展历程', '资质荣誉', '企业文化']
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="全来电科技" className="h-10 w-auto" />
        </Link>

        {/* 桌面菜单 */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.path)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 text-gray-600 hover:text-blue-600 transition ${
                  location.pathname === link.path ? 'text-blue-600' : ''
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === link.path ? 'rotate-180' : ''
                  }`} />
                )}
              </Link>

              {/* 下拉菜单 */}
              {link.dropdown && openDropdown === link.path && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 animate-fadeInUp">
                  {dropdownItems[link.path].map((item, idx) => (
                    <Link
                      key={idx}
                      to={`${link.path}?tab=${idx}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 移动端按钮 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.path}
                className="block py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="pl-4 pb-2">
                  {dropdownItems[link.path].map((item, idx) => (
                    <Link
                      key={idx}
                      to={`${link.path}?tab=${idx}`}
                      className="block py-1 text-sm text-gray-500 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
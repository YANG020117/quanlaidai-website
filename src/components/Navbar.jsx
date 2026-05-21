import { Link } from 'react-router-dom'

const Navbar = () => {
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '产品中心', path: '/products' },
    { name: '典型案例', path: '/cases' },
    { name: '关于我们', path: '/about' },
    { name: '新闻动态', path: '/news' },
    { name: '联系我们', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">全</span>
          </div>
          <span className="font-bold text-xl text-gray-800">全来电科技</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
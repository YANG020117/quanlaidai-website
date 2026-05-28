import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo 区域 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* 公司 Logo 预留位置 - 替换这里 */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">全来电科技</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              户外泛在安全用电系统解决方案服务商，让用电更安全、更便捷。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-white transition">产品中心</Link></li>
              <li><Link to="/cases" className="hover:text-white transition">典型案例</Link></li>
              <li><Link to="/about" className="hover:text-white transition">关于我们</Link></li>
              <li><Link to="/news" className="hover:text-white transition">新闻动态</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">联系方式</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">北京市大兴区经海三路139号博电能源互联网创新园</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>400-888-6666</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@quanlaidai.com</span>
              </li>
            </ul>
          </div>

          {/* 社交媒体 - 图标预留位置 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">关注我们</h3>
            <div className="flex space-x-4">
              {/* 社交媒体图标预留位置 - 替换这些 */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-xl">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition text-xl">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition text-xl">
                📺
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {year} 全来电科技 | 户外泛在安全用电系统解决方案服务商</p>
          <p className="mt-2">Wherever, Whenever and Whatever — Enjoy safe and convenient electricity</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
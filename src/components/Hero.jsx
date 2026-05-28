import { ArrowRight, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// TODO: 把图片放到 src/assets/ 文件夹，然后取消下面的注释
// import heroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  const navigate = useNavigate()
  
  const tags = ['集中充电服务倡导者', '有序充电技术先行者', '泛在用电方案提供者'];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        // TODO: 替换成您的图片，把下面这行取消注释，并注释掉上面那行
        // backgroundImage: `url(${heroBg})`
      }}
    >
      {/* 深色遮罩层（配合图片使用时取消注释） */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
      
      <div className="relative z-10 container-custom mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <Zap className="w-4 h-4" />
          <span className="text-sm">户外泛在安全用电系统解决方案服务商</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">全来电科技</h1>
        <p className="text-2xl md:text-3xl mb-3 font-light">Wherever, Whenever and Whatever</p>
        <p className="text-xl mb-8">Enjoy safe and convenient electricity service for users</p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <span key={tag} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            探索产品 <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition"
          >
            联系我们
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl font-bold">126+</div>
            <div className="text-sm opacity-80">项专利技术</div>
          </div>
          <div>
            <div className="text-3xl font-bold">20000+</div>
            <div className="text-sm opacity-80">充电端口</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50万+</div>
            <div className="text-sm opacity-80">服务用户</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
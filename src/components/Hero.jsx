import { ArrowRight, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBg from '../assets/hero-bg.png'  // 添加这行，替换成您的图片

const Hero = () => {
  const navigate = useNavigate()
  
  const tags = ['集中充电服务倡导者', '有序充电技术先行者', '泛在用电方案提供者'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* 深色遮罩层，让文字更清晰 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 container-custom mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span className="text-sm">户外泛在安全用电系统解决方案服务商</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">全来电科技</h1>
          <p className="text-2xl md:text-3xl mb-3 font-light">Wherever, Whenever and Whatever</p>
          <p className="text-xl mb-8">Enjoy safe and convenient electricity service for users</p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tags.map((tag, idx) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => navigate('/products')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition"
            >
              探索产品 <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => navigate('/contact')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition"
            >
              联系我们
            </motion.button>
          </div>

          {/* 数据统计 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
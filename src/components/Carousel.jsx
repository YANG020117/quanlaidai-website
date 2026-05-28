import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Carousel = () => {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // 轮播图数据（替换成您的图片）
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1593948363156-d8e4b4a805fe?w=1920&q=80',
      title: '全来电科技',
      subtitle: '户外泛在安全用电系统解决方案服务商',
      buttonText: '了解产品',
      buttonLink: '/products',
      color: 'from-blue-900 to-blue-700'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1617788138017-80ad2915136d?w=1920&q=80',
      title: '智能充电解决方案',
      subtitle: '安全、便捷、智能的充电服务',
      buttonText: '解决方案',
      buttonLink: '/solutions',
      color: 'from-purple-900 to-purple-700'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=1920&q=80',
      title: '合作伙伴招募',
      subtitle: '携手共创绿色能源未来',
      buttonText: '联系我们',
      buttonLink: '/contact',
      color: 'from-green-900 to-green-700'
    }
  ]
  
  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 3000) // 5秒切换一次
    
    return () => clearInterval(interval)
  }, [slides.length])
  
  // 上一张
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }
  
  // 下一张
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }
  
  // 跳转到指定幻灯片
  const goToSlide = (index) => {
    setCurrentIndex(index)
  }
  
  const currentSlide = slides[currentIndex]
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
        style={{ 
          backgroundImage: `url(${currentSlide.image})`,
        }}
      >
        {/* 渐变遮罩 */}
        <div className={`absolute inset-0 bg-gradient-to-r ${currentSlide.color} opacity-70`}></div>
      </div>
      
      {/* 内容 */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {currentSlide.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {currentSlide.subtitle}
          </p>
          <button
            onClick={() => navigate(currentSlide.buttonLink)}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            {currentSlide.buttonText}
          </button>
        </div>
      </div>
      
      {/* 左箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      {/* 右箭头 */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* 底部指示点 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
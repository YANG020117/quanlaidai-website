import { useState } from 'react'
import { motion } from 'framer-motion'

const FlippableCard = ({ frontContent, backContent, title, icon, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 正面 - 保持不变，保留图标 */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-5 text-white shadow-xl flex flex-col">
          <div className="text-5xl mb-2">{icon}</div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-xs opacity-90 leading-relaxed flex-1">{frontContent}</p>
          <div className="absolute bottom-3 right-3 text-xs opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
            翻转 →
          </div>
        </div>
        
        {/* 背面 - 去掉图标，换成图片 */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl p-5 shadow-xl rotate-y-180 flex flex-col">
          {/* 图片区域 */}
          <div className="w-full h-32 mb-3 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            {backImage ? (
              <img 
                src={backImage} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <div className="text-3xl mb-1">📷</div>
                <p className="text-xs text-gray-400">产品图片</p>
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 text-xs leading-relaxed flex-1">{backContent}</p>
          <div className="mt-2 pt-2 border-t border-gray-100">
            <div className="text-blue-600 font-semibold text-xs flex items-center gap-1">
              了解更多 →
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FlippableCard
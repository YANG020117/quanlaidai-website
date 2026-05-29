import { motion } from 'framer-motion'
import companyImg from '../assets/company.jpg'  // 添加这行，替换成您的图片文件名

const CompanyIntro = () => {
  return (
    <section id="company" className="py-20 bg-white">
      <div className="container-custom mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          集团公司介绍
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧文字 */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                北京博电新力电气股份有限公司
              </h3>
              <p className="text-gray-600 leading-relaxed">
                2001年注册成立，2011年改制成为现代股份制企业，总部坐落于中关村高科技产业园区，是"国家火炬计划重点高新技术企业"。20年来，已发展成为国内知名的电力检测、监测、试验领域的设备制造商、方案解决商、服务提供商。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                北京全来电科技有限公司
              </h3>
              <p className="text-gray-600 leading-relaxed">
                成立于2019年2月，是"北京博电"孵化的创新企业，产品线覆盖整个充电产业链条，具有自主知识产权。率先提出户外共享用电系统概念，是中国第一家致力于户外泛在安全用电系统解决方案服务商。
              </p>
            </div>
          </motion.div>
          
          {/* 右侧图片 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={companyImg} 
                alt="全来电科技" 
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>
            {/* 装饰边框 */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-400 rounded-tl-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-purple-400 rounded-br-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyIntro
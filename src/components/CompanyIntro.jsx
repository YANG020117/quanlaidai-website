// TODO: 把图片放到 src/assets/ 文件夹，然后取消下面的注释
// import companyImg from '../assets/company.jpg'

const CompanyIntro = () => {
  return (
    <section id="company" className="py-20 bg-white">
      <div className="container-custom mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          集团公司介绍
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">北京博电新力电气股份有限公司</h3>
              <p className="text-gray-600 leading-relaxed">
                2001年注册成立，2011年改制成为现代股份制企业，总部坐落于中关村高科技产业园区，是"国家火炬计划重点高新技术企业"。20年来，已发展成为国内知名的电力检测、监测、试验领域的设备制造商、方案解决商、服务提供商。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">北京全来电科技有限公司</h3>
              <p className="text-gray-600 leading-relaxed">
                成立于2019年2月，是"北京博电"孵化的创新企业，产品线覆盖整个充电产业链条，具有自主知识产权。率先提出户外共享用电系统概念，是中国第一家致力于户外泛在安全用电系统解决方案服务商。
              </p>
            </div>
          </div>
          
          {/* 图片占位区域 - TODO: 替换成您的图片 */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-purple-100 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-2">📷</div>
              <p>公司图片占位</p>
              <p className="text-sm mt-2">请将图片放到 src/assets/company.jpg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyIntro
const CompanyIntro = () => {
  return (
    <section id="company" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          集团公司介绍
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">北京博电新力电气股份有限公司</h3>
            <p className="text-gray-600 leading-relaxed">
              2001年注册成立，2011年改制成为现代股份制企业，总部坐落于中关村高科技产业园区，是"国家火炬计划重点高新技术企业"。20年来，已发展成为国内知名的电力检测、监测、试验领域的设备制造商、方案解决商、服务提供商。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">北京全来电科技有限公司</h3>
            <p className="text-gray-600 leading-relaxed">
              成立于2019年2月，是"北京博电"孵化的创新企业，产品线覆盖整个充电产业链条，具有自主知识产权。率先提出户外共享用电系统概念，是中国第一家致力于户外泛在安全用电系统解决方案服务商。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
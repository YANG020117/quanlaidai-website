const About = () => {
  const timeline = [
    { year: '2001', event: '北京博电新力电气股份有限公司注册成立' },
    { year: '2011', event: '改制成为现代股份制企业，总部坐落于中关村高科技产业园区' },
    { year: '2019', event: '北京全来电科技有限公司成立，率先提出户外共享用电系统概念' },
    { year: '2022', event: '与国家电投合资成立国电投全来电绿能充锋科技有限公司' }
  ];

  const honors = [
    '国家火炬计划重点高新技术企业',
    '北京市高新技术企业',
    '中关村高新技术企业',
    'ISO9001质量管理体系认证',
    '中国充电设施行业十大创新品牌',
    '中国充电设施行业十大安全品牌',
    '京东科技优秀解决方案合作伙伴'
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 公司简介 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">关于我们</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            全来电科技是中国第一家致力于户外泛在安全用电系统解决方案服务商，
            集充电运营商、设备生产商、方案解决商为一体，以能源互联网为核心的科技创新型公司。
          </p>
        </div>
        
        {/* 核心优势 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">🏭</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">全产业链覆盖</h3>
            <p className="text-gray-600">覆盖整个充电产业链条，具有自主知识产权，央企唯一全充电产业链覆盖高科技企业</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">安全技术领先</h3>
            <p className="text-gray-600">国内唯一拥有电动自行车全链条充电+电池监管全覆盖技术，最早提前30分钟预警</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">专利技术储备</h3>
            <p className="text-gray-600">拥有专利126项，其中发明专利45项，美国发明专利1项，软件著作权89项</p>
          </div>
        </div>
        
        {/* 发展历程 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">发展历程</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 资质荣誉 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">资质荣誉</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {honors.map((honor, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <span className="text-yellow-500">🏆</span>
                <span className="text-gray-700">{honor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
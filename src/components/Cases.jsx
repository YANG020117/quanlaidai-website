const Cases = () => {
  const casesList = [
    { title: '🏛️ 北京市政府项目', desc: '北京副中心通州区政府、海淀区十大民生工程、东城区12个街道充电柜项目、朝阳区充电桩项目。' },
    { title: '🏢 北京亚洲金融大厦', desc: '2019年成为新能源基础建设唯一供应商，总计安装2148KW充电设施。' },
    { title: '📦 顺丰速运 & 京东物流', desc: '为北京20000名顺丰小哥提供充电柜，与京东共建20个物流园充电站。' },
    { title: '🌾 新发地市场', desc: '为亚洲最大生活物资转运中心提供新能源摆渡车、治安巡逻车充电设备。' },
    { title: '📍 深圳 & 宁夏 & 山东', desc: '深圳南山区、光明区项目落地；宁夏中卫、青铜峡投建3000余充电口。' }
  ];

  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          典型案例
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {casesList.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
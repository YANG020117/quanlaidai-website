const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: '国电投全来电绿能充锋科技有限公司',
      date: '成立于2022年9月',
      desc: '由国家电投集团绿能科技发展有限公司与北京全来电科技有限公司共同出资设立，注册资本金1亿人民币。业务涵盖充电产业链条、综合智慧能源、分布式能源等，提供完整的"智慧能源+智慧城市"解决方案。',
      icon: '🏭'
    },
    {
      name: '全能纪元',
      date: 'AI驱动的能源解决方案',
      desc: '为无人机和无人车提供空地一体化能源解决方案。以建设综合能源岛为硬件基础，通过分布式充换电网络，解决无人机户外续航焦虑并支持无人车补给。核心价值在于AI驱动的"智能运营大脑"。',
      icon: '🤖'
    }
  ];

  return (
    <section id="subsidiaries" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          重要合资子公司
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {subsidiaries.map((item) => (
            <div key={item.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.date}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
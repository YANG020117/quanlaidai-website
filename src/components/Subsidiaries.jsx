// TODO: 把图片放到 src/assets/ 文件夹，然后取消下面的注释
// import subsidiary1 from '../assets/subsidiary1.jpg'
// import subsidiary2 from '../assets/subsidiary2.jpg'

const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%23e2e8f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8"%3E图片%3C/text%3E%3C/svg%3E'

const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: '国电投全来电绿能充锋科技有限公司',
      date: '成立于2022年9月',
      desc: '由国家电投集团绿能科技发展有限公司与北京全来电科技有限公司共同出资设立，注册资本金1亿人民币。业务涵盖充电产业链条、综合智慧能源、分布式能源等。',
      icon: '🏭',
      img: placeholderImg
    },
    {
      name: '全能纪元',
      date: 'AI驱动的能源解决方案',
      desc: '为无人机和无人车提供空地一体化能源解决方案。以建设综合能源岛为硬件基础，通过分布式充换电网络，解决无人机户外续航焦虑。',
      icon: '🤖',
      img: placeholderImg
    }
  ];

  return (
    <section id="subsidiaries" className="py-20 bg-gray-100">
      <div className="container-custom mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          重要合资子公司
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {subsidiaries.map((item) => (
            <div key={item.name} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              {/* 图片占位区域 */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
import { useParams, useNavigate } from 'react-router-dom'

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const newsDetails = {
    1: {
      title: '全来电科技中标北京市海淀区电动自行车集中充电设施建设运营项目',
      date: '2020-05-15',
      category: '公司新闻',
      content: `
        近日，全来电科技成功中标北京市海淀区电动自行车集中充电设施建设运营项目。该项目作为2020年北京十大民生工程之一，受到政府和市民的高度关注。
        
        全来电科技将负责海淀区十个街道乡镇的电动自行车集中充电设施建设，项目将覆盖数万户居民，为海淀区居民提供安全、便捷的电动自行车充电服务。
        
        全来电科技凭借先进的技术方案、完善的安全保障措施和优质的运营服务能力，在众多竞标企业中脱颖而出。公司独创的防触电技术、内置消防系统、智能云平台等核心优势，确保了充电设施的安全性和可靠性。
        
        项目建成后，将有效解决海淀区电动自行车入户充电、飞线充电等安全隐患问题，为居民提供更加安全、便捷的充电服务。全来电科技将继续秉承"让用电更安全、更便捷"的理念，为北京市新能源基础设施建设贡献力量。
      `
    },
    2: {
      title: '全来电科技与国电投合资成立国电投全来电绿能充锋科技有限公司',
      date: '2022-09-01',
      category: '公司新闻',
      content: `
        2022年9月，北京全来电科技有限公司与国家电投集团绿能科技发展有限公司共同出资设立国电投全来电绿能充锋科技有限公司，注册资本金1亿人民币，由绿能科技持股51%控股。
        
        新公司的业务涵盖整个充电产业链条、综合智慧能源、分布式能源、多能耦合综合能源系统、电动自行车"一车一池一码"建设等，可提供完整的"智慧能源+智慧城市"解决方案。
        
        此次合作是双方在新能源领域的强强联合，将充分发挥各自在技术、资源、市场等方面的优势，共同推动智慧能源和智慧城市建设。
        
        国电投全来电绿能充锋科技有限公司的成立，标志着全来电科技进入了一个全新的发展阶段，公司将在更广阔的平台上为客户提供更加优质的产品和服务。
      `
    }
    // 可以继续添加其他新闻详情
  };

  const news = newsDetails[id] || newsDetails[1];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate('/news')}
          className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center gap-2"
        >
          ← 返回新闻列表
        </button>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                {news.category}
              </span>
              <span className="text-gray-400 text-sm">{news.date}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{news.title}</h1>
            <div className="prose max-w-none">
              {news.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
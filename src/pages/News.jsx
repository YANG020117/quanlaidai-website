import { useNavigate } from 'react-router-dom'

const News = () => {
  const navigate = useNavigate();
  
  const newsList = [
    {
      id: 1,
      title: '全来电科技中标北京市海淀区电动自行车集中充电设施建设运营项目',
      summary: '2020年北京十大民生工程，负责海淀区十个街道乡镇的电动自行车集中充电设施建设。',
      date: '2020-05-15',
      category: '公司新闻',
      icon: '📰'
    },
    {
      id: 2,
      title: '全来电科技与国电投合资成立国电投全来电绿能充锋科技有限公司',
      summary: '注册资本金1亿人民币，提供完整的"智慧能源+智慧城市"解决方案。',
      date: '2022-09-01',
      category: '公司新闻',
      icon: '🤝'
    },
    {
      id: 3,
      title: '全来电科技与京东物流达成战略合作',
      summary: '已在北京天津等地部署数千个充电柜，共建20个物流园充电站。',
      date: '2022-01-10',
      category: '战略合作',
      icon: '🚚'
    },
    {
      id: 4,
      title: '全来电科技荣获京东科技优秀解决方案合作伙伴奖',
      summary: '凭借卓越的产品质量和优质的服务获得京东科技认可。',
      date: '2022-12-20',
      category: '荣誉奖项',
      icon: '🏆'
    },
    {
      id: 5,
      title: '全来电科技华南首个项目在深圳南山区落地',
      summary: '标志着全来电科技正式进军华南区域市场。',
      date: '2023-03-15',
      category: '市场拓展',
      icon: '📍'
    },
    {
      id: 6,
      title: '全来电科技发布电动自行车电池快速检测设备',
      summary: '全国独家研发成功三种不同场景下使用的电池快速检测设备。',
      date: '2023-06-20',
      category: '产品发布',
      icon: '🔋'
    }
  ];

  const categories = ['全部', '公司新闻', '战略合作', '荣誉奖项', '市场拓展', '产品发布'];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">新闻动态</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            了解全来电科技最新动态、行业资讯和公司发展
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {newsList.map((news) => (
            <div 
              key={news.id}
              onClick={() => navigate(`/news/${news.id}`)}
              className="bg-white rounded-xl shadow-md p-6 mb-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{news.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-gray-400 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{news.title}</h3>
                  <p className="text-gray-600">{news.summary}</p>
                  <div className="mt-3 text-blue-600 text-sm">阅读更多 →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
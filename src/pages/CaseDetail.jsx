import { useParams, useNavigate } from 'react-router-dom'

const CaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseDetails = {
    1: {
      title: '北京市政府项目',
      icon: '🏛️',
      category: '政府项目',
      fullDesc: '全来电科技成功中标北京市多个区政府充电设施建设项目，凭借优质的服务和一流的产品质量成为通州第二办公区停车场新能源基础建设充电桩供应商。2020年，全来电中标了"海淀区电动自行车集中充电设施建设运营项目"，负责海淀区十个街道乡镇的电动自行车集中充电设施建设。2022年，全来电科技与东城静态交通展开合作，在东城12个街道投建电动自行车充电设施10000余端口。',
      achievements: [
        '通州区政府第二办公区充电桩项目',
        '海淀区电动自行车集中充电设施建设运营项目（2020年北京十大民生工程）',
        '东城区12个街道充电柜项目10000余端口',
        '朝阳区充电桩项目'
      ],
      stats: [
        { label: '覆盖区域', value: '6个行政区' },
        { label: '建设端口', value: '20000+' },
        { label: '服务用户', value: '50万+' },
        { label: '验收合格率', value: '100%' }
      ],
      images: ['🏛️', '🏛️', '🏛️']
    },
    2: {
      title: '北京亚洲金融大厦',
      icon: '🏢',
      category: '商业建筑',
      fullDesc: '全来电科技2019年成为亚洲金融大厦新能源基础建设唯一供应商，总计安装了2148KW的充电设施，充分体现了全来电的品牌价值和产品实力。该项目为高端商业建筑提供了完善的充电基础设施解决方案。',
      achievements: [
        '成为亚洲金融大厦唯一供应商',
        '总计安装2148KW充电设施',
        '服务高端商业用户',
        '运行稳定零故障'
      ],
      stats: [
        { label: '总功率', value: '2148KW' },
        { label: '供应商地位', value: '唯一' },
        { label: '运行时间', value: '5年+' },
        { label: '故障率', value: '0%' }
      ],
      images: ['🏢', '🏢', '🏢']
    },
    3: {
      title: '顺丰速运 & 京东物流',
      icon: '📦',
      category: '物流企业',
      fullDesc: '全来电凭借充电柜产品的优良特征和人性化服务成为北京顺丰速运的充电柜产品供应商，为北京20000名顺丰小哥提供安全可靠的充电服务。同时与京东物流深度合作，已在北京天津等地部署数千个充电柜，并共建20个物流园充电站，覆盖全国主要城市。',
      achievements: [
        '北京顺丰20000名快递员充电保障',
        '京东物流数千个充电柜部署',
        '20个物流园充电站共建',
        '覆盖北京、天津、海南、江西等省市'
      ],
      stats: [
        { label: '服务人数', value: '20000+' },
        { label: '充电柜数量', value: '数千个' },
        { label: '物流园', value: '20个' },
        { label: '覆盖城市', value: '10+' }
      ],
      images: ['📦', '📦', '📦']
    }
    // 可以继续添加其他案例详情
  };

  const caseItem = caseDetails[id] || caseDetails[1];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate('/cases')}
          className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center gap-2"
        >
          ← 返回案例列表
        </button>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <div className="text-6xl mb-3">{caseItem.icon}</div>
            <h1 className="text-3xl font-bold mb-2">{caseItem.title}</h1>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm inline-block">
              {caseItem.category}
            </span>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">项目详情</h3>
              <p className="text-gray-600 leading-relaxed">{caseItem.fullDesc}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">项目成果</h3>
              <ul className="space-y-2">
                {caseItem.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500">✓</span> {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">关键数据</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseItem.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
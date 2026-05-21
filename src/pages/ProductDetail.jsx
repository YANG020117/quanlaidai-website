import { useParams, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const products = {
    1: {
      name: '智能插座系列',
      icon: '🔌',
      fullDesc: '全来电智能插座系列产品采用先进的充电控制技术，支持多种充电模式，具备过流保护、过压保护、漏电保护等多重安全防护功能。适用于居民小区、商业区、办公区等场所的低速电动车充电需求。',
      features: [
        '多重安全防护：过流、过压、漏电、防雷保护',
        '智能功率调节：根据电池状态自动调节充电功率',
        '远程监控管理：通过云平台实时监控设备状态',
        '兼容多种车型：支持主流电动自行车品牌',
        '防水防尘设计：IP54防护等级，适应户外环境',
        '一键充电：扫码即充，操作简单'
      ],
      specs: [
        '额定功率：1kW-3kW',
        '输入电压：220V AC，50Hz',
        '输出电压：220V AC',
        '防护等级：IP54',
        '工作温度：-20℃~50℃',
        '通信方式：4G/WiFi/以太网'
      ],
      images: ['🔌', '🔌', '🔌']
    },
    2: {
      name: '智能充电柜系列',
      icon: '📦',
      fullDesc: '全来电智能充电柜采用独创的防触电控制模块，关门给电、开门断电，确保用户安全。柜体具有防爆、防尘、防水功能，内置烟感报警和自动消防设施。充电柜独家内置"防触电"控制模块，关门给电、开门断电。',
      features: [
        '关门给电开门断电：独创防触电技术',
        '内置消防系统：烟感报警、自动灭火',
        '高温预警：实时温度监测',
        '柜体防爆：专业防爆设计',
        '防水防漏电：IP55防护等级',
        '使用寿命>10年：高品质材料'
      ],
      specs: [
        '输入电压：220V AC',
        '最大功率：6kW',
        '单路功率：≤500W',
        '防护等级：IP55',
        '工作温度：-20℃~50℃',
        '通信方式：4G/以太网'
      ],
      images: ['📦', '📦', '📦']
    }
    // 可以继续添加其他产品的详情
  };

  const product = products[id] || products[1];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center gap-2"
        >
          ← 返回产品列表
        </button>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center">
              <div className="text-8xl">{product.icon}</div>
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{product.fullDesc}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">产品特点</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">技术参数</h3>
                <div className="grid md:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="text-gray-600">{spec}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">需要了解更多？</h3>
          <p className="text-gray-600 mb-4">我们的专业团队随时为您提供技术咨询和解决方案</p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            联系我们
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: '智能插座系列', icon: '🔌', desc: '面向社区低速电动车充电场景，安全便捷。' },
    { id: 2, name: '智能充电柜系列', icon: '📦', desc: '内置消防设施，关门给电、开门断电，使用寿命>10年。' },
    { id: 3, name: '换电柜系列', icon: '🔄', desc: '提供Saas系统服务，数据完全隔离，支持小区域换电运营。' },
    { id: 4, name: '汽车充电桩系列', icon: '🚗', desc: '交流慢充7KW、快充21KW、直流快充60KW/120KW。' },
    { id: 5, name: '电池快速检测设备', icon: '🔋', desc: '全国独家研发，立柱式/手持式检测，电池回收柜。' },
    { id: 6, name: '智慧云平台', icon: '☁️', desc: '"云-边-端"架构，大数据分析中台，充电SaaS系统。' }
  ];

  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          产品中心
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.name}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl mb-3">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
              <div className="mt-3 text-blue-600 text-sm">查看详情 →</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button 
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            查看更多产品
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
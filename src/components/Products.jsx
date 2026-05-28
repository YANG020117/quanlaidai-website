import { useNavigate } from 'react-router-dom'
import { Zap, Package, RefreshCw, Car, Battery, Cloud, ArrowRight } from 'lucide-react'

const Products = () => {
  const navigate = useNavigate()
  
  const products = [
    { 
      id: 1, 
      name: '智能插座系列', 
      icon: Zap, 
      desc: '面向社区低速电动车充电场景，安全便捷。',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      id: 2, 
      name: '智能充电柜系列', 
      icon: Package, 
      desc: '内置消防设施，关门给电、开门断电。',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      id: 3, 
      name: '换电柜系列', 
      icon: RefreshCw, 
      desc: 'Saas系统服务，数据完全隔离。',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    { 
      id: 4, 
      name: '汽车充电桩系列', 
      icon: Car, 
      desc: '7KW-120KW全功率段覆盖。',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      id: 5, 
      name: '电池快速检测设备', 
      icon: Battery, 
      desc: '全国独家研发，3分钟快速检测。',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    { 
      id: 6, 
      name: '智慧云平台', 
      icon: Cloud, 
      desc: '"云-边-端"架构，大数据分析。',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">产品中心</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            全来电科技产品线覆盖整个充电产业链条，具有自主知识产权，
            为各类用电场景提供安全、便捷的充电解决方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${product.bgColor} p-8 flex justify-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <Icon className={`w-20 h-20 text-gray-700 group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    查看详情 <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="btn-primary text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg"
          >
            查看更多产品 <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
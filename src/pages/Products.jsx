import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// TODO: 把图片放到 src/assets/ 文件夹，然后取消下面的注释
// import product1 from '../assets/product1.jpg'
// import product2 from '../assets/product2.jpg'
// import product3 from '../assets/product3.jpg'
// import product4 from '../assets/product4.jpg'
// import product5 from '../assets/product5.jpg'
// import product6 from '../assets/product6.jpg'

// 临时占位图片（灰色块）
const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e2e8f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8"%3E图片占位%3C/text%3E%3C/svg%3E'

const Products = () => {
  const navigate = useNavigate()
  
  const products = [
    { id: 1, name: '智能插座系列', desc: '面向社区低速电动车充电场景，安全便捷。', img: placeholderImg },
    { id: 2, name: '智能充电柜系列', desc: '内置消防设施，关门给电、开门断电。', img: placeholderImg },
    { id: 3, name: '换电柜系列', desc: 'Saas系统服务，数据完全隔离。', img: placeholderImg },
    { id: 4, name: '汽车充电桩系列', desc: '7KW-120KW全功率段覆盖。', img: placeholderImg },
    { id: 5, name: '电池快速检测设备', desc: '全国独家研发，3分钟快速检测。', img: placeholderImg },
    { id: 6, name: '智慧云平台', desc: '"云-边-端"架构，大数据分析。', img: placeholderImg }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          产品中心
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          全来电科技产品线覆盖整个充电产业链条，具有自主知识产权
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer card-hover"
            >
              {/* 图片占位区域 */}
              <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  查看详情 <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="btn-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            查看更多产品 <ArrowRight className="w-5 h-5 inline ml-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
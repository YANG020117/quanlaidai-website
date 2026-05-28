import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// TODO: 把图片放到 src/assets/ 文件夹，然后取消下面的注释
// import case1 from '../assets/case1.jpg'
// import case2 from '../assets/case2.jpg'
// import case3 from '../assets/case3.jpg'
// import case4 from '../assets/case4.jpg'
// import case5 from '../assets/case5.jpg'

const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23e2e8f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8"%3E图片占位%3C/text%3E%3C/svg%3E'

const Cases = () => {
  const navigate = useNavigate()
  
  const casesList = [
    { id: 1, title: '北京市政府项目', desc: '北京副中心通州区政府、海淀区十大民生工程、东城区12个街道充电柜项目。', img: placeholderImg, category: '政府项目' },
    { id: 2, title: '北京亚洲金融大厦', desc: '2019年成为新能源基础建设唯一供应商，总计安装2148KW充电设施。', img: placeholderImg, category: '商业建筑' },
    { id: 3, title: '顺丰速运 & 京东物流', desc: '为北京20000名顺丰小哥提供充电柜，与京东共建20个物流园充电站。', img: placeholderImg, category: '物流企业' },
    { id: 4, title: '新发地市场', desc: '为亚洲最大生活物资转运中心提供新能源摆渡车、治安巡逻车充电设备。', img: placeholderImg, category: '物流园区' },
    { id: 5, title: '深圳 & 宁夏 & 山东', desc: '深圳南山区、光明区项目落地；宁夏中卫、青铜峡投建3000余充电口。', img: placeholderImg, category: '政府项目' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          典型案例
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          全来电科技已在全国多个省市落地项目，服务政府、企业、社区等多类客户
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {casesList.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/case/${item.id}`)}
              className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden bg-gray-200">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="md:w-3/5 p-5">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="font-bold text-blue-700 text-lg mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                <div className="mt-3 text-blue-600 text-sm font-medium group-hover:gap-1 transition-all">
                  查看详情 →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/cases')}
            className="btn-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            查看更多案例 <ArrowRight className="w-5 h-5 inline ml-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cases
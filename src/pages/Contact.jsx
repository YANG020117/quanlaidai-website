import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里后续可以对接后端API
    alert('感谢您的留言，我们会尽快与您联系！');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">联系我们</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            如果您有任何问题或需求，请随时联系我们，我们的专业团队将竭诚为您服务
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 联系信息 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">联系方式</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-800">研发中心</h3>
                  <p className="text-gray-600">北京市大兴区经海三路139号博电能源互联网创新园</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-800">联系电话</h3>
                  <p className="text-gray-600">010-12345678</p>
                  <p className="text-gray-600">400-888-6666</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-2xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-800">电子邮箱</h3>
                  <p className="text-gray-600">info@quanlaidai.com</p>
                  <p className="text-gray-600">service@quanlaidai.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-2xl">⏰</div>
                <div>
                  <h3 className="font-semibold text-gray-800">工作时间</h3>
                  <p className="text-gray-600">周一至周五 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 留言表单 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">在线留言</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">姓名 *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">联系电话 *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入您的电话"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">电子邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入您的邮箱"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">留言内容 *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入您的需求或问题"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                提交留言
              </button>
            </form>
          </div>
        </div>
        
        {/* 地图占位 */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">公司位置</h3>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🗺️</div>
              <p>地图加载中...</p>
              <p className="text-sm">北京市大兴区经海三路139号博电能源互联网创新园</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
const CoreCompetence = () => {
  return (
    <section id="competence" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          核心竞争力
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-bold text-blue-800 mb-3">技术创新优势</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span>多项国标、行业标准制定参与者，拥有专利126项（其中发明专利45项，美国发明专利1项）</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span>央企唯一全充电产业链覆盖高科技企业：自主研发、生产、投建、运营运维</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span>国内唯一拥有电动自行车全链条充电+电池监管全覆盖技术（"一车一池一码"管理平台）</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✓</span>积极储备虚拟电厂创新技术，未来将参与电力交易市场</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-3">模式创新优势</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>全国唯一业务覆盖两轮三轮四轮全场景全产业链充换电企业</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>数字化智能化业务标准化流程，实现互联网式发展路径</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>产品数字化全生命周期管理、踏勘施工安装标准化体系</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetence;
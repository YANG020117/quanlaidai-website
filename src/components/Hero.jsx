const Hero = () => {
  const tags = ['集中充电服务倡导者', '有序充电技术先行者', '泛在用电方案提供者'];

  return (
    <section id="home" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-20 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">全来电科技</h1>
        <p className="text-xl md:text-2xl mb-3">Wherever, Whenever and Whatever</p>
        <p className="text-lg md:text-xl mb-8">Enjoy safe and convenient electricity service for users</p>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-500 bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-gray-400">研发中心：北京市大兴区经海三路139号博电能源互联网创新园</p>
        </div>
        <div className="border-t border-gray-800 pt-4">
          <p className="text-gray-400 text-sm">© {year} 全来电科技 | 户外泛在安全用电系统解决方案服务商</p>
          <p className="text-gray-500 text-xs mt-2">Wherever, Whenever and Whatever — Enjoy safe and convenient electricity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
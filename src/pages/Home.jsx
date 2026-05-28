import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  Shield,
  Battery,
  Award,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Cpu,
  Leaf,
  Building,
  Truck,
  Factory,
  Rocket,
  Globe,
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

import Hero from "../components/Hero";
import CompanyIntro from "../components/CompanyIntro";
import FlippableCard from "../components/FlippableCard";
import AccordionSection from "../components/AccordionSection";
import FloatingCard from "../components/FloatingCard";
import ParallaxSection from "../components/ParallaxSection";

const Home = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef([]);

  // 跟随鼠标的浮窗效果
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 轮播图数据
  // 核心产品数据（6张卡片）
  // 核心产品数据（16款产品）
  const flippableCards = [
    {
      icon: "🔋",
      title: "智能充电柜",
      front: "内置消防，关门给电开门断电",
      back: "独创防触电技术，柜体防爆，内置烟感报警和自动消防设施，使用寿命>10年。",
    },
    {
      icon: "🚗",
      title: "汽车充电桩",
      front: "7KW-120KW全功率覆盖",
      back: "交流慢充7KW、快充21KW、直流快充60KW/120KW，满足电动汽车全场景需求。",
    },
    {
      icon: "☁️",
      title: "智慧云平台",
      front: "云-边-端架构，实时监控",
      back: "大数据分析中台，设备全生命周期管理，充电SaaS系统，企业数字化管理平台。",
    },
    {
      icon: "🔌",
      title: "智能插座系列",
      front: "1kW-3kW，适用低速电动车",
      back: "多重安全防护，智能功率调节，远程监控管理，兼容多种车型，IP54防护等级。",
    },
    {
      icon: "🔄",
      title: "换电柜系列",
      front: "Saas系统服务，数据隔离",
      back: "电池类型磷酸铁锂，充电时间2小时，柜体容量8/12/16仓，支持小区域换电运营。",
    },
    {
      icon: "🔬",
      title: "电池快速检测设备",
      front: "3分钟快速检测，安全评估",
      back: "全国独家研发，立柱式/手持式检测，电池回收柜，降低电池着火率，提前30分钟预警。",
    },
    {
      icon: "🏭",
      title: "智能充电站",
      front: "一站式充电解决方案",
      back: "集充电、换电、检测于一体，适用于物流园区、公交场站等场景，支持多枪同时充电。",
    },
    {
      icon: "📊",
      title: "能源管理系统",
      front: "智慧能源监控平台",
      back: "实时监控用电数据，智能分析能耗，优化充电策略，支持虚拟电厂接入，参与电力交易。",
    },
    {
      icon: "🛵",
      title: "两轮电动车充电桩",
      front: "智能识别，自动断电",
      back: "专为电动自行车设计，充满自动断电，过载保护，防水防尘，支持扫码支付。",
    },
    {
      icon: "🚲",
      title: "共享电单车换电柜",
      front: "快速换电，即取即走",
      back: "适用于共享电单车运营，24小时智能柜，电池自动识别，支持批量管理。",
    },
    {
      icon: "🏠",
      title: "家用交流充电桩",
      front: "7kW，智能家庭充电",
      back: "家用壁挂式设计，APP远程控制，定时充电，电量统计，适配主流新能源车型。",
    },
    {
      icon: "🏢",
      title: "商业快充站",
      front: "120kW双枪直流快充",
      back: "适用于商业综合体、写字楼，双枪同时充电，智能功率分配，支持多种支付方式。",
    },
    {
      icon: "🅿️",
      title: "停车场充电系统",
      front: "智能车位管理+充电",
      back: "集成车位锁、地锁、充电桩一体化，防止燃油车占位，提升充电桩利用率。",
    },
    {
      icon: "🔧",
      title: "移动应急充电车",
      front: "紧急救援，随叫随到",
      back: "配备大容量电池组，可为多辆电动车应急充电，适用于高速服务区、偏远地区。",
    },
    {
      icon: "📱",
      title: "全来电APP",
      front: "找桩-充电-支付一站式",
      back: "实时查找附近充电桩，查看空闲状态，在线支付，充电记录查询，电子发票。",
    },
    {
      icon: "🔐",
      title: "智能运维平台",
      front: "7x24小时远程监控",
      back: "设备状态实时监控，故障自动告警，远程升级维护，数据分析报表，降低运维成本。",
    },
  ];

  const accordionData = [
    {
      title: "技术创新优势",
      icon: "⚡",
      content:
        "拥有专利126项（其中发明专利45项，美国发明专利1项），软件著作权89项。多项国标、行业标准制定参与者，占领技术制高点。",
    },
    {
      title: "模式创新优势",
      icon: "🔄",
      content:
        "全国唯一业务覆盖两轮三轮四轮全场景全产业链充换电企业，数字化智能化业务标准化流程，实现互联网式发展路径。",
    },
    {
      title: "安全技术优势",
      icon: "🛡️",
      content:
        "国内唯一拥有电动自行车全链条充电+电池监管全覆盖技术，能最早提早30分钟预警，降低电池着火率。",
    },
  ];

  const stats = [
    { value: "126+", label: "项专利技术", icon: <Award className="w-6 h-6" /> },
    { value: "20000+", label: "充电端口", icon: <Zap className="w-6 h-6" /> },
    { value: "50万+", label: "服务用户", icon: <Users className="w-6 h-6" /> },
    { value: "20+", label: "覆盖城市", icon: <Globe className="w-6 h-6" /> },
  ];

  // ========== Intersection Observer：实现划入划出的缩放效果 ==========
  useEffect(() => {
    // 给每个 section 添加初始状态
    sectionsRef.current.forEach((section) => {
      if (section) {
        // 如果已经进入过视口，重置类
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add("in-view");
          section.classList.remove("leave-view");
        } else {
          section.classList.remove("in-view");
          section.classList.add("leave-view");
        }
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 进入视口：移除离开类，添加进入类
            entry.target.classList.remove("leave-view");
            entry.target.classList.add("in-view");
          } else {
            // 离开视口：移除进入类，添加离开类
            entry.target.classList.remove("in-view");
            entry.target.classList.add("leave-view");
          }
        });
      },
      {
        threshold: 0.2, // 20%可见时触发（更灵敏）
        rootMargin: "0px 0px -50px 0px", // 稍微延迟触发
      },
    );

    // 观察所有section
    const currentSections = sectionsRef.current;
    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []); // 注意：依赖数组是空的，只执行一次

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let newIndex = 0;
      for (let i = 0; i < sectionsRef.current.length; i++) {
        const section = sectionsRef.current[i];
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            newIndex = i;
            break;
          }
        }
      }
      if (newIndex !== activeIndex) setActiveIndex(newIndex);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionNames = [
    "首页",
    "公司",
    "动态卡片",
    "折叠面板",
    "数据统计",
    "合作伙伴",
    "联系我们",
  ];

  return (
    <>
      <div>
        {/* 第1屏：动态Hero - 带鼠标跟随效果 */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="scroll-section relative overflow-hidden min-h-screen parallax-bg"
        >
          <div className="parallax-child">
            {/* 背景动画 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900">
              <motion.div
                className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
                animate={{
                  x: mousePosition.x - 192,
                  y: mousePosition.y - 192,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 30 }}
              />
            </div>
            <Hero />
          </div>
        </div>

        {/* 第2屏：公司介绍 + 浮动图标 */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="scroll-section min-h-screen bg-white relative parallax-bg"
        >
          <div className="parallax-child">
            <motion.div
              className="absolute top-20 left-10 text-6xl opacity-10"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⚡
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-10 text-6xl opacity-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🔋
            </motion.div>
            <CompanyIntro />
          </div>
        </div>

        {/* 第3屏：可翻转卡片 - 水平滚动版（16张卡片） */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="scroll-section min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center py-12 parallax-bg"
        >
          <div className="container-custom mx-auto w-full parallax-child">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              核心产品
            </motion.h2>
            <motion.p
              className="text-gray-600 text-center max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              悬浮卡片查看详细信息，左右滑动浏览全部{flippableCards.length}
              款产品
            </motion.p>

            {/* 水平滚动区域 - 16张卡片可左右滑动 */}
            <div
              className="flex gap-5 overflow-x-auto pb-6 px-6 scrollbar-thin"
              style={{
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {flippableCards.map((card, idx) => (
                <FloatingCard key={idx} delay={idx * 0.03}>
                  <div className="w-64 h-72 flex-shrink-0 perspective-1000">
                    <FlippableCard
                      frontContent={card.front}
                      backContent={card.back}
                      icon={card.icon}
                      title={card.title}
                    />
                  </div>
                </FloatingCard>
              ))}
            </div>

            {/* 提示滚动 - 更明显的提示 */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                ← 左右滑动查看更多（共{flippableCards.length}款产品） →
              </p>
              {/* 滚动进度指示器 - 显示16个小圆点 */}
              <div className="flex justify-center gap-1 mt-3 flex-wrap">
                {flippableCards.map((_, idx) => (
                  <div
                    key={idx}
                    className="w-1.5 h-1.5 rounded-full bg-gray-300"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                共 {flippableCards.length} 款产品，手指左右滑动浏览
              </p>
            </div>
          </div>
        </div>

        {/* 第4屏：折叠面板（可展开/收起） */}
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="scroll-section min-h-screen bg-white flex items-center py-20 parallax-bg"
        >
          <div className="container-custom mx-auto parallax-child">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              核心优势
            </motion.h2>
            <motion.p
              className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              点击展开查看详细信息
            </motion.p>

            <div className="max-w-3xl mx-auto space-y-4">
              {accordionData.map((item, idx) => (
                <FloatingCard key={idx} delay={idx * 0.1}>
                  <AccordionSection
                    title={item.title}
                    content={item.content}
                    icon={item.icon}
                  />
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>

        {/* 第5屏：数据统计 - 数字滚动效果 */}
        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="scroll-section min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center py-20 parallax-bg"
        >
          <div className="container-custom mx-auto text-center parallax-child">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              全来电在数字中的体现
            </motion.h2>
            <motion.p
              className="text-white/80 text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              用数据证明实力
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <FloatingCard key={idx} delay={idx * 0.15}>
                  <motion.div
                    className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <motion.div
                      className="text-4xl md:text-5xl font-bold"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm opacity-80 mt-2">{stat.label}</div>
                  </motion.div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>

        {/* 第6屏：合作伙伴 - 滚动动画 */}
        <div
          ref={(el) => (sectionsRef.current[5] = el)}
          className="scroll-section min-h-screen bg-white flex items-center py-20 parallax-bg"
        >
          <div className="container-custom mx-auto parallax-child">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              合作伙伴
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                "国家电投",
                "京东物流",
                "顺丰速运",
                "北京亚洲金融大厦",
                "新发地市场",
                "通州区政府",
                "海淀区政府",
                "东城区政府",
              ].map((partner, idx) => (
                <FloatingCard key={idx} delay={idx * 0.08}>
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6 text-center cursor-pointer"
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <p className="font-semibold text-gray-700">{partner}</p>
                  </motion.div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>

        {/* 第7屏：联系我们 - 弹窗效果按钮 */}
        <div
          ref={(el) => (sectionsRef.current[6] = el)}
          className="scroll-section min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center py-20 parallax-bg"
        >
          <div className="container-custom mx-auto text-center text-white parallax-child">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              联系我们
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              期待与您合作，共创绿色未来
            </motion.p>

            <motion.button
              onClick={() => navigate("/contact")}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              立即咨询 <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* 右侧导航圆点 */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {sectionNames.map((name, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              activeIndex === idx
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => scrollToSection(idx)}
            title={name}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

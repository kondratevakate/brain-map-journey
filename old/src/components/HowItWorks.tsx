import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

const timelineData = [
  {
    id: 1,
    label: "Clinical MRI + AI Insights",
    title: "Beyond a standard MRI — a deeper view of your brain",
    description: "You receive a full medical MRI scan with a certified radiologist's report. On top of that, our AI visualizes your brain in 3D and extracts personalized insights like Cognitive Age, Neuroplasticity Score, and Memory Index — giving you the context behind the diagnosis and showing how your brain evolves over time.",
    hasVisuals: true,
  },
  {
    id: 2,
    label: "Evolving Neuro Models",
    title: "Your insight grows with science",
    description: "MRI data stays securely with the user while analysis models keep improving. As new AI and neuroscience discoveries appear, past scans are reinterpreted with the latest understanding. This provides updated insight into focus, resilience, and cognitive balance, keeping each person in step with advancing brain science.",
    hasVisuals: false,
  },
];

const AnimatedNumber = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{typeof value === 'number' && value < 20 ? count.toFixed(1) : count}</span>;
};

const TimelineNode = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    className="w-2 h-2 rounded-full"
    style={{
      background: '#9D97FF',
      boxShadow: isActive 
        ? '0 0 14px #7B77FF' 
        : '0 0 10px #9D97FF',
    }}
    initial={{ opacity: 0, scale: 0.7 }}
    animate={isActive ? { 
      opacity: 1, 
      scale: 1.15
    } : { 
      opacity: 0.7, 
      scale: 1
    }}
    transition={{ duration: 0.2, ease: "easeOut" }}
  />
);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const spineScaleY = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="py-24 bg-gradient-to-b from-white to-purple-50/30 relative overflow-visible"
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-[120px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              What we offer
            </h2>
            <p className="text-xl text-muted-foreground">
              See how your brain performs
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative min-h-[1400px]">
            {/* Vertical Spine - Solid gradient with scroll-draw animation */}
            <div 
              className="sticky top-24 left-1/2 -translate-x-1/2 w-0.5 h-full hidden lg:block pointer-events-none"
              style={{ 
                filter: 'blur(1px)',
                zIndex: 10
              }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-0.5 h-full origin-top"
                style={{
                  background: 'linear-gradient(180deg, #B6B4FF 0%, #E6E6FF 100%)',
                  opacity: 0.85,
                  scaleY: spineScaleY
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-[340px]">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50/50 to-transparent pointer-events-none" />
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: typeof timelineData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-25%" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  const isLeftText = index % 2 === 0;

  return (
    <div 
      ref={ref} 
      className="relative min-h-[540px]"
    >
      {/* Timeline Node - Centered on spine */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20">
        <TimelineNode isActive={isInView} />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">
        {/* Text Column */}
        <motion.div
          className={`space-y-6 max-w-[560px] ${isLeftText ? 'lg:pr-12 lg:ml-auto' : 'lg:order-2 lg:pl-12'}`}
          initial={{ opacity: 0, x: isLeftText ? -22 : 22 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 bg-purple-50/80 rounded-full">
            <span className="text-xs uppercase tracking-wide font-medium" style={{ color: '#9B99FF' }}>
              {item.label}
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {item.title}
          </h3>
          
          <p className="text-lg text-muted-foreground leading-[1.45]">
            {item.description}
          </p>
        </motion.div>

        {/* Visual Column */}
        <motion.div
          className={isLeftText ? 'lg:order-2' : 'lg:order-1'}
          initial={{ opacity: 0, x: isLeftText ? 14 : -14 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        >
          <motion.div style={{ y: parallaxY }}>
            {item.id === 1 ? (
              <div className="space-y-6">
                {/* Brain Images - MRI + 3D colored brain */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <motion.div 
                    className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-8 flex items-center justify-center aspect-square shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Brain className="w-32 h-32 text-slate-300" strokeWidth={1.5} />
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 rounded-3xl p-8 flex items-center justify-center aspect-square shadow-xl relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-green-400/20" />
                    <Brain className="w-32 h-32 text-purple-600 relative z-10" strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Biometric Summary Card */}
                <motion.div 
                  className="rounded-3xl p-8 text-white shadow-2xl"
                  style={{ background: '#0B0C1A' }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-slate-400 mb-6 font-medium">Biometric summary</div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: 87, color: '#10b981', offset: 45 },
                      { value: 8.4, color: '#8b5cf6', offset: 36 },
                      { value: 20, color: '#06b6d4', offset: 113 }
                    ].map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 relative">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="rgba(255,255,255,0.1)"
                              strokeWidth="8"
                              fill="none"
                            />
                            <motion.circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke={metric.color}
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray="226"
                              strokeDashoffset={metric.offset}
                              strokeLinecap="round"
                              initial={{ strokeDashoffset: 226 }}
                              animate={isInView ? { strokeDashoffset: metric.offset } : {}}
                              transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold">
                              {isInView ? <AnimatedNumber value={metric.value} /> : '0'}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400">In range</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div 
                className="bg-gradient-to-br from-purple-100/80 via-blue-50/60 to-pink-50/40 rounded-3xl p-16 border border-purple-200/50 shadow-lg backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Neural flower artwork placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-transparent to-blue-200/30" />
                <div className="relative flex items-center justify-center">
                  <Sparkles className="w-48 h-48 text-purple-400 opacity-80" strokeWidth={1} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-32 h-32 text-blue-300 opacity-60" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;

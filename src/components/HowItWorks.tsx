import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Brain } from "lucide-react";

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
    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
    style={{
      background: '#A5A2FF',
      boxShadow: isActive ? '0 0 12px #7B77FF' : '0 0 8px #A5A2FF',
    }}
    initial={{ opacity: 0, scale: 0.7 }}
    animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
    transition={{ duration: 0.4 }}
  />
);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="py-40 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-32"
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
          <div className="relative">
            {/* Vertical Line - Animated */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 hidden lg:block">
              {/* Background line */}
              <div 
                className="absolute inset-0 rounded-full opacity-70"
                style={{
                  background: 'linear-gradient(180deg, #C9C9FF 0%, #E2E2FF 100%)',
                }}
              />
              
              {/* Animated progress line */}
              <motion.div 
                className="absolute top-0 left-0 right-0 rounded-full"
                style={{
                  height: lineHeight,
                  background: 'linear-gradient(180deg, #A5A2FF 0%, #7B77FF 100%)',
                  transformOrigin: "top"
                }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-40">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50/30 to-transparent pointer-events-none" />
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: typeof timelineData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="relative">
      {/* Timeline Node */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 hidden lg:block z-10">
        <TimelineNode isActive={isInView} />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column - Text */}
        <motion.div
          className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full text-xs text-muted-foreground uppercase tracking-[0.05em] font-medium">
            {item.label}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {item.title}
          </h3>
          
          <p className="text-lg text-muted-foreground leading-[1.45]">
            {item.description}
          </p>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          className={index % 2 === 1 ? 'lg:order-1' : ''}
          style={{ y: parallaxY }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {item.id === 1 ? (
              <div className="space-y-6">
                {/* Brain Images */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <motion.div 
                    className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 flex items-center justify-center aspect-square"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Brain className="w-32 h-32 text-gray-400" />
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 rounded-3xl p-8 flex items-center justify-center aspect-square"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Brain className="w-32 h-32 text-purple-500" />
                  </motion.div>
                </div>

                {/* Biometric Summary Card */}
                <motion.div 
                  className="rounded-3xl p-8 text-white"
                  style={{ background: '#0B0C1A' }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm text-slate-400 mb-6">Biometric summary</div>
                  
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
                              <AnimatedNumber value={metric.value} />
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
              <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-white rounded-3xl p-12 border border-purple-200/50">
                <Brain className="w-full h-64 text-purple-300" />
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;

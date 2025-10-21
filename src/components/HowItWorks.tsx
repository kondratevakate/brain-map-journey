import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain } from "lucide-react";

const timelineData = [
  {
    id: 1,
    label: "Clinical MRI + AI Insights",
    title: "Beyond a standard MRI — a deeper view of your brain",
    description: "You receive a full medical MRI scan with a certified radiologist's report. On top of that, our AI visualizes your brain in 3D and extracts personalized insights like Cognitive Age, Neuroplasticity Score, and Memory Index — giving you the context behind the diagnosis and showing how your brain evolves over time.",
    hasImage: true,
  },
  {
    id: 2,
    label: "Evolving Neuro Models",
    title: "Your insight grows with science",
    description: "MRI data stays securely with the user while analysis models keep improving. As new AI and neuroscience discoveries appear, past scans are reinterpreted with the latest understanding. This provides updated insight into focus, resilience, and cognitive balance, keeping each person in step with advancing brain science.",
    hasImage: false,
  },
];

const TimelineNode = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 shadow-lg"
    animate={isActive ? {
      boxShadow: [
        "0 0 0 0 rgba(168, 164, 255, 0.7)",
        "0 0 0 8px rgba(168, 164, 255, 0)",
        "0 0 0 0 rgba(168, 164, 255, 0)"
      ],
    } : {}}
    transition={{ duration: 2, repeat: Infinity }}
  />
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-32 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              What we offer
            </h2>
            <p className="text-xl text-muted-foreground">
              See how your brain performs
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - Sticky */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block">
              <motion.div 
                className="h-full w-px bg-gradient-to-b from-purple-200 via-purple-300 to-purple-100"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
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
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="relative grid lg:grid-cols-2 gap-16 items-center">
      {/* Timeline Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
        <TimelineNode isActive={isInView} />
      </div>

      {/* Left Column - Text */}
      <motion.div
        className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'} space-y-6`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className={`inline-block px-4 py-2 bg-purple-50 rounded-full text-xs text-muted-foreground uppercase tracking-wider font-medium ${index % 2 === 0 ? 'lg:float-right' : ''}`}>
          {item.label}
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight clear-both">
          {item.title}
        </h3>
        
        <p className="text-lg text-muted-foreground leading-[1.45]">
          {item.description}
        </p>
      </motion.div>

      {/* Right Column - Visual */}
      <motion.div
        className={index % 2 === 0 ? 'lg:order-2' : ''}
        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {item.id === 1 ? (
          <div className="space-y-6">
            {/* Brain Images */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 flex items-center justify-center aspect-square">
                <Brain className="w-32 h-32 text-gray-400" />
              </div>
              <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 rounded-3xl p-8 flex items-center justify-center aspect-square">
                <Brain className="w-32 h-32 text-purple-500" />
              </div>
            </div>

            {/* Biometric Summary Card */}
            <motion.div 
              className="bg-slate-900 rounded-3xl p-8 text-white"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-sm text-slate-400 mb-6">Biometric summary</div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
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
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="226"
                        strokeDashoffset="45"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">87</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">In range</div>
                </div>

                <div className="text-center">
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
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="#8b5cf6"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="226"
                        strokeDashoffset="36"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">8.4</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">In range</div>
                </div>

                <div className="text-center">
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
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="#06b6d4"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="226"
                        strokeDashoffset="113"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">20</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">In range</div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-white rounded-3xl p-12 border border-purple-200/50">
            <Brain className="w-full h-64 text-purple-300" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HowItWorks;

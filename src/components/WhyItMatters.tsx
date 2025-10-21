import { Heart, TrendingUp, Brain } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Longevity baseline",
    gradient: "from-pink-400 to-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Lifestyle tracking",
    gradient: "from-pink-300 to-blue-400",
  },
  {
    icon: Brain,
    title: "Mindfulness progress",
    gradient: "from-purple-300 to-pink-300",
  },
];

const WhyItMatters = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Why It Matters
            </h2>
            
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Your brain changes long before you feel it. HelloMRI helps you track the invisible: how sleep, 
              focus, and training shape your brain over time.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-12 pt-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${benefit.gradient} p-6 shadow-lg`}>
                  <benefit.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;

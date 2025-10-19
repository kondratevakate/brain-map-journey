import { Heart, Activity, Brain } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    text: "Longevity baseline",
  },
  {
    icon: Activity,
    text: "Lifestyle tracking",
  },
  {
    icon: Brain,
    text: "Mindfulness progress",
  },
];

const WhyItMatters = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/70 rounded-3xl p-12 border border-white/20 shadow-xl animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why It Matters
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your brain changes long before you feel it. HelloMRI helps you track the invisible: 
              how sleep, focus, and training shape your brain over time.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/50 border border-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Seeing my brain made me start running again.",
    author: "Sarah M.",
    role: "Software Engineer",
  },
  {
    quote: "The refund policy made it an easy yes.",
    author: "Michael R.",
    role: "Entrepreneur",
  },
  {
    quote: "I track my fitness — why not my brain?",
    author: "Jessica L.",
    role: "Athlete",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What People Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  
                  <p className="text-lg text-foreground mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

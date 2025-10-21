const testimonials = [
  {
    quote: "Icarus Institute for AI in Brain Health",
    author: "Kate Kondratova",
    role: "Icarus Institute for AI in Brain Health",
  },
  {
    quote: "Icarus Institute for AI in Brain Health",
    author: "Kate Kondratova",
    role: "Icarus Institute for AI in Brain Health",
  },
  {
    quote: "Icarus Institute for AI in Brain Health",
    author: "Kate Kondratova",
    role: "Icarus Institute for AI in Brain Health",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Built by world-class leaders in longevity<br />
              science and medicine
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading physicians and researchers shaping the future of longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="backdrop-blur-md bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Profile image placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-bold text-foreground mb-1">{testimonial.author}</div>
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

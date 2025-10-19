import { Shield, Lock, Download, Eye } from "lucide-react";

const privacyFeatures = [
  {
    icon: Shield,
    title: "HIPAA-Aligned Encryption",
    description: "Your data is encrypted end-to-end using medical-grade security standards.",
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "All brain scans and personal data stored with bank-level encryption.",
  },
  {
    icon: Download,
    title: "Export & Delete Anytime",
    description: "Full control over your data. Download or permanently delete at any time.",
  },
  {
    icon: Eye,
    title: "Optional Radiologist Review",
    description: "Choose to have board-certified radiologists review your scan for abnormalities.",
  },
];

const DataPrivacy = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Data Privacy & Trust
            </h2>
            <p className="text-xl text-muted-foreground">
              Your brain data is yours — always
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="inline-block p-4 rounded-xl bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacy;

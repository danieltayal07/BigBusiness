import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  TrendingUp, 
  Calculator, 
  FileText, 
  Target,
  ArrowRight 
} from "lucide-react";
import { toast } from "sonner";

export const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Build visibility and attract customers with targeted marketing strategies that drive real results.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Reduce costs and boost productivity with streamlined processes and workflow optimization.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Calculator,
      title: "Financial Management",
      description: "Expert budgeting, cash flow management, and tax planning to keep your finances healthy.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Legal & Compliance",
      description: "Navigate regulations confidently with our taxation, legal framework, and compliance support.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: "Growth Strategy",
      description: "Long-term sustainability strategies designed to ensure ongoing business growth and success.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const handleLearnMore = (service: string) => {
    toast.info("Coming Soon!", {
      description: `Detailed information about ${service} will be available shortly. Stay tuned!`,
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, affordable services tailored for small businesses to thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <Button 
                variant="ghost" 
                className="p-5 h-auto font-semibold text-primary group-hover:gap-2 transition-all"
                onClick={() => handleLearnMore(service.title)}
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

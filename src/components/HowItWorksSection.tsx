import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const HowItWorksSection = () => {
  const features = [
    {
      title: "Flexible Monthly Subscriptions",
      description: "Choose only the services you need. No long-term commitments, cancel anytime.",
    },
    {
      title: "One-Time Expert Services",
      description: "Tax season support, marketing sprints, or tailored legal help when you need it.",
    },
    {
      title: "Long-Term Consultancy",
      description: "Ongoing transformation packages for businesses ready to scale sustainably.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our business model is built on flexibility and affordability
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all hover:border-primary/50"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Revenue is generated from subscription plans, special service fees, and consulting retainers
          </p>
        </div>
      </div>
    </section>
  );
};

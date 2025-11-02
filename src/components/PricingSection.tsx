import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses just getting started",
      features: [
        "Digital Marketing Basics",
        "Monthly Financial Report",
        "Tax Planning Consultation",
        "Email Support",
        "1 Expert Consultation/Month",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$699",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Everything in Starter",
        "Full Marketing Strategy",
        "Weekly Financial Analysis",
        "Legal Compliance Review",
        "Operational Efficiency Audit",
        "Priority Support",
        "3 Expert Consultations/Month",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For established businesses scaling up",
      features: [
        "Everything in Professional",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Growth Strategy",
        "Unlimited Consultations",
        "Quarterly Business Review",
        "Advanced Analytics & Reports",
      ],
      popular: false,
    },
  ];

  const handleSelectPlan = (planName: string) => {
    toast.success("Thank you for your interest!", {
      description: `The ${planName} plan will be available soon. We'll get back to you later!`,
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Scale up or down anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative hover:shadow-2xl transition-all ${
                plan.popular ? 'border-2 border-primary shadow-xl scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <Button 
                variant={plan.popular ? "hero" : "default"}
                className="w-full mb-6"
                size="lg"
                onClick={() => handleSelectPlan(plan.name)}
              >
                Get Started
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <button 
              onClick={() => toast.info("Contact form coming soon!")}
              className="text-primary font-semibold hover:underline"
            >
              Contact our sales team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

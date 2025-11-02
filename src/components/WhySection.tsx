import { AlertCircle, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhySection = () => {
  const challenges = [
    {
      icon: AlertCircle,
      title: "Limited Access to Expertise",
      description: "Small businesses often lack affordable access to professional marketing, financial, and legal expertise.",
    },
    {
      icon: Target,
      title: "Complex Compliance",
      description: "Navigating taxation, legal frameworks, and regulations can be overwhelming without proper guidance.",
    },
    {
      icon: TrendingUp,
      title: "Growth Constraints",
      description: "Without strategic support, many small businesses struggle to scale and achieve sustainable growth.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why <span className="text-primary">BigBusiness</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We understand the real challenges small businesses face every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 border-2"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <challenge.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              We bridge the gap by becoming your trusted, one-stop resource for professional solutions at rates you can afford. Let us handle the complexity while you focus on what you do best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

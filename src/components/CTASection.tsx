import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const CTASection = () => {
  const handleGetStarted = () => {
    toast.success("Almost there!", {
      description: "BigBusiness is on its way. We'll reach out to you soon!",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90">
            Join hundreds of small businesses already growing with BigBusiness. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              variant="secondary"
              onClick={handleGetStarted}
              className="group text-lg px-8"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleGetStarted}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

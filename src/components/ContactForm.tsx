import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, User } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .regex(/^[0-9+\-\s()]{10,20}$/, { message: "Invalid phone number format" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message Received!", {
      description: "BigBusiness will be with you shortly. We'll get back to you soon!",
    });
    
    reset();
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business? Fill out the form below and we'll contact you shortly.
            </p>
          </div>

          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Full Name *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-10 h-12"
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email Address *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 h-12"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold">
                  Phone Number *
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="pl-10 h-12"
                    {...register("phone")}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by BigBusiness.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

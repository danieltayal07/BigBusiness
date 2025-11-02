import { toast } from "sonner";

export const Footer = () => {
  const handleLinkClick = (section: string) => {
    toast.info("Coming Soon!", {
      description: `${section} section will be available shortly.`,
    });
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">BigBusiness</h3>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for comprehensive small business solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => handleLinkClick("Marketing")} className="hover:text-primary transition-colors">
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Operations")} className="hover:text-primary transition-colors">
                  Operational Efficiency
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Finance")} className="hover:text-primary transition-colors">
                  Financial Management
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Legal")} className="hover:text-primary transition-colors">
                  Legal & Compliance
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => handleLinkClick("About")} className="hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Careers")} className="hover:text-primary transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Blog")} className="hover:text-primary transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Contact")} className="hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => handleLinkClick("Privacy")} className="hover:text-primary transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("Terms")} className="hover:text-primary transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BigBusiness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

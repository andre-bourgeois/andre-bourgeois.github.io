
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Talk
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 bg-background rounded-lg p-8 shadow-lg">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#A0A0A0' }}>Your Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#A0A0A0' }}>Your Message</h3>
              <Label htmlFor="message" className="text-base font-medium">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 min-h-[150px]"
                placeholder="Tell me about your project or what you'd like to discuss..."
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium">
              Send Message
            </Button>
          </form>

          <div className="text-center mt-8">
            <p className="text-secondary-foreground/80 mb-2">Prefer a direct contact?</p>
            <a 
              href="mailto:hello@andrebourgeois.me"
              className="text-background hover:text-background/80 transition-colors font-medium text-lg"
              style={{ color: '#FFFAFA' }}
            >
              hello@andrebourgeois.me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form:', formData);

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Contact form submission successful:', data);

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A0A0A' }}>
            Let's Talk
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 bg-background rounded-lg p-8 shadow-lg border">
            <div>
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
                    disabled={isSubmitting}
                    className="mt-2"
                    placeholder="Your Name"
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
                    disabled={isSubmitting}
                    className="mt-2"
                    placeholder="your.email@website.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-base font-medium">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-2 min-h-[150px]"
                placeholder="I'd love to talk about..."
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary text-primary-foreground py-3 text-lg font-medium"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          <div className="text-center mt-8">
            <p className="mb-2" style={{ color: '#0A0A0A' }}>Prefer a direct contact?</p>
            <a 
              href="mailto:hello@andrebourgeois.me"
              className="hover:opacity-80 transition-colors font-medium text-lg"
              style={{ color: '#0A0A0A' }}
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

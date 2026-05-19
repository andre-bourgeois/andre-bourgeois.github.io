
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', { body: formData });
      if (error) throw error;

      toast({
        title: "Message sent.",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="eyebrow">06 · Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Talk
          </h2>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg p-8 border"
            style={{ background: 'var(--cream)', borderColor: 'var(--rule)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em', color: 'var(--ink-1)' }}>Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-2 focus-visible:ring-[var(--mist-teal)] focus-visible:border-[var(--mist-teal)]"
                  style={{ background: 'var(--bone)', borderColor: 'var(--rule)', color: 'var(--ink-1)' }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em', color: 'var(--ink-1)' }}>Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="mt-2 focus-visible:ring-[var(--mist-teal)] focus-visible:border-[var(--mist-teal)]"
                  style={{ background: 'var(--bone)', borderColor: 'var(--rule)', color: 'var(--ink-1)' }}
                  placeholder="your.email@website.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em', color: 'var(--ink-1)' }}>Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="mt-2 min-h-[150px] focus-visible:ring-[var(--mist-teal)] focus-visible:border-[var(--mist-teal)]"
                style={{ background: 'var(--bone)', borderColor: 'var(--rule)', color: 'var(--ink-1)' }}
                placeholder="I'd love to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg text-base font-medium transition-colors duration-200 disabled:opacity-60"
              style={{ background: 'var(--deep-teal)', color: 'var(--bone)' }}
              onMouseEnter={e => !isSubmitting && (e.currentTarget.style.background = 'var(--slate-teal)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--deep-teal)')}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>

          <div className="mt-8">
            <p className="mb-2 text-sm" style={{ color: 'var(--ink-2)' }}>Prefer a direct contact?</p>
            <a
              href="mailto:hello@andrebourgeois.me"
              className="font-medium text-lg transition-colors duration-150"
              style={{
                color: 'var(--brass)',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--brass-deep)';
                e.currentTarget.style.textDecoration = 'underline';
                (e.currentTarget as HTMLAnchorElement).style.textUnderlineOffset = '4px';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--brass)';
                e.currentTarget.style.textDecoration = 'none';
              }}
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


import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    console.log('Processing contact form submission:', { name, email });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Store the submission in the database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        message
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to store contact submission');
    }

    // Send confirmation email to the person who submitted the form
    const confirmationEmailResponse = await resend.emails.send({
      from: 'Andre Bourgeois <hello@andrebourgeois.me>',
      to: [email],
      subject: 'Thank you for your message!',
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
          <h3>Your message:</h3>
          <p>${message}</p>
        </div>
        <p>Best regards,<br>Andre Bourgeois</p>
      `,
    });

    // Send notification email to you
    const notificationEmailResponse = await resend.emails.send({
      from: 'Contact Form <hello@andrebourgeois.me>',
      to: ['hello@andrebourgeois.me'],
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
          <h3>Message:</h3>
          <p>${message}</p>
        </div>
        <p>Reply to: ${email}</p>
      `,
    });

    console.log('Emails sent successfully:', {
      confirmation: confirmationEmailResponse,
      notification: notificationEmailResponse
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Contact form submitted successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process contact form submission',
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);

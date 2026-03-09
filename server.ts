import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load environment variables
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://127.0.0.1:8080', 'http://127.0.0.1:8081'],
  credentials: true,
}));

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, phone, email, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('📧 Sending email from:', email);
    console.log('📧 Message:', message);

    // Send email to the contact email address
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@whiterosecomponents.co.uk',
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Enquiry from White Rose Components Website</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This is an automated message from your website contact form.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error('❌ Resend error:', result.error);
      return res.status(500).json({ error: 'Failed to send email', details: result.error });
    }

    console.log('✅ Email sent successfully:', result.data?.id);

    // Also send a confirmation email to the user
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'We received your enquiry - White Rose Components',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Enquiry</h2>
          
          <p>Hi ${name},</p>
          
          <p>We've received your message and appreciate you contacting White Rose Components. Our team will review your enquiry and get back to you as soon as possible during our business hours (Monday to Friday, 9am - 5pm).</p>
          
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <strong>Your Message:</strong><br/>
            <span style="white-space: pre-wrap; word-wrap: break-word;">${message}</span>
          </p>

          <p>If you need to reach us urgently, please call:</p>
          <ul>
            <li>01924 650833</li>
            <li>07738 960512</li>
          </ul>

          <p>Or visit us at:<br/>
          231 Bradford Rd<br/>
          Batley, WF17 6JL<br/>
          West Yorkshire, England</p>

          <p style="color: #666; margin-top: 30px; font-size: 12px;">
            Best regards,<br/>
            White Rose Components Team
          </p>
        </div>
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: result.data?.id 
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'API server running', port: PORT });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Email API server running on http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: POST http://localhost:${PORT}/api/send-email`);
  console.log(`✨ Using Resend API key: ${process.env.RESEND_API_KEY ? '✓ Configured' : '❌ Not configured'}\n`);
});

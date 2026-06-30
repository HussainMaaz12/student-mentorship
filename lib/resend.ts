import { Resend } from 'resend';

// Initialize the Resend client using the API key from environment variables
// Provide a fallback string to prevent build errors if the key is missing at build time
export const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

// Wrap the send logic in a function so it doesn't execute immediately on import
export async function sendTestEmail() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'work.mh12@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
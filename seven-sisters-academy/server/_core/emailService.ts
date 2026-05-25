import { ENV } from "./env";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * Send email using Resend API
 * @param options Email options including recipient, subject, and HTML content
 * @returns true if email was sent successfully, false otherwise
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!ENV.resendApiKey) {
    console.error("RESEND_API_KEY is not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ENV.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "admissions@sevensistersacademy.com",
        to: options.to,
        subject: options.subject,
        html: options.html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to send email:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

/**
 * Generate HTML email template for contact form confirmation
 */
export function generateConfirmationEmailHTML(
  fullName: string,
  programInterest?: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 30px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #c9a961;
            padding-bottom: 20px;
          }
          .header h1 {
            color: #1a1a1a;
            margin: 0;
            font-size: 28px;
          }
          .header p {
            color: #666;
            margin: 5px 0 0 0;
            font-size: 14px;
          }
          .content {
            margin: 30px 0;
          }
          .content p {
            margin: 15px 0;
          }
          .highlight {
            color: #c9a961;
            font-weight: 600;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #999;
            text-align: center;
          }
          .button {
            display: inline-block;
            background-color: #c9a961;
            color: #1a1a1a;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Seven Sisters Academy</h1>
            <p>International Culinary School for Women</p>
          </div>

          <div class="content">
            <p>Dear <span class="highlight">${fullName}</span>,</p>

            <p>Thank you for reaching out to Seven Sisters Academy! We have received your inquiry and appreciate your interest in our culinary programs.</p>

            ${
              programInterest
                ? `<p>We noted your interest in our <span class="highlight">${programInterest}</span> program. Our admissions team will review your submission and contact you shortly with more information.</p>`
                : `<p>Our admissions team will review your submission and contact you shortly with more information about our programs.</p>`
            }

            <p>In the meantime, feel free to explore our website to learn more about:</p>
            <ul>
              <li>Our International Advanced Pastry Technique Programme</li>
              <li>Our International Advanced Cooking Technique Programme</li>
              <li>Student success stories and testimonials</li>
              <li>Program curriculum and admission requirements</li>
            </ul>

            <p>If you have any immediate questions, please don't hesitate to reply to this email or visit our website.</p>

            <p>Best regards,<br>
            <strong>The Seven Sisters Academy Team</strong><br>
            Nairobi, Kenya</p>
          </div>

          <div class="footer">
            <p>Seven Sisters Academy | Girls-Only Culinary School | Nairobi, Kenya</p>
            <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

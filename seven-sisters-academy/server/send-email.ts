import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendApplicationEmail(data: {
  fullName: string;
  email: string;
  phone?: string;
  programInterest: string;
  message: string;
}) {
  await resend.emails.send({
    from: "Seven Sisters Academy <admissions@sevensistersacademy.com>",
    to: "admissions@sevensistersacademy.com",
    subject: "New Application Enquiry",
    html: `
      <h2>New Student Application</h2>

      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Program:</strong> ${data.programInterest}</p>

      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}
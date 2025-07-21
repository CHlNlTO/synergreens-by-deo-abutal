import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, subject, message, interest } = body;

  try {
    const data = await resend.emails.send({
      from: 'Synergreens <no-reply@synergreens.ckdigitals.com>',
      to: ['clark.wayne023@gmail.com', email],
      subject: `[${subject}]`,
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; border: 5px solid #0a4e27;; border-radius: 12px; padding: 24px;">
              
              <div style="text-align: center;">
                <img src="https://synergreens.ckdigitals.com/sgi-logo.png" alt="Synergreens Logo" style="width: 180px; height: auto; display: block; margin: auto;">
              </div>

              <h2 style="color: #4CAF50; text-align: center; font-size: 24px; margin: 0 0 8px;">Welcome to Synergreens</h2>
              <p style="text-align: center; color: #555; margin-top: 0; font-size: 14px;">
                Thank you for reaching out! Here's a summary of your inquiry.
              </p>

              <table style="width: 100%; border-collapse: collapse; margin-top: 24px; font-size: 14px; background-color: #fdfdfd;">
                <tr style="background-color: #b1eea5;">
                  <td style="padding: 10px; font-weight: bold; color: #333;">Name:</td>
                  <td style="padding: 10px; color: #555;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #333;">Email:</td>
                  <td style="padding: 10px; color: #555;">${email}</td>
                </tr>
                <tr style="background-color: #b1eea5;">
                  <td style="padding: 10px; font-weight: bold; color: #333;">Phone:</td>
                  <td style="padding: 10px; color: #555;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #333;">Interest:</td>
                  <td style="padding: 10px; color: #555;">${interest}</td>
                </tr>
                <tr style="background-color: #b1eea5;">
                  <td style="padding: 10px; font-weight: bold; color: #333;">Subject:</td>
                  <td style="padding: 10px; color: #555;">${subject}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #333;">Message:</td>
                  <td style="padding: 10px; color: #555;">${message.replace(/\n/g, "<br/>")}</td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 30px;">
                <a href="https://synergreens.ckdigitals.com" style="display: inline-block; background-color: #1e7404; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: bold; font-size: 14px;">
                  Shop Synergreens
                </a>
              </div>
              <footer style="background-color: #2e8d31; margin-top: 3%; padding-top: 2%; padding-bottom: 2%;">
              <div style="text-align: center; font-size: 12px; color: #999;">
                <p style="margin: 0; color: #ffffff;">Synergreens · Live Long Abundantly!</p>
                <p style="margin: 4px 0 0; color: #ffffff;">Follow us on 
                <a href="https://www.facebook.com/officialsynergreensinternational" target="_blank"><img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" alt="Facebook" width="15" height="15" style="vertical-align: middle;"></a> &middot;
                <a href="https://www.instagram.com/synergreens.international" target="_blank"><img src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" alt="Facebook" width="15" height="15" style="vertical-align: middle;"></a>
                </p>
                <p style="margin: 4px; color: #ffffff;">All Rights Reserved 2025</p>
              </div>
              </footer>
            </div>
`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
      status: 500,
    });
  }
}

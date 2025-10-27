import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      name,
      email,
      phone,
      address,
      barangay,
      city,
      province,
      postal,
      cartItems,
      total,
    } = data;

    // ✅ Build the detailed, themed HTML email
    const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f9fafb; padding: 40px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        
        <div style="background-color: #16a34a; color: white; text-align: center; padding: 24px 16px;">
          <img src="https://synergreens-by-deo-abutal.vercel.app/sgi-logo.png" alt="Synergreens Logo" style="width: 160px; margin-bottom: 10px;" />
          <h1 style="margin: 0; font-size: 22px;">New Order Received 🌿</h1>
        </div>

        <div style="padding: 24px;">
          <h2 style="font-size: 18px; color: #111827;">Customer Details</h2>
          <p style="margin: 6px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 6px 0; color: #374151;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 6px 0; color: #374151;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 6px 0 16px; color: #374151;">
            <strong>Address:</strong> ${address}, ${barangay}, ${city}, ${province}, ${postal}
          </p>

          <h2 style="font-size: 18px; color: #111827;">Order Summary</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
            <thead>
              <tr style="background-color: #f3f4f6; text-align: left;">
                <th style="padding: 10px; border-bottom: 1px solid #e5e7eb;">Product</th>
                <th style="padding: 10px; border-bottom: 1px solid #e5e7eb;">Qty</th>
                <th style="padding: 10px; border-bottom: 1px solid #e5e7eb;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${cartItems
                .map(
                  (item: any) => `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">
                    <strong>${item.name}</strong> ${
                    item.variantLabel ? `(${item.variantLabel})` : ""
                  }
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">
                    ${item.quantity}
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">
                    ₱${((item.discountedPrice ?? item.price) * item.quantity).toLocaleString()}
                  </td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>

          <div style="text-align: right; margin-top: 16px; font-size: 16px;">
            <strong>Total:</strong> ₱${total.toLocaleString()}
          </div>
        </div>

        <div style="background-color: #16a34a; color: white; text-align: center; padding: 16px; font-size: 12px;">
          Synergreens International © ${new Date().getFullYear()} <br />
          “Live Long Abundantly!”
        </div>
      </div>
    </div>
    `;

    // ✅ Send via Resend
    await resend.emails.send({
      from: "Synergreens Orders <onboarding@resend.dev>", // change if you verify a domain
      to: process.env.EMAIL_TO!,
      subject: "🌿 New Synergreens Order Received",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send order email" },
      { status: 500 }
    );
  }
}

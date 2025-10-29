import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        // make sure the private key env has real newlines or use replace as below
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const itemsList = (data.cartItems || [])
      .map((item: any) => `${item.name} x${item.quantity}`)
      .join(", ");

    // format total with peso sign and thousands separators
    const formattedTotal = `₱${Number(data.total ?? 0).toLocaleString("en-PH")}`;

    const values = [
      [
        new Date().toLocaleString("en-PH"),
        data.name || "",
        data.email || "",
        data.phone || "",
        data.address || "",
        data.barangay || "",
        data.city || "",
        data.province || "",
        data.postal || "",
        formattedTotal,
        itemsList,
        "Pending", // <-- Confirm Order default
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID!,
      range: "Sheet1!A:L", // include the new Confirm Order column
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return new Response("Saved to sheet", { status: 200 });
  } catch (err) {
    console.error("Error saving to sheet:", err);
    return new Response("Failed to save to sheet", { status: 500 });
  }
}

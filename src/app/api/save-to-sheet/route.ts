import { google } from "googleapis";

// 🧾 Define CartItem interface
interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  discountedPrice?: number;
  currency?: string;
  variantLabel?: string;
}

// 🧾 Define OrderData interface
interface OrderData {
  name: string;
  email: string;
  phone: string;
  address: string;
  barangay: string;
  city: string;
  province: string;
  postal: string;
  total: number;
  cartItems: CartItem[];
}

export async function POST(req: Request) {
  try {
    const data: OrderData = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const itemsList = (data.cartItems || [])
      .map((item: CartItem) => `${item.name} x${item.quantity}`)
      .join(", ");

    // ✅ Format total with peso sign and comma separators
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
        "Pending", // Default Confirm Order
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID!,
      range: "Sheet1!A:L",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS", // ✅ ensures new row each time
      requestBody: { values },
    });

    return new Response("Saved to sheet", { status: 200 });
  } catch (err) {
    console.error("Error saving to sheet:", err);
    return new Response("Failed to save to sheet", { status: 500 });
  }
}

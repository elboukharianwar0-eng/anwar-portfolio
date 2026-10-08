import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

const resendApiKey = process.env.RESEND_API_KEY ?? "";
const contactFrom = process.env.CONTACT_FROM ?? "Anwar Portfolio <onboarding@resend.dev>";
const contactTo = process.env.CONTACT_TO ?? "elboukharianwar0@gmail.com";

type Payload = {
  name?: unknown;
  email?: unknown;
  description?: unknown;
  budget?: unknown;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "not-configured" },
      { status: 503 },
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const description = asString(payload.description);
  const budget = asString(payload.budget) || "Not sure yet";

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    description.length < 10
  ) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  if (name.length > 120 || email.length > 200 || description.length > 4000) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFrom,
        to: [contactTo],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Budget: ${budget}`,
          "",
          description,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "send-failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }
}
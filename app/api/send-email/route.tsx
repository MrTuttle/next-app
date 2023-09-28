// app/api/send-email/route.tsx

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "florent.vincerot@me.com",
    subject: "Hello World",
    // html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    react: <WelcomeTemplate name="john Doe" />,
  });
  return NextResponse.json({});
}

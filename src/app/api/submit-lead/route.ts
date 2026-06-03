import { NextRequest, NextResponse } from "next/server";
import { appendRowWithRetry } from "@/lib/google-sheets";
import { BRAND_NAME, notifyLeadWebhook, type LeadPayload } from "@/lib/lead-notification";

export const runtime = "nodejs";

type SubmitLeadBody = LeadPayload & {
  organisation?: string;
  role?: string;
  context?: string;
  damagesType?: string;
  exposure?: string;
  urgency?: string;
  message?: string;
};

function sanitize(value: unknown, maxLength = 5000): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SubmitLeadBody;

    const fullName = sanitize(body.fullName, 200);
    const email = sanitize(body.email, 320).toLowerCase();
    const phone = sanitize(body.phone, 40);

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full name and email are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const lead: LeadPayload = { fullName, email, phone };

    // Webhook is optional locally; when configured, treat failures as submission errors.
    const webhookUrl = process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
    if (webhookUrl) {
      await notifyLeadWebhook(lead);
    }

    // Google Sheets is secondary — log failures but do not block the user.
    const organisation = sanitize(body.organisation, 200);
    const role = sanitize(body.role, 120);
    const context = sanitize(body.context, 120);
    const damagesType = sanitize(body.damagesType, 120);
    const exposure = sanitize(body.exposure, 80);
    const urgency = sanitize(body.urgency, 120);
    const message = sanitize(body.message, 5000);

    if (
      process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
    ) {
      try {
        await appendRowWithRetry([
          new Date().toISOString(),
          fullName,
          organisation,
          email,
          phone,
          role,
          context,
          damagesType,
          exposure,
          urgency,
          message,
          BRAND_NAME,
        ]);
      } catch (error) {
        console.error("Google Sheets write failed:", {
          message: error instanceof Error ? error.message : "Unknown error",
          spreadsheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
          timestamp: new Date().toISOString(),
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

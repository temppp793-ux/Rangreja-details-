import { NextRequest } from "next/server";

/**
 * Verification bypass for educational/demo use only.
 * WARNING: This disables domain checks and CAPTCHA verification.
 * Do NOT deploy this version publicly. Use only for local testing or teacher-approved demos.
 */

export async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  // Always succeed for demo
  return true;
}

export function isAllowedDomain(request: NextRequest | Request | { headers?: any } | any): boolean {
  // Allow any domain for local demo
  return true;
}

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { v4 } from "uuid";

export function middleware(req: NextRequest) {

  const sessionCookie = req.cookies.has(process.env.SESSION_COOKIE_NAME);
  const response = NextResponse.next();

  if (!sessionCookie) {
    console.log("No session cookie present, generating one");
    response.cookies.set(process.env.SESSION_COOKIE_NAME, v4())
    console.log("Session storage set to: ", process.env.SESSION_STORAGE);
  }

  // Set language cookie
  const searchParams = new URLSearchParams(req.nextUrl.search);
  if (searchParams.has("lang")) {
    const lang = searchParams.get("lang");
    response.cookies.set("locale", lang);
  }

  return response
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_TOKEN_COOKIE } from "./shared/consts/consts";
import { PagesUrl } from "./app/config/pagesUrl";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { url, cookies } = request;

  const authToken = cookies.get(AUTH_TOKEN_COOKIE)?.value;

  const isAuthPage = url.includes("/auth");

  if (isAuthPage && authToken) {
    return NextResponse.redirect(new URL(PagesUrl.HOME, url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!authToken) {
    return NextResponse.redirect(new URL(PagesUrl.HOME, url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth", "/i/:path*"],
};

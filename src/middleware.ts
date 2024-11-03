import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_TOKEN_COOKIE } from "./shared/consts/consts";
import { routes } from "./app/config/routes";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { url, cookies } = request;

  const hasAuthToken = cookies.has(AUTH_TOKEN_COOKIE);
  const isAuthPage = url.includes("/auth");

  const redirectResponse = NextResponse.redirect(
    new URL(routes.PUBLIC.HOME, url)
  );
  redirectResponse.headers.set("x-middleware-cache", "no-cache");

  if (isAuthPage && hasAuthToken) {
    return redirectResponse;
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!hasAuthToken) {
    return redirectResponse;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth", "/i/:path*"],
};

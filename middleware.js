import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  const csp = [
    "default-src 'self';",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
    "style-src 'self' 'unsafe-inline';",
    "img-src 'self' data: https:;",
    "connect-src 'self' https: http:;",
    "font-src 'self' data:;",
    "frame-ancestors 'none';",
  ].join(' ');
  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  return res;
}

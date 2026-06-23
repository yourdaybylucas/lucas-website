import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const space = request.nextUrl.searchParams.get('space');

  if (!space) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/spaces/${space}`;
  url.search = '';

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: '/spaces',
};

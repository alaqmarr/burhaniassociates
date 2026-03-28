import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple token verification logic since we are using edge runtime in middleware
// where standard Node 'crypto' is not fully supported for all methods.
export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Allow static files, api routes (except admin), next internals
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') && !pathname.startsWith('/api/admin')
    ) {
        return NextResponse.next()
    }

    // Admin Auth API endpoints
    if (pathname === '/api/admin/auth') {
        return NextResponse.next()
    }

    // Admin pages
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const session = request.cookies.get('admin_session')
        if (!session || !session.value) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
    }

    // Protect Admin API routes
    if (pathname.startsWith('/api/admin') && pathname !== '/api/admin/auth') {
        const session = request.cookies.get('admin_session')
        if (!session || !session.value) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Authentication required' }),
                { status: 401, headers: { 'content-type': 'application/json' } }
            )
        }
    }

    // Authenticated admin accessing login page should skip login
    if (pathname === '/admin/login') {
        const session = request.cookies.get('admin_session')
        if (session && session.value) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*'],
}

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { password } = await req.json();
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminPassword) {
            console.error('ADMIN_PASSWORD is not set in environment variables.');
            return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
        }

        if (password !== adminPassword) {
            return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
        }

        const response = NextResponse.json({ success: true, message: 'Authenticated successfully' });
        
        response.cookies.set({
            name: 'admin_session',
            value: 'authenticated',
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });

        return response;
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE() {
    const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
    response.cookies.delete('admin_session');
    return response;
}

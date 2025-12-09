import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Burhani Associates - Industrial Components'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #102a43, #243b53)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    position: 'relative',
                }}
            >
                {/* Abstract Grid Pattern Background */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                        opacity: 0.5,
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px'
                    }}
                >
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#102a43',
                        marginRight: '20px'
                    }}>
                        B
                    </div>
                </div>

                <h1
                    style={{
                        fontSize: '64px',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textAlign: 'center',
                        zIndex: 10,
                    }}
                >
                    Burhani Associates
                </h1>

                <p
                    style={{
                        fontSize: '30px',
                        color: '#bcccdc',
                        marginTop: '0',
                        maxWidth: '800px',
                        textAlign: 'center',
                        lineHeight: '1.4',
                        zIndex: 10,
                    }}
                >
                    Industrial Components • Toggle Clamps • Handwheels<br />
                    Authorized Dealer: Clamptek & Swiftin
                </p>

                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    fontSize: '20px',
                    color: '#829ab1',
                    textTransform: 'uppercase',
                    letterSpacing: '4px'
                }}>
                    Ranigunj • Secunderabad
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

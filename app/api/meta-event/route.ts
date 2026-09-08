import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = '1568612291403940';
const ALLOWED_EVENTS = new Set(['PageView', 'BonusClick', 'GiveawayClick', 'ActiveGiveawayClick', 'SocialClick']);

export async function POST(request: NextRequest) {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!accessToken) return NextResponse.json({ error: 'Meta CAPI is not configured' }, { status: 503 });

  const body = await request.json().catch(() => null);
  if (!body || !ALLOWED_EVENTS.has(body.eventName) || typeof body.eventId !== 'string') {
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
  }

  const customData = Object.fromEntries(
    Object.entries(body.data ?? {})
      .filter(([, value]) => typeof value === 'string' || typeof value === 'number')
      .slice(0, 10),
  );

  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientIp = forwardedFor?.split(',')[0]?.trim();
  const userAgent = request.headers.get('user-agent');
  const cookie = request.cookies;

  const response = await fetch(`https://graph.facebook.com/v23.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(accessToken)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [{
        event_name: body.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.eventId,
        event_source_url: typeof body.eventSourceUrl === 'string' ? body.eventSourceUrl : request.nextUrl.origin,
        action_source: 'website',
        user_data: {
          ...(clientIp ? { client_ip_address: clientIp } : {}),
          ...(userAgent ? { client_user_agent: userAgent } : {}),
          ...(cookie.get('_fbp')?.value ? { fbp: cookie.get('_fbp')?.value } : {}),
          ...(cookie.get('_fbc')?.value ? { fbc: cookie.get('_fbc')?.value } : {}),
        },
        custom_data: customData,
      }],
    }),
  });

  if (!response.ok) return NextResponse.json({ error: 'Meta rejected the event' }, { status: 502 });
  return NextResponse.json({ ok: true });
}

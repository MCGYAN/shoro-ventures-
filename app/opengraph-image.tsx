import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE, SITE_LOCATION_TAGLINE } from '@/lib/site-brand';

export const runtime = 'edge';
export const alt = `${SITE_NAME} - ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Dynamic OG image, customize colors/text in lib/site-brand.ts */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(140deg, #1E3D66 0%, #142B4A 55%, #0B1A2E 100%)',
          color: '#FFFFFF',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{SITE_NAME}</div>
        <div style={{ width: 96, height: 4, marginTop: 24, background: '#D4AF37' }} />
        <div style={{ fontSize: 32, marginTop: 24, color: '#D4AF37', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{SITE_TAGLINE}</div>
        <div style={{ fontSize: 24, marginTop: 14, color: '#F3F5F7' }}>{SITE_LOCATION_TAGLINE}</div>
      </div>
    ),
    { ...size }
  );
}

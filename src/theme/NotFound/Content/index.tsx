import React, {type ReactNode, useEffect, useState} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFoundContent({className}: Props): ReactNode {
  const lightUrl = useBaseUrl('/img/light-desert.svg');
  const darkUrl = useBaseUrl('/img/dark-desert.svg');
  const starsUrl = useBaseUrl('/img/stars.svg');
  const cloudsUrl = useBaseUrl('/img/clouds.svg');
  const skyTile = 'clamp(360px, 40vw, 640px)';
  const lightGradient = 'linear-gradient(180deg, #6e73fd 0%, #ffffff 100%)';

  // NEW: Theme CSS injected once; ensures correct theme before hydration
  const themeCss = `
:root, html[data-theme='light'] {
  --fd404-card-bg: rgba(255,255,255,0.80);
  --fd404-card-border: rgba(0,0,0,0.10);
  --fd404-card-shadow: 0 10px 28px rgba(0,0,0,0.18);

  --fd404-primary-border: rgba(0,0,0,0.08);
  --fd404-primary-shadow: 0 6px 18px rgba(0,0,0,0.22);

  --fd404-secondary-text: rgba(0,0,0,0.85);
  --fd404-secondary-bg: rgba(0,0,0,0.04);
  --fd404-secondary-border: rgba(0,0,0,0.08);
  --fd404-secondary-shadow: 0 6px 16px rgba(0,0,0,0.10);

  --fd404-coach-bg: rgba(255,255,255,0.98);
  --fd404-coach-border: rgba(0,0,0,0.12);
  --fd404-coach-text: #111;
}
html[data-theme='dark'] {
  --fd404-card-bg: rgba(0,0,0,0.55);
  --fd404-card-border: rgba(255,255,255,0.14);
  --fd404-card-shadow: 0 8px 24px rgba(0,0,0,0.45);

  --fd404-primary-border: rgba(255,255,255,0.14);
  --fd404-primary-shadow: 0 6px 18px rgba(0,0,0,0.45);

  --fd404-secondary-text: rgba(255,255,255,0.95);
  --fd404-secondary-bg: rgba(255,255,255,0.06);
  --fd404-secondary-border: rgba(255,255,255,0.14);
  --fd404-secondary-shadow: 0 6px 16px rgba(0,0,0,0.35);

  --fd404-coach-bg: rgba(20,20,20,0.9);
  --fd404-coach-border: rgba(255,255,255,0.16);
  --fd404-coach-text: #fff;
}

/* Theme-aware visibility without JS (no initial blend) */
.fd404-layer--light { opacity: 1; }
.fd404-layer--dark  { opacity: 0; }
html[data-theme='dark'] .fd404-layer--light { opacity: 0; }
html[data-theme='dark'] .fd404-layer--dark  { opacity: 1; }

/* Keep a gentle fade when user toggles theme (not on first paint) */
.fd404-fade { transition: opacity 250ms ease; }
`;

  // UPDATED: card styles now read from CSS variables
  const cardStyle: React.CSSProperties = {
    margin: '0 auto',
    width: '100%',
    maxWidth: 'min(92vw, 760px)',
    padding: 'clamp(20px, 4vw, 28px) clamp(20px, 5vw, 40px)',
    borderRadius: 18,
    backgroundColor: 'var(--fd404-card-bg)',
    backdropFilter: 'saturate(140%) blur(10px)',
    WebkitBackdropFilter: 'saturate(140%) blur(10px)',
    border: '1px solid var(--fd404-card-border)',
    boxShadow: 'var(--fd404-card-shadow)',
  };

  // UPDATED: only show coachmark on desktop (avoid SSR/mobile flash)
  const [showCoach, setShowCoach] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 997px)');
    const update = () => setShowCoach(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  // UPDATED: button polish via CSS vars (no theme flicker)
  const primaryBtnStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 9999,
    paddingBlock: '0.9rem',
    paddingInline: '1.1rem',
    boxShadow: 'var(--fd404-primary-shadow)',
    border: '1px solid var(--fd404-primary-border)',
    transition: 'transform 150ms ease, box-shadow 150ms ease',
  };
  const secondaryBtnStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 9999,
    paddingBlock: '0.9rem',
    paddingInline: '1.1rem',
    color: 'var(--fd404-secondary-text)',
    backgroundColor: 'var(--fd404-secondary-bg)',
    border: '1px solid var(--fd404-secondary-border)',
    boxShadow: 'var(--fd404-secondary-shadow)',
    transition: 'transform 150ms ease, box-shadow 150ms ease, color 150ms ease',
  };

  // UPDATED: coachmark colors via CSS vars
  const coachBg = 'var(--fd404-coach-bg)';
  const coachBorder = 'var(--fd404-coach-border)';
  const coachText = 'var(--fd404-coach-text)';

  return (
    // Wrapper: controls page height so the background ends at the fold
    <div
      style={{
        position: 'relative',
        // NEW: exactly one viewport tall minus the fixed navbar height
        minHeight: 'calc(100svh - var(--ifm-navbar-height, 3.75rem))',
        overflowX: 'hidden', // prevent tiny horizontal scrollbars on very small screens
      }}
    >
      {/* Inject theme CSS to prevent initial light/dark blend */}
      <style dangerouslySetInnerHTML={{__html: themeCss}} />

      {/* LIGHT gradient layer (behind everything) */}
      <div
        aria-hidden="true"
        className="fd404-layer--light fd404-fade"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: lightGradient,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* LIGHT clouds (repeating) */}
      <div
        aria-hidden="true"
        className="fd404-layer--light fd404-fade"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${cloudsUrl}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: `${skyTile} ${skyTile}`,
          backgroundPosition: 'center top',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* DARK stars (repeating) */}
      <div
        aria-hidden="true"
        className="fd404-layer--dark fd404-fade"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${starsUrl}")`,
          backgroundRepeat: 'repeat',
          backgroundSize: `${skyTile} ${skyTile}`,
          backgroundPosition: 'center top',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* crossfading desert layers (raise z-index above sky) */}
      <div
        aria-hidden="true"
        className="fd404-layer--light fd404-fade"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${lightUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto',
          backgroundPosition: 'center bottom',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
      <div
        aria-hidden="true"
        className="fd404-layer--dark fd404-fade"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${darkUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto',
          backgroundPosition: 'center bottom',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      <main
        className={clsx('container margin-vert--xl', className)}
        // UPDATED: remove 100vh and margin so page height matches wrapper
        style={{
          position: 'relative',
          zIndex: 3,
          marginInline: 'auto',
          marginBlock: 0,
          height: '100%',
          // UPDATED: center the content both vertically and horizontally
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // smaller padding so visual centering is not pulled upward
          paddingBlock: 'clamp(24px, 6vh, 72px)',
        }}
        role="main"
        aria-labelledby="fd404-title">
        <div className="row" style={{justifyContent: 'center'}}>
          <div className="col col--10 col--offset-1" style={{display: 'flex', justifyContent: 'center'}}>
            {/* NEW: high-contrast, responsive content card */}
            <div style={cardStyle} role="region" aria-labelledby="fd404-title">
              <div style={{textAlign: 'center'}}>
                <Heading
                  as="h1"
                  id="fd404-title"
                  style={{
                    letterSpacing: '0.2px',
                    marginBottom: '0.35rem',
                    // NEW: responsive type that scales smoothly
                    fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)',
                    lineHeight: 1.2,
                  }}>
                  <Translate id="theme.NotFound.title" description="The title of the 404 page">
                    Oops — that critter got away!
                  </Translate>
                </Heading>

                <p
                  className="margin-top--sm"
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
                    color: 'var(--ifm-color-emphasis-600)',
                    marginInline: 'auto',
                    maxWidth: 720,
                  }}>
                  <Translate id="theme.NotFound.lead" description="Lead text for the 404 page">
                    The page you’re tracking has moved, been renamed, or never existed.
                  </Translate>
                </p>

                {/* Subtle divider */}
                <div
                  aria-hidden="true"
                  style={{
                    height: 1,
                    margin: '1.25rem auto 1.5rem',
                    maxWidth: 720,
                    background: 'linear-gradient(90deg, transparent, var(--ifm-color-emphasis-200), transparent)',
                  }}
                />

                {/* UPDATED: buttons become a responsive grid; full-width on small screens */}
                <div
                  className="margin-top--md"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', // cap min to container width
                    gap: '0.9rem',
                    alignItems: 'stretch',
                    justifyItems: 'stretch',
                    marginInline: 'auto',
                    maxWidth: 720,
                  }}
                >
                  {/* UPDATED: improved button styles */}
                  <Link className="button button--primary button--lg" to="/" style={primaryBtnStyle}>
                    ← <Translate id="theme.NotFound.cta.home">Back to Home</Translate>
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/" style={secondaryBtnStyle}>
                    📚 <Translate id="theme.NotFound.cta.docs">Browse Docs</Translate>
                  </Link>
                  {/* REMOVED: Try a Search button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* NEW: Floating coachmark that points to the search (desktop only) */}
      {showCoach && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 'calc(var(--ifm-navbar-height, 3.75rem) + 10px)',
            right: 'clamp(8px, 3vw, 24px)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              color: coachText,
              backgroundColor: coachBg,
              border: `1px solid ${coachBorder}`,
              borderRadius: 9999,
              padding: '10px 14px',
              fontSize: '0.95rem',
              boxShadow: '0 10px 24px rgba(0,0,0,0.25)',
              backdropFilter: 'saturate(140%) blur(6px)',
              WebkitBackdropFilter: 'saturate(140%) blur(6px)',
            }}
          >
            🔎 Try search up here
            {/* little arrow pointing up toward the navbar search */}
            <span
              style={{
                position: 'absolute',
                top: -6,
                right: 32,
                width: 12,
                height: 12,
                backgroundColor: coachBg,
                borderTop: `1px solid ${coachBorder}`,
                borderLeft: `1px solid ${coachBorder}`,
                transform: 'rotate(45deg)',
                boxShadow: '0 -2px 6px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
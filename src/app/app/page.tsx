export default function HomePage() {
  return (
    <main style={styles.page}>
      {/* Top bar */}
      <header style={styles.header}>
        <div style={styles.brand}>
          <div style={styles.logo} aria-hidden="true">JS</div>
          <span style={styles.brandText}>JerseySingles</span>
        </div>

        <nav style={styles.nav}>
          <a style={styles.navLink} href="#how">How it works</a>
          <a style={styles.navLink} href="#safety">Safety</a>
          <a style={styles.navCta} href="#waitlist">Join waitlist</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.badge}>Jersey-first • UK-wide</div>
          <h1 style={styles.h1}>
            Meet real people.
            <span style={styles.h1Accent}> Not endless swiping.</span>
          </h1>
          <p style={styles.sub}>
            A new dating experience built for Jersey — with stronger safety, fewer scams,
            and a calmer, more serious vibe.
          </p>

          <div style={styles.heroCtas}>
            <a style={styles.primaryBtn} href="#waitlist">Join the waitlist</a>
            <a style={styles.secondaryBtn} href="#how">See how it works</a>
          </div>

          <div style={styles.trustRow}>
            <div style={styles.trustItem}>18+ only</div>
            <div style={styles.dot}>•</div>
            <div style={styles.trustItem}>Privacy-first</div>
            <div style={styles.dot}>•</div>
            <div style={styles.trustItem}>Report & block tools</div>
          </div>
        </div>

        <div style={styles.heroCard} aria-hidden="true">
          <div style={styles.cardTop}>
            <div style={styles.cardPill}>Preview</div>
            <div style={styles.cardTitle}>Your next match could be nearby</div>
          </div>
          <div style={styles.cardBody}>
            <div style={styles.fakeRow}>
              <div style={styles.avatar} />
              <div style={{ flex: 1 }}>
                <div style={styles.fakeLineStrong} />
                <div style={styles.fakeLine} />
              </div>
            </div>
            <div style={styles.fakeRow}>
              <div style={styles.avatar} />
              <div style={{ flex: 1 }}>
                <div style={styles.fakeLineStrong} />
                <div style={styles.fakeLine} />
              </div>
            </div>
            <div style={styles.fakeRow}>
              <div style={styles.avatar} />
              <div style={{ flex: 1 }}>
                <div style={styles.fakeLineStrong} />
                <div style={styles.fakeLine} />
              </div>
            </div>
            <div style={styles.cardHint}>
              Launching soon. Join the waitlist to get early access.
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={styles.section}>
        <h2 style={styles.h2}>How it works</h2>
        <div style={styles.grid3}>
          <div style={styles.feature}>
            <div style={styles.featureNum}>1</div>
            <h3 style={styles.h3}>Join the waitlist</h3>
            <p style={styles.p}>Get early access when we open invites for Jersey.</p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureNum}>2</div>
            <h3 style={styles.h3}>Create a profile</h3>
            <p style={styles.p}>Simple profile, clear intentions, no spammy bios.</p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureNum}>3</div>
            <h3 style={styles.h3}>Match with purpose</h3>
            <p style={styles.p}>Less noise, more real conversations.</p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" style={styles.sectionAlt}>
        <h2 style={styles.h2}>Safety & trust</h2>
        <div style={styles.grid2}>
          <div style={styles.panel}>
            <h3 style={styles.h3}>Report & block</h3>
            <p style={styles.p}>
              Quick reporting and blocking. We take harassment, scams, and impersonation seriously.
            </p>
          </div>
          <div style={styles.panel}>
            <h3 style={styles.h3}>Privacy-first</h3>
            <p style={styles.p}>
              We minimise what we collect. Your data is not the product.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" style={styles.section}>
        <div style={styles.waitlistCard}>
          <div>
            <h2 style={styles.h2} className="noMargin">Get early access</h2>
            <p style={styles.p}>
              Join the waitlist. We’ll email you when invites open.
            </p>
          </div>

          {/* For now: simple form (no Supabase yet) */}
          <form style={styles.form} action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            <button style={styles.primaryBtn} type="submit">
              Join waitlist
            </button>
            <div style={styles.small}>
              By joining, you confirm you are 18+ and agree to our{" "}
              <a style={styles.inlineLink} href="/terms">Terms</a> and{" "}
              <a style={styles.inlineLink} href="/privacy">Privacy Policy</a>.
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLeft}>
            <div style={styles.brandSmall}>
              <div style={styles.logoSmall} aria-hidden="true">JS</div>
              <span style={styles.brandText}>JerseySingles</span>
            </div>
            <div style={styles.footerNote}>
              © {new Date().getFullYear()} JerseySingles. All rights reserved.
            </div>
          </div>

          <div style={styles.footerLinks}>
            <a style={styles.footerLink} href="/privacy">Privacy</a>
            <a style={styles.footerLink} href="/terms">Terms</a>
            <a style={styles.footerLink} href="mailto:hello@jerseysingles.co.uk">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(1200px 600px at 20% 0%, rgba(120,135,255,0.18), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(255,120,200,0.14), transparent 55%), #070A12",
    color: "white",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    background: "rgba(7,10,18,0.65)",
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  brandText: { fontWeight: 700, letterSpacing: 0.2 },
  logo: {
    width: 34, height: 34, borderRadius: 10,
    display: "grid", placeItems: "center",
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 800,
  },
  nav: { display: "flex", alignItems: "center", gap: 12 },
  navLink: { color: "rgba(255,255,255,0.78)", textDecoration: "none", fontSize: 14 },
  navCta: {
    color: "white",
    textDecoration: "none",
    fontSize: 14,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
  },
  hero: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "56px 18px 18px",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 18,
  },
  heroInner: { padding: 8 },
  badge: {
    display: "inline-flex",
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    marginBottom: 14,
  },
  h1: { fontSize: 48, lineHeight: 1.05, margin: "0 0 12px", letterSpacing: -0.8 },
  h1Accent: { color: "rgba(170,190,255,0.95)" },
  sub: { color: "rgba(255,255,255,0.74)", fontSize: 17, maxWidth: 560, margin: "0 0 18px" },
  heroCtas: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 },
  primaryBtn: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.14)",
    color: "white",
    textDecoration: "none",
    fontWeight: 650,
    cursor: "pointer",
  },
  secondaryBtn: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    textDecoration: "none",
    fontWeight: 650,
  },
  trustRow: { display: "flex", gap: 10, flexWrap: "wrap", color: "rgba(255,255,255,0.70)", fontSize: 13, marginTop: 8 },
  trustItem: {},
  dot: { opacity: 0.5 },

  heroCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    overflow: "hidden",
    boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
  },
  cardTop: { padding: 16, borderBottom: "1px solid rgba(255,255,255,0.10)" },
  cardPill: {
    display: "inline-flex",
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(255,255,255,0.80)",
  },
  cardTitle: { marginTop: 10, fontWeight: 700, letterSpacing: -0.2 },
  cardBody: { padding: 16, display: "grid", gap: 12 },
  fakeRow: { display: "flex", alignItems: "center", gap: 12 },
  avatar: {
    width: 44, height: 44, borderRadius: 14,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  fakeLineStrong: {
    height: 12, width: "58%",
    borderRadius: 999,
    background: "rgba(255,255,255,0.18)",
  },
  fakeLine: {
    height: 10, width: "72%",
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    marginTop: 8,
  },
  cardHint: { marginTop: 6, fontSize: 13, color: "rgba(255,255,255,0.70)" },

  section: { maxWidth: 1100, margin: "0 auto", padding: "42px 18px" },
  sectionAlt: { maxWidth: 1100, margin: "0 auto", padding: "42px 18px", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" },
  h2: { fontSize: 28, margin: "0 0 14px", letterSpacing: -0.4 },
  h3: { margin: "0 0 6px", letterSpacing: -0.2 },
  p: { margin: 0, color: "rgba(255,255,255,0.72)", lineHeight: 1.6 },

  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 16 },
  grid2: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginTop: 16 },

  feature: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    padding: 16,
  },
  featureNum: {
    width: 30, height: 30, borderRadius: 10,
    display: "grid", placeItems: "center",
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 800,
    marginBottom: 10,
  },
  panel: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    padding: 16,
  },

  waitlistCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    padding: 18,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    alignItems: "center",
  },
  form: { display: "grid", gap: 10 },
  input: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.25)",
    color: "white",
    outline: "none",
  },
  small: { fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 },
  inlineLink: { color: "rgba(180,200,255,0.95)" },

  footer: { borderTop: "1px solid rgba(255,255,255,0.08)", padding: "26px 18px 34px" },
  footerInner: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  footerLeft: { display: "grid", gap: 10 },
  footerLinks: { display: "flex", gap: 14, alignItems: "center" },
  footerLink: { color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: 14 },
  footerNote: { color: "rgba(255,255,255,0.55)", fontSize: 13 },
  brandSmall: { display: "flex", alignItems: "center", gap: 10 },
  logoSmall: {
    width: 30, height: 30, borderRadius: 10,
    display: "grid", placeItems: "center",
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 800,
  },
};

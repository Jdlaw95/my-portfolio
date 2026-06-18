const projects = [
  {
    num: '01',
    name: 'KaiBlu Parenting Companion',
    cat: 'Mobile — iOS / Android / PWA',
    desc: 'AI-powered parenting assistant delivering evidence-based guidance from WHO, AAP, and NHS. Free tier + R89/month premium via RevenueCat. POPIA/COPPA compliant with full Apple-approved onboarding flow.',
    tags: ['Expo', 'Claude AI', 'Supabase', 'RevenueCat', 'EAS Build'],
    year: '2024–25',
  },
  {
    num: '02',
    name: 'KaiBlu Platform',
    cat: 'Web — Product Marketplace',
    desc: 'Full-stack studio site and app marketplace. Next.js 15 App Router, Supabase Auth with RLS, admin dashboard, Framer Motion animations. Deployed via Vercel with v2 → main CI/CD pipeline.',
    tags: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind v4', 'Vercel'],
    year: '2025',
  },
  {
    num: '03',
    name: 'n8n AI Workflow Suite',
    cat: 'Automation — Client Delivery',
    desc: 'Three AI automation workflows delivered to clients: Instant Quote Generator (webhook → Claude → branded HTML email), AI email triage across four accounts, and Lead Capture to Notion CRM pipeline.',
    tags: ['n8n', 'Claude AI', 'Gmail API', 'Notion'],
    year: '2025',
  },
  {
    num: '04',
    name: 'Concrete Quality Assessor',
    cat: 'Web — Client Work',
    desc: 'Production website for a Cape Town construction business. Static blog, WhatsApp and Facebook contact integration, navy/gold brand identity. Resolved pnpm supply chain trust issue mid-build.',
    tags: ['Next.js 15', 'pnpm', 'Tailwind CSS', 'Vercel'],
    year: '2026',
  },
  {
    num: '05',
    name: 'GlitterGlow by Kris',
    cat: 'Web — Client Work',
    desc: 'Full-stack booking and business management platform for a Cape Town nail salon. Multi-step booking form with real-time availablity, PayFast deposit payments, automated confirmation emails, and Google Calendar sync. Admin dashboard with live bookings, clent records,revenue stats, and PDF invoice generation. All business settings editable without touching code.',
    tags: ['Next.js 16', 'TypeScript', 'Supabase', 'Vercel', 'PayFast', 'Resend', 'Google Calendar API',],
    year: '2026',
  },
  {
    num: '06',
    name: 'BinFresh',
    cat: 'Web — Client Work',
    desc: 'Full-stack booking platform for a Cape Town bin cleaning business. Customers submit booking requests that land in a Supabase database. The owner manages all bookings through a custom admin dashboard — approving or declining requests — which triggers automated confirmation emails to customers via Resend. Built to replace a manual WhatsApp-only workflow.',
    tags: ['Next.js', 'Supabase', 'Resend', 'Tailwind'],
    year: '2026',
  },
]

export default function Work() {
  return (
    <section id="work">
      <div className="section-label">02 &mdash; Work</div>
      <div className="work-intro reveal">
        <h2 className="work-title">
          Selected
          <br />
          <em>projects</em>
        </h2>
        <span className="work-count">04 projects</span>
      </div>
      <div className="proj-list reveal">
        {projects.map((p) => (
          <div key={p.num} className="proj">
            <span className="proj-num">{p.num}</span>
            <div className="proj-main">
              <div className="proj-name">{p.name}</div>
              <div className="proj-cat">{p.cat}</div>
            </div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-tags">
              {p.tags.map((t) => (
                <span key={t} className="proj-tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="proj-year">{p.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

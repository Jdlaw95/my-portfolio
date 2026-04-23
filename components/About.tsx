const stack = [
  'Next.js 15',
  'React Native',
  'Expo',
  'TypeScript',
  'Supabase',
  'Tailwind v4',
  'n8n',
  'Claude AI',
  'Vercel',
  'PostgreSQL',
  'Java',
  'Swift',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-label">01 &mdash; About</div>
      <div className="about-grid reveal">
        <div className="about-photo-wrap">
          <div className="about-photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/jason.jpg"
              alt="Jason Lawrence"
              className="about-photo"
            />
            <div className="photo-tag">Jason Lawrence &mdash; Cape Town</div>
          </div>
        </div>
        <div>
          <h2 className="about-headline">
            Self-taught.
            <br />
            <em>Founder.</em>
            <br />
            Shipping since 2024.
          </h2>
          <div className="about-body">
            <p>
              I&apos;m <strong>Jason Lawrence</strong> &mdash; a developer and
              founder based in Cape Town. I run KaiBlu, a studio building mobile
              apps, AI workflows, and web platforms for people who need things
              that actually work.
            </p>
            <p>
              I have a{' '}
              <strong>
                Computer Science background from IIE Varsity College
              </strong>
              . Before going independent I spent years in customer operations and
              compliance &mdash; that time shaped how I think about the people
              using software, not just the code underneath.
            </p>
            <p>
              I work across the full stack and go deep where it matters. Lately
              that means <strong>AI-native products</strong> with Anthropic&apos;s
              API &mdash; tools built to be genuinely useful rather than just
              technically impressive.
            </p>
            <div className="stack-row">
              <div className="stack-label">Stack</div>
              <div className="stack-items">
                {stack.map((item) => (
                  <span key={item} className="stack-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

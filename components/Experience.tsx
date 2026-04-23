const jobs = [
  {
    period: '2024 — Present\nCape Town, SA',
    role: 'Founder & Developer',
    company: 'KaiBlu',
    desc: 'Building and shipping mobile apps, AI-powered workflows, and web platforms independently. Design, development, and delivery — end to end.',
  },
  {
    period: 'Feb 2023 — Jan 2024\nRemote',
    role: 'Software Tester',
    company: 'Pachamama Ventures',
    desc: 'QA testing, copywriting, and UI/UX consulting for a digital wellbeing app. Collaborated via Slack, Figma, and Notion on interface improvements and user testing flows.',
  },
  {
    period: 'Jun 2021 — Feb 2023\nCape Town, SA',
    role: 'KYC & AML Verification Specialist',
    company: 'DigiOutsource',
    desc: 'Identity verification and compliance operations. Developed the precision, edge-case thinking, and process discipline that now directly shapes software quality decisions.',
  },
  {
    period: 'Apr 2015 — Sep 2022\nCape Town, SA',
    role: 'Customer Service & Operations',
    company: 'Merchants / Takealot / DigiOutsource',
    desc: "Customer-facing operations across telecoms, e-commerce, and online services. Foundation in real-world communication and understanding what end-users actually need — not what they say they need.",
  },
]

export default function Experience() {
  return (
    <section className="exp-section" id="experience">
      <div className="section-label">03 &mdash; Experience</div>
      <div className="reveal">
        {jobs.map((job) => (
          <div key={job.company} className="exp-item">
            <div className="exp-period" style={{ whiteSpace: 'pre-line' }}>
              {job.period}
            </div>
            <div>
              <div className="exp-role">{job.role}</div>
              <div className="exp-co">{job.company}</div>
              <div className="exp-desc">{job.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const links = [
  {
    label: 'Email',
    val: 'kaiblu26@gmail.com',
    href: 'mailto:kaiblu26@gmail.com',
  },
  {
    label: 'LinkedIn',
    val: 'Jason Lawrence',
    href: 'https://www.linkedin.com/in/jason-lawrence-9a0743133',
  },
  {
    label: 'GitHub',
    val: 'github.com/Jdlaw95',
    href: 'https://github.com/Jdlaw95',
  },
  {
    label: 'Studio',
    val: 'kaiblu.co.za',
    href: 'https://kaiblu.co.za',
  },
]

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-label">04 &mdash; Contact</div>
      <h2 className="contact-headline reveal">
        Open to
        <br />
        what&apos;s worth
        <br />
        <em>building.</em>
      </h2>
      <div className="contact-grid reveal">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="contact-item"
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
          >
            <div className="c-label">{l.label}</div>
            <div className="c-val">{l.val}</div>
            <span className="c-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        Jason <em>Lawrence</em>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">
        Get in touch
      </a>
    </nav>
  )
}

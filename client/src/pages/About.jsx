import './PageStyles.css'
import './About.css'

function About() {
  return (
    <div className="about">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-badge">🎨 Our Story</div>
        <h1 className="page-title">We Are <span>SkynLab Studio</span></h1>
        <p className="about-intro">
          Born in the UK, built for those who refuse to blend in.<br />
          We create premium device skins that turn everyday gadgets into personal statements.
        </p>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="mission-card">
          <div className="mission-icon">🚀</div>
          <h2>Our Mission</h2>
          <p>To make every device unique. We believe your phone and laptop should reflect your personality — not look like everyone else's.</p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">🌍</div>
          <h2>Our Vision</h2>
          <p>To become the UK's most loved device skin brand, known for bold designs, premium quality and lightning fast delivery.</p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">💎</div>
          <h2>Our Promise</h2>
          <p>Every skin is made from military grade vinyl, designed to protect your device and look stunning for years without leaving residue.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Unique Designs</p>
        </div>
        <div className="stat-card">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h3>48hr</h3>
          <p>Fast Delivery</p>
        </div>
        <div className="stat-card">
          <h3>4.9⭐</h3>
          <p>Average Rating</p>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2 className="section-title">Built with <span>Passion</span></h2>
        <p className="section-subtitle">A small team with a big vision</p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍💻</div>
            <h3>Founder & CEO</h3>
            <p>SkynLab Studio</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🎨</div>
            <h3>Lead Designer</h3>
            <p>Creative Direction</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">📦</div>
            <h3>Operations</h3>
            <p>Fulfilment & Delivery</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
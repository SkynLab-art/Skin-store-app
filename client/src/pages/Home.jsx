import Catalogue from '../components/Catalogue'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">✨ Premium Device Skins</div>
          <h1>
            Give Your Device a<br />
            <span>Bold New Identity</span>
          </h1>
          <p>
            Custom designed skins for phones and laptops.<br />
            Express yourself with premium quality vinyl wraps.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now →</button>
            <button className="btn-secondary">View Catalogue</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2 className="section-title">Shop by <span>Device</span></h2>
        <p className="section-subtitle">Choose your device and find the perfect skin</p>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-icon">📱</div>
            <h3>Phone Skins</h3>
            <p>iPhone, Samsung, OnePlus and more</p>
          </div>
          <div className="category-card">
            <div className="category-icon">💻</div>
            <h3>Laptop Skins</h3>
            <p>MacBook, Dell, HP and more</p>
          </div>
        </div>
      </section>
    
      {/* Features */}
      <section className="features">
        <h2 className="section-title">Why <span>SkynLab?</span></h2>
        <p className="section-subtitle">Built for those who refuse to blend in</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Bold Designs</h3>
            <p>Unique artwork created by independent artists from around the world</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Shipped within 48 hours directly to your door anywhere in the UK</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Premium Quality</h3>
            <p>Military grade vinyl that protects and looks stunning for years</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
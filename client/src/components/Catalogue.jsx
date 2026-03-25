import { useState } from 'react'
import ProductCard from './ProductCard'
import './Catalogue.css'

const products = {
  phones: [
    { id: 1, name: 'Neon Pulse', device: 'iPhone 15 Pro', price: '12.99', emoji: '🌊', badge: 'New' },
    { id: 2, name: 'Dark Matter', device: 'Samsung Galaxy S24', price: '11.99', emoji: '🌑', badge: 'Hot' },
    { id: 3, name: 'Solar Flare', device: 'iPhone 14', price: '10.99', emoji: '🔥', badge: 'Popular' },
    { id: 4, name: 'Arctic Frost', device: 'OnePlus 12', price: '11.99', emoji: '❄️', badge: 'New' },
    { id: 5, name: 'Cosmic Dust', device: 'iPhone 15', price: '12.99', emoji: '✨', badge: 'Hot' },
    { id: 6, name: 'Jungle Vibes', device: 'Samsung Galaxy S23', price: '10.99', emoji: '🌿', badge: 'Popular' },
  ],
  laptops: [
    { id: 7, name: 'Midnight Sky', device: 'MacBook Pro 14"', price: '18.99', emoji: '🌙', badge: 'New' },
    { id: 8, name: 'Carbon Elite', device: 'Dell XPS 15', price: '16.99', emoji: '⚡', badge: 'Hot' },
    { id: 9, name: 'Rose Gold', device: 'MacBook Air M2', price: '17.99', emoji: '🌸', badge: 'Popular' },
    { id: 10, name: 'Storm Rider', device: 'HP Spectre x360', price: '15.99', emoji: '⛈️', badge: 'New' },
    { id: 11, name: 'Neon Grid', device: 'MacBook Pro 16"', price: '19.99', emoji: '🎮', badge: 'Hot' },
    { id: 12, name: 'Ocean Breeze', device: 'Lenovo ThinkPad', price: '15.99', emoji: '🌊', badge: 'Popular' },
  ]
}

function Catalogue() {
  const [activeTab, setActiveTab] = useState('phones')

  return (
    <section className="catalogue">
      <div className="catalogue-header">
        <h2 className="section-title">Our <span>Collection</span></h2>
        <p className="section-subtitle">Premium skins for every device</p>
        <div className="catalogue-tabs">
          <button
            className={`tab ${activeTab === 'phones' ? 'active' : ''}`}
            onClick={() => setActiveTab('phones')}
          >
            📱 Phone Skins
          </button>
          <button
            className={`tab ${activeTab === 'laptops' ? 'active' : ''}`}
            onClick={() => setActiveTab('laptops')}
          >
            💻 Laptop Skins
          </button>
        </div>
      </div>
      <div className="products-grid">
        {products[activeTab].map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Catalogue
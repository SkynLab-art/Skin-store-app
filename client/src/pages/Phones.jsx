import ProductCard from '../components/ProductCard'
import './PageStyles.css'

const phoneProducts = [
  { id: 1, name: 'Neon Pulse', device: 'iPhone 15 Pro', price: '12.99', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop', badge: 'New' },
  { id: 2, name: 'Dark Matter', device: 'Samsung Galaxy S24', price: '11.99', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop', badge: 'Hot' },
  { id: 3, name: 'Solar Flare', device: 'iPhone 14', price: '10.99', image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop', badge: 'Popular' },
  { id: 4, name: 'Arctic Frost', device: 'OnePlus 12', price: '11.99', image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop', badge: 'New' },
  { id: 5, name: 'Cosmic Dust', device: 'iPhone 15', price: '12.99', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop', badge: 'Hot' },
  { id: 6, name: 'Jungle Vibes', device: 'Samsung Galaxy S23', price: '10.99', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop', badge: 'Popular' },
  { id: 7, name: 'Lava Storm', device: 'iPhone 15 Pro Max', price: '13.99', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop', badge: 'New' },
  { id: 8, name: 'Purple Rain', device: 'Samsung Galaxy S24+', price: '12.99', image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400&h=400&fit=crop', badge: 'Hot' },
  { id: 9, name: 'Golden Hour', device: 'OnePlus 11', price: '11.99', image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop', badge: 'Popular' },
]

function Phones() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-badge">📱 Phone Skins</div>
        <h1 className="page-title">Premium <span>Phone Skins</span></h1>
        <p className="page-subtitle">Find the perfect skin for your phone</p>
      </div>
      <div className="products-grid">
        {phoneProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Phones
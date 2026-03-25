import ProductCard from '../components/ProductCard'
import './PageStyles.css'

const laptopProducts = [
  { id: 7, name: 'Midnight Sky', device: 'MacBook Pro 14"', price: '18.99', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop', badge: 'New' },
  { id: 8, name: 'Carbon Elite', device: 'Dell XPS 15', price: '16.99', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop', badge: 'Hot' },
  { id: 9, name: 'Rose Gold', device: 'MacBook Air M2', price: '17.99', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop', badge: 'Popular' },
  { id: 10, name: 'Storm Rider', device: 'HP Spectre x360', price: '15.99', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop', badge: 'New' },
  { id: 11, name: 'Neon Grid', device: 'MacBook Pro 16"', price: '19.99', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop', badge: 'Hot' },
  { id: 12, name: 'Ocean Breeze', device: 'Lenovo ThinkPad', price: '15.99', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop', badge: 'Popular' },
  { id: 13, name: 'Golden Hour', device: 'MacBook Air M3', price: '18.99', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop', badge: 'New' },
  { id: 14, name: 'Arctic White', device: 'Dell Inspiron 15', price: '14.99', image: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400&h=400&fit=crop', badge: 'Hot' },
  { id: 15, name: 'Cyber Punk', device: 'ASUS ROG', price: '19.99', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop', badge: 'Popular' },
]

function Laptops() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-badge">💻 Laptop Skins</div>
        <h1 className="page-title">Premium <span>Laptop Skins</span></h1>
        <p className="page-subtitle">Find the perfect skin for your laptop</p>
      </div>
      <div className="products-grid">
        {laptopProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Laptops
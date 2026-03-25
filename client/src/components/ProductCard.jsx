import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-img" />
        ) : (
          <div className="product-emoji">{product.emoji}</div>
        )}
        <div className="product-badge">{product.badge}</div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-device">{product.device}</p>
        <div className="product-footer">
          <span className="product-price">£{product.price}</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
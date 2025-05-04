import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected, onSelect }) => {
  return (
    <div 
      className={`product-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(product.id)}
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <div className="selection-indicator">
        {isSelected ? '✓ Selected' : 'Click to select'}
      </div>
    </div>
  );
};

export default ProductCard; 
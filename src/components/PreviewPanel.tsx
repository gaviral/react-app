import React from 'react';
import ProductItem from './ProductItem'; // Import the new component

interface PreviewPanelProps {
  title: string;
  subtitle: string;
  backgroundColor: string;
  isRounded: boolean;
}

// Mock data for products
const mockProducts = [
  { id: 1, title: 'Product A', img: 'https://placehold.co/80x80/EEE/31343C?text=ProdA' },
  { id: 2, title: 'Product B', img: 'https://placehold.co/80x80/DDD/31343C?text=ProdB' },
  { id: 3, title: 'Product C', img: 'https://placehold.co/80x80/CCC/31343C?text=ProdC' },
  { id: 4, title: 'Product D', img: 'https://placehold.co/80x80/BBB/31343C?text=ProdD' },
  { id: 5, title: 'Product E', img: 'https://placehold.co/80x80/AAA/31343C?text=ProdE' },
  { id: 6, title: 'Product F', img: 'https://placehold.co/80x80/999/31343C?text=ProdF' },
];

const PreviewPanel: React.FC<PreviewPanelProps> = ({
  title,
  subtitle,
  backgroundColor,
  isRounded,
}) => {
  return (
    <div style={{ flex: 1, padding: '20px', backgroundColor: backgroundColor }}>
      <h2>Preview</h2>
      <div
        style={{
          border: `2px solid ${isRounded ? 'blue' : 'green'}`,
          borderRadius: isRounded ? '15px' : '0',
          padding: '20px',
          marginTop: '20px',
          // Ensure text is readable on different backgrounds (basic contrast)
          color: '#333', // Default dark text
          // Add more sophisticated contrast logic if needed
          backgroundColor: 'rgba(255, 255, 255, 0.8)' // Slightly transparent white inner background for now
        }}
      >
        <h3>{title || 'Card Title Preview'}</h3>
        <h4>{subtitle || 'Card Subtitle Preview'}</h4>

        {/* Product Display Area */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
          {mockProducts.map(product => (
            <ProductItem
              key={product.id}
              imageUrl={product.img}
              productTitle={product.title}
            />
          ))}
        </div>

        {/* <p>Live Card Preview Placeholder</p>
        <p>Products will appear here...</p> */}
      </div>
    </div>
  );
};

export default PreviewPanel; 
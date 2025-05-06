import React from 'react';

interface ProductItemProps {
  imageUrl: string;
  productTitle: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ imageUrl, productTitle }) => {
  return (
    <div style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', maxWidth: '100px' }}>
      <img
        src={imageUrl}
        alt={productTitle}
        style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '5px' }}
      />
      <p style={{ fontSize: '0.8em', margin: 0 }}>{productTitle}</p>
    </div>
  );
};

export default ProductItem; 
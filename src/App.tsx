import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ProductCard, { Product } from './components/ProductCard'
import mockProducts from './data/mockProducts'
import './components/Products.css'

function App() {
  const [stage, setStage] = useState('search') // 'search', 'results', 'select', 'note', 'preview'
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  const handleSearch = (query: string) => {
    // Mock search functionality - in a real app, this would call an API
    console.log(`Searching for: ${query}`)
    // For now, just return all mock products regardless of query
    setSearchResults(mockProducts)
    setStage('select')
  }

  const handleProductSelect = (productId: number) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        // If already selected, remove it
        return prev.filter(id => id !== productId)
      } else if (prev.length < 3) {
        // If not selected and we haven't reached the limit, add it
        return [...prev, productId]
      }
      // If already have 3 selected, don't add more
      return prev
    })
  }

  const renderStage = () => {
    switch (stage) {
      case 'search':
        return (
          <div className="stage-container">
            <h1>Product Search</h1>
            <p>Search for products to recommend to your customer</p>
            <SearchBar onSearch={handleSearch} />
          </div>
        )
      case 'select':
        return (
          <div className="stage-container">
            <h1>Select Products</h1>
            <p>Select 1 to 3 products to recommend (selected: {selectedProducts.length}/3)</p>
            <div className="products-container">
              {searchResults.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  isSelected={selectedProducts.includes(product.id)}
                  onSelect={handleProductSelect}
                />
              ))}
            </div>
            {selectedProducts.length > 0 && selectedProducts.length <= 3 && (
              <button 
                className="search-button" 
                onClick={() => setStage('note')}
                style={{ margin: '20px auto', display: 'block' }}
              >
                Continue to Add Note
              </button>
            )}
          </div>
        )
      case 'note':
        return (
          <div className="stage-container">
            <h1>Add Personal Note</h1>
            <p>Enter your note (min/max chars).</p>
            <button 
              className="search-button" 
              onClick={() => setStage('preview')}
              style={{ margin: '20px auto', display: 'block' }}
            >
              Generate Link & Preview
            </button>
          </div>
        )
      case 'preview':
        return (
          <div className="stage-container">
            <h1>Preview Recommendation</h1>
            <button 
              className="search-button" 
              onClick={() => console.log('Copy link')}
              style={{ margin: '20px auto', display: 'block' }}
            >
              Copy Link
            </button>
            <button 
              className="search-button" 
              onClick={() => {
                setStage('search')
                setSelectedProducts([])
                setSearchResults([])
              }}
              style={{ margin: '20px auto', display: 'block' }}
            >
              Start New Recommendation
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="app-container">
      {renderStage()}
    </div>
  )
}

export default App

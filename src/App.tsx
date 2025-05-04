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
  const [note, setNote] = useState<string>('')
  const [generatedLink, setGeneratedLink] = useState<string>('')

  // Constants for note validation
  const MIN_NOTE_LENGTH = 30
  const MAX_NOTE_LENGTH = 200

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

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value)
  }

  const generateLink = () => {
    // Get base URL (in a real app, this would be your domain)
    const baseUrl = window.location.origin
    
    // Create a URL with the selected product IDs and encoded note
    const productParams = selectedProducts.map(id => `product=${id}`).join('&')
    const encodedNote = encodeURIComponent(note)
    
    // Generate the link
    const link = `${baseUrl}/share?${productParams}&note=${encodedNote}`
    setGeneratedLink(link)
    setStage('preview')
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedLink)
      .then(() => {
        alert('Link copied to clipboard!')
      })
      .catch(err => {
        console.error('Failed to copy link: ', err)
      })
  }

  const getSelectedProductsData = (): Product[] => {
    return mockProducts.filter(product => selectedProducts.includes(product.id))
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
            <p>Add a personal note to your recommendation ({note.length}/{MIN_NOTE_LENGTH}-{MAX_NOTE_LENGTH} characters)</p>
            <div className="note-container">
              <textarea
                value={note}
                onChange={handleNoteChange}
                className="note-textarea"
                placeholder="Add your personal recommendation here..."
                rows={6}
                maxLength={MAX_NOTE_LENGTH}
              />
              <div className={`note-validation ${note.length >= MIN_NOTE_LENGTH ? 'valid' : 'invalid'}`}>
                {note.length < MIN_NOTE_LENGTH ? 
                  `Please enter at least ${MIN_NOTE_LENGTH} characters` : 
                  'Note length is valid ✓'}
              </div>
              <button 
                className="search-button" 
                onClick={generateLink}
                disabled={note.length < MIN_NOTE_LENGTH}
                style={{ 
                  margin: '20px auto', 
                  display: 'block',
                  opacity: note.length < MIN_NOTE_LENGTH ? 0.5 : 1
                }}
              >
                Generate Link & Preview
              </button>
            </div>
          </div>
        )
      case 'preview':
        const selectedProductsData = getSelectedProductsData()
        return (
          <div className="stage-container">
            <h1>Preview Recommendation</h1>
            <div className="preview-container">
              <h2>Your Recommendation</h2>
              <div className="preview-products">
                {selectedProductsData.map(product => (
                  <div key={product.id} className="preview-product">
                    <img src={product.image} alt={product.name} className="preview-image" />
                    <div className="preview-details">
                      <h3>{product.name}</h3>
                      <p className="preview-price">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="preview-note">
                <h3>Your Note:</h3>
                <p>{note}</p>
              </div>
              <div className="preview-link">
                <p>Share this link with your customer:</p>
                <div className="link-display">
                  <input 
                    type="text" 
                    value={generatedLink} 
                    readOnly 
                    className="link-input"
                  />
                  <button 
                    className="search-button" 
                    onClick={handleCopyLink}
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
            <button 
              className="search-button" 
              onClick={() => {
                setStage('search')
                setSelectedProducts([])
                setSearchResults([])
                setNote('')
                setGeneratedLink('')
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

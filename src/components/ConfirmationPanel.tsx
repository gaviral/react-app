import React from 'react';

type ConfirmationPanelProps = {
  shareUrl: string;
};

const ConfirmationPanel: React.FC<ConfirmationPanelProps> = ({
  shareUrl,
}) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="step-content confirmation">
      <h2>Thanks for your submission!</h2>
      <p>Share your style profile with this link:</p>
      <div className="share-link">
        <input 
          type="text" 
          value={shareUrl} 
          readOnly 
        />
        <button onClick={handleCopyClick}>
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="qr-code">
        {/* In a real app, we would use a library to generate a QR code */}
        <div className="mock-qr-code">QR Code for: {shareUrl}</div>
      </div>
    </div>
  );
};

export default ConfirmationPanel; 
import React from 'react';

type DetailsFormProps = {
  note: string;
  consent: boolean;
  onNoteChange: (note: string) => void;
  onConsentChange: (consent: boolean) => void;
  error?: string;
};

const DetailsForm: React.FC<DetailsFormProps> = ({
  note,
  consent,
  onNoteChange,
  onConsentChange,
  error
}) => {
  return (
    <div className="step-content">
      <h2>Additional Information</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="note">Notes (Optional)</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="Any additional notes about your style preferences?"
          maxLength={280}
        />
        <div className="char-count">{note.length}/280</div>
      </div>
      <div className={`form-group checkbox ${error ? 'error-container' : ''}`}>
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          className={error && !consent ? 'error' : ''}
        />
        <label htmlFor="consent">I agree to receive recommendations.</label>
      </div>
    </div>
  );
};

export default DetailsForm; 
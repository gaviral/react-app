import React from 'react';

type DetailsFormProps = {
  note: string;
  consent: boolean;
  onNoteChange: (note: string) => void;
  onConsentChange: (consent: boolean) => void;
};

const DetailsForm: React.FC<DetailsFormProps> = ({
  note,
  consent,
  onNoteChange,
  onConsentChange,
}) => {
  return (
    <div className="step-content">
      <h2>Additional Information</h2>
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
      <div className="form-group checkbox">
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
        />
        <label htmlFor="consent">I agree to receive recommendations.</label>
      </div>
    </div>
  );
};

export default DetailsForm; 
import React from 'react';

type ContactFormProps = {
  email: string;
  phone: string;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
  error?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({
  email,
  phone,
  onEmailChange,
  onPhoneChange,
  error
}) => {
  return (
    <div className="step-content">
      <h2>Contact Information</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email"
          className={error && !email && !phone ? 'error' : ''}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="Enter your phone number"
          className={error && !email && !phone ? 'error' : ''}
        />
      </div>
      <p className="helper-text">At least one contact method is required.</p>
    </div>
  );
};

export default ContactForm; 
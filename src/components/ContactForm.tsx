import React from 'react';

type ContactFormProps = {
  email: string;
  phone: string;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({
  email,
  phone,
  onEmailChange,
  onPhoneChange,
}) => {
  return (
    <div className="step-content">
      <h2>Contact Information</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email"
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
        />
      </div>
      <p className="helper-text">At least one contact method is required.</p>
    </div>
  );
};

export default ContactForm; 
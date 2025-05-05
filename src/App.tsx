import React from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import StyleTagsForm from './components/StyleTagsForm'
import DetailsForm from './components/DetailsForm'
import ConfirmationPanel from './components/ConfirmationPanel'

// Define types for our form state
type FormState = {
  contact: {
    email: string;
    phone: string;
  };
  styleTags: string[];
  note: string;
  consent: boolean;
}

// Define main app component
function App() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formState, setFormState] = React.useState<FormState>({
    contact: {
      email: '',
      phone: '',
    },
    styleTags: [],
    note: '',
    consent: false
  });
  const [shareUrl, setShareUrl] = React.useState<string | null>(null);

  // Load form state from localStorage on initial render
  React.useEffect(() => {
    const savedState = localStorage.getItem('styleFormState');
    if (savedState) {
      try {
        setFormState(JSON.parse(savedState));
      } catch (e) {
        console.error('Error parsing saved form state', e);
      }
    }
  }, []);

  // Save form state to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('styleFormState', JSON.stringify(formState));
  }, [formState]);

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // In a real app, this would be an actual API call
      // For now, we're just mocking the response
      // await fetch('/api/customers/preferences', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formState),
      // });
      
      // Mock response
      setShareUrl('https://six.app/p/xyz789');
      setCurrentStep(4); // Move to confirmation step
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Check if current step is valid to enable/disable Next button
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        // At least email OR phone must be valid
        return Boolean(formState.contact.email || formState.contact.phone);
      case 2:
        // Must select at least one style tag, max 5
        return formState.styleTags.length > 0 && formState.styleTags.length <= 5;
      case 3:
        // Note is optional, but consent is required
        return formState.consent;
      default:
        return false;
    }
  };

  // Render the appropriate step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ContactForm 
            email={formState.contact.email}
            phone={formState.contact.phone}
            onEmailChange={(email) => 
              setFormState({
                ...formState,
                contact: {
                  ...formState.contact,
                  email
                }
              })
            }
            onPhoneChange={(phone) => 
              setFormState({
                ...formState,
                contact: {
                  ...formState.contact,
                  phone
                }
              })
            }
          />
        );
      case 2:
        return (
          <StyleTagsForm 
            selectedTags={formState.styleTags}
            onTagsChange={(tags) => 
              setFormState({
                ...formState,
                styleTags: tags
              })
            }
          />
        );
      case 3:
        return (
          <DetailsForm 
            note={formState.note}
            consent={formState.consent}
            onNoteChange={(note) => 
              setFormState({
                ...formState,
                note
              })
            }
            onConsentChange={(consent) => 
              setFormState({
                ...formState,
                consent
              })
            }
          />
        );
      case 4:
        return shareUrl ? <ConfirmationPanel shareUrl={shareUrl} /> : null;
      default:
        return null;
    }
  };

  return (
    <div className="style-capture-container">
      <div className="progress-indicator">
        <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>Contact</div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>Style</div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>Details</div>
        <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>Confirmation</div>
      </div>

      <div className="form-container">
        {renderStepContent()}

        <div className="button-container">
          {currentStep < 4 && (
            <>
              {currentStep > 1 && (
                <button className="back-button" onClick={handleBack}>
                  Back
                </button>
              )}
              <button
                className="next-button"
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                {currentStep === 3 ? 'Submit' : 'Next'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App

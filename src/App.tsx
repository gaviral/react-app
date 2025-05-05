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

// Define validation error types
type ValidationErrors = {
  contact?: string;
  styleTags?: string;
  consent?: string;
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
  const [validatedSteps, setValidatedSteps] = React.useState<number[]>([]);
  const [validationErrors, setValidationErrors] = React.useState<ValidationErrors>({});

  // Load form state from localStorage on initial render
  React.useEffect(() => {
    const savedState = localStorage.getItem('styleFormState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        setFormState(parsedState);
        
        // Check which steps would be valid with this data
        const validSteps = [];
        if (parsedState.contact.email || parsedState.contact.phone) {
          validSteps.push(1);
        }
        if (parsedState.styleTags.length > 0 && parsedState.styleTags.length <= 5) {
          validSteps.push(2);
        }
        if (parsedState.consent) {
          validSteps.push(3);
        }
        setValidatedSteps(validSteps);
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
      // Validate the current step before submission
      if (!validateCurrentStep()) {
        return;
      }

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
    if (validateCurrentStep()) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else if (currentStep === 3) {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Validates the current step and updates validatedSteps array
  const validateCurrentStep = (): boolean => {
    const errors: ValidationErrors = {};
    let isValid = false;

    switch (currentStep) {
      case 1:
        // Validate contact info
        if (!formState.contact.email && !formState.contact.phone) {
          errors.contact = 'Please provide either an email or phone number';
          isValid = false;
        } else {
          // Simple email validation
          if (formState.contact.email && !/\S+@\S+\.\S+/.test(formState.contact.email)) {
            errors.contact = 'Please enter a valid email address';
            isValid = false;
          } else {
            isValid = true;
          }
        }
        break;
      case 2:
        // Validate style tags
        if (formState.styleTags.length === 0) {
          errors.styleTags = 'Please select at least one style tag';
          isValid = false;
        } else if (formState.styleTags.length > 5) {
          errors.styleTags = 'Please select no more than 5 style tags';
          isValid = false;
        } else {
          isValid = true;
        }
        break;
      case 3:
        // Validate consent
        if (!formState.consent) {
          errors.consent = 'Please agree to receive recommendations';
          isValid = false;
        } else {
          isValid = true;
        }
        break;
      default:
        isValid = false;
    }

    setValidationErrors(errors);

    if (isValid) {
      // Add current step to validatedSteps if not already included
      if (!validatedSteps.includes(currentStep)) {
        setValidatedSteps([...validatedSteps, currentStep]);
      }
    }

    return isValid;
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

  // Function to reset the form and start over
  const handleRestart = () => {
    // Reset form state
    setFormState({
      contact: {
        email: '',
        phone: '',
      },
      styleTags: [],
      note: '',
      consent: false
    });
    
    // Reset other state
    setShareUrl(null);
    setValidatedSteps([]);
    setValidationErrors({});
    setCurrentStep(1);
  };

  // Function to handle clicking on a progress step
  const handleStepClick = (step: number) => {
    // Only allow navigation to validated steps or the current step
    if (validatedSteps.includes(step) || step === currentStep) {
      setCurrentStep(step);
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
            error={validationErrors.contact}
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
            error={validationErrors.styleTags}
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
            error={validationErrors.consent}
          />
        );
      case 4:
        return shareUrl ? (
          <ConfirmationPanel 
            shareUrl={shareUrl} 
            onRestart={handleRestart} 
          />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className="style-capture-container">
      <div className="progress-indicator">
        {[1, 2, 3, 4].map((step) => (
          <div 
            key={step}
            className={`step ${currentStep >= step ? 'active' : ''} ${validatedSteps.includes(step) ? 'validated' : ''}`}
            onClick={() => handleStepClick(step)}
          >
            {step === 1 && 'Contact'}
            {step === 2 && 'Style'}
            {step === 3 && 'Details'}
            {step === 4 && 'Confirmation'}
          </div>
        ))}
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
          {currentStep === 4 && (
            <button className="restart-button" onClick={handleRestart}>
              Start New Form
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App

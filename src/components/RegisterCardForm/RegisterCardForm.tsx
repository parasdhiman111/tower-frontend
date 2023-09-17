import React, { useState, ChangeEvent, FormEvent } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import './RegisterCardForm.css';

interface RegisterCardFormProps {
  menuOpen: boolean;
}
function RegisterCardForm({menuOpen}: RegisterCardFormProps) {
  const [creditCard, setCreditCard] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [creditCardError, setCreditCardError] = useState<string>('');
  const [cvcError, setCVCError] = useState<string>('');
  const [expiryDateError, setExpiryDateError] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // Validation functions
  const isCreditCardValid = (value: string): boolean => /^[0-9]{16}$/.test(value);
  const isCVCValid = (value: string): boolean => /^[0-9]{3}$/.test(value);
  const isExpiryDateValid = (value: string): boolean => {
    const parts = value.split('/');
    if (parts.length !== 2) return false;
    const [month, year] = parts;
    const currentYear = new Date().getFullYear().toString().substr(-2);
    const currentMonth = new Date().getMonth() + 1; // Note: Month is zero-based

    return (
      /^\d{2}$/.test(month) &&
      /^\d{2}$/.test(year) &&
      parseInt(month) >= 1 &&
      parseInt(month) <= 12 &&
      (parseInt(year) > parseInt(currentYear) || (parseInt(year) === parseInt(currentYear) && parseInt(month) >= currentMonth))
    );
  };

  // Function to handle input changes and validate the form
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === 'creditCard') {
      setCreditCard(value);
      setCreditCardError('');
    } else if (name === 'cvc') {
      setCVC(value);
      setCVCError('');
    } else if (name === 'expiryDate') {
      setExpiryDate(value);
      setExpiryDateError('');
    }

    // Validate input fields
    const isCreditCardFieldValid = isCreditCardValid(name === 'creditCard' ? value : creditCard);
    const isCVCFieldValid = isCVCValid(name === 'cvc' ? value : cvc);
    const isExpiryDateFieldValid = isExpiryDateValid(name === 'expiryDate' ? value : expiryDate);

    // Update form validity
    setIsFormValid(isCreditCardFieldValid && isCVCFieldValid && isExpiryDateFieldValid);

    if (!isCreditCardFieldValid) {
      setCreditCardError('Invalid credit card number.');
    }

    if (!isCVCFieldValid) {
      setCVCError('Invalid CVC number.');
    }

    if (!isExpiryDateFieldValid) {
      setExpiryDateError('Invalid expiration date (MM/YY).');
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (isFormValid) {
      console.log('Credit Card:', creditCard);
      console.log('CVC:', cvc);
      console.log('Expires:', expiryDate);
    } else {
      alert('Please fill in valid information before submitting.');
    }
  };


  return (
    <div className={`form-container ${menuOpen ? 'menu-open' : ''}`}>
      <h1>Register Card</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="creditCard"
            placeholder="Credit Card Number"
            value={creditCard}
            onChange={handleInputChange}
          />
          {creditCardError && <div className="error-message">{creditCardError}</div>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={handleInputChange}
          />
          {cvcError && <div className="error-message">{cvcError}</div>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="expiryDate"
            placeholder="Expires (MM/YY)"
            value={expiryDate}
            onChange={handleInputChange}
          />
          {expiryDateError && <div className="error-message">{expiryDateError}</div>}
        </div>
        <SubmitButton onClick={handleSubmit} disabled={!isFormValid} />
      </form>
    </div>
  );
}

export default RegisterCardForm;

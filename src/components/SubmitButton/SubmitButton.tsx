import React from 'react';
import './SubmitButton.css';

interface SubmitButtonProps {
  onClick: (e: React.FormEvent) => void;
  disabled: boolean;
}

function SubmitButton({ onClick, disabled }: SubmitButtonProps) {
  return (
    <button type="submit" onClick={onClick} disabled={disabled}>
      Submit
    </button>
  );
}

export default SubmitButton;

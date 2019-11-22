import React from 'react';

export const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className="input"
      checked={checked}
      onChange={event => onChange(event.target.checked)}
    />
  );
};

Checkbox.displayName = 'Checkbox';

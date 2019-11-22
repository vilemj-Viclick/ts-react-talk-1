import React, { FC } from 'react';

interface ICheckboxProps {
  readonly checked?: boolean;
  readonly onChange?: (checked: boolean) => void;
}

export const Checkbox: FC<ICheckboxProps> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className="input"
      checked={checked}
      onChange={event => onChange?.(event.target.checked)}
    />
  );
};

Checkbox.displayName = 'Checkbox';

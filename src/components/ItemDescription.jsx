import React from 'react';

export const ItemDescription = ({ description, onClick }) => {
  return (
    <span
      className="description"
      onClick={onClick}
    >
      {description}
    </span>
  );
};

ItemDescription.displayName = 'ItemDescription';

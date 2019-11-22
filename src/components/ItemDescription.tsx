import React, {
  FC,
  MouseEventHandler,
} from 'react';

interface IItemDescriptionProps {
  readonly description: string;
  readonly onClick: MouseEventHandler;
}

export const ItemDescription: FC<IItemDescriptionProps> = ({ description, onClick }) => {
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

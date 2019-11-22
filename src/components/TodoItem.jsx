import React from 'react';
import { Checkbox } from './Checkbox';
import { ItemDescription } from './ItemDescription';

export const TodoItem = ({ todoItem, toggleChecked, startEditing }) => {
  return (
    <div className="center-block">
      <Checkbox
        checked={todoItem.isChecked}
        onChange={toggleChecked}
      />
      <ItemDescription
        description={todoItem.description}
        onClick={startEditing}
      />
    </div>
  );
};

TodoItem.displayName = 'TodoItem';

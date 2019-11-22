import React from 'react';
import {
  cancelEditing,
  confirmItemEdit,
} from '../utils/todoItemUtils';

export const ItemEditor = ({ editedItem, updateItem }) => {
  const onEditedDescriptionChange = (event) => {
    updateItem({
      ...editedItem,
      editedDescription: event.target.value,
    });
  };

  const keyHandler = (event) => {
    switch (event.key) {
      case 'Enter': {
        updateItem(confirmItemEdit(editedItem));
        break;
      }
      case 'Escape': {
        updateItem(cancelEditing(editedItem));
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <div className="center-block">
      <input
        autoFocus
        className="editor"
        value={editedItem.editedDescription}
        onChange={onEditedDescriptionChange}
        onKeyUp={keyHandler}
        onBlur={() => updateItem(cancelEditing(editedItem))}
      />
    </div>
  );
};

ItemEditor.displayName = 'ItemEditor';

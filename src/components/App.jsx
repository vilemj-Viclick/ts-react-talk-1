import React, { useState, } from 'react';
import { initialData } from '../utils/initialData';
import {
  createEditedItem,
  isEditedItem,
} from '../utils/todoItemUtils';
import { TodoItem } from './TodoItem';

export const App = () => {
  const [todoItems, setTodoItems] = useState(initialData);

  const updateAnItem = (updatedItem) => {
    const isTheItem = (i) => updatedItem.id === i.id;

    setTodoItems(todoItems.map(item => isTheItem(item) ? updatedItem : item));
  };

  const toggleChecked = (item, isChecked) => updateAnItem({
    ...item,
    isChecked,
  });

  return (
    <div className="center-block">
      {todoItems.map(item => {
        if (isEditedItem(item)) {
          return (
            <ItemEditor
              key={item.id}
              editedItem={item}
              updateItem={updateAnItem}
            />
          );
        }

        return (
          <TodoItem
            key={item.id}
            todoItem={item}
            toggleChecked={checked => toggleChecked(item, checked)}
            startEditing={() => updateAnItem(createEditedItem(item))}
          />
        );
      })}
    </div>
  );
};

App.displayName = App;

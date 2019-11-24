import React, {
  FC,
  useState,
} from 'react';
import { initialData } from '../utils/initialData';
import {
  createEditedItem,
  isEditedItem,
} from '../utils/todoItemUtils';
import { ItemEditor } from './ItemEditor';
import { TodoItem } from './TodoItem';

export const App: FC = () => {
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
        if (!isEditedItem(item)) {
          return (
            <TodoItem
              key={item.id}
              todoItem={item}
              toggleChecked={checked => toggleChecked(item, checked)}
              startEditing={() => updateAnItem(createEditedItem(item))}
            />
          );
        }

        return (
          <ItemEditor
            key={item.id}
            editedItem={item}
            updateItem={updateAnItem}
          />
        );
      })}
    </div>
  );
};

App.displayName = 'App';

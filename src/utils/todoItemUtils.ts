export const isEditedItem = (item: ITodoItem | IEditedTodoItem): item is IEditedTodoItem => {
  return item.hasOwnProperty('editedDescription') && typeof ((item as any).editedDescription) === 'string';
};

export const createEditedItem = (item) => ({
  ...item,
  editedDescription: item.description,
});

export const cancelEditing = ({
  editedDescription,
  ...rest
}: IEditedTodoItem): ITodoItem =>
  rest;

export const confirmItemEdit = ({
  editedDescription,
  ...rest
}: IEditedTodoItem): ITodoItem =>
  ({
    ...rest,
    description: editedDescription,
  });

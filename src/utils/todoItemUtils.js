export const isEditedItem = (item) => {
  return item.hasOwnProperty('editedDescription') && typeof (item.editedDescription) === 'string';
};

export const createEditedItem = (item) => ({
  ...item,
  editedDescription: item.description,
});

export const cancelEditing = ({
  editedDescription,
  ...rest
}) =>
  rest;

export const confirmItemEdit = ({
  editedDescription,
  ...rest
}) =>
  ({
    ...rest,
    description: editedDescription,
  });

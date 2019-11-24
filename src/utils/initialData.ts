export const initialData: ReadonlyArray<ITodoItem | IEditedTodoItem> = [
  {
    id: 1,
    isChecked: false,
    description: 'Tick me when done',
  },
  {
    id: 2,
    isChecked: false,
    description: 'Are we done here?',
    editedDescription: 'I’m being edited',
  },
];

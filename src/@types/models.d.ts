interface ITodoItem {
  readonly id: number;
  readonly description: string;
  readonly isChecked: boolean;
}

interface IEditedTodoItem extends ITodoItem {
  readonly editedDescription: string;
}

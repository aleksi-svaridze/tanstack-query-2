export interface ITodo {
  id: number;
  description: string;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}

export interface IFieldProp {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

export interface SingleTodoProps {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
}

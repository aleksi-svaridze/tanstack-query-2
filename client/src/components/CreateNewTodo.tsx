import CreateTodoForm from "./forms/CreateTodoForm";
import type { IFieldProp } from "../interfaces/todo.interface";
import useCreateTodo from "../hooks/useCreateTodo";

const CreateNewTodo = () => {
  const { mutate } = useCreateTodo();
  const fields: IFieldProp[] = [
    {
      name: "title",
      placeholder: "Add todo title",
      type: "text",
      label: "TITLE",
    },
    {
      name: "description",
      placeholder: "Add todo description",
      type: "text",
      label: "DESCRIPTION",
    },
  ];

  const createBtn = () => {
    return <button type="submit">Create todo</button>;
  };

  const onSubmit = (formData: Record<string, string>) => {
    mutate(formData);
  };

  return (
    <div>
      <CreateTodoForm fields={fields} formBtn={createBtn()} action={onSubmit} />
    </div>
  );
};

export default CreateNewTodo;

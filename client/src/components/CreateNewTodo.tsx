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
      label: "title",
    },
    {
      name: "description",
      placeholder: "Add todo description",
      type: "text",
      label: "description",
    },
  ];

  const createBtn = () => {
    return (
      <button type="submit" className="p-4 px-6 bg-gray-300 cursor-pointer">
        Create todo
      </button>
    );
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

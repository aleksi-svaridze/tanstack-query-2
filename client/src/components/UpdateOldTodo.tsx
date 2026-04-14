import type { IFieldProp } from "../interfaces/todo.interface";
import { useNavigate, useParams } from "react-router-dom";
import UpdateTodoForm from "./forms/UpdateTodoForm";
import useUpdateTodo from "../hooks/useUpdaeTodo";
import { useFetchSingleTodo } from "../hooks/useFetchSingleTodo";

const UpdateOldTodo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, error, isLoading } = useFetchSingleTodo(Number(params.id));
  const { mutate } = useUpdateTodo(); // ?

  const fields: IFieldProp[] = [
    {
      name: "title",
      type: "text",
      label: "title",
      value: data?.title,
    },
    {
      name: "description",
      type: "text",
      label: "description",
      value: data?.description,
    },
  ];

  const createBtn = () => {
    return (
      <button type="submit" className="p-4 px-6 bg-gray-300 cursor-pointer">
        Update todo
      </button>
    );
  };

  const onSubmit = (formData: Record<string, string>) => {
    mutate(formData);
    console.log(formData);
    navigate("/all-todos");
  };

  return (
    <UpdateTodoForm
      fields={fields}
      data={data}
      formBtn={createBtn()}
      action={onSubmit}
    />
  );
};

export default UpdateOldTodo;

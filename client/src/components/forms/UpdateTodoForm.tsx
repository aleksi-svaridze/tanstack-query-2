import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import type { IFieldProp, ITodo } from "../../interfaces/todo.interface";

interface IUpdateTodoFormProps {
  fields: IFieldProp[];
  action: (formData: Record<string, string>) => void;
  formBtn: ReactNode;
  data: ITodo;
}

const UpdateTodoForm: React.FC<IUpdateTodoFormProps> = ({
  fields,
  action,
  formBtn,
  data,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  console.log(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    action(formData);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="mb-10">
      {fields.map((field) => (
        <div key={field.label} className="flex flex-col gap-1 mb-5">
          <label htmlFor={field.name} className="capitalize">
            {field.label}
          </label>
          <input
            className="py-2 px-4 border border-gray-300 outline-none"
            type="text"
            placeholder={field.placeholder}
            id={field.name}
            value={field.value}
            name={field.name}
            onChange={handleChange}
          />
        </div>
      ))}

      {formBtn}
    </form>
  );
};

export default UpdateTodoForm;
